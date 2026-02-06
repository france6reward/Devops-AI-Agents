# Deployment Guide - Cortex AI Agents

This guide walks you through deploying the Cortex AI Agents website to production on Vercel.

## Prerequisites

- GitHub repository connected to v0 project
- Vercel account (vercel.com)
- Node.js 18+ installed locally (for testing)

## Deployment Steps

### 1. **Deploy to Vercel (Recommended)**

The easiest way to deploy is using Vercel's integration with v0:

1. Click the **"Publish"** button in the top-right of your v0 project
2. Select your connected GitHub repository
3. Vercel will automatically:
   - Detect the Next.js project in `/devops-ai-agents`
   - Install dependencies
   - Build the project
   - Deploy to a live URL

**Environment Variables:**
- Currently, no environment variables are required for the website
- If you add AI features later, add them in Vercel's project settings under "Settings" → "Environment Variables"

### 2. **Alternative: Deploy via GitHub Actions**

If you prefer to manage deployments through GitHub:

1. Go to your GitHub repository settings
2. Add Vercel tokens as secrets
3. Vercel auto-deploys on push to `main` branch

### 3. **Local Testing Before Deployment**

Test the build locally to catch issues early:

```bash
cd devops-ai-agents
npm install
npm run build
npm start
```

The app will be available at `http://localhost:3000`

## What's Included

✅ **Production-Ready Configuration**
- Optimized Next.js build for performance
- Standalone output for minimal deployment size
- SWC minification for faster builds
- Browser source maps disabled in production
- Secure headers configured

✅ **Performance Features**
- Image optimization with WebP support
- CSS minification via Tailwind
- Code splitting and lazy loading
- Optimized bundle size

✅ **SEO & Accessibility**
- Meta tags configured for homepage
- Semantic HTML structure
- ARIA labels and roles
- Mobile-responsive design

## Deployment Status

The project is ready to deploy at any time. Simply:

1. Review the changes in your GitHub branch
2. Click **"Publish"** in v0
3. Confirm deployment to Vercel

Once deployed, your site will be live at a Vercel-provided URL (e.g., `https://cortex-ai.vercel.app`)

## Post-Deployment Checklist

- [ ] Test homepage loads correctly
- [ ] Navigation between pages works
- [ ] Sidebar menu responsive on mobile
- [ ] Images load properly
- [ ] No console errors in browser DevTools
- [ ] Check Vercel Analytics dashboard

## Monitoring & Logs

After deployment:
1. Visit your Vercel project dashboard at `vercel.com`
2. Check **"Deployments"** for build logs
3. Check **"Analytics"** for performance metrics
4. Check **"Functions"** if you add API routes later

## Rollback

If issues occur after deployment:
1. Go to Vercel project dashboard
2. Click "Deployments"
3. Select a previous successful deployment
4. Click "Promote to Production"

## Need Help?

- **Vercel Documentation:** https://vercel.com/docs
- **Next.js Documentation:** https://nextjs.org/docs
- **v0 Support:** https://vercel.com/help
