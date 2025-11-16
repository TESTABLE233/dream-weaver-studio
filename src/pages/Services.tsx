import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Sparkles, Video, Camera, TrendingUp, Users, ArrowRight, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding & Identity",
      description: "Build a powerful brand that stands out and resonates with your target audience.",
      features: [
        "Logo Design & Brand Guidelines",
        "Visual Identity Systems",
        "Brand Strategy & Positioning",
        "Packaging Design",
        "Print Collateral"
      ],
      priceRange: "Starting from ₹25,000",
    },
    {
      icon: Sparkles,
      title: "UI/UX Design",
      description: "Create intuitive and beautiful digital experiences that users love.",
      features: [
        "Website & App Design",
        "User Research & Testing",
        "Wireframing & Prototyping",
        "Design Systems",
        "Responsive Design"
      ],
      priceRange: "Starting from ₹40,000",
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Cinematic storytelling that captures attention and drives engagement.",
      features: [
        "Brand Films & Commercials",
        "Event Coverage",
        "Product Videos",
        "Social Media Content",
        "Post-Production & Editing"
      ],
      priceRange: "Starting from ₹50,000",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Stunning visuals that showcase your products, events, and brand story.",
      features: [
        "Product Photography",
        "Event & Corporate",
        "Lifestyle & Fashion",
        "Food Photography",
        "Image Retouching"
      ],
      priceRange: "Starting from ₹15,000",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven strategies to grow your online presence and drive results.",
      features: [
        "Social Media Advertising",
        "Google Ads Management",
        "SEO Optimization",
        "Email Marketing",
        "Analytics & Reporting"
      ],
      priceRange: "Starting from ₹20,000/month",
    },
    {
      icon: Users,
      title: "Social Media Management",
      description: "Build and engage your community with strategic content and community management.",
      features: [
        "Content Strategy & Planning",
        "Daily Posts & Stories",
        "Community Management",
        "Influencer Partnerships",
        "Performance Analytics"
      ],
      priceRange: "Starting from ₹25,000/month",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Our <span className="bg-gradient-accent bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive creative solutions to elevate your brand and drive growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-4 bg-gradient-accent rounded-xl text-white group-hover:shadow-glow transition-all duration-300 flex-shrink-0">
                    <service.icon size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <Badge variant="secondary" className="mb-3">
                      {service.priceRange}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="mr-2 mt-0.5 text-primary flex-shrink-0" size={20} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact">
                  <Button className="w-full bg-gradient-accent hover:shadow-glow">
                    Get Started
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <section className="py-16 px-8 bg-gradient-subtle rounded-2xl animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="bg-gradient-accent bg-clip-text text-transparent">Process</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals and vision" },
              { step: "02", title: "Strategy", desc: "Crafting the perfect approach" },
              { step: "03", title: "Creation", desc: "Bringing ideas to life" },
              { step: "04", title: "Delivery", desc: "Launch and ongoing support" },
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in-delay" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <Card className="bg-gradient-hero text-white border-none">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Let's discuss your needs and create a custom solution that fits your budget and goals.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-secondary hover:bg-white/90 text-lg px-8 py-6 h-auto">
                  Get a Free Consultation
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Services;
