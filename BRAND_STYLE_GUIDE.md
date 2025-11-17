# 🎨 Rendr Media Brand Style Guide

## Brand Personality
**Bold • Energetic • Creative • Youthful • Professional**

---

## 1. Color Palette

### Primary Colors

#### Warm Orange (Primary)
- **HEX**: `#F2B24C`
- **RGB**: `rgb(242, 178, 76)`
- **HSL**: `hsl(35, 85%, 62%)`
- **Usage**: Primary CTAs, highlights, hover states, category labels, icons
- **Accessibility**: WCAG AA compliant on dark backgrounds

#### Vibrant Purple (Accent 1)
- **HEX**: `#883DF5`
- **RGB**: `rgb(136, 61, 245)`
- **HSL**: `hsl(262, 89%, 60%)`
- **Usage**: Main CTAs, section titles, links, progress indicators
- **Accessibility**: WCAG AA compliant on dark backgrounds

#### Deep Red (Accent 2)
- **HEX**: `#C0151A`
- **RGB**: `rgb(192, 21, 26)`
- **HSL**: `hsl(356, 78%, 42%)`
- **Usage**: Shadows, borders, separators, warning states
- **Accessibility**: Use with caution on dark backgrounds

### Neutral Colors

#### Off-Black (Background)
- **HEX**: `#141414`
- **RGB**: `rgb(20, 20, 20)`
- **HSL**: `hsl(0, 0%, 8%)`
- **Usage**: Main background, dark sections

#### Dark Gray (Card Background)
- **HEX**: `#1F1F1F`
- **RGB**: `rgb(31, 31, 31)`
- **HSL**: `hsl(0, 0%, 12%)`
- **Usage**: Card backgrounds, elevated surfaces

#### Medium Gray (Borders)
- **HEX**: `#333333`
- **RGB**: `rgb(51, 51, 51)`
- **HSL**: `hsl(0, 0%, 20%)`
- **Usage**: Borders, dividers, subtle separators

#### Light Gray (Supporting Text)
- **HEX**: `#999999`
- **RGB**: `rgb(153, 153, 153)`
- **HSL**: `hsl(0, 0%, 60%)`
- **Usage**: Body text, descriptions, secondary information

#### Pure White (Primary Text)
- **HEX**: `#FFFFFF`
- **RGB**: `rgb(255, 255, 255)`
- **HSL**: `hsl(0, 0%, 100%)`
- **Usage**: Headings, primary text, high-contrast elements

### Gradient Combinations

#### Hero Gradient
```css
background: linear-gradient(135deg, #F2B24C 0%, #883DF5 50%, #C0151A 100%);
```
**Usage**: Hero backgrounds, major section dividers

#### Accent Gradient
```css
background: linear-gradient(90deg, #883DF5 0%, #F2B24C 100%);
```
**Usage**: Buttons, badges, text highlights

#### Subtle Gradient
```css
background: linear-gradient(180deg, #141414 0%, #1F1F1F 100%);
```
**Usage**: Section backgrounds, cards

#### Text Gradient
```css
background: linear-gradient(to right, #F2B24C, #883DF5, #C0151A);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```
**Usage**: Headings, brand name, emphasis text

---

## 2. Typography

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
             "Helvetica Neue", Arial, sans-serif;
