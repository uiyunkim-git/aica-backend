import asyncio
import websockets
import pyaudio
import time

# Define parameters
sample_rate = 44100
chunk_size = 1024

# Initialize PyAudio
p = pyaudio.PyAudio()

async def audio_client():
    async with websockets.connect(
        "ws://localhost:8000/audio-stream?target_language=EN") as websocket:
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
            while True:
                # Read audio data from the microphone
                audio_data = input_stream.read(chunk_size)
                await websocket.send(audio_data)

        except KeyboardInterrupt:
            print("Interrupted by the user")
        finally:
            # Close the input stream and PyAudio
            input_stream.stop_stream()
            input_stream.close()

if __name__ == "__main__":
    asyncio.get_event_loop().run_until_complete(audio_client())