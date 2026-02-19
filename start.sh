#!/bin/bash
# Set PATH to include local node binary
export PATH="$PWD/tools/node-v20.11.1-darwin-x64/bin:$PATH"

echo "🚀 Starting 3x Hike Website..."

# Start Frontend (includes API routes)
echo "Starting Frontend on port 3000..."
cd client
npm run dev

# (Backend is now integrated into Next.js API Routes)
