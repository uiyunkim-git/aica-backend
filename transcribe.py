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
    await websocket.accept()
    connected_clients.append(websocket)

    try:
        audio_data_buffer = bytearray()
        last_sent_time = time.time()
        time_interval = 2
        while True:
            audio_data = await websocket.receive_bytes()
            audio_data_buffer.extend(audio_data)
            if time.time()-last_sent_time > time_interval:
                last_sent_time = time.time()
                print('received')
                start_time = time.time()
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
                print("sent.")
    except Exception as e:
        print(e)
        pass
    finally:
        connected_clients.remove(websocket)

async def get_text(audio_data_buffer):
    try:
        with tempfile.NamedTemporaryFile(delete=False,suffix='.wav') as temp_file:
            with wave.open(temp_file.name, 'wb') as wf:
                wf.setnchannels(1)
                wf.setsampwidth(p.get_sample_size(pyaudio.paInt16))
                wf.setframerate(44100)
                wf.writeframes(audio_data_buffer)
                print(f'frames:{len(audio_data_buffer)}')
            response = openai.Audio.transcribe("whisper-1", temp_file)
        text = response['text']
        return text
    except Exception as e:
        print(e)
        return e

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