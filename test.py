import pyaudio

# Set the parameters
sampling_rate = 44100  # 44.1 kHz
chunk_size = 1024     # Number of frames per buffer

# Calculate time duration for each chunk
time_duration = chunk_size / sampling_rate

print(f"Sampling Rate: {sampling_rate} Hz")
print(f"Chunk Size: {chunk_size} frames")
print(f"Time Duration per Chunk: {time_duration:.4f} seconds")
