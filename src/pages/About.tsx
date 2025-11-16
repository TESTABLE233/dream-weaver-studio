import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Heart, Zap, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering quality that exceeds expectations."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for creativity drives us to explore new ideas and push creative boundaries."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace cutting-edge tools and techniques to stay ahead in the creative industry."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in working closely with clients to bring their vision to life."
    },
  ];

  const stats = [
    { number: "200+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "5+", label: "Years of Excellence" },
    { number: "15+", label: "Team Members" },
  ];

  const team = [
    {
      name: "Arjun Sharma",
      role: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      name: "Priya Patel",
      role: "Brand Strategist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      name: "Rahul Verma",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
    {
      name: "Sneha Reddy",
      role: "Video Production Head",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="bg-gradient-accent bg-clip-text text-transparent">Rendr Media</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where passion meets creativity to render extraordinary brand experiences
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-20 animate-fade-in-delay">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2019, Rendr Media began with a simple mission: to help brands tell their stories through powerful visual content. What started as a small design studio has grown into a full-service creative agency.
                </p>
                <p>
                  We've worked with startups, established businesses, and everything in between, helping them build memorable brands and connect with their audiences in meaningful ways.
                </p>
                <p>
                  Our team of passionate creators, strategists, and storytellers brings diverse perspectives and expertise to every project. We don't just create content—we craft experiences that leave lasting impressions.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-strong">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-20 animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Our <span className="bg-gradient-accent bg-clip-text text-transparent">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-4 inline-flex p-4 bg-gradient-accent rounded-xl text-white group-hover:shadow-glow transition-all duration-300">
                    <value.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Meet Our <span className="bg-gradient-accent bg-clip-text text-transparent">Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative h-72 overflow-hidden rounded-t-lg">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <Badge variant="secondary">{member.role}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 px-8 bg-gradient-subtle rounded-2xl text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-8">
            Trusted by <span className="bg-gradient-accent bg-clip-text text-transparent">Amazing Brands</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            We've had the privilege of working with innovative startups, established brands, and creative entrepreneurs across various industries.
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            {["Brand A", "Brand B", "Brand C", "Brand D", "Brand E"].map((brand, index) => (
              <div key={index} className="text-2xl font-bold text-muted-foreground">
                {brand}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
