#!/bin/bash
# Set PATH to include local node binary
export PATH="$PWD/tools/node-v20.11.1-darwin-x64/bin:$PATH"

echo "🚀 Starting 3x Hike Website..."

# Start Backend
echo "Starting Backend on port 5000..."
cd server
# Run in background and save PID
npm run dev &
SERVER_PID=$!
cd ..

# Wait for server to initialize
sleep 2

# Start Frontend
echo "Starting Frontend on port 3000..."
cd client
npm run dev &
CLIENT_PID=$!
cd ..

# Handle shutdown
trap "kill $SERVER_PID $CLIENT_PID" EXIT

echo "Application running. Press Ctrl+C to stop."
wait
