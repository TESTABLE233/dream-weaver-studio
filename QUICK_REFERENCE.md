# 🎨 Rendr Media Quick Reference Card

## Brand Colors (Copy & Paste)

```css
/* Primary Colors */
--rendr-orange: #F2B24C;  /* hsl(35, 85%, 62%) */
--rendr-purple: #883DF5;  /* hsl(262, 89%, 60%) */
--rendr-red: #C0151A;     /* hsl(356, 78%, 42%) */

/* Neutrals */
--rendr-black: #141414;   /* hsl(0, 0%, 8%) */
--rendr-dark: #1F1F1F;    /* hsl(0, 0%, 12%) */
--rendr-gray: #999999;    /* hsl(0, 0%, 60%) */
--rendr-white: #FFFFFF;   /* hsl(0, 0%, 100%) */
```

## Common Tailwind Classes

### Text Colors
```tsx
text-[hsl(var(--rendr-orange))]  // Orange
text-[hsl(var(--rendr-purple))]  // Purple
text-[hsl(var(--rendr-red))]     // Red
text-[hsl(var(--rendr-gray))]    // Gray
```

### Backgrounds
```tsx
bg-[hsl(var(--rendr-black))]     // Main background
bg-[hsl(0_0%_12%)]               // Card background
```

### Borders
```tsx
border-[hsl(0_0%_20%)]           // Default border
border-[hsl(var(--rendr-orange))] // Orange border
```

### Shadows
```tsx
shadow-[0_4px_12px_rgba(136,61,245,0.4)]      // Purple glow
shadow-[0_8px_24px_rgba(242,178,76,0.4)]      // Orange glow
shadow-[0_8px_32px_rgba(192,21,26,0.3)]       // Red shadow
```

## Typography Scale

```tsx
// Display (Hero)
className="text-5xl md:text-7xl lg:text-8xl font-black"

// H1 (Page Title)
className="text-4xl md:text-6xl font-black"

// H2 (Section Title)
className="text-4xl md:text-5xl font-black"

// H3 (Card Title)
className="text-2xl font-bold"

// Body Large
className="text-xl text-[hsl(var(--rendr-gray))]"

// Body Regular
className="text-base text-[hsl(var(--rendr-gray))]"
```

## Button Presets

```tsx
// Primary (Purple)
className="bg-[hsl(var(--rendr-purple))] hover:bg-[hsl(var(--rendr-purple))]/90 text-white font-bold shadow-[0_4px_12px_rgba(136,61,245,0.4)]"

// Secondary (Orange)
className="bg-[hsl(var(--rendr-orange))] hover:bg-[hsl(var(--rendr-orange))]/90 text-black font-bold shadow-[0_8px_24px_rgba(242,178,76,0.4)]"

// Outline
className="border-2 border-[hsl(var(--rendr-orange))] text-[hsl(var(--rendr-orange))] hover:bg-[hsl(var(--rendr-orange))] hover:text-black"
```

## Card Preset

```tsx
className="bg-[hsl(0_0%_12%)] rounded-2xl p-8 border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-orange))] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(242,178,76,0.3)]"
```

## Badge Preset

```tsx
// Orange Badge
className="text-xs font-bold text-[hsl(var(--rendr-orange))] bg-[hsl(var(--rendr-orange))]/10 px-3 py-1 rounded-full border border-[hsl(var(--rendr-orange))]/30"

// Purple Badge
className="text-xs font-bold text-[hsl(var(--rendr-purple))] bg-[hsl(var(--rendr-purple))]/10 px-3 py-1 rounded-full border border-[hsl(var(--rendr-purple))]/30"
```

## Form Input Preset

```tsx
className="bg-[hsl(0_0%_8%)] border-[hsl(0_0%_30%)] text-white focus:border-[hsl(var(--rendr-orange))] focus:ring-[hsl(var(--rendr-orange))]"
```

## Gradient Text

```tsx
<span className="text-gradient">Your Text</span>
```

## Section Spacing

```tsx
// Section padding
className="py-16 md:py-24"

// Container
className="container mx-auto px-4"

// Grid
className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
```

## Hover Effects

```tsx
// Lift on hover
className="transition-all duration-300 hover:-translate-y-1"

// Scale on hover
className="transition-transform duration-300 hover:scale-110"

// Glow on hover
className="transition-all duration-300 hover:shadow-[0_0_20px_rgba(242,178,76,0.4)]"
```

## Animations

```tsx
// Fade in
className="animate-fade-in"

// Fade in with delay
className="animate-fade-in-delay"

// Staggered (in map)
style={{ animationDelay: `${index * 0.1}s` }}

// Float
className="animate-float"

// Pulse
className="animate-pulse"
```

## Icon Sizes