```

### Type Scale

#### Display (Hero Headlines)
- **Size**: 72px / 4.5rem (Desktop), 48px / 3rem (Mobile)
- **Weight**: 900 (Black)
- **Line Height**: 1.1
- **Letter Spacing**: -0.02em
- **Usage**: Hero headlines, major page titles
```css
font-size: clamp(3rem, 8vw, 4.5rem);
font-weight: 900;
line-height: 1.1;
letter-spacing: -0.02em;
```

#### H1 (Page Titles)
- **Size**: 56px / 3.5rem (Desktop), 40px / 2.5rem (Mobile)
- **Weight**: 900 (Black)
- **Line Height**: 1.2
- **Letter Spacing**: -0.01em
```css
font-size: clamp(2.5rem, 6vw, 3.5rem);
font-weight: 900;
line-height: 1.2;
```

#### H2 (Section Titles)
- **Size**: 40px / 2.5rem (Desktop), 32px / 2rem (Mobile)
- **Weight**: 900 (Black)
- **Line Height**: 1.3
```css
font-size: clamp(2rem, 4vw, 2.5rem);
font-weight: 900;
line-height: 1.3;
```

#### H3 (Card Titles)
- **Size**: 24px / 1.5rem
- **Weight**: 700 (Bold)
- **Line Height**: 1.4
```css
font-size: 1.5rem;
font-weight: 700;
line-height: 1.4;
```

#### Body Large
- **Size**: 20px / 1.25rem
- **Weight**: 400 (Regular)
- **Line Height**: 1.6
- **Color**: #999999
```css
font-size: 1.25rem;
line-height: 1.6;
color: #999999;
```

#### Body Regular
- **Size**: 16px / 1rem
- **Weight**: 400 (Regular)
- **Line Height**: 1.6
- **Color**: #999999
```css
font-size: 1rem;
line-height: 1.6;
color: #999999;
```

#### Body Small
- **Size**: 14px / 0.875rem
- **Weight**: 400 (Regular)
- **Line Height**: 1.5
- **Color**: #999999
```css
font-size: 0.875rem;
line-height: 1.5;
color: #999999;
```

### Typography Pairing Rules
1. **Contrast is Key**: Always pair Black (900) headings with Regular (400) body
2. **Gradient Headlines**: Use text gradient on major headings for brand impact
3. **White for Emphasis**: Use pure white (#FFFFFF) for primary headings
4. **Gray for Body**: Use #999999 for all body text and descriptions
5. **Tracking**: Tighten letter-spacing on large headings (-0.02em to -0.01em)

---

## 3. Spacing System

### Base Unit: 4px

#### Spacing Scale
```css
--space-1: 4px;    /* 0.25rem */
--space-2: 8px;    /* 0.5rem */
--space-3: 12px;   /* 0.75rem */
--space-4: 16px;   /* 1rem */
--space-5: 20px;   /* 1.25rem */
--space-6: 24px;   /* 1.5rem */
--space-8: 32px;   /* 2rem */
--space-10: 40px;  /* 2.5rem */
--space-12: 48px;  /* 3rem */
--space-16: 64px;  /* 4rem */
--space-20: 80px;  /* 5rem */
--space-24: 96px;  /* 6rem */
--space-32: 128px; /* 8rem */
```

#### Component Spacing

**Cards**
- Padding: 32px (space-8)
- Gap between cards: 32px (space-8)
- Border radius: 16px

**Sections**
- Vertical padding: 64px (space-16) on mobile, 96px (space-24) on desktop
- Container max-width: 1280px
- Container padding: 16px (space-4) on mobile, 32px (space-8) on desktop

**Buttons**
- Padding: 12px 32px (space-3 space-8)
- Large buttons: 16px 48px (space-4 space-12)
- Gap between buttons: 16px (space-4)

**Typography**
- Heading margin-bottom: 24px (space-6)
- Paragraph margin-bottom: 16px (space-4)
- Section title margin-bottom: 64px (space-16)

---

## 4. Button Styles

### Primary Button (Purple)
```css
.btn-primary {
  background: #883DF5;
  color: #FFFFFF;
  font-weight: 700;
  padding: 12px 32px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(136, 61, 245, 0.4);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: rgba(136, 61, 245, 0.9);
  box-shadow: 0 6px 20px rgba(136, 61, 245, 0.6);
  transform: translateY(-2px);
}
```

### Secondary Button (Orange)
```css
.btn-secondary {
  background: #F2B24C;
  color: #141414;
  font-weight: 700;
  padding: 12px 32px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(242, 178, 76, 0.4);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(242, 178, 76, 0.9);
  box-shadow: 0 6px 20px rgba(242, 178, 76, 0.6);
  transform: translateY(-2px);
}
```

### Outline Button
```css
.btn-outline {
  background: transparent;
  color: #F2B24C;
  font-weight: 700;
  padding: 12px 32px;
  border: 2px solid #F2B24C;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn-outline:hover {
  background: #F2B24C;
  color: #141414;
  transform: translateY(-2px);
}
```

### Ghost Button
```css
.btn-ghost {
  background: transparent;
  color: #FFFFFF;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn-ghost:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #F2B24C;
}
```

### Large Button
```css
.btn-large {
  padding: 16px 48px;
  font-size: 18px;
  border-radius: 12px;
}
```

---

## 5. Shadow System

### Elevation Levels

#### Soft Shadow
```css
box-shadow: 0 2px 8px rgba(242, 178, 76, 0.1);
```
**Usage**: Subtle elevation, cards at rest

#### Medium Shadow
```css
box-shadow: 0 4px 16px rgba(136, 61, 245, 0.2);
```
**Usage**: Hover states, interactive elements

#### Strong Shadow
```css
box-shadow: 0 8px 32px rgba(192, 21, 26, 0.3);
```
**Usage**: Modals, dropdowns, important CTAs

#### Glow Effect (Orange)
```css
box-shadow: 0 0 20px rgba(242, 178, 76, 0.4);
```
**Usage**: Focus states, active elements

#### Glow Effect (Purple)
```css
box-shadow: 0 0 20px rgba(136, 61, 245, 0.4);
```
**Usage**: Primary CTAs, featured content

#### Glow Effect (Red)
```css
box-shadow: 0 0 20px rgba(192, 21, 26, 0.4);
```
**Usage**: Alerts, important notifications

#### Combined Glow
```css
box-shadow: 0 0 20px rgba(242, 178, 76, 0.4), 
            0 0 40px rgba(136, 61, 245, 0.2);
