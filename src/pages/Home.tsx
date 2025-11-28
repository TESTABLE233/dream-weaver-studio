import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";

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

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-[hsl(0_0%_12%)] to-[hsl(var(--rendr-black))] border-y border-[hsl(0_0%_20%)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Projects Delivered", color: "orange" },
              { number: "50+", label: "Happy Clients", color: "purple" },
              { number: "10M+", label: "Social Reach", color: "red" },
              { number: "5+", label: "Years Experience", color: "orange" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-4xl md:text-5xl font-black text-[hsl(var(--rendr-${stat.color}))] mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-[hsl(var(--rendr-gray))] font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-[hsl(var(--rendr-black))]">
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
                title: "Event Management",
                description: "Comprehensive event planning and memorable experiences",
                color: "red",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-[hsl(0_0%_12%)] rounded-2xl p-8 border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-orange))] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(242,178,76,0.3)] animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`text-[hsl(var(--rendr-orange))] mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-[hsl(var(--rendr-gray))]">{service.description}</p>
                
                {/* Hover Arrow */}
                <div className="mt-6 flex items-center text-[hsl(var(--rendr-orange))] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-bold mr-2">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
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

      {/* Featured Portfolio */}
      <section className="py-24 bg-[hsl(var(--rendr-black))]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-white">Featured</span> <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-[hsl(var(--rendr-gray))] max-w-2xl mx-auto">
              See how we've helped brands make an impact with creative excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.slice(0, 6).map((project, index) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-[hsl(0_0%_12%)] border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-orange))] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(242,178,76,0.3)]">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-[hsl(var(--rendr-orange))]/20 to-[hsl(var(--rendr-purple))]/20">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop";
                      }}
                    />
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-xs font-bold text-[hsl(var(--rendr-purple))] bg-[hsl(var(--rendr-purple))]/20 px-3 py-1 rounded-full border border-[hsl(var(--rendr-purple))]/40 inline-block w-fit mb-3 backdrop-blur-sm">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[hsl(var(--rendr-gray))] line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Info (Always Visible) */}
                  <div className="p-5 bg-[hsl(0_0%_8%)]">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[hsl(var(--rendr-orange))]">
                        {project.client}
                      </span>
                      <span className="text-xs text-[hsl(var(--rendr-gray))]">
                        {project.date}
                      </span>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--rendr-orange))]/0 to-[hsl(var(--rendr-purple))]/0 group-hover:from-[hsl(var(--rendr-orange))]/10 group-hover:to-[hsl(var(--rendr-purple))]/10 transition-all duration-300 pointer-events-none"></div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-[hsl(var(--rendr-orange))] hover:bg-[hsl(var(--rendr-orange))]/90 text-black font-bold shadow-[0_8px_24px_rgba(242,178,76,0.4)] group"
            >
              <Link to="/portfolio" className="flex items-center space-x-2">
                <span>View Full Portfolio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-gradient-to-b from-[hsl(var(--rendr-black))] to-[hsl(0_0%_12%)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-white">Trusted By</span> <span className="text-gradient">Leading Brands</span>
            </h2>
            <p className="text-xl text-[hsl(var(--rendr-gray))] max-w-2xl mx-auto">
              We've partnered with amazing organizations to create impactful work
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              "SCT College of Engineering",
              "Heera College",
              "Arts College Trivandrum",
              "Leo Events",
              "Cloud 9 Productions",
              "D3 Entertainments",
              "Exobonic Innovations",
              "Medical College TVM",
            ].map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-[hsl(0_0%_12%)] rounded-xl border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-orange))] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-sm md:text-base font-bold text-white/80 text-center">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[hsl(var(--rendr-purple))]/10 to-[hsl(var(--rendr-orange))]/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">Ready to Create</span>
              <br />
              <span className="text-gradient">Something Amazing?</span>
            </h2>
            <p className="text-xl text-[hsl(var(--rendr-gray))] mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with bold creativity and strategic execution
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[hsl(var(--rendr-purple))] hover:bg-[hsl(var(--rendr-purple))]/90 text-white font-bold text-lg px-12 py-6 shadow-[0_8px_24px_rgba(136,61,245,0.5)] group"
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-[hsl(var(--rendr-orange))] text-[hsl(var(--rendr-orange))] hover:bg-[hsl(var(--rendr-orange))] hover:text-black font-bold text-lg px-12 py-6"
              >
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
