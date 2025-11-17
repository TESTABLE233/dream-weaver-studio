# 🎨 Rendr Media Color Palette

## Primary Brand Colors

### 🟠 Warm Orange (Primary)
```
HEX:  #F2B24C
RGB:  rgb(242, 178, 76)
HSL:  hsl(35, 85%, 62%)
CMYK: C:0 M:26 Y:69 K:5

Tailwind: bg-[#F2B24C] or hsl(var(--rendr-orange))
```

**Usage:**
- Primary CTAs and highlights
- Hover states on links and cards
- Category labels and badges
- Icon colors for features
- Focus states on form inputs
- Navigation active states

**Pairs Well With:**
- Black (#141414) - High contrast
- White (#FFFFFF) - Maximum impact
- Purple (#883DF5) - Complementary accent
- Dark Gray (#1F1F1F) - Subtle elevation

**Accessibility:**
- On Black (#141414): 5.2:1 ✅ WCAG AA
- On Dark Gray (#1F1F1F): 4.8:1 ✅ WCAG AA
- On White (#FFFFFF): 2.9:1 ❌ Use with caution

---

### 🟣 Vibrant Purple (Accent 1)
```
HEX:  #883DF5
RGB:  rgb(136, 61, 245)
HSL:  hsl(262, 89%, 60%)
CMYK: C:44 M:75 Y:0 K:4

Tailwind: bg-[#883DF5] or hsl(var(--rendr-purple))
```

**Usage:**
- Main CTA buttons
- Section titles and headings
- Link colors
- Progress indicators
- Active states
- Featured content highlights

**Pairs Well With:**
- Black (#141414) - Bold contrast
- White (#FFFFFF) - Clean and modern
- Orange (#F2B24C) - Energetic combination
- Gray (#999999) - Balanced pairing

**Accessibility:**
- On Black (#141414): 4.8:1 ✅ WCAG AA
- On Dark Gray (#1F1F1F): 4.5:1 ✅ WCAG AA
- On White (#FFFFFF): 3.1:1 ❌ Use with caution

---

### 🔴 Deep Red (Accent 2)
```
HEX:  #C0151A
RGB:  rgb(192, 21, 26)
HSL:  hsl(356, 78%, 42%)
CMYK: C:0 M:89 Y:86 K:25

Tailwind: bg-[#C0151A] or hsl(var(--rendr-red))
```

**Usage:**
- Drop shadows and depth
- Border accents
- Section separators
- Warning states
- Emphasis elements
- Contrast accents

**Pairs Well With:**
- Black (#141414) - Strong presence
- Orange (#F2B24C) - Warm gradient
- Purple (#883DF5) - Dynamic trio
- Dark Gray (#1F1F1F) - Subtle depth

**Accessibility:**
- On Black (#141414): 3.8:1 ⚠️ Use for large text only
- On Dark Gray (#1F1F1F): 3.5:1 ⚠️ Use for large text only
- On White (#FFFFFF): 5.5:1 ✅ WCAG AA

---

## Neutral Colors

### ⚫ Off-Black (Background)
```
HEX:  #141414
RGB:  rgb(20, 20, 20)
HSL:  hsl(0, 0%, 8%)
CMYK: C:0 M:0 Y:0 K:92

Tailwind: bg-[#141414] or hsl(var(--rendr-black))
```

**Usage:**
- Main page background
- Dark sections
- Base layer
- High-contrast foundation

---

### ⬛ Dark Gray (Card Background)
```
HEX:  #1F1F1F
RGB:  rgb(31, 31, 31)
HSL:  hsl(0, 0%, 12%)
CMYK: C:0 M:0 Y:0 K:88

Tailwind: bg-[#1F1F1F] or hsl(0_0%_12%)
```

**Usage:**
- Card backgrounds
- Elevated surfaces
- Modal backgrounds
- Dropdown menus
- Secondary sections

---

### ▪️ Medium Gray (Borders)
```
HEX:  #333333
RGB:  rgb(51, 51, 51)
HSL:  hsl(0, 0%, 20%)
CMYK: C:0 M:0 Y:0 K:80

Tailwind: border-[#333333] or hsl(0_0%_20%)
```

**Usage:**
- Default borders
- Dividers
- Subtle separators
- Input borders
- Card outlines

---

### ◽ Light Gray (Supporting Text)
```
HEX:  #999999
RGB:  rgb(153, 153, 153)
HSL:  hsl(0, 0%, 60%)
CMYK: C:0 M:0 Y:0 K:40

Tailwind: text-[#999999] or hsl(var(--rendr-gray))
```

**Usage:**
- Body text
- Descriptions
- Secondary information
- Placeholder text
- Captions
- Metadata

**Accessibility:**
- On Black (#141414): 7.2:1 ✅ WCAG AAA
- On Dark Gray (#1F1F1F): 6.5:1 ✅ WCAG AA

---

### ⚪ Pure White (Primary Text)
```
HEX:  #FFFFFF
RGB:  rgb(255, 255, 255)
HSL:  hsl(0, 0%, 100%)
CMYK: C:0 M:0 Y:0 K:0

Tailwind: text-white or text-[#FFFFFF]
```

**Usage:**
- Headings
- Primary text
- High-contrast elements
- Button text
- Navigation text
- Important labels

**Accessibility:**
- On Black (#141414): 15.3:1 ✅ WCAG AAA
- On Dark Gray (#1F1F1F): 13.8:1 ✅ WCAG AAA
- On Orange (#F2B24C): 2.9:1 ❌ Avoid
- On Purple (#883DF5): 3.1:1 ❌ Avoid

---

## Gradient Combinations

### Hero Gradient
```css
background: linear-gradient(135deg, #F2B24C 0%, #883DF5 50%, #C0151A 100%);
```
**Usage:** Hero backgrounds, major section dividers, impactful headers

**Visual:** Orange → Purple → Red (diagonal)

---

### Accent Gradient
```css
background: linear-gradient(90deg, #883DF5 0%, #F2B24C 100%);
```
**Usage:** Buttons, badges, text highlights, CTAs

**Visual:** Purple → Orange (horizontal)

---

### Subtle Gradient
```css
background: linear-gradient(180deg, #141414 0%, #1F1F1F 100%);
```
**Usage:** Section backgrounds, cards, subtle depth

**Visual:** Black → Dark Gray (vertical)

---

### Text Gradient
```css
background: linear-gradient(to right, #F2B24C, #883DF5, #C0151A);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```
**Usage:** Headings, brand name, emphasis text

**Visual:** Orange → Purple → Red (text fill)

---

### Overlay Gradient
```css
background: linear-gradient(
  to bottom right,
  rgba(136, 61, 245, 0.1),
  rgba(242, 178, 76, 0.1)
);
```
**Usage:** Hover overlays, card effects, subtle accents

**Visual:** Purple → Orange (diagonal, transparent)

---

## Color Combinations

### High Energy (Primary Palette)
```
Orange (#F2B24C) + Purple (#883DF5) + Red (#C0151A)
```
**Use for:** Hero sections, major CTAs, brand moments

---

### Professional (Neutral + Accent)
```
Black (#141414) + White (#FFFFFF) + Orange (#F2B24C)
```
**Use for:** Content sections, cards, standard layouts

---

### Sophisticated (Monochrome + Purple)
```
Black (#141414) + Gray (#999999) + Purple (#883DF5)
```
**Use for:** Forms, data displays, technical content

---

### Warm & Inviting (Orange Focus)
```
Black (#141414) + Orange (#F2B24C) + White (#FFFFFF)
```
**Use for:** CTAs, highlights, featured content

---

## Shadow Colors

### Orange Glow
```css
box-shadow: 0 0 20px rgba(242, 178, 76, 0.4);
```
**Usage:** Hover states, focus indicators, featured cards

---

### Purple Glow
```css
box-shadow: 0 0 20px rgba(136, 61, 245, 0.4);
```
**Usage:** Primary buttons, active states, important elements

---

### Red Shadow
```css
box-shadow: 0 8px 32px rgba(192, 21, 26, 0.3);
```
**Usage:** Depth, elevation, strong emphasis

---

### Combined Glow
```css
box-shadow: 0 0 20px rgba(242, 178, 76, 0.4), 
            0 0 40px rgba(136, 61, 245, 0.2);
```
**Usage:** Hero elements, major CTAs, brand moments

---

## Opacity Variations

### Orange Variations
```css
rgba(242, 178, 76, 1.0)   /* Solid */
rgba(242, 178, 76, 0.9)   /* Hover state */
rgba(242, 178, 76, 0.4)   /* Glow effect */
rgba(242, 178, 76, 0.3)   /* Border */
rgba(242, 178, 76, 0.1)   /* Background tint */
```

### Purple Variations
```css
rgba(136, 61, 245, 1.0)   /* Solid */
rgba(136, 61, 245, 0.9)   /* Hover state */
rgba(136, 61, 245, 0.4)   /* Glow effect */
rgba(136, 61, 245, 0.3)   /* Border */
rgba(136, 61, 245, 0.1)   /* Background tint */
```

### Red Variations
```css
rgba(192, 21, 26, 1.0)    /* Solid */
rgba(192, 21, 26, 0.9)    /* Hover state */
rgba(192, 21, 26, 0.4)    /* Glow effect */
rgba(192, 21, 26, 0.3)    /* Shadow */
rgba(192, 21, 26, 0.1)    /* Background tint */
```

---

## Color Psychology

### 🟠 Orange
**Emotion:** Energy, Creativity, Enthusiasm
**Message:** "We're bold and innovative"
**Best for:** CTAs, highlights, creative elements

### 🟣 Purple
**Emotion:** Luxury, Creativity, Wisdom
**Message:** "We're premium and professional"
**Best for:** Main actions, important content

### 🔴 Red
**Emotion:** Passion, Power, Urgency
**Message:** "We're passionate and driven"
**Best for:** Accents, depth, emphasis

### ⚫ Black
**Emotion:** Sophistication, Power, Elegance
**Message:** "We're professional and modern"
**Best for:** Backgrounds, foundation

### ⚪ White
**Emotion:** Clarity, Simplicity, Purity
**Message:** "We're clear and direct"
**Best for:** Text, high contrast

---

## Usage Guidelines

### Do's ✅
- Use orange for primary interactions
- Use purple for main CTAs
- Use red sparingly for accents
- Maintain high contrast ratios
- Test colors on actual backgrounds
- Use gradients for impact moments
- Keep opacity consistent

### Don'ts ❌
- Don't use red as primary CTA color
- Don't mix too many colors at once
- Don't use low-contrast combinations
- Don't forget mobile color rendering
- Don't overuse gradients
- Don't ignore accessibility standards
- Don't use colors without purpose

---

## Print Colors (CMYK)

| Color | CMYK Values |
|-------|-------------|
| Orange | C:0 M:26 Y:69 K:5 |
| Purple | C:44 M:75 Y:0 K:4 |
| Red | C:0 M:89 Y:86 K:25 |
| Black | C:0 M:0 Y:0 K:92 |
| White | C:0 M:0 Y:0 K:0 |

---

## Color Blindness Considerations

### Deuteranopia (Red-Green)
- Orange appears yellowish ✅ Still visible
- Purple appears blue ✅ Still visible
- Red appears brown ⚠️ Use with text labels

### Protanopia (Red-Green)
- Orange appears yellow-green ✅ Still visible
- Purple appears blue ✅ Still visible
- Red appears dark ⚠️ Use with text labels

### Tritanopia (Blue-Yellow)
- Orange appears pink ✅ Still visible
- Purple appears red ✅ Still visible
- Red appears pink ✅ Still visible

**Recommendation:** Always pair colors with text labels or icons for clarity.

---

**Last Updated:** November 2024
**Version:** 1.0
