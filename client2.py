from flask import Flask, render_template
from flask_sockets import Sockets
import asyncio
import websockets
import pyaudio
import json

app = Flask(__name__)
sockets = Sockets(app)

# Your existing audio streaming code goes here...

# Flask route for the frontend
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
