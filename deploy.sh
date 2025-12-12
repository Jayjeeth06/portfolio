#!/bin/bash

# Portfolio Deployment Script
# This script helps you deploy your portfolio to various platforms

echo "🚀 Portfolio Deployment Helper"
echo "================================"
echo ""
echo "Choose your deployment platform:"
echo "1) Netlify (Recommended)"
echo "2) Vercel"
echo "3) GitHub Pages"
echo "4) Build only (manual deployment)"
echo ""
read -p "Enter your choice (1-4): " choice

case $choice in
  1)
    echo ""
    echo "📦 Building for Netlify..."
    npm run build
    echo ""
    echo "✅ Build complete!"
    echo ""
    echo "Next steps:"
    echo "1. Go to https://app.netlify.com/drop"
    echo "2. Drag and drop the 'dist' folder"
    echo "3. Your site will be live in seconds!"
    echo ""
    echo "Or install Netlify CLI:"
    echo "  npm install -g netlify-cli"
    echo "  netlify deploy --prod"
    ;;
    
  2)
    echo ""
    echo "📦 Building for Vercel..."
    npm run build
    echo ""
    echo "✅ Build complete!"
    echo ""
    echo "Installing Vercel CLI..."
    npm install -g vercel
    echo ""
    echo "Deploying to Vercel..."
    vercel --prod
    ;;
    
  3)
    echo ""
    echo "📦 Setting up GitHub Pages..."
    
    # Check if gh-pages is installed
    if ! npm list gh-pages > /dev/null 2>&1; then
      echo "Installing gh-pages..."
      npm install --save-dev gh-pages
    fi
    
    # Update package.json with deploy script
    echo ""
    echo "⚠️  Important: Update package.json with your GitHub username"
    echo "Add this to package.json:"
    echo '  "homepage": "https://YOUR_USERNAME.github.io/portfolio",'
    echo '  "scripts": {'
    echo '    "predeploy": "npm run build",'
    echo '    "deploy": "gh-pages -d dist"'
    echo '  }'
    echo ""
    read -p "Press Enter after updating package.json..."
    
    echo ""
    echo "Deploying to GitHub Pages..."
    npm run deploy
    ;;
    
  4)
    echo ""
    echo "📦 Building project..."
    npm run build
    echo ""
    echo "✅ Build complete!"
    echo "Your production files are in the 'dist' folder"
    echo ""
    echo "You can now:"
    echo "- Upload to any web hosting service"
    echo "- Deploy to your own server"
    echo "- Use any deployment platform"
    ;;
    
  *)
    echo ""
    echo "❌ Invalid choice. Please run the script again."
    exit 1
    ;;
esac

echo ""
echo "🎉 Done!"
