import asyncio
import websockets
import pyaudio
import time
import json

# Define parameters
sample_rate = 44100
chunk_size = 1024

p = pyaudio.PyAudio()

async def sender(input_stream, websocket):
    while True:
        audio_data = input_stream.read(chunk_size)
        await websocket.send(audio_data)
        await asyncio.sleep(0)

async def receiver(websocket):
    while True:
        print("receiving")
        response_json = await websocket.recv()
        try:
            data = json.loads(response_json)
            print("="*30)
            print("recieved")
            print(data)
            print("="*30)
        except:
            print(response_json)

async def audio_client():
    async with websockets.connect("wss://b606-110-76-96-37.ngrok-free.app/audio-stream?target_language=KO") as websocket:
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

            await asyncio.gather(sender(input_stream, websocket), receiver(websocket))

        except KeyboardInterrupt:
            print("Interrupted by the user")
        finally:
            # Close the input stream and PyAudio
            input_stream.stop_stream()
            input_stream.close()

if __name__ == "__main__":
    asyncio.run(audio_client())
