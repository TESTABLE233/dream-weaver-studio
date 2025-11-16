import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, Palette, Video, Camera, TrendingUp, Users } from "lucide-react";
import { portfolioProjects } from "@/data/portfolio";
import heroImage from "@/assets/hero-background.jpg";

const Home = () => {
  const services = [
    {
      icon: Palette,
      title: "Branding & Design",
      description: "Create memorable brand identities that resonate with your audience",
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Cinematic storytelling that brings your vision to life",
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Stunning visuals that capture your brand's essence",
    },
    {
      icon: Sparkles,
      title: "UI/UX Design",
      description: "Intuitive digital experiences that users love",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven strategies that drive growth",
    },
    {
      icon: Users,
      title: "Social Media",
      description: "Build engaged communities around your brand",
    },
  ];

  const featuredProjects = portfolioProjects.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-primary/30" />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto px-4 lg:px-8 py-32 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
              Passion Rendered
              <br />
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                For Your Brand
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              We transform ideas into stunning visual experiences through design, branding, and digital storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-accent hover:shadow-glow text-white text-lg px-8 py-6 h-auto transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-secondary text-lg px-8 py-6 h-auto transition-all duration-300"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We <span className="bg-gradient-accent bg-clip-text text-transparent">Create</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive creative solutions tailored to elevate your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border-border/50 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex p-4 bg-gradient-accent rounded-xl text-white group-hover:shadow-glow transition-all duration-300">
                    <service.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                Explore All Services
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how we've helped brands stand out
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Link 
                key={project.id} 
                to={`/portfolio/${project.id}`}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.coverImage} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-sm font-medium">{project.category}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-2">{project.client}</p>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/portfolio">
              <Button size="lg" className="bg-gradient-accent hover:shadow-glow">
                View Full Portfolio
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/20" />
        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Bring Your Vision to Life?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90 animate-fade-in-delay">
            Let's collaborate and create something extraordinary together.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-white text-secondary hover:bg-white/90 text-lg px-8 py-6 h-auto shadow-strong hover:shadow-glow transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
