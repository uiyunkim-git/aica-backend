#! python3.7
import argparse
import io
import speech_recognition as sr
import requests
import time

from datetime import datetime
from queue import Queue
from tempfile import NamedTemporaryFile
from time import sleep
from sys import platform
# Note: you need to be using OpenAI Python v0.27.0 for the code below to work
import openai
openai.api_key = "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"
import pyaudio
p = pyaudio.PyAudio()

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--model", default="medium", help="Model to use",
                        choices=["tiny", "base", "small", "medium", "large"])
    parser.add_argument("--non_english", action='store_true',
                        help="Don't use the english model.")
    parser.add_argument("--energy_threshold", default=1000,
                        help="Energy level for mic to detect.", type=int)
    parser.add_argument("--record_timeout", default=2,
                        help="How real time the recording is in seconds.", type=float)
    parser.add_argument("--phrase_timeout", default=3,
                        help="How much empty space between recordings before we "
                             "consider it a new line in the transcription.", type=float)  
    if 'linux' in platform:
        parser.add_argument("--default_microphone", default='pulse',
                            help="Default microphone name for SpeechRecognition. "
                                 "Run this with 'list' to view available Microphones.", type=str)
    args = parser.parse_args()
    
    # The last time a recording was retreived from the queue.
    phrase_time = None
    # Current raw audio bytes.
    last_sample = bytes()
    # Thread safe Queue for passing data from the threaded recording callback.
    data_queue = Queue()
    # We use SpeechRecognizer to record our audio because it has a nice feauture where it can detect when speech ends.
    recorder = sr.Recognizer()
    recorder.energy_threshold = args.energy_threshold
    # Definitely do this, dynamic energy compensation lowers the energy threshold dramtically to a point where the SpeechRecognizer never stops recording.
    recorder.dynamic_energy_threshold = False
    
    # Important for linux users. 
    # Prevents permanent application hang and crash by using the wrong Microphone
    if 'linux' in platform:
        mic_name = args.default_microphone
        if not mic_name or mic_name == 'list':
            print("Available microphone devices are: ")
            for index, name in enumerate(sr.Microphone.list_microphone_names()):
                print(f"Microphone with name \"{name}\" found")   
            return
        else:
            for index, name in enumerate(sr.Microphone.list_microphone_names()):
                if mic_name in name:
                    source = sr.Microphone(sample_rate=16000, device_index=index)
                    break
    else:
        source = sr.Microphone(sample_rate=16000)
        
    record_timeout = args.record_timeout
    phrase_timeout = args.phrase_timeout

    temp_file = NamedTemporaryFile().name
    transcription = ['']
    
    with source:
        recorder.adjust_for_ambient_noise(source)

    def record_callback(_, audio:sr.AudioData) -> None:
        """
        Threaded callback function to recieve audio data when recordings finish.
        audio: An AudioData containing the recorded bytes.
        """
        # Grab the raw bytes and push it into the thread safe queue.
        data = audio.get_raw_data()
        data_queue.put(data)

    recorder.listen_in_background(source, record_callback, phrase_time_limit=record_timeout)

    while True:
        now = datetime.utcnow()
        # Pull raw recorded audio from the queue.
        if not data_queue.empty():
            # Concatenate our current audio data with the latest audio data.
            while not data_queue.empty():
                data = data_queue.get()
                last_sample += data

            # Use AudioData to convert the raw data to wav data.
            audio_data = sr.AudioData(last_sample, source.SAMPLE_RATE, source.SAMPLE_WIDTH)
            wav_data = io.BytesIO(audio_data.get_wav_data())

            wav_data.seek(0)

            with open("tmp.wav",'wb') as f:
                f.write(wav_data.read())
                
            with open("tmp.wav",'rb') as f:
                text = openai.Audio.transcribe("whisper-1", f)

            text = str(text['text'])
            print(f'text:{text}')
            
            yield text
            sleep(1)

DEEPL_API_KEY = '54b2312e-e3e9-1334-418e-bbce189c4b90:fx'

from typing import Union
from fastapi import File, UploadFile, FastAPI, WebSocket
import json
import tempfile
import wave

app = FastAPI()
connected_clients = []

@app.websocket("/audio-stream")
async def audio_stream(
    websocket: WebSocket,
    target_language: Union[str, None] = None
):
    # Accept the WebSocket connection
    await websocket.accept()

    # Append the WebSocket connection to the list of connected clients
    connected_clients.append(websocket)

    try:
        audio_data_buffer = bytearray()
        last_sent_time = time.time()
        time_interval = 2
        while True:
            # Receive audio data from the client
            audio_data = await websocket.receive_bytes()
            audio_data_buffer.extend(audio_data)
            if time.time()-last_sent_time > time_interval:
                last_sent_time = time.time()
                print('received')
                start_time = time.time()
                # Transcribe the audio data and send it to the client
                text = await get_text(audio_data_buffer)
                whisper_end_time = time.time()
                translated_text = translate_text(text, target_language)
                deepl_end_time = time.time()
                await websocket.send_json(
                    ({"original_text": text,
                    "translated_text":translated_text, 
                    "target_language":target_language,
                    "elapsed_time":{
                        "whisper":whisper_end_time-start_time,
                        "deepl":deepl_end_time-whisper_end_time
                    }})
                )
    except Exception as e:
        print(e)
        pass
    finally:
        connected_clients.remove(websocket)

async def get_text(audio_data_buffer):
    try:
        # Use OpenAI to transcribe the audio data
        with tempfile.NamedTemporaryFile(delete=False,suffix='.wav') as temp_file:
            with wave.open(temp_file.name, 'wb') as wf:
                wf.setnchannels(1)
                wf.setsampwidth(p.get_sample_size(pyaudio.paInt16))
                wf.setframerate(44100)
                wf.writeframes(audio_data_buffer)
            response = openai.Audio.transcribe("whisper-1", temp_file)
        text = response['text']
        return text
    except Exception as e:
        # Handle any exceptions, e.g., if the OpenAI API request fails
        return str(e)


@app.post("/sub_post")
async def sub_post(
    file: UploadFile = File(...),
    target_language: Union[str, None] = None,
):
    file_bytes = await file.read()
    with tempfile.NamedTemporaryFile(delete=False,suffix='wav') as temp_file:
        temp_file.write(file_bytes)
        temp_file.seek(0)  # Ensure the file pointer is at the beginning

        # Pass the temporary file object to the OpenAI transcription function
        response = openai.Audio.transcribe("whisper-1", temp_file.name)
    text = str(response['text'])
    translated_text = translate_text(text, target_language)
    return {"original_text": text, 
            "translated_text":translated_text, 
            "target_language":target_language}


def translate_text(text, target_language):
    deepl_url = 'https://api-free.deepl.com/v2/translate'
    params = {
        'text': text,
        'target_lang': target_language,
        'auth_key': DEEPL_API_KEY,
    }

    response = requests.post(deepl_url, data=params)

    translation_data = response.json()
    translations = translation_data.get('translations', [])
    if translations:
        return translations[0].get('text', '')


def translate():
    for sentence in main():
        # os.system('clear') # linux, mac

        start_time = time.time()
        translated_sentence = translate_text(sentence, target_language='EN')
        end_time = time.time()
        print("Original:", sentence)
        print("Translated:", translated_sentence)
        print("Time taken:", end_time - start_time)


if __name__ == "__main__":
    translate()
