# 🚀 Quick Customization Example

Here's how to update your contact information in 5 minutes:

---

## 📞 Update Contact Info

### File: `src/components/Footer.tsx`

**Current (lines 92-104):**
```tsx
<span>123 Creative Street, Design City, DC 12345</span>

<a href="mailto:hello@rendrmedia.com">
  hello@rendrmedia.com
</a>

<a href="tel:+15551234567">
  +1 (555) 123-4567
</a>
```

**Change to your info:**
```tsx
<span>Your Address, Your City, Your State</span>

<a href="mailto:your@email.com">
  your@email.com
</a>

<a href="tel:+919876543210">
  +91 98765 43210
</a>
```

---

## 🏠 Update Hero Text

### File: `src/pages/Home.tsx`

**Current (around line 45):**
```tsx
<h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
  <span className="text-white">Passion</span>
  <br />
  <span className="text-gradient">Rendered</span>
  <br />
  <span className="text-white">For Your Brand</span>
</h1>
```

**Change to:**
```tsx
<h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
  <span className="text-white">Your</span>
  <br />
  <span className="text-gradient">Creative</span>
  <br />
  <span className="text-white">Partner</span>
</h1>
```

---

## 📊 Update Company Stats

### File: `src/pages/About.tsx`

**Current (around line 85):**
```tsx
{ number: "200+", label: "Projects Completed" },
{ number: "50+", label: "Happy Clients" },
{ number: "15+", label: "Awards Won" },
{ number: "5+", label: "Years Experience" },
```

**Change to your stats:**
```tsx
{ number: "100+", label: "Projects Completed" },
{ number: "25+", label: "Happy Clients" },
{ number: "3+", label: "Years Experience" },
{ number: "10+", label: "Team Members" },
```

---

## 🖼️ Add Portfolio Project

### File: `src/data/portfolio.ts`

**Add your project to the array:**
```tsx
{
  id: "my-awesome-project",
  title: "Brand Identity for Tech Startup",
  category: "Branding",
  description: "Complete brand identity design for innovative AI company",
  client: "TechCorp Inc",
  date: "2024-01",
  coverImage: "/portfolio/techcorp-cover.jpg", // Add this image to public/portfolio/
  images: [
    "/portfolio/techcorp-1.jpg",
    "/portfolio/techcorp-2.jpg"
  ],
  tools: ["Illustrator", "Photoshop", "Figma"],
  challenge: "Create a modern, trustworthy brand for AI startup",
  solution: "Developed clean, futuristic visual identity with bold typography",
  results: [
    "40% increase in brand recognition",
    "Featured in TechCrunch",
    "Successful Series A funding"
  ],
},
```

---

## 🚀 Deploy Changes

```bash
# 1. Save all files
# 2. Commit and push
git add .
git commit -m "Update contact info and content"
git push

# 3. Check your live site in 2 minutes!
```

---

## 📁 File Locations Quick Reference

| What to Change | File |
|----------------|------|
| **Contact Info** | `src/components/Footer.tsx` |
| **Hero Text** | `src/pages/Home.tsx` |
| **About Story** | `src/pages/About.tsx` |
| **Services** | `src/pages/Services.tsx` |
| **Portfolio** | `src/data/portfolio.ts` |
| **Images** | `public/` folder |

---

**Start with contact info and hero text - these make the biggest impact!** 🎯

**Your live site:** https://rendr-media-5s6z7m7vj-rizans-projects-74b53c19.vercel.app