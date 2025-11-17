# Rendr Media Component Examples

Quick reference for implementing brand-aligned components.

---

## Buttons

### Primary Button (Purple CTA)
```tsx
<Button className="bg-[hsl(var(--rendr-purple))] hover:bg-[hsl(var(--rendr-purple))]/90 text-white font-bold shadow-[0_4px_12px_rgba(136,61,245,0.4)] hover:shadow-[0_6px_20px_rgba(136,61,245,0.6)] transition-all duration-300">
  Start Your Project
</Button>
```

### Secondary Button (Orange)
```tsx
<Button className="bg-[hsl(var(--rendr-orange))] hover:bg-[hsl(var(--rendr-orange))]/90 text-black font-bold shadow-[0_8px_24px_rgba(242,178,76,0.4)]">
  View Portfolio
</Button>
```

### Outline Button
```tsx
<Button 
  variant="outline"
  className="border-2 border-[hsl(var(--rendr-orange))] text-[hsl(var(--rendr-orange))] hover:bg-[hsl(var(--rendr-orange))] hover:text-black font-bold transition-all duration-300"
>
  Learn More
</Button>
```

---

## Headings

### Hero Headline with Gradient
```tsx
<h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
  <span className="text-white">Passion</span>
  <br />
  <span className="text-gradient">Rendered</span>
  <br />
  <span className="text-white">For Your Brand</span>
</h1>
```

### Section Title
```tsx
<h2 className="text-4xl md:text-5xl font-black mb-4">
  <span className="text-white">Our</span> <span className="text-gradient">Services</span>
</h2>
```

### Card Title
```tsx
<h3 className="text-2xl font-bold text-white mb-4">
  Branding & Identity
</h3>
```

---

## Cards

### Standard Card with Hover Effect
```tsx
<div className="group relative bg-[hsl(0_0%_12%)] rounded-2xl p-8 border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-orange))] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(242,178,76,0.3)]">
  {/* Icon */}
  <div className="text-[hsl(var(--rendr-orange))] mb-6 group-hover:scale-110 transition-transform duration-300">
    <Zap className="w-12 h-12" />
  </div>
  
  {/* Title */}
  <h3 className="text-2xl font-bold text-white mb-4">
    Bold Creativity
  </h3>
  
  {/* Description */}
  <p className="text-[hsl(var(--rendr-gray))]">
    We push boundaries and create work that demands attention
  </p>
</div>
```

### Portfolio Card
```tsx
<Link to="/portfolio/project-id" className="group">
  <div className="relative overflow-hidden rounded-2xl bg-[hsl(0_0%_12%)] border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-orange))] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(242,178,76,0.3)]">
    {/* Image */}
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src="/image.jpg"
        alt="Project"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    
    {/* Content */}
    <div className="p-6">
      <span className="text-xs font-bold text-[hsl(var(--rendr-purple))] bg-[hsl(var(--rendr-purple))]/10 px-3 py-1 rounded-full border border-[hsl(var(--rendr-purple))]/30">
        Branding
      </span>
      <h3 className="text-2xl font-bold text-white mt-3 mb-2 group-hover:text-[hsl(var(--rendr-orange))] transition-colors">
        Project Title
      </h3>
      <p className="text-[hsl(var(--rendr-gray))]">
        Project description goes here
      </p>
    </div>
  </div>
</Link>
```

---

## Badges

### Category Badge (Orange)
```tsx
<span className="text-xs font-bold text-[hsl(var(--rendr-orange))] bg-[hsl(var(--rendr-orange))]/10 px-3 py-1 rounded-full border border-[hsl(var(--rendr-orange))]/30">
  Branding
</span>
```

### Category Badge (Purple)
```tsx
<span className="text-xs font-bold text-[hsl(var(--rendr-purple))] bg-[hsl(var(--rendr-purple))]/10 px-3 py-1 rounded-full border border-[hsl(var(--rendr-purple))]/30">
  Design
</span>
```

### Status Badge
```tsx
<div className="inline-flex items-center space-x-2 bg-[hsl(var(--rendr-purple))]/20 border border-[hsl(var(--rendr-purple))]/40 rounded-full px-6 py-2 backdrop-blur-sm">
  <Sparkles className="w-4 h-4 text-[hsl(var(--rendr-purple))]" />
  <span className="text-sm font-medium text-white">Featured</span>
</div>
```

---

## Form Elements

