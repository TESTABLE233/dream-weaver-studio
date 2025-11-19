# 🎨 Rendr Media Website Customization Guide

Complete guide to customize your website content, images, contact info, and more.

---

## 📝 Quick Reference - What to Edit Where

| Content Type | File Location | What You Can Change |
|--------------|---------------|-------------------|
| **Contact Info** | `src/components/Footer.tsx` | Phone, email, address |
| **Hero Text** | `src/pages/Home.tsx` | Main headline, tagline |
| **About Content** | `src/pages/About.tsx` | Company story, values, stats |
| **Services** | `src/pages/Services.tsx` | Service descriptions, features |
| **Portfolio** | `src/data/portfolio.ts` | Projects, images, descriptions |
| **Contact Form** | `src/pages/Contact.tsx` | Form fields, messages |
| **Images** | `public/` folder | Logo, favicon, portfolio images |

---

## 📞 1. Update Contact Information

### File: `src/components/Footer.tsx`

**What to change:**
- Phone number
- Email address
- Physical address
- Social media links

**How to edit:**

```tsx
// Find these lines and update with your info:

<span>123 Creative Street, Design City, DC 12345</span>
// Change to: Your actual address

<a href="mailto:hello@rendrmedia.com">
  hello@rendrmedia.com
</a>
// Change to: your@email.com

<a href="tel:+15551234567">
  +1 (555) 123-4567
</a>
// Change to: your phone number
```

**Example:**
```tsx
<span>Mumbai, Maharashtra, India</span>
<a href="mailto:contact@rendrmedia.com">contact@rendrmedia.com</a>
<a href="tel:+919876543210">+91 98765 43210</a>
```

---

## 🏠 2. Customize Home Page Content

### File: `src/pages/Home.tsx`

#### Hero Section
```tsx
// Main headline (around line 45)
<h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
  <span className="text-white">Passion</span>
  <br />
  <span className="text-gradient">Rendered</span>
  <br />
  <span className="text-white">For Your Brand</span>
</h1>

// Subheading (around line 55)
<p className="text-xl md:text-2xl text-[hsl(var(--rendr-gray))] max-w-3xl mx-auto">
  Bold branding. Striking visuals. Unforgettable experiences.
  <br />
  We turn creative visions into reality.
</p>
```

#### Services Preview
```tsx
// Update service descriptions (around line 100)
{
  icon: <Zap className="w-12 h-12" />,
  title: "Branding & Design",
  description: "Bold identities that capture attention and build recognition",
  color: "orange",
},
```

---

## 🏢 3. Update About Page

### File: `src/pages/About.tsx`

#### Company Story
```tsx
// Update your story (around line 25)
<p>
  Rendr Media was born from a simple belief: creativity should be bold, energetic, and unforgettable.
  We're not just another creative agency—we're your partners in making brands that stand out.
</p>
```

#### Company Stats
```tsx
// Update statistics (around line 85)
{ number: "200+", label: "Projects Completed" },
{ number: "50+", label: "Happy Clients" },
{ number: "15+", label: "Awards Won" },
{ number: "5+", label: "Years Experience" },
```

---

## 🛠️ 4. Customize Services

### File: `src/pages/Services.tsx`

#### Update Services List
```tsx
// Edit service offerings (around line 15)
{
  icon: <Palette className="w-12 h-12" />,
  title: "Branding & Identity",
  description: "Create a bold, memorable brand that stands out from the competition",
  features: [
    "Logo Design & Brand Guidelines",
    "Visual Identity Systems",
    "Brand Strategy & Positioning",
    "Packaging Design",
    "Brand Collateral",
  ],
  color: "orange",
},
```

#### Update Process Steps
```tsx
// Edit your process (around line 120)
{ step: "01", title: "Discovery", description: "Understanding your goals, audience, and vision" },
{ step: "02", title: "Strategy", description: "Crafting a creative approach tailored to your needs" },
```

---

## 📁 5. Add Your Portfolio Projects

### File: `src/data/portfolio.ts`

#### Add New Project
```tsx
{
  id: "your-project-slug",
  title: "Your Project Title",
  category: "Branding", // Options: Branding, Design, Photography, Videography, Social Media, UI/UX, Advertising
  description: "Brief project description",
  client: "Client Name",
  date: "2024-01", // YYYY-MM format
  coverImage: "/portfolio/your-project-cover.jpg", // Add image to public/portfolio/
  images: [
    "/portfolio/your-project-1.jpg",
    "/portfolio/your-project-2.jpg"
  ],
  tools: ["Photoshop", "Illustrator", "Figma"],
  challenge: "What problem did you solve?",
  solution: "How did you solve it?",
  results: [
    "Specific result 1",
    "Specific result 2",
    "Specific result 3"
  ],
}
```