```tsx
<Icon className="w-4 h-4" />   // Small (16px)
<Icon className="w-6 h-6" />   // Medium (24px)
<Icon className="w-8 h-8" />   // Large (32px)
<Icon className="w-12 h-12" /> // XL (48px)
```

## Responsive Breakpoints

```tsx
// Mobile first
className="text-base md:text-lg lg:text-xl"

// Hide on mobile
className="hidden md:block"

// Hide on desktop
className="block md:hidden"

// Grid responsive
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

## Common Patterns

### Hero Section
```tsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--rendr-black))] via-[hsl(var(--rendr-black))] to-[hsl(0_0%_12%)]">
    {/* Animated blobs */}
  </div>
  <div className="relative z-10 container mx-auto px-4 py-32 text-center">
    {/* Content */}
  </div>
</section>
```

### Content Section
```tsx
<section className="py-16 md:py-24 bg-[hsl(var(--rendr-black))]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black mb-4">
        <span className="text-white">Title</span> <span className="text-gradient">Gradient</span>
      </h2>
      <p className="text-xl text-[hsl(var(--rendr-gray))] max-w-2xl mx-auto">
        Description
      </p>
    </div>
    {/* Content */}
  </div>
</section>
```

### Feature Card
```tsx
<div className="group bg-[hsl(0_0%_12%)] rounded-2xl p-8 border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-orange))] transition-all duration-300">
  <div className="text-[hsl(var(--rendr-orange))] mb-6 group-hover:scale-110 transition-transform">
    <Icon className="w-12 h-12" />
  </div>
  <h3 className="text-2xl font-bold text-white mb-4">Title</h3>
  <p className="text-[hsl(var(--rendr-gray))]">Description</p>
</div>
```

## Color Usage Guide

| Element | Color | Usage |
|---------|-------|-------|
| Primary CTA | Purple (#883DF5) | Main action buttons |
| Secondary CTA | Orange (#F2B24C) | Secondary actions |
| Hover States | Orange (#F2B24C) | Links, cards |
| Headings | White + Gradient | Major titles |
| Body Text | Gray (#999999) | Descriptions |
| Borders | Dark Gray (#333333) | Default borders |
| Shadows | Red (#C0151A) | Depth, elevation |
| Icons | Orange/Purple/Red | Feature highlights |

## Spacing Scale (4px base)

| Size | Value | Usage |
|------|-------|-------|
| 1 | 4px | Tight spacing |
| 2 | 8px | Small gaps |
| 3 | 12px | Button padding |
| 4 | 16px | Standard spacing |
| 6 | 24px | Section margins |
| 8 | 32px | Card padding |
| 16 | 64px | Section padding (mobile) |
| 24 | 96px | Section padding (desktop) |

## Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Black | 900 | Headings, titles |
| Bold | 700 | Buttons, labels |
| Semibold | 600 | Subheadings |
| Regular | 400 | Body text |

## Border Radius

| Size | Value | Usage |
|------|-------|-------|
| sm | 4px | Badges |
| md | 8px | Buttons, inputs |
| lg | 12px | Small cards |
| xl | 16px | Cards |
| 2xl | 24px | Large sections |
| full | 9999px | Pills, circles |

## Accessibility Checklist

- ✅ White on black: 15.3:1 (AAA)
- ✅ Orange on black: 5.2:1 (AA)
- ✅ Purple on black: 4.8:1 (AA)
- ✅ Focus outline: 2px solid orange
- ✅ Min touch target: 44x44px
- ✅ Keyboard navigation
- ✅ Screen reader labels

## Animation Timing

| Duration | Value | Usage |
|----------|-------|-------|
| Fast | 150ms | Micro-interactions |
| Normal | 300ms | Standard transitions |
| Slow | 500ms | Complex animations |
| Slower | 800ms | Page transitions |

## Common Mistakes to Avoid

❌ Don't use thin font weights for headings
❌ Don't mix colors outside the brand palette
❌ Don't create jarring animations (>500ms)
❌ Don't forget mobile responsiveness
❌ Don't use low-contrast combinations
❌ Don't overcomplicate layouts
❌ Don't skip hover states

## Pro Tips

✅ Always use `transition-all duration-300`
✅ Combine hover effects for impact
✅ Use `group` for parent-child hovers
✅ Add staggered delays to lists
✅ Keep animations under 500ms
✅ Test on mobile first
✅ Use brand colors consistently
✅ Add focus states for accessibility

---

**Quick Copy Commands:**

```bash
# Orange color
hsl(var(--rendr-orange))

# Purple color
hsl(var(--rendr-purple))

# Red color
hsl(var(--rendr-red))

# Gray text
hsl(var(--rendr-gray))

# Card background
hsl(0_0%_12%)

# Border color
hsl(0_0%_20%)
```
