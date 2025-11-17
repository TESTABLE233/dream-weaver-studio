# ⚡ Quick Deploy - Rendr Media

Choose your platform and run the commands below. Your site will be live in minutes!

---

## 🚀 Option 1: Vercel (Recommended - 2 minutes)

### First Time Setup
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

**That's it!** Your site is live at `https://your-project.vercel.app`

### Future Deployments
```bash
# Just run this command
vercel --prod
```

---

## 🌐 Option 2: Netlify (3 minutes)

### First Time Setup
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Deploy to production
netlify deploy --prod
```

**Done!** Your site is live at `https://your-site.netlify.app`

### Future Deployments
```bash
netlify deploy --prod
```

---

## 📄 Option 3: GitHub Pages (5 minutes)

### First Time Setup

1. **Create GitHub repository**
   - Go to [github.com/new](https://github.com/new)
   - Name: `rendr-media`
   - Click "Create repository"

2. **Push your code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/rendr-media.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - Save

4. **Deploy**
   ```bash
   git push
   ```

**Live at:** `https://YOUR_USERNAME.github.io/rendr-media/`

### Future Deployments
```bash
git add .
git commit -m "Update site"
git push
```

---

## ☁️ Option 4: Cloudflare Pages (3 minutes)

### First Time Setup
```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy dist --project-name=rendr-media
```

**Live at:** `https://rendr-media.pages.dev`

### Future Deployments
```bash
npm run build
wrangler pages deploy dist --project-name=rendr-media
```

---

## 🎯 Which One Should I Choose?

### Choose Vercel if:
- ✅ You want the easiest setup
- ✅ You want automatic deployments from Git
- ✅ You want preview deployments for branches
- ✅ You're building a portfolio/agency site

### Choose Netlify if:
- ✅ You need form handling
- ✅ You want drag-and-drop deployment
- ✅ You need serverless functions

### Choose GitHub Pages if:
- ✅ You want unlimited bandwidth
- ✅ You're already using GitHub
- ✅ You want simple, free hosting

### Choose Cloudflare if:
- ✅ You expect high traffic
- ✅ You want the fastest global CDN
- ✅ You need unlimited bandwidth

---

## 🔥 Super Quick Deploy (Copy & Paste)

### Vercel (Fastest)
```bash
npm install -g vercel && vercel login && vercel --prod
```

### Netlify
```bash
npm install -g netlify-cli && netlify login && netlify init && netlify deploy --prod
```

---

## ✅ After Deployment Checklist

- [ ] Visit your live site
- [ ] Test all pages
- [ ] Check mobile view
- [ ] Test contact form
- [ ] Verify portfolio loads
- [ ] Share with friends! 🎉

---

## 🆘 Need Help?

### Common Issues

**"Command not found: vercel"**
```bash
# Solution: Install globally
npm install -g vercel
```

**"Permission denied"**
```bash
# Solution: Use sudo (Mac/Linux)
sudo npm install -g vercel

# Or use npx (no install needed)
npx vercel --prod
```

**"Build failed"**
```bash
# Solution: Test build locally first
npm run build

# If it works locally, try deploying again
```

---

## 📞 Support

- **Vercel:** [vercel.com/support](https://vercel.com/support)
- **Netlify:** [netlify.com/support](https://netlify.com/support)
- **GitHub:** [docs.github.com/pages](https://docs.github.com/pages)
- **Cloudflare:** [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)

---

## 🎉 You're Ready!

Pick your platform and run the commands. Your Rendr Media website will be live in minutes!

**Recommended:** Start with Vercel - it's the easiest and most powerful option for React apps.

```bash
npm install -g vercel
vercel login
vercel --prod
```

That's it! 🚀
