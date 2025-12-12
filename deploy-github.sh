#!/bin/bash

# GitHub Pages Deployment Script for Portfolio
# This script will guide you through deploying to GitHub Pages

echo "🚀 GitHub Pages Deployment for Portfolio"
echo "=========================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Git not initialized. Let's set it up!"
    echo ""
    
    # Initialize git
    git init
    echo "✅ Git initialized"
    
    # Configure git user (you can change these)
    read -p "Enter your name for git commits: " git_name
    read -p "Enter your email for git commits: " git_email
    
    git config user.name "$git_name"
    git config user.email "$git_email"
    echo "✅ Git configured"
    
    # Add all files
    git add .
    git commit -m "Initial commit: Portfolio website"
    echo "✅ Initial commit created"
    
    # Add remote
    echo ""
    echo "Now, create a repository on GitHub:"
    echo "1. Go to https://github.com/new"
    echo "2. Name it: portfolio"
    echo "3. Keep it Public"
    echo "4. Do NOT initialize with README"
    echo "5. Click 'Create repository'"
    echo ""
    read -p "Press Enter after creating the repository..."
    
    read -p "Enter your GitHub username: " github_username
    git remote add origin "https://github.com/$github_username/portfolio.git"
    echo "✅ Remote added"
    
    # Push to GitHub
    git branch -M main
    echo ""
    echo "Pushing to GitHub... (you may need to enter your GitHub credentials)"
    git push -u origin main
    echo "✅ Code pushed to GitHub"
else
    echo "✅ Git already initialized"
    
    # Check if there are uncommitted changes
    if [[ -n $(git status -s) ]]; then
        echo ""
        echo "📝 You have uncommitted changes. Committing them..."
        git add .
        read -p "Enter commit message (or press Enter for default): " commit_msg
        if [ -z "$commit_msg" ]; then
            commit_msg="Update portfolio"
        fi
        git commit -m "$commit_msg"
        git push origin main
        echo "✅ Changes committed and pushed"
    else
        echo "✅ No uncommitted changes"
    fi
fi

echo ""
echo "🏗️  Building and deploying to GitHub Pages..."
echo ""

# Deploy to GitHub Pages
npm run deploy

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment Successful!"
    echo ""
    echo "Your portfolio is being published to GitHub Pages."
    echo "It may take 1-2 minutes to go live."
    echo ""
    echo "📍 Your portfolio will be available at:"
    
    # Try to get the GitHub username from git remote
    remote_url=$(git config --get remote.origin.url)
    if [[ $remote_url =~ github\.com[:/]([^/]+)/([^/.]+) ]]; then
        username="${BASH_REMATCH[1]}"
        repo="${BASH_REMATCH[2]}"
        echo "   https://$username.github.io/$repo/"
    else
        echo "   https://YOUR_USERNAME.github.io/portfolio/"
    fi
    
    echo ""
    echo "📋 Next steps:"
    echo "1. Wait 1-2 minutes for GitHub to publish your site"
    echo "2. Visit the URL above"
    echo "3. Add this URL to your resume!"
    echo ""
    echo "💡 To update your portfolio in the future:"
    echo "   1. Make your changes"
    echo "   2. Run: ./deploy-github.sh"
    echo ""
else
    echo ""
    echo "❌ Deployment failed. Please check the errors above."
    echo ""
    echo "Common issues:"
    echo "- Make sure you've created the GitHub repository"
    echo "- Check your internet connection"
    echo "- Verify your GitHub credentials"
    echo ""
fi
