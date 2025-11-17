export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  client: string;
  date: string;
  coverImage: string;
  images: string[];
  tools: string[];
  challenge: string;
  solution: string;
  results: string[];
}

export const portfolioCategories = [
  "All",
  "Branding",
  "Design",
  "Photography",
  "Videography",
  "Social Media",
  "UI/UX",
  "Advertising",
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "tech-startup-branding",
    title: "Tech Startup Brand Identity",
    category: "Branding",
    description: "Complete brand identity for an innovative AI startup",
    client: "TechVision AI",
    date: "2024-10",
    coverImage: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    tools: ["Adobe Illustrator", "Figma", "After Effects"],
    challenge: "Create a modern, trustworthy brand identity for an AI company entering a competitive market",
    solution: "Developed a bold, futuristic visual language with clean typography and dynamic color gradients",
    results: [
      "40% increase in brand recognition",
      "Featured in TechCrunch",
      "Successfully raised Series A funding",
    ],
  },
  {
    id: "festival-campaign",
    title: "College Fest Campaign",
    category: "Social Media",
    description: "Viral social media campaign for annual college festival",
    client: "University Cultural Fest",
    date: "2024-09",
    coverImage: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    tools: ["Photoshop", "Premiere Pro", "Instagram"],
    challenge: "Generate buzz and drive ticket sales for a college cultural festival",
    solution: "Created engaging social media content with bold visuals and interactive stories",
    results: [
      "2M+ impressions across platforms",
      "Sold out in 3 days",
      "30% increase in attendance",
    ],
  },
  {
    id: "restaurant-photography",
    title: "Fine Dining Photography",
    category: "Photography",
    description: "Mouth-watering food photography for upscale restaurant",
    client: "Gourmet Kitchen",
    date: "2024-08",
    coverImage: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    tools: ["Canon EOS R5", "Lightroom", "Photoshop"],
    challenge: "Capture the essence and quality of fine dining experience",
    solution: "Professional food styling and lighting to showcase culinary artistry",
    results: [
      "Menu redesign with new photos",
      "50% increase in Instagram engagement",
      "Featured in local food magazine",
    ],
  },
  {
    id: "product-launch-video",
    title: "Product Launch Video",
    category: "Videography",
    description: "High-energy product reveal video for tech gadget",
    client: "SmartGadget Co",
    date: "2024-07",
    coverImage: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    tools: ["RED Camera", "DaVinci Resolve", "Cinema 4D"],
    challenge: "Create excitement around a new product launch",
    solution: "Cinematic video with dynamic transitions and product showcases",
    results: [
      "1M+ views in first week",
      "Featured on tech blogs",
      "Pre-orders exceeded targets by 200%",
    ],
  },
  {
    id: "ecommerce-ui-redesign",
    title: "E-commerce UI Redesign",
    category: "UI/UX",
    description: "Modern, conversion-focused redesign of online store",
    client: "Fashion Forward",
    date: "2024-06",
    coverImage: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    tools: ["Figma", "React", "Tailwind CSS"],
    challenge: "Improve user experience and increase conversion rates",
    solution: "Streamlined checkout process with bold visuals and intuitive navigation",
    results: [
      "35% increase in conversion rate",
      "25% reduction in cart abandonment",
      "Improved mobile experience",
    ],
  },
  {
    id: "billboard-campaign",
    title: "Billboard Advertising Campaign",
    category: "Advertising",
    description: "Eye-catching outdoor advertising for local business",
    client: "City Fitness Center",
    date: "2024-05",
    coverImage: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg"],
    tools: ["Photoshop", "Illustrator", "InDesign"],
    challenge: "Stand out in busy urban environment and drive gym memberships",
    solution: "Bold typography and striking visuals with clear call-to-action",
    results: [
      "60% increase in walk-in inquiries",
      "500+ new memberships in 2 months",
      "Extended campaign by 6 months",
    ],
  },
];
