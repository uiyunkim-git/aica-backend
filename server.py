from fastapi import FastAPI, WebSocket
import pyaudio

app = FastAPI()

# Define parameters
sample_rate = 44100
chunk_size = 1024

# Initialize PyAudio
p = pyaudio.PyAudio()

# Open an output stream (speaker)
output_stream = p.open(format=pyaudio.paInt16,
                       channels=1,
                       rate=sample_rate,
                       output=True)

@app.websocket("/audio-stream")
async def audio(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_bytes()
            output_stream.write(data)
    except Exception:
        pass

# To start the FastAPI server, you can use the following:
# uvicorn your_script_name:app —host 0.0.0.0 —port 8000
