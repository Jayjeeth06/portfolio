# 🚀 Deploy to GitHub Pages - Step by Step Guide

## Prerequisites

- GitHub account (if you don't have one, create at https://github.com)
- Git installed on your computer
- Your portfolio project (already done! ✅)

## Step 1: Install gh-pages Package

First, install the gh-pages deployment package:

```bash
npm install --save-dev gh-pages
```

## Step 2: Update package.json

Add these lines to your `package.json`:

1. Add the homepage URL (replace `jayjeeth06` with your GitHub username):
```json
"homepage": "https://jayjeeth06.github.io/portfolio"
```

2. Add deployment scripts to the "scripts" section:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

Your `package.json` should look like this:

```json
{
  "name": "jayjeeth-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "homepage": "https://jayjeeth06.github.io/portfolio",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "vite": "^5.4.11",
    "gh-pages": "^6.2.0"
  }
}
```

## Step 3: Update vite.config.js

Update your Vite configuration to set the correct base path:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/'
})
```

## Step 4: Create a GitHub Repository

### Option A: Using GitHub Website

1. Go to https://github.com
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: `portfolio`
5. Keep it **Public**
6. **Do NOT** initialize with README (we already have files)
7. Click "Create repository"

### Option B: Using GitHub CLI (if installed)

```bash
gh repo create portfolio --public --source=. --remote=origin
```

## Step 5: Initialize Git and Push to GitHub

Run these commands in your project directory:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Portfolio website"

# Add GitHub as remote (replace jayjeeth06 with YOUR username)
git remote add origin https://github.com/jayjeeth06/portfolio.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

## Step 6: Deploy to GitHub Pages

Now deploy your site:

```bash
npm run deploy
```

This will:
1. Build your project (`npm run build`)
2. Create a `gh-pages` branch
3. Push the built files to that branch
4. GitHub will automatically host it!

## Step 7: Enable GitHub Pages (if not automatic)

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select branch: `gh-pages`
5. Click "Save"

## Step 8: Access Your Live Site

Your portfolio will be live at:
```
https://jayjeeth06.github.io/portfolio/
```

⏱️ It may take 1-2 minutes for the site to go live after deployment.

## 🎉 You're Done!

Your portfolio is now live on the internet! 🌐

## Updating Your Portfolio

Whenever you make changes:

```bash
# Make your changes to the code
# Then commit and push to GitHub
git add .
git commit -m "Update portfolio content"
git push origin main

# Deploy the updates
npm run deploy
```

## Troubleshooting

### Issue: Blank page after deployment

**Solution:** Make sure you updated `vite.config.js` with the correct base path.

### Issue: 404 errors for assets

**Solution:** Check that the `base` in `vite.config.js` matches your repository name.

### Issue: Git push fails

**Solution:** Make sure you've set up your GitHub credentials:
```bash
git config --global user.name "Your Name"
git config --global user.email "jayjeeth.u06@gmail.com"
```

## Custom Domain (Optional)

Want to use a custom domain like `jayjeeth.dev`?

1. Buy a domain from Namecheap, GoDaddy, etc.
2. Add a `CNAME` file to your `public` folder with your domain
3. Configure DNS settings in your domain registrar
4. Update the `homepage` in `package.json` to your custom domain

## Quick Reference Commands

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Deploy to GitHub Pages
npm run deploy

# Update and redeploy
git add .
git commit -m "Update"
git push origin main
npm run deploy
```

---

**Your Portfolio URL:** `https://jayjeeth06.github.io/portfolio/`

Add this to your resume! 📄✨
