# How to Add Portfolio Link to Your Resume

## Option 1: In the Header Section

Add the portfolio link in your contact information at the top of your resume:

```
JAYJEETH U
Phone: 8310596262 | Email: jayjeeth.u06@gmail.com
Portfolio: https://your-portfolio-url.com | GitHub: github.com/jayjeeth06
```

## Option 2: As a Hyperlink in PDF

If you're creating a PDF resume:

1. In Microsoft Word or Google Docs:
   - Select the text "Portfolio" or "View My Work"
   - Insert → Link/Hyperlink
   - Paste your portfolio URL
   - The link will be clickable in the PDF

2. Example placement:
   ```
   JAYJEETH U
   Software Engineer
   
   📧 jayjeeth.u06@gmail.com | 📱 8310596262
   💼 Portfolio | 🔗 GitHub
   ```

## Option 3: In Career Objective Section

```
Career Objective
Aspires to be a software engineer with experience in software development, 
data structures, algorithms and web technologies. View my portfolio at 
https://your-portfolio-url.com to see my projects and skills.
```

## Option 4: In Projects Section

Add it as a featured project:

```
Projects

Personal Portfolio Website | React, CSS, Vite
Live: https://your-portfolio-url.com
- Developed a professional portfolio website showcasing projects and skills
- Implemented light/dark mode toggle with persistent user preferences
- Created responsive design with modern UI/UX principles
- Optimized for SEO and performance
```

## Best Practices

1. **Use a Custom Domain** (Optional but Professional):
   - Instead of: `jayjeeth-portfolio.netlify.app`
   - Use: `jayjeeth.dev` or `jayjeeth.com`
   - Makes it more memorable and professional

2. **Keep It Short**:
   - Use a URL shortener if the link is too long
   - Or use a custom domain

3. **Test the Link**:
   - Always test that the link works before sending your resume
   - Make sure it opens in a new tab

4. **QR Code** (Modern Approach):
   - Generate a QR code for your portfolio
   - Add it to your resume (especially for printed versions)
   - Recruiters can scan it with their phones

## Deployment Options (Choose One)

### 1. Netlify (Recommended - Free & Easy)
```bash
# Build your project
npm run build

# Deploy to Netlify
# Option A: Drag & drop the 'dist' folder to netlify.com
# Option B: Use Netlify CLI
npm install -g netlify-cli
netlify deploy --prod
```

Your URL will be: `https://your-site-name.netlify.app`

### 2. Vercel (Free & Fast)
```bash
npm install -g vercel
vercel --prod
```

Your URL will be: `https://your-site-name.vercel.app`

### 3. GitHub Pages (Free)
```bash
npm install --save-dev gh-pages

# Add to package.json:
# "homepage": "https://jayjeeth06.github.io/portfolio"

npm run deploy
```

Your URL will be: `https://jayjeeth06.github.io/portfolio`

## Example Resume Header with Portfolio

```
┌─────────────────────────────────────────────────────────────┐
│                        JAYJEETH U                           │
│                   Software Engineer                         │
│                                                             │
│  📧 jayjeeth.u06@gmail.com  |  📱 8310596262                │
│  🌐 jayjeeth.dev  |  💼 github.com/jayjeeth06             │
└─────────────────────────────────────────────────────────────┘
```

## Tips for Success

1. **Keep Portfolio Updated**: Regularly update with new projects
2. **Mobile Friendly**: Ensure it works on all devices (already done!)
3. **Fast Loading**: Optimize images and code (Vite handles this)
4. **Professional Email**: Use the contact form or direct email link
5. **Analytics** (Optional): Add Google Analytics to track visitors

## Next Steps

1. Deploy your portfolio to one of the platforms above
2. Get your live URL
3. Add it to your resume
4. Test the link
5. Start applying! 🚀

---

Good luck with your job search! 💼✨
