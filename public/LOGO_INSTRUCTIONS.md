# 🎨 Logo Setup Instructions

## How to Add Your Logo

### Step 1: Prepare Your Logo File

**Recommended formats:**
- ✅ **PNG** (with transparent background) - Best for most cases
- ✅ **SVG** (vector) - Best for scalability
- ✅ **WebP** - Best for performance

**Recommended sizes:**
- Width: 150-200px
- Height: 40-50px
- Aspect ratio: Keep your original logo proportions

**File naming:**
- Use: `logo.png` or `logo.svg`
- Lowercase, no spaces

---

### Step 2: Add Logo to Project

1. **Save your logo file** as `logo.png` (or `logo.svg`)
2. **Place it in the `public` folder** of your project:
   ```
   public/
   └── logo.png  ← Put your logo here
   ```

3. **That's it!** The logo will automatically appear in:
   - ✅ Navbar (top left)
   - ✅ Footer (bottom left)

---

### Step 3: Adjust Logo Size (Optional)

If your logo is too big or too small, update these files:

#### Navbar Logo Size
File: `src/components/Navbar.tsx`

```tsx
<img 
  src="/logo.png" 
  alt="Rendr Media Logo" 
  className="h-10 md:h-12 w-auto"  // Change h-10 and h-12
/>
```

**Size options:**
- `h-8` = 32px (small)
- `h-10` = 40px (default)
- `h-12` = 48px (medium)
- `h-14` = 56px (large)
- `h-16` = 64px (extra large)

#### Footer Logo Size
File: `src/components/Footer.tsx`

```tsx
<img 
  src="/logo.png" 
  alt="Rendr Media Logo" 
  className="h-10 w-auto"  // Change h-10
/>
```

---

### Step 4: Using SVG Logo (Recommended)

If you have an SVG logo:

1. Save as `logo.svg` in `public` folder
2. Update both files to use `.svg`:
   ```tsx
   <img src="/logo.svg" alt="Rendr Media Logo" />
   ```

**Benefits of SVG:**
- ✅ Scales perfectly at any size
- ✅ Smaller file size
- ✅ Crisp on retina displays
- ✅ Can change colors with CSS

---

### Step 5: Dark/Light Logo Variants (Optional)

If you have different logos for dark/light backgrounds:

```tsx
{/* Navbar - Dark background */}
<img 
  src="/logo-light.png"  // Light colored logo
  alt="Rendr Media Logo" 
  className="h-10 md:h-12 w-auto"
/>

{/* Footer - Dark background */}
<img 
  src="/logo-light.png"  // Light colored logo
  alt="Rendr Media Logo" 
  className="h-10 w-auto"
/>
```

---

## 🎨 Logo Design Tips

### For Best Results:

1. **Transparent Background**
   - Use PNG with transparency
   - Or SVG with no background

2. **Horizontal Layout**
   - Works best in navbar
   - Typical ratio: 3:1 or 4:1 (width:height)

3. **High Contrast**
   - Logo should be visible on dark background
   - Use white or light colors
   - Or use your brand colors (orange, purple)

4. **Optimize File Size**
   - PNG: Use TinyPNG.com to compress
   - SVG: Use SVGOMG.com to optimize
   - Target: Under 50KB

---

## 🔧 Troubleshooting

### Logo Not Showing?

**Check these:**
1. ✅ File is in `public` folder (not `src`)
2. ✅ Filename matches exactly: `logo.png` or `logo.svg`
3. ✅ File path starts with `/` (e.g., `/logo.png`)
4. ✅ Restart dev server after adding file

### Logo Too Big/Small?

**Adjust the height:**
- Navbar: Change `h-10 md:h-12` to `h-8 md:h-10` (smaller)
- Navbar: Change `h-10 md:h-12` to `h-12 md:h-14` (larger)

### Logo Blurry?

**Solutions:**
1. Use higher resolution image (2x or 3x size)
2. Use SVG format instead
3. Ensure image is at least 200px wide

---

## 📁 Current Setup

**Logo location:** `public/logo.png`

**Used in:**
- `src/components/Navbar.tsx` (line ~30)
- `src/components/Footer.tsx` (line ~30)

**Current size:**
- Navbar: 40px mobile, 48px desktop
- Footer: 40px

---

## 🚀 Quick Start

```bash
# 1. Add your logo to public folder
cp /path/to/your/logo.png public/logo.png

# 2. Restart dev server
npm run dev

# 3. Check http://localhost:8080
```

**That's it!** Your logo will appear automatically.

---

## 💡 Need Help?

If you need to:
- Change logo size
- Use different logo for mobile/desktop
- Add logo animation
- Use text + logo combination

Just let me know and I'll help you customize it!
