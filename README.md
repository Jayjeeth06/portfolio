# Jayjeeth U - Portfolio Website

A professional, modern portfolio website built with React and CSS featuring light/dark mode toggle.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Light/Dark Mode**: Toggle between light and dark themes with persistent preference
- **Modern UI**: Premium design with gradient effects, animations, and smooth transitions
- **SEO Optimized**: Proper meta tags and semantic HTML for better search engine visibility
- **Sections**:
  - Hero section with animated gradient orbs
  - About section with career objective and contact info
  - Education timeline with academic history
  - Projects showcase with detailed descriptions
  - Technical skills with animated progress bars
  - Contact form with direct email integration
  - Footer with social links

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd jayjeeth-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --accent-primary: #667eea;
  --accent-secondary: #764ba2;
  /* ... other variables */
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Create corresponding CSS file for styling

### Updating Content

- **Personal Info**: Edit `src/components/Hero.jsx` and `src/components/About.jsx`
- **Education**: Update the `education` array in `src/components/Education.jsx`
- **Projects**: Modify the `projects` array in `src/components/Projects.jsx`
- **Skills**: Update the `skillCategories` array in `src/components/Skills.jsx`

## 🌐 Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Your site is live!

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 📱 Adding to Resume

You can add this portfolio link to your resume in several ways:

1. **In the header** next to your contact information:
   ```
   Portfolio: https://your-portfolio-url.com
   ```

2. **As a clickable link** in a PDF resume (using hyperlinks)

3. **In the projects section** as a featured project

4. **In your email signature** when sending applications

## 🛠️ Technologies Used

- React 18
- Vite
- CSS3 (Custom Properties, Flexbox, Grid)
- Google Fonts (Inter)

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Jayjeeth U**
- Email: jayjeeth.u06@gmail.com
- GitHub: [@jayjeeth06](https://github.com/jayjeeth06)
- Phone: 8310596262

---

Built with ❤️ using React and CSS
