import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--rendr-black))] via-[hsl(var(--rendr-black))] to-[hsl(0_0%_12%)]">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--rendr-orange))] rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--rendr-purple))] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }}></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[hsl(var(--rendr-red))] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }}></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-[hsl(var(--rendr-purple))]/20 border border-[hsl(var(--rendr-purple))]/40 rounded-full px-6 py-2 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[hsl(var(--rendr-purple))]" />
              <span className="text-sm font-medium text-white">Creative Agency That Delivers</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span className="text-white">Passion</span>
              <br />
              <span className="text-gradient">Rendered</span>
              <br />
              <span className="text-white">For Your Brand</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-[hsl(var(--rendr-gray))] max-w-3xl mx-auto">
              Bold branding. Striking visuals. Unforgettable experiences.
              <br />
              We turn creative visions into reality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Button
                asChild
                size="lg"
                className="bg-[hsl(var(--rendr-purple))] hover:bg-[hsl(var(--rendr-purple))]/90 text-white font-bold text-lg px-8 py-6 shadow-[0_8px_24px_rgba(136,61,245,0.5)] hover:shadow-[0_12px_32px_rgba(136,61,245,0.7)] transition-all duration-300 group"
              >
                <Link to="/portfolio" className="flex items-center space-x-2">
                  <span>View Our Work</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[hsl(var(--rendr-orange))] text-[hsl(var(--rendr-orange))] hover:bg-[hsl(var(--rendr-orange))] hover:text-black font-bold text-lg px-8 py-6 transition-all duration-300"
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[hsl(var(--rendr-orange))] rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-[hsl(var(--rendr-orange))] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-gradient-to-b from-[hsl(0_0%_12%)] to-[hsl(var(--rendr-black))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-gradient">What We Do</span>
            </h2>
            <p className="text-xl text-[hsl(var(--rendr-gray))] max-w-2xl mx-auto">
              Full-spectrum creative services that make your brand stand out
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-12 h-12" />,
                title: "Branding & Design",
                description: "Bold identities that capture attention and build recognition",
                color: "orange",
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Video & Photography",
                description: "Stunning visuals that tell your story and engage audiences",
                color: "purple",
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: "Digital Marketing",
                description: "Strategic campaigns that drive results and grow your brand",
                color: "red",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-[hsl(0_0%_12%)] rounded-2xl p-8 border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-${service.color}))] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(136,61,245,0.3)] animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`text-[hsl(var(--rendr-${service.color}))] mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-[hsl(var(--rendr-gray))]">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[hsl(var(--rendr-purple))] text-[hsl(var(--rendr-purple))] hover:bg-[hsl(var(--rendr-purple))] hover:text-white font-bold"
            >
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <section className="py-24 bg-[hsl(var(--rendr-black))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-white">Our</span> <span className="text-gradient">Work</span>
            </h2>
            <p className="text-xl text-[hsl(var(--rendr-gray))] max-w-2xl mx-auto">
              See how we've helped brands make an impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Link
                key={item}
                to="/portfolio"
                className="group relative aspect-square rounded-2xl overflow-hidden bg-[hsl(0_0%_12%)] border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-orange))] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--rendr-orange))]/20 to-[hsl(var(--rendr-purple))]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-black text-white/10 group-hover:text-white/20 transition-colors">
                    {item}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-[hsl(var(--rendr-orange))] hover:bg-[hsl(var(--rendr-orange))]/90 text-black font-bold shadow-[0_8px_24px_rgba(242,178,76,0.4)]"
            >
              <Link to="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[hsl(var(--rendr-purple))]/10 to-[hsl(var(--rendr-orange))]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Ready to Create</span>
            <br />
            <span className="text-gradient">Something Amazing?</span>
          </h2>
          <p className="text-xl text-[hsl(var(--rendr-gray))] mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with bold creativity and strategic execution
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[hsl(var(--rendr-purple))] hover:bg-[hsl(var(--rendr-purple))]/90 text-white font-bold text-lg px-12 py-6 shadow-[0_8px_24px_rgba(136,61,245,0.5)]"
          >
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
