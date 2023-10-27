import asyncio
import websockets
import pyaudio
import time
import json
import threading

# Define parameters
sample_rate = 44100
chunk_size = 1024

# Initialize PyAudio
p = pyaudio.PyAudio()

def sender(input_stream, websocket):
    while True:
        # Read audio data from the microphone
        print('send')
        audio_data = input_stream.read(chunk_size)
        websocket.send(audio_data)

def receiver(websocket):
    while True:
        response_json = websocket.recv()
        try:
            print(json.loads(response_json))
        except:
            print(response_json)

async def audio_client():
    async with websockets.connect("wss://84f9-143-248-194-51.ngrok-free.app/audio-stream?target_language=KO") as websocket:
        print("Connected to server")
        try:
            # Open an input stream (microphone)
            input_stream = p.open(
                format=pyaudio.paInt16,
                channels=1,
                rate=sample_rate,
                input=True,
                frames_per_buffer=chunk_size
            )

            thread1 = threading.Thread(target=sender, args=(input_stream, websocket))
            thread2 = threading.Thread(target=receiver, args=(websocket,))

            thread1.start()
            thread2.start()

        except KeyboardInterrupt:
            print("Interrupted by the user")
        finally:
            # Close the input stream and PyAudio
            input_stream.stop_stream()
            input_stream.close()

if __name__ == "__main__":
    asyncio.get_event_loop().run_until_complete(audio_client())
