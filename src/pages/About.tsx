import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Target, Zap, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-[hsl(var(--rendr-black))] to-[hsl(0_0%_12%)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in">
            <span className="text-white">About</span> <span className="text-gradient">Rendr Media</span>
          </h1>
          <p className="text-xl text-[hsl(var(--rendr-gray))] max-w-3xl mx-auto animate-fade-in-delay">
            We're a bold, energetic creative agency that turns passion into powerful brand experiences
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-[hsl(var(--rendr-black))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-1 h-16 bg-[hsl(var(--rendr-orange))]"></div>
              <h2 className="text-4xl md:text-5xl font-black text-white">Our Story</h2>
            </div>
            <div className="space-y-6 text-lg text-[hsl(var(--rendr-gray))] leading-relaxed pl-7">
              <p>
                Rendr Media was born from a simple belief: creativity should be bold, energetic, and unforgettable.
                We're not just another creative agency—we're your partners in making brands that stand out.
              </p>
              <p>
                From startups to established brands, we've helped countless clients transform their vision into
                reality through striking visuals, strategic thinking, and relentless passion for great work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b from-[hsl(var(--rendr-black))] to-[hsl(0_0%_12%)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="text-white">What We</span> <span className="text-gradient">Stand For</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Bold Creativity",
                description: "We push boundaries and create work that demands attention",
                color: "orange",
              },
              {
                icon: <Target className="w-10 h-10" />,
                title: "Strategic Thinking",
                description: "Every creative decision is backed by strategy and purpose",
                color: "purple",
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Client Partnership",
                description: "Your success is our success—we're in this together",
                color: "red",
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: "Excellence",
                description: "We deliver nothing less than exceptional quality",
                color: "orange",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-[hsl(0_0%_12%)] border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-${value.color}))] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`text-[hsl(var(--rendr-${value.color}))] mb-4 flex justify-center`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-[hsl(var(--rendr-gray))]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[hsl(var(--rendr-black))]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: "200+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "15+", label: "Awards Won" },
              { number: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-5xl md:text-6xl font-black text-gradient mb-2">{stat.number}</div>
                <div className="text-[hsl(var(--rendr-gray))] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[hsl(var(--rendr-purple))]/10 to-[hsl(var(--rendr-orange))]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-white">Ready to Work</span> <span className="text-gradient">Together?</span>
          </h2>
          <p className="text-xl text-[hsl(var(--rendr-gray))] mb-8 max-w-2xl mx-auto">
            Let's create something bold and unforgettable for your brand
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

export default About;