### Input Field
```tsx
<div>
  <Label htmlFor="name" className="text-white">Name *</Label>
  <Input
    id="name"
    className="bg-[hsl(0_0%_8%)] border-[hsl(0_0%_30%)] text-white focus:border-[hsl(var(--rendr-orange))] focus:ring-[hsl(var(--rendr-orange))]"
    required
  />
</div>
```

### Textarea
```tsx
<div>
  <Label htmlFor="message" className="text-white">Message</Label>
  <Textarea
    id="message"
    rows={6}
    placeholder="Tell us about your project..."
    className="bg-[hsl(0_0%_8%)] border-[hsl(0_0%_30%)] text-white focus:border-[hsl(var(--rendr-orange))] focus:ring-[hsl(var(--rendr-orange))]"
  />
</div>
```

### Select Dropdown
```tsx
<div>
  <Label htmlFor="service" className="text-white">Service Type *</Label>
  <Select>
    <SelectTrigger className="bg-[hsl(0_0%_8%)] border-[hsl(0_0%_30%)] text-white">
      <SelectValue placeholder="Select a service" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="branding">Branding & Identity</SelectItem>
      <SelectItem value="design">Graphic Design</SelectItem>
      <SelectItem value="photography">Photography</SelectItem>
    </SelectContent>
  </Select>
</div>
```

---

## Sections

### Hero Section with Animated Background
```tsx
<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Animated Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--rendr-black))] via-[hsl(var(--rendr-black))] to-[hsl(0_0%_12%)]">
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--rendr-orange))] rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--rendr-purple))] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }}></div>
    </div>
  </div>

  {/* Content */}
  <div className="relative z-10 container mx-auto px-4 py-32 text-center">
    {/* Your content here */}
  </div>
</section>
```

### Content Section
```tsx
<section className="py-16 md:py-24 bg-[hsl(var(--rendr-black))]">
  <div className="container mx-auto px-4">
    {/* Section Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-black mb-4">
        <span className="text-white">Our</span> <span className="text-gradient">Work</span>
      </h2>
      <p className="text-xl text-[hsl(var(--rendr-gray))] max-w-2xl mx-auto">
        See how we've helped brands make an impact
      </p>
    </div>

    {/* Content Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Grid items */}
    </div>
  </div>
</section>
```

### CTA Section
```tsx
<section className="py-16 md:py-24 bg-gradient-to-br from-[hsl(var(--rendr-purple))]/10 to-[hsl(var(--rendr-orange))]/10">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl md:text-6xl font-black mb-6">
      <span className="text-white">Ready to Create</span>
      <br />
      <span className="text-gradient">Something Amazing?</span>
    </h2>
    <p className="text-xl text-[hsl(var(--rendr-gray))] mb-8 max-w-2xl mx-auto">
      Let's bring your vision to life
    </p>
    <Button
      size="lg"
      className="bg-[hsl(var(--rendr-purple))] hover:bg-[hsl(var(--rendr-purple))]/90 text-white font-bold text-lg px-12 py-6 shadow-[0_8px_24px_rgba(136,61,245,0.5)]"
    >
      Get Started Today
    </Button>
  </div>
</section>
```

---

## Animations

### Fade In on Scroll
```tsx
<div className="animate-fade-in">
  {/* Content */}
</div>
```

### Fade In with Delay
```tsx
<div className="animate-fade-in-delay">
  {/* Content */}
</div>
```

### Staggered Animation
```tsx
{items.map((item, index) => (
  <div
    key={index}
    className="animate-fade-in"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    {/* Content */}
  </div>
))}
```

### Hover Lift Effect
```tsx
<div className="transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(242,178,76,0.3)]">
  {/* Content */}
</div>
```

---

## Icons

### Icon with Brand Color
```tsx
<div className="text-[hsl(var(--rendr-orange))] mb-6">
  <Zap className="w-12 h-12" />
</div>
```

### Icon with Hover Scale
```tsx
<div className="text-[hsl(var(--rendr-purple))] group-hover:scale-110 transition-transform duration-300">
  <Camera className="w-10 h-10" />
</div>
```

### Icon in Circle
```tsx
<div className="w-12 h-12 rounded-lg bg-[hsl(var(--rendr-orange))]/10 border border-[hsl(var(--rendr-orange))]/30 flex items-center justify-center">
  <Mail className="w-6 h-6 text-[hsl(var(--rendr-orange))]" />
</div>
```

