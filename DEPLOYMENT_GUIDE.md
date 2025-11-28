# 🚀 Free Deployment Guide - Rendr Media

Complete guide to deploy your website for free with custom domain support.

---

## 🏆 Best Free Options (Ranked)

### 1. Vercel (Recommended) ⭐
**Best for:** React/Vite apps, automatic deployments, custom domains

**Pros:**
- ✅ Easiest setup (2 minutes)
- ✅ Automatic deployments from Git
- ✅ Free custom domain
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Preview deployments for PRs
- ✅ 100GB bandwidth/month

**Cons:**
- ⚠️ 100GB bandwidth limit (plenty for most sites)

---

### 2. Netlify
**Best for:** Static sites, form handling, serverless functions

**Pros:**
- ✅ Easy drag-and-drop deployment
- ✅ Form handling built-in
- ✅ Free custom domain
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS

**Cons:**
- ⚠️ Slightly slower build times than Vercel

---

### 3. GitHub Pages
**Best for:** Simple static sites, GitHub integration

**Pros:**
- ✅ Free forever
- ✅ Unlimited bandwidth
- ✅ Custom domain support
- ✅ Direct from GitHub repo

**Cons:**
- ⚠️ Manual setup required
- ⚠️ No automatic preview deployments

---

### 4. Cloudflare Pages
**Best for:** Global performance, unlimited bandwidth

**Pros:**
- ✅ Unlimited bandwidth
- ✅ Fastest global CDN
- ✅ Free custom domain
- ✅ Automatic deployments

**Cons:**
- ⚠️ 500 builds/month limit

---

## 🚀 Quick Deploy: Vercel (Recommended)

### Method 1: Deploy from GitHub (Best)

#### Step 1: Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Rendr Media website"
# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/rendr-media.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" (use GitHub account)
3. Click "Add New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click "Deploy"

**Done!** Your site will be live at `your-project.vercel.app` in ~2 minutes.

#### Step 3: Add Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your domain (e.g., `rendrmedia.com`)
3. Follow DNS instructions
4. Wait 5-10 minutes for DNS propagation

---

### Method 2: Deploy via CLI (Fastest)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? rendr-media
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

**Done!** Your site is live.

---

## 🌐 Deploy to Netlify

### Method 1: Drag & Drop (Easiest)

1. Build your site:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Sign up (free)
4. Drag the `dist` folder to the deploy zone
5. Done! Site is live at `random-name.netlify.app`

### Method 2: Git Integration (Recommended)

1. Push code to GitHub (see Vercel steps above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub
5. Select your repository
6. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
7. Click "Deploy site"

**Automatic deployments:** Every push to `main` triggers a new deployment.

---

## 📄 Deploy to GitHub Pages

### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json
Add these scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 3: Update vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/rendr-media/', // Replace with your repo name
})
```

### Step 4: Deploy
```bash
# Push to GitHub first
git add .
git commit -m "Setup GitHub Pages"
git push

# Deploy
npm run deploy
```

**Your site will be live at:** `https://YOUR_USERNAME.github.io/rendr-media/`

### Custom Domain on GitHub Pages
1. Add a file named `CNAME` in the `public` folder
2. Add your domain: `rendrmedia.com`
3. Redeploy
4. Configure DNS (see DNS section below)

---

## ☁️ Deploy to Cloudflare Pages

### Method 1: Git Integration

1. Push to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Sign up (free)
4. Click "Create a project"
5. Connect to GitHub
6. Select repository
7. Configure:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
8. Click "Save and Deploy"

### Method 2: Direct Upload

1. Build your site:
   ```bash
   npm run build
   ```

2. Install Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```

3. Login and deploy:
   ```bash
   wrangler login
   wrangler pages deploy dist --project-name=rendr-media
   ```

---

## 🌍 DNS Configuration for Custom Domains

### For Vercel
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### For Netlify
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

### For Cloudflare Pages
```
Type: CNAME
Name: @
Value: your-project.pages.dev