---

## 🖼️ 6. Add Images

### Portfolio Images
1. **Create folder:** `public/portfolio/`
2. **Add images:** Save as `.jpg` or `.png`
3. **Recommended size:** 1200x800px
4. **File naming:** `project-name-1.jpg`, `project-name-2.jpg`

### Other Images
- **Logo:** `public/logo.png` (already done)
- **Favicon:** `public/favicon.ico` (already done)
- **Team photos:** `public/team/`
- **Client logos:** `public/clients/`

---

## 📧 7. Update Contact Form

### File: `src/pages/Contact.tsx`

#### Email Subject
```tsx
// Change email subject (around line 45)
subject: "New Project Enquiry from Rendr Media Website",
// Change to: "New Enquiry from [Your Company]"
```

#### Form Fields
```tsx
// Add/remove service types (around line 200)
<SelectItem value="branding">Branding & Identity</SelectItem>
<SelectItem value="design">Graphic Design</SelectItem>
// Add your services here
```

#### Success Message
```tsx
// Customize success message (around line 70)
toast.success("Thank you! We'll get back to you within 24 hours.", {
  description: "Your project enquiry has been received.",
});
```

---

## 🎨 8. Update Colors (Optional)

### File: `src/index.css`

```css
/* Change brand colors (around line 10) */
--rendr-orange: 35 85% 62%; /* Your primary color */
--rendr-purple: 262 89% 60%; /* Your secondary color */
--rendr-red: 356 78% 42%; /* Your accent color */
```

---

## 📱 9. Update Social Media Links

### File: `src/components/Footer.tsx`

```tsx
// Update social links (around line 45)
<a href="https://instagram.com/yourhandle" target="_blank">
<a href="https://linkedin.com/company/yourcompany" target="_blank">
```

---

## 🔧 10. Quick Customization Checklist

### Essential Updates:
- [ ] Contact info (phone, email, address)
- [ ] Company story in About page
- [ ] Service descriptions
- [ ] Portfolio projects (at least 3-5)
- [ ] Team information
- [ ] Social media links

### Content Updates:
- [ ] Hero headline and tagline
- [ ] Company statistics
- [ ] Service features and pricing
- [ ] Testimonials (if you have them)
- [ ] Process steps

### Images:
- [ ] Portfolio project images
- [ ] Team photos
- [ ] Client logos
- [ ] Service icons (optional)

---

## 🚀 11. Deploy Changes

After making changes:

```bash
# 1. Save all files
# 2. Commit changes
git add .
git commit -m "Update website content and images"
git push

# 3. Vercel auto-deploys!
# Check your live site in 1-2 minutes
```

---

## 📝 12. Content Writing Tips

### Headlines:
- Keep them bold and action-oriented
- Use your brand voice (energetic, creative)
- Include benefits, not just features

### Descriptions:
- Focus on client outcomes
- Use specific numbers when possible
- Keep paragraphs short (2-3 sentences)

### Portfolio:
- Tell a story: Challenge → Solution → Results
- Include specific metrics
- Use client testimonials if available

---

## 🎯 13. Common Customizations

### Change Company Name:
**Find and replace** "Rendr Media" with your company name in:
- `src/pages/Home.tsx`
- `src/pages/About.tsx`
- `src/components/Footer.tsx`
- `index.html` (page title)

### Add New Page:
1. Create `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

### Change Form Fields:
Edit `src/pages/Contact.tsx` to add/remove fields like:
- Budget ranges
- Service types
- Timeline options
- Additional questions

---

## 🔍 14. Testing Your Changes

### Local Testing:
```bash
npm run dev
# Visit http://localhost:8080
```

### Production Testing:
- Push changes to GitHub
- Wait 1-2 minutes for Vercel deployment
- Check your live site

---

## 💡 15. Pro Tips

### Images:
- Optimize images before uploading (use TinyPNG.com)
- Use consistent aspect ratios
- Add alt text for accessibility

### Content:
- Write for your target audience
- Use action words in CTAs
- Keep mobile users in mind

### SEO:
- Update page titles in each component
- Add meta descriptions
- Use descriptive image file names

---

## 📞 Need Help?

### Quick Edits:
- **Text changes:** Edit the relevant page file
- **Images:** Add to `public/` folder and update file paths
- **Contact info:** Update `Footer.tsx`

### Complex Changes:
- **New pages:** Follow the existing page structure
- **New components:** Copy existing component patterns
- **Styling:** Use existing Tailwind classes

---

**Start with the essentials (contact info, about content, portfolio) and deploy often!** 🚀

**Your live site:** https://rendr-media-5s6z7m7vj-rizans-projects-74b53c19.vercel.app