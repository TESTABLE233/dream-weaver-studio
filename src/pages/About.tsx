import { Users, Target, Zap, Award, Mail, Phone, MapPin } from "lucide-react";

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
                Rendr Media was born with one goal, to make creativity immersive.
              </p>
              <p>
                We live at the crossroads of art, storytelling, and experience, where every project 
                becomes more than a deliverable,it becomes a memory.
              </p>
              <p>
               Whether it’s shaping identities, orchestrating moments, or producing visuals that speak
              louder than words, our team thrives on turning imagination into impact.
              </p>
              <p>
                At Rendr, every story is staged, designed, and rendered with intent—
                bold, seamless, and unforgettable.
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
              { number: "50+", label: "Projects Completed" },
              { number: "100+", label: "Happy Clients" },
              { number: "15+", label: "Stories Crafted" },
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

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-[hsl(var(--rendr-purple))]/10 to-[hsl(var(--rendr-orange))]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="text-white">Get in</span> <span className="text-gradient">Touch</span>
              </h2>
              <p className="text-xl text-[hsl(var(--rendr-gray))] max-w-2xl mx-auto">
                Let's create something bold and unforgettable for your brand
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-[hsl(0_0%_12%)] rounded-2xl border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-orange))] transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-[hsl(var(--rendr-orange))]/10 border border-[hsl(var(--rendr-orange))]/30 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-[hsl(var(--rendr-orange))]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                <a href="mailto:rendrmedia2025@gmail.com" className="text-[hsl(var(--rendr-gray))] hover:text-[hsl(var(--rendr-orange))] transition-colors text-sm">
                  rendrmedia2025@gmail.com
                </a>
              </div>

              <div className="text-center p-6 bg-[hsl(0_0%_12%)] rounded-2xl border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-purple))] transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-[hsl(var(--rendr-purple))]/10 border border-[hsl(var(--rendr-purple))]/30 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-[hsl(var(--rendr-purple))]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                <a href="tel:+919562842489" className="text-[hsl(var(--rendr-gray))] hover:text-[hsl(var(--rendr-purple))] transition-colors text-sm">
                  +91 (956) 284-2489
                </a>
              </div>

              <div className="text-center p-6 bg-[hsl(0_0%_12%)] rounded-2xl border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-red))] transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-[hsl(var(--rendr-red))]/10 border border-[hsl(var(--rendr-red))]/30 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-[hsl(var(--rendr-red))]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Location</h3>
                <p className="text-[hsl(var(--rendr-gray))] text-sm">
                  Soorya P-8, Vishwambharan Rd,<br />
                  Pappanamcode, Trivandrum
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.instagram.com/rendr_media?igsh=MTZ3dmVvdXBoNDNyNg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-[hsl(0_0%_12%)] border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-orange))] flex items-center justify-center transition-all duration-300 hover:shadow-[0_4px_16px_rgba(242,178,76,0.3)]"
                  aria-label="Instagram"
                >
                  <span className="text-white text-sm font-bold">IG</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/rendrmedia2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-[hsl(0_0%_12%)] border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-purple))] flex items-center justify-center transition-all duration-300 hover:shadow-[0_4px_16px_rgba(136,61,245,0.3)]"
                  aria-label="LinkedIn"
                >
                  <span className="text-white text-sm font-bold">LI</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
