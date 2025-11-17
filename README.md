# 🎨 Rendr Media - Creative Agency Website

A bold, energetic creative agency website built with React, TypeScript, Vite, and Tailwind CSS. Features striking visuals, smooth animations, and a brand-aligned design system.

## ✨ Features

### Core Pages
- **Home** - Hero section with animated gradients, services preview, and portfolio teaser
- **Portfolio** - Filterable project gallery with 7 categories
- **Portfolio Detail** - Case study format with challenge, solution, tools, and results
- **Services** - 6 service offerings with detailed features and process timeline
- **About** - Company story, values, and statistics
- **Contact** - Multi-step enquiry form with progress indicator

### Design System
- **Brand Colors**:
  - Warm Orange (#F2B24C) - Primary actions and highlights
  - Vibrant Purple (#883DF5) - CTAs and accents
  - Deep Red (#C0151A) - Shadows and contrast
  - Off-Black (#141414) - Background
  
- **Typography**: Bold, black weight headings with gradient text effects
- **Animations**: Fade-in, scale, slide, float, and pulse animations
- **Shadows**: Custom glow effects matching brand colors

### Key Components
- Sticky navigation with scroll effects
- Multi-step contact form with validation
- Category filtering for portfolio
- Responsive mobile menu
- Brand-aligned footer with social links

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, or bun

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🌐 Deploy for Free

Deploy your site in 2 minutes:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to production
vercel --prod
```

**See [QUICK_DEPLOY.md](QUICK_DEPLOY.md) for detailed deployment instructions.**

### Deployment Options
- ⭐ **Vercel** (Recommended) - 2 minutes, automatic deployments
- **Netlify** - 3 minutes, form handling included
- **GitHub Pages** - 5 minutes, unlimited bandwidth
- **Cloudflare Pages** - 3 minutes, fastest CDN

All options are **100% free** with custom domain support!

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Navbar.tsx       # Navigation with scroll effects
│   └── Footer.tsx       # Brand-aligned footer
├── pages/
│   ├── Home.tsx         # Hero + services + portfolio preview
│   ├── Portfolio.tsx    # Filterable project grid
│   ├── PortfolioDetail.tsx  # Case study pages
│   ├── Services.tsx     # Service offerings + process
│   ├── About.tsx        # Company info + values
│   └── Contact.tsx      # Multi-step enquiry form
├── data/
│   └── portfolio.ts     # Portfolio items data
├── App.tsx              # Router setup
├── index.css            # Brand colors + utilities
└── main.tsx             # App entry point
```

## 🎨 Customization

### Brand Colors
Edit `src/index.css` to update the color scheme:
```css
--rendr-orange: 35 85% 62%;
--rendr-purple: 262 89% 60%;
--rendr-red: 356 78% 42%;
```

### Portfolio Items
Add/edit projects in `src/data/portfolio.ts`

### Services
Update service offerings in `src/pages/Services.tsx`

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Navigation
- **Lucide React** - Icons
- **Sonner** - Toast notifications

## 📱 Responsive Design

Fully responsive across:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🎯 Performance

- Optimized animations with CSS transforms
- Lazy loading for images
- Code splitting with React Router
- Minimal bundle size with Vite

## 📄 License

MIT License - feel free to use for your projects!

---

Built with ❤️ by Rendr Media
