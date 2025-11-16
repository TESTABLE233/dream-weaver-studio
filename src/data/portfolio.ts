export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: string;
  coverImage: string;
  description: string;
  fullDescription: string;
  goal: string;
  deliverables: string[];
  tools: string[];
  images: string[];
  datePublished: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "brand-fusion-cafe",
    title: "Fusion Cafe Branding",
    client: "Fusion Cafe",
    category: "Branding",
    coverImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    description: "Complete brand identity for a modern fusion restaurant",
    fullDescription: "Created a vibrant brand identity that celebrates the fusion of flavors and cultures. The project encompassed logo design, menu layouts, packaging, and social media templates.",
    goal: "Establish a memorable brand presence that appeals to millennials and food enthusiasts",
    deliverables: ["Logo & Brand Guidelines", "Menu Design", "Packaging Design", "Social Media Templates", "Signage"],
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559827221-3d1a9c5b0137?w=1200&h=800&fit=crop",
    ],
    datePublished: "2024-10-15",
  },
  {
    id: "techstart-ui",
    title: "TechStart App Interface",
    client: "TechStart Inc",
    category: "UI/UX",
    coverImage: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=600&fit=crop",
    description: "Mobile app design for a tech startup platform",
    fullDescription: "Designed a clean, modern interface for a startup networking platform. Focus on user-friendly navigation and seamless onboarding experience.",
    goal: "Create an intuitive app that connects startups with investors",
    deliverables: ["User Flow", "Wireframes", "High-Fidelity Mockups", "Prototype", "Design System"],
    tools: ["Figma", "Adobe XD", "Principle"],
    images: [
      "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
    ],
    datePublished: "2024-09-20",
  },
  {
    id: "summer-fest-video",
    title: "Summer Music Festival",
    client: "Summer Beats",
    category: "Video",
    coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    description: "Event coverage and promotional video for music festival",
    fullDescription: "Captured the energy and excitement of a 3-day music festival with cinematic videography and dynamic editing.",
    goal: "Create compelling content to promote future events and showcase artist performances",
    deliverables: ["Event Coverage", "Promotional Video", "Social Media Clips", "Artist Interviews"],
    tools: ["Sony A7S III", "DJI Drone", "Premiere Pro", "After Effects"],
    images: [
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1200&h=800&fit=crop",
    ],
    datePublished: "2024-08-10",
  },
  {
    id: "eco-brand-campaign",
    title: "EcoGreen Campaign",
    client: "EcoGreen Products",
    category: "Marketing",
    coverImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
    description: "Digital marketing campaign for sustainable products",
    fullDescription: "Developed a comprehensive digital marketing strategy focused on sustainability and eco-conscious consumers.",
    goal: "Increase brand awareness and drive online sales by 40%",
    deliverables: ["Social Media Strategy", "Ad Creatives", "Email Campaigns", "Landing Pages", "Analytics"],
    tools: ["Meta Ads Manager", "Google Ads", "Mailchimp", "Canva Pro"],
    images: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&h=800&fit=crop",
    ],
    datePublished: "2024-11-05",
  },
  {
    id: "fashion-photoshoot",
    title: "Urban Fashion Collection",
    client: "StreetStyle Co",
    category: "Photography",
    coverImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop",
    description: "Editorial photoshoot for urban fashion brand",
    fullDescription: "Shot an editorial lookbook showcasing the brand's new urban collection across various city locations.",
    goal: "Create striking visuals that embody urban culture and street fashion",
    deliverables: ["Lookbook Photography", "Product Photos", "Lifestyle Shots", "Social Media Content"],
    tools: ["Canon EOS R5", "Profoto Lighting", "Lightroom", "Photoshop"],
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=800&fit=crop",
    ],
    datePublished: "2024-07-22",
  },
  {
    id: "social-media-fitness",
    title: "FitLife Social Strategy",
    client: "FitLife Gym",
    category: "Social Media",
    coverImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    description: "Social media management and content creation",
    fullDescription: "Managed comprehensive social media presence with engaging content, community building, and influencer partnerships.",
    goal: "Grow Instagram following by 200% and increase gym memberships",
    deliverables: ["Content Calendar", "Daily Posts", "Reels & Stories", "Community Management", "Influencer Collabs"],
    tools: ["Later", "Canva", "CapCut", "Instagram Insights"],
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&h=800&fit=crop",
    ],
    datePublished: "2024-10-01",
  },
];

export const categories = [
  "All",
  "Branding",
  "UI/UX",
  "Video",
  "Photography",
  "Marketing",
  "Social Media",
];
