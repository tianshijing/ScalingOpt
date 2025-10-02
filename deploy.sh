#!/bin/bash

# Awesome Optimizers Website Deployment Script

echo "🚀 Starting deployment process..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are available"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Run linting
echo "🔍 Running linter..."
npm run lint

if [ $? -ne 0 ]; then
    echo "⚠️  Linting issues found, but continuing..."
fi

# Build the project
echo "🏗️  Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi

echo "✅ Build completed successfully"

# Check if we're deploying to GitHub Pages
if [ "$1" = "github-pages" ]; then
    echo "🌐 Preparing for GitHub Pages deployment..."
    echo "✅ Static files generated in 'out' directory"
    echo "📝 Next steps:"
    echo "   1. Commit and push your changes to GitHub"
    echo "   2. Enable GitHub Pages in repository settings"
    echo "   3. Set source to 'GitHub Actions'"
    echo "   4. The workflow will automatically deploy to GitHub Pages"
elif command -v vercel &> /dev/null; then
    echo "🌐 Deploying to Vercel..."
    vercel --prod
elif command -v netlify &> /dev/null; then
    echo "🌐 Deploying to Netlify..."
    netlify deploy --prod --dir=out
else
    echo "✅ Build completed! You can now:"
    echo "   1. Run './deploy.sh github-pages' for GitHub Pages"
    echo "   2. Deploy the 'out' folder to any static hosting service"
    echo "   3. Run 'npm start' to test the production build locally"
    echo "   4. Install Vercel CLI (npm i -g vercel) for easy deployment"
fi

echo "🎉 Deployment process completed!"
