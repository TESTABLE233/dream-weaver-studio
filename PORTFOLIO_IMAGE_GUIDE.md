# Portfolio Image Guide

A complete guide to adding and managing images for your portfolio projects.

---

## Quick Overview

Your portfolio uses two types of images:
1. **Cover Image** - The main thumbnail shown on the portfolio grid
2. **Gallery Images** - Multiple images shown on the project detail page

---

## Step-by-Step Guide

### Step 1: Prepare Your Images

**Recommended Specifications:**
- **Cover Images**: 1200x800px (3:2 ratio) or 1920x1080px (16:9 ratio)
- **Gallery Images**: 1920x1080px or higher
- **Format**: JPG (for photos) or PNG (for graphics with transparency)
- **File Size**: Optimize to under 500KB per image for faster loading
- **Naming**: Use descriptive, lowercase names with hyphens (e.g., `cultaway2025-stage-design.jpg`)

**Image Optimization Tips:**
- Use tools like TinyPNG, Squoosh, or Photoshop's "Save for Web"
- Maintain quality while reducing file size
- Keep aspect ratios consistent within each project

---

### Step 2: Add Images to the Project Folder

1. Navigate to the `public/portfolio/` folder in your project
2. Create a subfolder for each project (optional but recommended for organization):
   ```
   public/portfolio/
   ├── cultaway2025/
   │   ├── cover.jpg
   │   ├── stage-design.jpg
   │   ├── logo-showcase.jpg
   │   └── merchandise.jpg
   ├── dejavu2025/
   │   ├── cover.jpg
   │   └── ...
   ```

3. Or place images directly in `public/portfolio/`:
   ```
   public/portfolio/
   ├── cultaway2025-cover.jpg
   ├── cultaway2025-stage.jpg
   ├── dejavu2025-cover.jpg
   └── ...
   ```

---

### Step 3: Update the Portfolio Data File

Open `src/data/portfolio.ts` and locate the project you want to update.

**Example - Adding images to an existing project:**

```typescript
{
  id: "cultaway-2025",
  title: "Cult A Way 2025 – Complete Creative Direction",
  category: "Branding & Design",
  description: "From logo to stage design...",
  client: "SCT College of Engineering",
  date: "2025-10",
  
  // Update the cover image path
  coverImage: "/portfolio/cultaway2025/cover.jpg",
  
  // Add multiple gallery images
  images: [
    "/portfolio/cultaway2025/stage-design.jpg",
    "/portfolio/cultaway2025/logo-showcase.jpg",
    "/portfolio/cultaway2025/merchandise.jpg",
    "/portfolio/cultaway2025/installations.jpg",
    "/portfolio/cultaway2025/event-photos.jpg"
  ],
  
  tools: ["Adobe Illustrator", "Photoshop", "After Effects"],
  // ... rest of the project data
}
```

---

### Step 4: Add a New Project with Images

To add a completely new project:

```typescript
export const portfolioItems: PortfolioItem[] = [
  // ... existing projects ...
  
  {
    id: "new-project-2025",  // Unique ID (lowercase, use hyphens)
    title: "Your Project Title",
    category: "Branding",  // Must match one from portfolioCategories
    description: "Brief description of the project",
    client: "Client Name",
    date: "2025-12",  // Format: YYYY-MM
    
    // Cover image (shown in portfolio grid)
    coverImage: "/portfolio/new-project-cover.jpg",
    
    // Gallery images (shown on detail page)
    images: [
      "/portfolio/new-project-1.jpg",
      "/portfolio/new-project-2.jpg",
      "/portfolio/new-project-3.jpg",
      "/portfolio/new-project-4.jpg"
    ],
    
    tools: ["Tool 1", "Tool 2", "Tool 3"],
    challenge: "What was the main challenge?",
    solution: "How did you solve it?",
    results: [
      "Result 1 with metrics",
      "Result 2 with impact",
      "Result 3 with recognition"
    ],
  }
];
```

---

## Image Path Reference

All image paths start with `/portfolio/` because they're in the `public` folder.

**Path Structure:**
```
File location: public/portfolio/myimage.jpg
Code reference: /portfolio/myimage.jpg

File location: public/portfolio/project-name/image.jpg
Code reference: /portfolio/project-name/image.jpg
```

**Important:** The `/` at the start is required - it tells the app to look in the public folder.

---

## Categories Reference

Your project's `category` must match one of these:

```typescript
"All"           // Don't use this - it's for filtering
"Branding"
"Design"
"Photography"
"Videography"
"Social Media"
"UI/UX"
"Advertising"
```

You can also use combined categories like:
- "Branding & Design"
- "Event Production"
- "Media & Production"

---

## Common Issues & Solutions

### Issue: Images not showing up
**Solutions:**
- Check that the file path is correct (case-sensitive!)
- Ensure the image is in the `public/portfolio/` folder
- Verify the path starts with `/portfolio/`
- Clear browser cache and refresh

### Issue: Images loading slowly
**Solutions:**
- Optimize images to under 500KB
- Use JPG for photos, PNG only when transparency is needed
- Consider using WebP format for better compression

### Issue: Images look stretched or cropped
**Solutions:**
- Use consistent aspect ratios (16:9 or 3:2 recommended)
- Ensure cover images are at least 1200px wide
- Check that images aren't too small (minimum 800px width)

---

## Best Practices

1. **Organize by Project**: Create subfolders for each project to keep things tidy
2. **Use Descriptive Names**: `cultaway-stage-design.jpg` is better than `img1.jpg`
3. **Optimize First**: Always compress images before uploading
4. **Consistent Sizing**: Keep similar dimensions across projects for a professional look
5. **Show Variety**: Include different angles, close-ups, and context shots
6. **Quality Over Quantity**: 4-6 strong images are better than 10 mediocre ones

---

## Example Workflow

1. **Finish your project** and select your best photos/designs
2. **Edit and export** images at the recommended sizes
3. **Optimize** using TinyPNG or similar tool
4. **Rename** files with descriptive names
5. **Upload** to `public/portfolio/` or a project subfolder
6. **Update** `src/data/portfolio.ts` with the new paths
7. **Save** and check the result in your browser
8. **Test** on mobile to ensure images look good on all devices

---

## Quick Reference Commands

**Add images via command line (Windows):**
```cmd
:: Copy images to portfolio folder
copy "C:\path\to\your\images\*.jpg" "public\portfolio\"

:: Create a project subfolder
mkdir "public\portfolio\project-name"
copy "C:\path\to\your\images\*.jpg" "public\portfolio\project-name\"
```

**Check current portfolio images:**
```cmd
dir public\portfolio
```

---

## Need Help?

- Check existing projects in `src/data/portfolio.ts` for examples
- Ensure your dev server is running: `npm run dev`
- View your changes at `http://localhost:5173/portfolio`
- Images update automatically when you save the file

---

**Last Updated:** November 2025
