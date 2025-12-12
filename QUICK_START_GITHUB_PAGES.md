# 🎯 Quick Start: Deploy to GitHub Pages in 5 Minutes

## ✅ What's Already Done

I've already set up everything you need:

- ✅ Installed `gh-pages` package
- ✅ Updated `package.json` with deployment scripts
- ✅ Configured `vite.config.js` with the correct base path
- ✅ Created deployment script `deploy-github.sh`

## 🚀 Deploy Now - Choose Your Method

### Method 1: Automated Script (Easiest!) ⭐

Just run this command:

```bash
./deploy-github.sh
```

The script will:
1. Set up Git if needed
2. Create your first commit
3. Guide you to create a GitHub repository
4. Push your code to GitHub
5. Deploy to GitHub Pages automatically!

### Method 2: Manual Steps (More Control)

#### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio`
3. Make it **Public**
4. **Don't** check "Initialize with README"
5. Click "Create repository"

#### Step 2: Initialize Git and Push

```bash
# Initialize git
git init

# Configure git (use your details)
git config user.name "Jayjeeth U"
git config user.email "jayjeeth.u06@gmail.com"

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Portfolio website"

# Add GitHub remote (replace jayjeeth06 with YOUR username)
git remote add origin https://github.com/jayjeeth06/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 3: Deploy to GitHub Pages

```bash
npm run deploy
```

That's it! 🎉

## 📍 Your Portfolio URL

After deployment (wait 1-2 minutes), your portfolio will be live at:

```
https://jayjeeth06.github.io/portfolio/
```

**Replace `jayjeeth06` with your GitHub username!**

## 🔄 Updating Your Portfolio Later

Whenever you make changes:

```bash
# Save your changes
git add .
git commit -m "Updated portfolio content"
git push origin main

# Deploy the updates
npm run deploy
```

Or simply run:
```bash
./deploy-github.sh
```

## 📋 Add to Your Resume

Once deployed, add this to your resume:

**Option 1 - Header:**
```
JAYJEETH U
📧 jayjeeth.u06@gmail.com | 📱 8310596262
🌐 jayjeeth06.github.io/portfolio | 💼 github.com/jayjeeth06
```

**Option 2 - As a hyperlink in PDF:**
- Text: "View My Portfolio"
- Link: https://jayjeeth06.github.io/portfolio/

## ❓ Troubleshooting

### "Permission denied" error
```bash
chmod +x deploy-github.sh
```

### "Authentication failed" when pushing to GitHub
You may need to use a Personal Access Token instead of password:
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Use the token as your password when prompted

### Blank page after deployment
- Make sure `vite.config.js` has `base: '/portfolio/'`
- Clear browser cache and refresh

## 🎓 What Happens Behind the Scenes

1. `npm run deploy` runs `predeploy` first (builds your project)
2. The built files go to the `dist` folder
3. `gh-pages` creates a new branch called `gh-pages`
4. It pushes the `dist` folder contents to that branch
5. GitHub automatically serves the site from the `gh-pages` branch

## 🌟 Next Steps

1. ✅ Deploy your portfolio
2. ✅ Test the live URL
3. ✅ Add it to your resume
4. ✅ Share it on LinkedIn
5. ✅ Add it to your GitHub profile README

---

**Ready to deploy? Run:**

```bash
./deploy-github.sh
```

**Good luck! 🚀**
