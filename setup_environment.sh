#!/bin/bash
# Set PATH to include local node binary
export PATH="$PWD/tools/node-v20.11.1-darwin-x64/bin:$PATH"

echo "Using Node: $(which node)"
echo "Node Version: $(node -v)"
echo "NPM Version: $(npm -v)"

echo "----------------------------------------"
echo "📦 Installing Server Dependencies..."
echo "----------------------------------------"
cd server
npm install
if [ $? -eq 0 ]; then
    echo "✅ Server dependencies installed."
else
    echo "❌ Server dependency install failed."
    exit 1
fi

echo "----------------------------------------"
echo "📦 Installing Client Dependencies..."
echo "----------------------------------------"
cd ../client
npm install
if [ $? -eq 0 ]; then
    echo "✅ Client dependencies installed."
else
    echo "❌ Client dependency install failed."
    exit 1
fi

echo "----------------------------------------"
echo "🎉 Setup Complete!"
echo "To run the app, use the start script provided or ensure you add the tools/bin to your PATH."