```
**Usage**: Hero elements, major CTAs

---

## 6. Border Radius System

```css
--radius-sm: 4px;   /* Small elements, badges */
--radius-md: 8px;   /* Buttons, inputs */
--radius-lg: 12px;  /* Cards, containers */
--radius-xl: 16px;  /* Large cards, sections */
--radius-2xl: 24px; /* Hero sections, modals */
--radius-full: 9999px; /* Pills, circular elements */
```

---

## 7. Animation Guidelines

### Timing Functions
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Duration Scale
```css
--duration-fast: 150ms;
--duration-normal: 300ms;
--duration-slow: 500ms;
--duration-slower: 800ms;
```

### Core Animations

#### Fade In
```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}
```

#### Scale In
```css
@keyframes scale-in {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-scale-in {
  animation: scale-in 0.4s ease-out;
}
```

#### Slide In (Right)
```css
@keyframes slide-in-right {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slide-in-right {
  animation: slide-in-right 0.5s ease-out;
}
```

#### Float
```css
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

#### Pulse
```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}
```

### Hover Transitions
```css
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-4px);
}

.hover-glow {
  transition: box-shadow 0.3s ease;
}

.hover-glow:hover {
  box-shadow: 0 0 20px rgba(242, 178, 76, 0.4);
}
```

---

## 8. Section Layouts

### Hero Section
```css
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #F2B24C 0%, #883DF5 50%, #C0151A 100%);
  position: relative;
  overflow: hidden;
}
```

### Content Section
```css
.content-section {
  padding: 96px 0;
  background: #141414;
}

@media (max-width: 768px) {
  .content-section {
    padding: 64px 0;
  }
}
```

### Alternating Sections
```css
.section-dark {
  background: #141414;
}

.section-darker {
  background: #1F1F1F;
}

.section-gradient {
  background: linear-gradient(180deg, #141414 0%, #1F1F1F 100%);
}

.section-accent {
  background: linear-gradient(
    to bottom right,
    rgba(136, 61, 245, 0.1),
    rgba(242, 178, 76, 0.1)
  );
}
```

---

## 9. Card Styles

### Standard Card
```css
.card {
  background: #1F1F1F;
  border: 1px solid #333333;
  border-radius: 16px;
  padding: 32px;
  transition: all 0.3s ease;
}

.card:hover {
  border-color: #F2B24C;
  box-shadow: 0 8px 32px rgba(242, 178, 76, 0.3);
  transform: translateY(-4px);
}
```

### Feature Card
```css
.feature-card {
  background: #1F1F1F;
  border: 1px solid #333333;
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: #883DF5;
  box-shadow: 0 8px 32px rgba(136, 61, 245, 0.3);
}

.feature-card .icon {
  color: #F2B24C;
  margin-bottom: 24px;
  transition: transform 0.3s ease;
}

.feature-card:hover .icon {
  transform: scale(1.1);
}
```

### Portfolio Card
```css
.portfolio-card {
  background: #1F1F1F;
  border: 1px solid #333333;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
}

.portfolio-card:hover {
  border-color: #F2B24C;
  box-shadow: 0 8px 32px rgba(242, 178, 76, 0.3);
}

.portfolio-card img {
  transition: transform 0.5s ease;
}

.portfolio-card:hover img {
  transform: scale(1.1);
}

.portfolio-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom right,
    rgba(242, 178, 76, 0.1),
    rgba(136, 61, 245, 0.1)
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.portfolio-card:hover::after {
  opacity: 1;
}
```

---

## 10. Form Elements

### Input Fields
```css
.input {
  background: #141414;
  border: 1px solid #333333;
  border-radius: 8px;
  padding: 12px 16px;
  color: #FFFFFF;
  font-size: 16px;
  transition: all 0.3s ease;
}

.input:focus {
  outline: none;
  border-color: #F2B24C;
  box-shadow: 0 0 0 3px rgba(242, 178, 76, 0.1);
}

.input::placeholder {
  color: #999999;
}
```

### Textarea
```css
.textarea {
  background: #141414;
  border: 1px solid #333333;
  border-radius: 8px;
  padding: 12px 16px;
  color: #FFFFFF;
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
}

.textarea:focus {
  outline: none;
  border-color: #F2B24C;
  box-shadow: 0 0 0 3px rgba(242, 178, 76, 0.1);
}
```

### Select Dropdown
```css
.select {
  background: #141414;
  border: 1px solid #333333;
  border-radius: 8px;
  padding: 12px 16px;
  color: #FFFFFF;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.select:focus {
  outline: none;
  border-color: #883DF5;
  box-shadow: 0 0 0 3px rgba(136, 61, 245, 0.1);
}
```

### Label
```css
.label {
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  display: block;
}
```

---

## 11. Badge & Tag Styles

### Category Badge
```css
.badge {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge-orange {
  background: rgba(242, 178, 76, 0.1);
  color: #F2B24C;
  border: 1px solid rgba(242, 178, 76, 0.3);
}

.badge-purple {
  background: rgba(136, 61, 245, 0.1);
  color: #883DF5;
  border: 1px solid rgba(136, 61, 245, 0.3);
}

.badge-red {
  background: rgba(192, 21, 26, 0.1);
  color: #C0151A;
  border: 1px solid rgba(192, 21, 26, 0.3);
}
```

---

## 12. Icon Guidelines

### Icon Sizes
- **Small**: 16px - Inline with text
- **Medium**: 24px - Standard UI elements
- **Large**: 32px - Feature highlights
- **XL**: 48px - Hero sections

### Icon Colors
- **Primary**: #F2B24C (Orange)
- **Secondary**: #883DF5 (Purple)
- **Accent**: #C0151A (Red)
- **Neutral**: #FFFFFF (White)

### Icon Usage
- Use Lucide React icon library
- Always pair with appropriate color from brand palette
- Add hover transitions for interactive icons
- Maintain consistent sizing within sections

---

## 13. Grid System

### Container
```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
}

@media (min-width: 768px) {
  .container {
    padding: 0 32px;
  }
}
```

### Grid Layouts
```css
/* 2 Column Grid */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;
}

@media (min-width: 768px) {
  .grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 3 Column Grid */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;
}

@media (min-width: 768px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 4 Column Grid */
.grid-4 {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 32px;
}

@media (min-width: 768px) {
  .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## 14. Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small devices */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

---

## 15. Accessibility Guidelines

### Color Contrast
- All text must meet WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- White text (#FFFFFF) on dark backgrounds (#141414) = 15.3:1 ✅
- Orange (#F2B24C) on dark backgrounds = 5.2:1 ✅
- Purple (#883DF5) on dark backgrounds = 4.8:1 ✅

### Focus States
```css
*:focus-visible {
  outline: 2px solid #F2B24C;
  outline-offset: 2px;
}
```

### Interactive Elements
- Minimum touch target: 44x44px
- Clear hover states with color/shadow changes
- Keyboard navigation support
- Screen reader friendly labels

---

## 16. Brand Voice & Messaging

### Tone
- **Bold**: Make strong statements, don't hedge
- **Energetic**: Use active voice, dynamic language
- **Creative**: Show personality, avoid corporate speak
- **Professional**: Maintain credibility, deliver value

### Example Headlines
✅ "Passion Rendered for Your Brand"
✅ "Bold Creativity That Demands Attention"
✅ "Transform Your Vision Into Reality"
✅ "Create Something Unforgettable"

❌ "We provide creative services"
❌ "Professional design solutions"
❌ "Quality work guaranteed"

---

## 17. Do's and Don'ts

### ✅ Do
- Use bold, black typography for impact
- Apply gradient text to major headings
- Maintain consistent spacing (4px base unit)
- Add smooth transitions to all interactive elements
- Use brand colors consistently
- Implement hover states with glow effects
- Keep animations subtle and purposeful

### ❌ Don't
- Use thin or light font weights for headings
- Mix too many colors outside the brand palette
- Create jarring or distracting animations
- Ignore mobile responsiveness
- Use low-contrast color combinations
- Overcomplicate layouts
- Forget accessibility standards

---

**Last Updated**: November 2024
**Version**: 1.0
**Maintained by**: Rendr Media Design Team
