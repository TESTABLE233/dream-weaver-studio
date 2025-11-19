import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Palette, Camera, Video, Megaphone, Smartphone, Sparkles, ArrowRight } from "lucide-react";

const services = [
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
  {
    icon: <Sparkles className="w-12 h-12" />,
    title: "Graphic Design",
    description: "Eye-catching designs that communicate your message effectively",
    features: [
      "Marketing Materials",
      "Social Media Graphics",
      "Print Design",
      "Infographics",
      "Presentation Design",
    ],
    color: "purple",
  },
  {
    icon: <Camera className="w-12 h-12" />,
    title: "Photography",
    description: "Professional photography that captures your brand's essence",
    features: [
      "Product Photography",
      "Event Coverage",
      "Corporate Headshots",
      "Food Photography",
      "Lifestyle & Brand Photography",
    ],
    color: "red",
  },
  {
    icon: <Video className="w-12 h-12" />,
    title: "Videography",
    description: "Compelling video content that tells your story and engages audiences",
    features: [
      "Brand Videos",
      "Product Demos",
      "Event Videography",
      "Social Media Videos",
      "Corporate Videos",
    ],
    color: "orange",
  },
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: "UI/UX Design",
    description: "User-centered digital experiences that convert and delight",
    features: [
      "Website Design",
      "Mobile App Design",
      "User Research",
      "Prototyping & Testing",
      "Design Systems",
    ],
    color: "purple",
  },
  {
    icon: <Sparkles className="w-12 h-12" />,
    title: "🎯 Event Management",
    description: "Comprehensive event planning and execution that creates memorable experiences",
    features: [
      "Event Planning & Coordination",
      "Venue Selection & Management",
      "Vendor Coordination",
      "Timeline & Budget Management",
      "On-site Event Support",
    ],
    color: "red",
  },
  {
    icon: <Megaphone className="w-12 h-12" />,
    title: "Sound & Light Production",
    description: "Professional audio-visual solutions for impactful events and productions",
    features: [
      "Sound System Setup",
      "Lighting Design & Installation",
      "Stage & Backdrop Design",
      "Technical Support",
      "Equipment Rental",
    ],
    color: "orange",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-[hsl(var(--rendr-black))] to-[hsl(0_0%_12%)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in">
            <span className="text-white">Our</span> <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-[hsl(var(--rendr-gray))] max-w-3xl mx-auto animate-fade-in-delay">
            Full-spectrum creative services to elevate your brand and drive results
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[hsl(var(--rendr-black))]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-[hsl(0_0%_12%)] rounded-2xl p-8 border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-${service.color}))] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(136,61,245,0.3)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`text-[hsl(var(--rendr-${service.color}))] mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-[hsl(var(--rendr-gray))] mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-[hsl(var(--rendr-${service.color}))] mt-2 flex-shrink-0`}></div>
                      <span className="text-sm text-[hsl(var(--rendr-gray))]">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  asChild
                  variant="ghost"
                  className={`w-full text-[hsl(var(--rendr-${service.color}))] hover:bg-[hsl(var(--rendr-${service.color}))]/10 group/btn`}
                >
                  <Link to="/contact" className="flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-b from-[hsl(var(--rendr-black))] to-[hsl(0_0%_12%)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-white">Our</span> <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-[hsl(var(--rendr-gray))] max-w-2xl mx-auto">
              A proven approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Discovery", description: "Understanding your goals, audience, and vision" },
              { step: "02", title: "Strategy", description: "Crafting a creative approach tailored to your needs" },
              { step: "03", title: "Creation", description: "Bringing ideas to life with bold execution" },
              { step: "04", title: "Delivery", description: "Launching your project and measuring success" },
            ].map((phase, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="text-6xl font-black text-gradient mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-[hsl(var(--rendr-gray))]">{phase.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[hsl(var(--rendr-orange))] to-[hsl(var(--rendr-purple))]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[hsl(var(--rendr-purple))]/10 to-[hsl(var(--rendr-orange))]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-white">Ready to Get</span> <span className="text-gradient">Started?</span>
          </h2>
          <p className="text-xl text-[hsl(var(--rendr-gray))] mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[hsl(var(--rendr-purple))] hover:bg-[hsl(var(--rendr-purple))]/90 text-white font-bold text-lg px-12 py-6 shadow-[0_8px_24px_rgba(136,61,245,0.5)]"
          >
            <Link to="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
