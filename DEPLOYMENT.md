# 🚀 Vercel Deployment Guide

Your portfolio is ready for deployment! Follow these steps to deploy to Vercel.

## 📋 Pre-Deployment Checklist ✅

- ✅ All assets copied to `public/` folder
- ✅ Video files properly configured
- ✅ CV download working
- ✅ Contact form configured for email
- ✅ Production build tested successfully
- ✅ Vercel configuration ready

## 🌐 Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

4. **Follow the prompts**:
   - Link to existing project? → No
   - Project name → `nigel-nortey-portfolio` (or your preferred name)
   - Directory → `./` (current directory)
   - Override settings? → No

### Option 2: Deploy via GitHub (Alternative)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy!

## 🔧 Configuration Details

### Build Settings
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Environment Variables
No environment variables needed for this portfolio.

### Custom Domain (Optional)
After deployment, you can add a custom domain in Vercel dashboard.

## 📁 File Structure
```
Portfolio/
├── public/
│   ├── Nigel_Pic.jpg
│   ├── Nigel_Nortey_CV.pdf
│   └── video/
│       ├── Wassce.mp4
│       └── Employee Video.mp4
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   ├── Navbar.jsx
│   │   └── LoadingScreen.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
├── vercel.json
├── package.json
└── vite.config.js
```

## 🎯 Post-Deployment

1. **Test your live site**:
   - Check all sections load properly
   - Test video playback
   - Verify CV download works
   - Test contact form email functionality

2. **Update social links** (if needed):
   - LinkedIn, GitHub, Email links are already configured

3. **SEO Optimization**:
   - Title and meta description are already set
   - Open Graph tags can be added if needed

## 🔄 Updates

To update your portfolio:
1. Make changes locally
2. Test with `npm run dev`
3. Build with `npm run build`
4. Deploy with `vercel --prod`

## 📞 Support

If you encounter any issues:
- Check Vercel deployment logs
- Verify all file paths are correct
- Ensure all assets are in the `public/` folder

Your portfolio is production-ready! 🎉
