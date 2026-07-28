#!/bin/bash

# Mathonsiautospa Quick Deployment Setup Script

echo "🚀 Mathonsiautospa Deployment Setup"
echo "===================================="
echo ""
echo "This script will help you prepare for deployment."
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "📋 Creating .env file..."
    cp .env.example .env
    echo "✅ .env file created. Please edit it with your credentials."
    echo ""
    echo "Required: Edit .env with:"
    echo "  - EMAIL_USER: Your Gmail address"
    echo "  - EMAIL_PASSWORD: Your Gmail App Password"
    echo "  - BUSINESS_EMAIL: Where to send booking notifications"
    echo ""
else
    echo "✅ .env file already exists"
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
else
    echo "✅ Dependencies already installed"
fi

# Check if it's a git repo
if [ ! -d ".git" ]; then
    echo "🔗 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - ready for deployment"
    echo "✅ Git repository initialized"
    echo ""
    echo "Next: Push to GitHub using:"
    echo "  git remote add origin https://github.com/YOUR_USERNAME/mathonsiautospa.git"
    echo "  git branch -M main"
    echo "  git push -u origin main"
else
    echo "✅ Git repository already initialized"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ Setup Complete!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📚 Next Steps:"
echo "1. Edit .env with your Gmail credentials"
echo "2. Test locally: npm start"
echo "3. Push to GitHub"
echo "4. Deploy to Render.com or Railway.app (see DEPLOYMENT.md)"
echo ""
echo "📖 Read DEPLOYMENT.md for detailed instructions"
echo ""
