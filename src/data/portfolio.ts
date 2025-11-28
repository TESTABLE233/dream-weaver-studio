export interface MediaItem {
  url: string;
  type: "image" | "video";
  thumbnail?: string; // Optional thumbnail for videos
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  client: string;
  date: string;
  coverImage: string;
  coverType?: "image" | "video"; // Type of cover media
  media: MediaItem[]; // Replaces images array
  tools: string[];
  challenge: string;
  solution: string;
  results: string[];
}

export const portfolioCategories = [
  "All",
  "Branding",
  "Brand Identity",
  "Design",
  "Photography",
  "Videography",
  "Social Media",
  "UI/UX",
  "Advertising",
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "invicta-2025-logo",
    title: "Invicta 2025 – Convocation Identity Design",
    category: "Brand Identity",
    description: "Official logo design for the convocation ceremony of Government Homoeopathic Medical College, Trivandrum — 'Invicta 2025', organized by Leo Events.",
    client: "Govt. Homoeopathic Medical College Trivandrum x Leo Events",
    date: "2025-10",
    coverImage: "/portfolio/invicta/cover.png",
    coverType: "image",
    media: [
      { url: "/portfolio/invicta/1.png", type: "image" }
    ],
    tools: ["Adobe Illustrator", "Photoshop"],
    challenge: "Design a visual identity that represents triumph, knowledge, and renewal — reflecting the theme of a medical convocation event.",
    solution: "Created a refined emblem merging academic symbolism with a modern design approach, incorporating elements that represent medicine, unity, and achievement.",
    results: [
      "Logo featured across all event collaterals and stage backdrops",
      "Praised for its meaningful symbolism and elegant composition",
      "Set a cohesive tone for the entire convocation visual identity"
    ],
  },
  {
    id: "exobonics-branding",
    title: "Exobonic Innovations – Logo & Brand Identity",
    category: "Branding",
    description: "Complete brand identity design for Exobonics Innovations — a pioneering robotics company developing assistive technologies that drive real social impact.",
    client: "Exobonic Innovations",
    date: "2025-09",
    coverImage: "/portfolio/exobonic/cover.png",
    coverType: "image",
    media: [
      { url: "/portfolio/exobonic/1.jpg", type: "image" },
      { url: "/portfolio/exobonic/2.jpg", type: "image" }
    ],
    tools: ["Adobe Illustrator", "Figma"],
    challenge: "Develop a futuristic and human-centered logo that captures innovation, inclusivity, and motion — the core values of Exobonics' robotics mission.",
    solution: "Designed a clean, symbolic logo based on the letter 'X', inspired by atomic and orbital structures to represent technology, connection, and precision.",
    results: [
      "Established a strong, recognizable brandmark aligned with company vision",
      "Successfully integrated across digital and product touchpoints",
      "Received positive client feedback for creativity and symbolism"
    ],
  },
  {
    id: "cultaway-2025",
    title: "Cult A Way 2025 – Complete Creative Direction",
    category: "Branding & Design",
    description: "From logo to stage design, the entire creative direction and visual identity for Cult A Way 2025 were conceptualized and executed from scratch.",
    client: "SCT College of Engineering",
    date: "2025-10",
    coverImage: "/portfolio/cultaway2025/coverpage.png",
    coverType: "image",
    media: [
      { url: "/portfolio/cultaway2025/6.png", type: "image" },
      { url: "/portfolio/cultaway2025/7.png", type: "image" },
      { url: "/portfolio/cultaway2025/8.png", type: "image" },
      { url: "/portfolio/cultaway2025/9.png", type: "image" }
    ],
    tools: ["Adobe Illustrator", "Photoshop", "After Effects"],
    challenge: "To create a bold, unified brand identity that captures the energy of a large-scale cultural fest.",
    solution: "Designed a cohesive visual system spanning logo, stage aesthetics, installations, merchandise, and on-ground branding.",
    results: [
      "Over 15,000 attendees engaged",
      "Strong visual identity across all digital and physical touchpoints",
      "Praised for its innovative stage and environmental design"
    ],
  },
  {
    id: "dejavu-2025",
    title: "Dejavu 2025 – Techno-Cultural Fest Coverage",
    category: "Event Production",
    description: "Handled full-scale video and photo production for Heera College's signature fest featuring Vedan, Eagle Gaming, and Call Me Venom.",
    client: "Heera College of Engineering & Technology",
    date: "2025-09",
    coverImage: "/portfolio/dejavu2025/cover.png",
    coverType: "image",
    media: [
      { url: "/portfolio/dejavu2025/1.JPG", type: "image" },
      { url: "/portfolio/dejavu2025/2.JPG", type: "image" },
      { url: "/portfolio/dejavu2025/3.JPG", type: "image" },
      { url: "/portfolio/dejavu2025/4.JPG", type: "image" },
      { url: "/portfolio/dejavu2025/5.JPG", type: "image" }
    ],
    tools: ["Sony A7 IV", "Premiere Pro", "After Effects"],
    challenge: "Deliver high-quality visuals that captured both the cultural essence and tech-driven vibe of the fest.",
    solution: "Coordinated multi-camera coverage, artist highlight reels, and social-ready clips for digital engagement.",
    results: [
      "2.5M+ social impressions",
      "Recognized as the official Media Partner",
      "Delivered all content within 72 hours post-event"
    ],
  },
  {
  id: "rendr-ai",
  title: "Rendr.AI – Intelligent Visual Creation",
  category: "AI Content Creation",
  description: "A cutting-edge creative wing of Rendr Media dedicated to generating ultra-realistic AI-driven imagery and cinematic video content for branding, storytelling, and social media campaigns.",
  client: "Rendr Media Internal Project",
  date: "2025-11",
  coverImage: "/portfolio/rendrai/cover.png",
  coverType:"image",
  media: [
      { url: "/portfolio/rendrai/1.png", type: "image" },
      {url: "/portfolio/rendrai/2.png", type: "image" },
      { url: "/portfolio/rendrai/3.MP4", type: "video" },
      { url: "/portfolio/rendrai/4.png", type: "image" },
      { url: "/portfolio/rendrai/5.png", type: "image" },
      { url: "/portfolio/rendrai/6.png", type: "image" }
    ],
  tools: ["Meta AI", "Gemini", "Runway ML", "Photoshop", "After Effects"],
  challenge: "Explore the boundaries of AI creativity while maintaining authentic, human storytelling within synthetic visuals.",
  solution: "Developed an in-house AI creation workflow combining image and video generation tools to produce hyper-realistic content for social media, concept visualization, and experimental storytelling.",
  results: [
    "Launched a 30-day AI visual series on Instagram",
    "Generated high-engagement reels blending AI and live-action concepts",
    "Established Rendr.AI as a dedicated creative vertical for intelligent content creation"
  ],
},

  {
    id: "arts-carnival-2025",
    title: "The Arts Carnival 2025 – Official Media Partner",
    category: "Media & Production",
    description: "Served as media partner for Arts College Trivandrum's annual proshow 'O', featuring performances by Radio Legs and Six Eight.",
    client: "Cloud 9 Productions & Arts College Union",
    date: "2025-08",
    coverImage: "/portfolio/arts/cover.png",
    coverType: "video",
    media: [
      { url: "/portfolio/arts/1.MP4", type: "video", thumbnail: "/portfolio/arts/cover.png",},
      { url: "/portfolio/arts/3.MP4", type: "video", thumbnail: "/portfolio/arts/cover.png"},
      { url: "/portfolio/arts/2.JPG", type: "image" },
      { url: "/portfolio/arts/4.MP4", type: "video", thumbnail: "/portfolio/arts/cover.png",},
      { url: "/portfolio/arts/5.MP4", type: "video", thumbnail: "/portfolio/arts/cover.png",},
    ],
    tools: ["Blackmagic 6K", "DaVinci Resolve", "Lightroom"],
    challenge: "To cover a large-scale open-air event with vibrant live performances under dynamic lighting.",
    solution: "Executed comprehensive video and photo coverage with stage visuals and artist-focused edits.",
    results: [
      "Featured on multiple campus media platforms",
      "Established strong creative partnership with Cloud 9 Productions",
      "3M+ reach across event week"
    ],
  },
  {
    id: "tvm-medical-proshow",
    title: "Thiruvananthapuram Medical College Proshow",
    category: "Videography",
    description: "Handled full media coverage for the Leo Events' proshow headlined by Thamarassery Churam.",
    client: "Leo Events x TVM Medical College",
    date: "2025-07",
    coverImage: "/portfolio/convo/cover.png",
    coverType: "image",
    media: [
      { url: "/portfolio/convo/1.JPG", type: "image" },
      { url: "/portfolio/convo/2.JPG", type: "image" },
      { url: "/portfolio/convo/3.JPG", type: "image"  },
      { url: "/portfolio/convo/4.JPG", type: "image"  },
      { url: "/portfolio/convo/5.JPG", type: "image"  },
      { url: "/portfolio/convo/6.JPG", type: "image"  }
    ],
    tools: ["Sony FX3", "After Effects", "Premiere Pro"],
    challenge: "Capture the energy and emotion of a live performance while maintaining cinematic quality.",
    solution: "Coordinated live coverage, highlight reels, and promotional recap video.",
    results: [
      "Rapid post-event delivery within 48 hours",
      "1.2M+ views across social platforms",
      "Commended by artist team and event organizers"
    ],
  },
  {
    id: "preconvo-pagli-show",
    title: "Pre-Convo Event – Medical College Trivandrum",
    category: "Event Coverage",
    description: "Covered the pre-convocation show organized by D3 Entertainments and Leo Events featuring Pagli as the main artist.",
    client: "D3 Entertainments & Leo Events",
    date: "2025-06",
    coverImage: "/portfolio/preconvo/cover.png",
    coverType: "image",
    media: [
      { url: "/portfolio/preconvo/1.JPG", type: "image" },
      { url: "/portfolio/preconvo/2.JPG", type: "image" },
      { url: "/portfolio/preconvo/3.MOV", type: "video",thumbnail: "/portfolio/preconvo/cover.png",   },
      { url: "/portfolio/preconvo/4.JPG", type: "image"  },
      { url: "/portfolio/preconvo/5.JPG", type: "image"  },
      { url: "/portfolio/preconvo/6.JPG", type: "image"  }
    ],
    tools: ["Canon R5", "Premiere Pro", "Lightroom"],
    challenge: "Create an energetic and youthful event reel for a high-engagement audience.",
    solution: "Handled on-site coverage and delivered dynamic edits that captured the vibe of the crowd and artist.",
    results: [
      "Viral event reels across Instagram",
      "Boosted Leo Events' engagement by 65%",
      "Positive client feedback on delivery speed and quality"
    ],
  },
  {
    id: "wedding-collection",
    title: "Wedding Stories by Rendr",
    category: "Event Production",
    description: "Beautifully documented multiple weddings capturing real, candid emotions with cinematic storytelling.",
    client: "Various",
    date: "2024-2025",
    coverImage: "/portfolio/wedding/cover.png",
    coverType: "image",
    media: [
      { url: "/portfolio/wedding/1.jpg", type: "image" },
      { url: "/portfolio/wedding/2.jpg", type: "image" }
    ],
    tools: ["Sony A7R IV", "DaVinci Resolve", "Lightroom"],
    challenge: "Deliver intimate, high-quality visuals across diverse venues and cultures.",
    solution: "Used natural tones, creative lighting, and story-based editing for timeless visuals.",
    results: [
      "Recognized for aesthetic storytelling style",
      "100+ weddings covered",
      "Consistent 5-star client satisfaction"
    ],
  },
  {
    id: "college-event-series",
    title: "College Productions & Small-Scale Events",
    category: "Event Management & Production",
    description: "Coordinated design, stage setup, sound, and production for IEEE, NSS, and various student union events.",
    client: "Multiple College Committees",
    date: "2024-2025",
    coverImage: "/portfolio/clg/cover.png",
    coverType: "image",
    media: [
      { url: "/portfolio/clg/1.png", type: "image" },
      { url: "/portfolio/clg/2.png", type: "image" }
    ],
    tools: ["Illustrator", "Premiere Pro", "Ableton Live"],
    challenge: "Manage multiple small-scale events while maintaining consistent quality and creativity.",
    solution: "Provided complete event design-to-delivery pipeline — from concept visuals to live coverage.",
    results: [
      "Successfully executed 25+ student events",
      "Built long-term partnerships with college bodies",
      "Led to further production collaborations"
    ],
  },
  {
    id: "rendering-stories",
    title: "Rendering Stories – A Content-Driven Vision",
    category: "Media Initiative",
    description: "Rendr Media's growing storytelling vertical focusing on crafting real, human stories through cinematic visual content.",
    client: "Rendr Media Original",
    date: "2025-11",
    coverImage: "/portfolio/rndrstr/cover.png",
    coverType: "image",
    media: [
      { url: "/renderingstories-1.jpg", type: "image" },
      { url: "/renderingstories-2.jpg", type: "image" }
    ],
    tools: ["Cinema 4D", "After Effects", "Premiere Pro"],
    challenge: "Establish an authentic narrative platform that connects audiences to real experiences.",
    solution: "Launched 'Rendering Stories' — an Instagram-based series blending documentary storytelling with design and emotion.",
    results: [
      "Rapidly growing social following",
      "Positive reception for its authentic creative direction",
      "Set to evolve into a full-blown Rendr Originals vertical"
    ],
  }
];
