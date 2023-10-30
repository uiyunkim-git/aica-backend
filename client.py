import asyncio
import websockets
import pyaudio
import time
import json
import json
from flask import Flask, render_template

app = Flask(__name__)

# Define parameters
sample_rate = 44100
chunk_size = 1024

p = pyaudio.PyAudio()

json_data = {
        "original_text": 'text',
        "translated_text": 'translated_text',
        "target_language": 'target_language',
        "elapsed_time": {
            "whisper": 0,
            "deepl": 0
        }
    }

@app.route('/get-json-data')
def get_json_data():
    global json_data
    return json_data

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
            global json_data 
            json_data = data
            print("="*30)
        except:
            print(response_json)

tmp_site = "https://0464-143-248-194-187.ngrok-free.app"
tmp_site = tmp_site.split("/")[2]
async def audio_client():
    async with websockets.connect(f"wss://{tmp_site}/audio-stream?target_language=EN") as websocket:
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


@app.route('/')
def index():
    return render_template('index.html')

# Route to start the audio streaming
@app.route('/start-streaming')
def start_streaming():
    asyncio.run(audio_client())
    return "Audio streaming started."

if __name__ == "__main__":
    app.run(debug=True)       

# if __name__ == "__main__":
#     asyncio.run(audio_client())