---

## Navigation

### Sticky Navbar
```tsx
<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
  isScrolled ? "bg-black/90 backdrop-blur-lg shadow-strong" : "bg-transparent"
}`}>
  <div className="container mx-auto px-4 py-4">
    {/* Nav content */}
  </div>
</nav>
```

### Nav Link with Active State
```tsx
<Link
  to="/portfolio"
  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
    isActive
      ? "text-[hsl(var(--rendr-orange))] bg-[hsl(var(--rendr-orange))]/10"
      : "text-white hover:text-[hsl(var(--rendr-orange))]"
  }`}
>
  Portfolio
</Link>
```

---

## Dividers

### Accent Line (Red)
```tsx
<div className="flex items-center space-x-3 mb-6">
  <div className="w-1 h-12 bg-[hsl(var(--rendr-red))]"></div>
  <h2 className="text-3xl md:text-4xl font-black text-white">
    The Challenge
  </h2>
</div>
```

### Gradient Divider
```tsx
<div className="h-px bg-gradient-to-r from-[hsl(var(--rendr-orange))] via-[hsl(var(--rendr-purple))] to-[hsl(var(--rendr-red))]"></div>
```

---

## Progress Indicators

### Multi-Step Progress
```tsx
<div className="flex items-center justify-between mb-8">
  {[1, 2, 3].map((s) => (
    <div key={s} className="flex items-center flex-1">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
          step >= s
            ? "bg-[hsl(var(--rendr-purple))] text-white"
            : "bg-[hsl(0_0%_20%)] text-[hsl(var(--rendr-gray))]"
        }`}
      >
        {s}
      </div>
      {s < 3 && (
        <div
          className={`flex-1 h-1 mx-2 transition-all duration-300 ${
            step > s ? "bg-[hsl(var(--rendr-purple))]" : "bg-[hsl(0_0%_20%)]"
          }`}
        ></div>
      )}
    </div>
  ))}
</div>
```

---

## Social Links

### Social Icon Grid
```tsx
<div className="flex space-x-3">
  {["Instagram", "LinkedIn", "Twitter"].map((social) => (
    <a
      key={social}
      href="#"
      className="w-10 h-10 rounded-lg bg-[hsl(0_0%_12%)] border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-orange))] flex items-center justify-center transition-all duration-300 hover:shadow-[0_4px_16px_rgba(242,178,76,0.3)]"
    >
      <span className="text-white text-sm font-bold">{social[0]}</span>
    </a>
  ))}
</div>
```

---

## Scroll Indicator

### Animated Scroll Arrow
```tsx
<div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
  <div className="w-6 h-10 border-2 border-[hsl(var(--rendr-orange))] rounded-full flex items-start justify-center p-2">
    <div className="w-1 h-3 bg-[hsl(var(--rendr-orange))] rounded-full animate-pulse"></div>
  </div>
</div>
```

---

## Loading States

### Skeleton Card
```tsx
<div className="bg-[hsl(0_0%_12%)] rounded-2xl p-8 border border-[hsl(0_0%_20%)] animate-pulse">
  <div className="w-12 h-12 bg-[hsl(0_0%_20%)] rounded-lg mb-6"></div>
  <div className="h-6 bg-[hsl(0_0%_20%)] rounded mb-4 w-3/4"></div>
  <div className="h-4 bg-[hsl(0_0%_20%)] rounded mb-2"></div>
  <div className="h-4 bg-[hsl(0_0%_20%)] rounded w-5/6"></div>
</div>
```

---

## Tooltips & Popovers

### Simple Tooltip
```tsx
<Tooltip>
  <TooltipTrigger>
    <Info className="w-4 h-4 text-[hsl(var(--rendr-gray))]" />
  </TooltipTrigger>
  <TooltipContent className="bg-[hsl(0_0%_12%)] border-[hsl(var(--rendr-orange))]">
    <p>Additional information here</p>
  </TooltipContent>
</Tooltip>
```

---

**Pro Tips:**
1. Always use `transition-all duration-300` for smooth interactions
2. Combine hover effects: `hover:transform hover:-translate-y-1 hover:shadow-glow`
3. Use `group` and `group-hover:` for parent-child hover effects
4. Add `animate-fade-in` with staggered delays for list items
5. Keep animations subtle - 300ms is the sweet spot
6. Use brand colors consistently: Orange for primary, Purple for CTAs, Red for accents