Type: CNAME
Name: www
Value: your-project.pages.dev
```

---

## 🔧 Environment Variables (If Needed)

### Vercel
1. Go to Project Settings → Environment Variables
2. Add variables:
   - `VITE_API_URL`
   - `VITE_CONTACT_EMAIL`
3. Redeploy

### Netlify
1. Go to Site Settings → Environment Variables
2. Add variables
3. Redeploy

### GitHub Pages
Add to `.env.production`:
```env
VITE_API_URL=https://api.rendrmedia.com
```

---

## 📊 Comparison Table

| Feature | Vercel | Netlify | GitHub Pages | Cloudflare |
|---------|--------|---------|--------------|------------|
| **Setup Time** | 2 min | 3 min | 10 min | 3 min |
| **Auto Deploy** | ✅ | ✅ | ❌ | ✅ |
| **Custom Domain** | ✅ Free | ✅ Free | ✅ Free | ✅ Free |
| **HTTPS** | ✅ Auto | ✅ Auto | ✅ Auto | ✅ Auto |
| **Bandwidth** | 100GB | 100GB | Unlimited | Unlimited |
| **Build Minutes** | 6000/mo | 300/mo | Unlimited | 500/mo |
| **Preview Deploys** | ✅ | ✅ | ❌ | ✅ |
| **Forms** | ❌ | ✅ | ❌ | ✅ |
| **Analytics** | ✅ Paid | ✅ Free | ❌ | ✅ Free |
| **Speed** | ⚡⚡⚡ | ⚡⚡ | ⚡⚡ | ⚡⚡⚡ |

---

## 🎯 Recommended Setup

### For Rendr Media (Your Use Case)

**Best Choice: Vercel**

Why?
- ✅ Perfect for React/Vite
- ✅ Fastest deployment
- ✅ Best developer experience
- ✅ Automatic preview deployments
- ✅ Great for portfolios

**Setup:**
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/rendr-media.git
git push -u origin main

# 2. Deploy to Vercel
npm install -g vercel
vercel login
vercel --prod

# Done! 🎉
```

---

## 🔄 Continuous Deployment Workflow

### Automatic Deployments (Vercel/Netlify/Cloudflare)

1. **Make changes locally**
   ```bash
   # Edit files
   git add .
   git commit -m "Update homepage"
   git push
   ```

2. **Automatic deployment**
   - Platform detects push
   - Runs build automatically
   - Deploys to production
   - Updates live site

3. **Preview deployments**
   - Create a branch: `git checkout -b feature/new-design`
   - Push: `git push origin feature/new-design`
   - Get preview URL: `feature-new-design.vercel.app`
   - Test before merging

---

## 🐛 Troubleshooting

### Build Fails

**Error: "Command not found: vite"**
```bash
# Solution: Ensure dependencies are installed
npm install
```

**Error: "Out of memory"**
```bash
# Solution: Increase Node memory
# Add to package.json scripts:
"build": "NODE_OPTIONS=--max_old_space_size=4096 vite build"
```

### 404 on Refresh

**Problem:** Page refreshes show 404

**Solution:** Add redirect rules

**Vercel:** Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Netlify:** Create `public/_redirects`:
```
/*    /index.html   200
```

### Slow Build Times

**Solution:** Use build cache
- Vercel: Automatic
- Netlify: Enable in settings
- GitHub Pages: Use actions cache

---

## 📈 Post-Deployment Checklist

### After First Deploy

- [ ] Test all pages work
- [ ] Check mobile responsiveness
- [ ] Verify forms work (if applicable)
- [ ] Test contact page
- [ ] Check portfolio images load
- [ ] Verify navigation works
- [ ] Test on different browsers
- [ ] Check page load speed
- [ ] Set up custom domain
- [ ] Configure SSL (automatic)
- [ ] Add to Google Search Console
- [ ] Set up analytics (optional)

### Performance Optimization

1. **Enable Compression**
   - Vercel: Automatic
   - Netlify: Automatic
   - GitHub Pages: Automatic

2. **Image Optimization**
   - Use WebP format
   - Compress images
   - Lazy load images

3. **Caching**
   - All platforms handle this automatically

---

## 💰 Cost Comparison

### Free Tier Limits

**Vercel Free:**
- 100GB bandwidth/month
- 6000 build minutes/month
- Unlimited sites
- **Perfect for:** Most small-medium sites

**Netlify Free:**
- 100GB bandwidth/month
- 300 build minutes/month
- Unlimited sites
- **Perfect for:** Simple sites with forms

**GitHub Pages:**
- Unlimited bandwidth
- Unlimited builds
- 1GB storage
- **Perfect for:** Simple static sites

**Cloudflare Pages:**
- Unlimited bandwidth
- 500 builds/month
- Unlimited sites
- **Perfect for:** High-traffic sites

### When to Upgrade?

You'll need paid plans when:
- Traffic > 100GB/month (Vercel/Netlify)
- Builds > 300-500/month
- Need team collaboration
- Need advanced analytics
- Need serverless functions

**For Rendr Media:** Free tier is more than enough! 🎉

---

## 🎓 Quick Start Commands

### Deploy to Vercel (Fastest)
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
```

---

## 📞 Support Resources

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages:** [pages.github.com](https://pages.github.com)
- **Cloudflare Pages:** [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)

---

## 🎉 Next Steps

1. **Choose your platform** (Recommended: Vercel)
2. **Push to GitHub**
3. **Deploy** (2 minutes)
4. **Add custom domain** (optional)
5. **Share your site!** 🚀

Your Rendr Media website will be live and accessible worldwide in minutes!
