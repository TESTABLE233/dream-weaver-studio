import { useState } from "react";
import { Link } from "react-router-dom";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-[hsl(var(--rendr-black))] to-[hsl(0_0%_12%)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in">
            <span className="text-white">Our</span> <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-[hsl(var(--rendr-gray))] max-w-3xl mx-auto animate-fade-in-delay">
            Explore our creative work across branding, design, photography, and digital media
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-[hsl(0_0%_12%)] sticky top-20 z-40 border-b border-[hsl(0_0%_20%)]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {portfolioCategories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-[hsl(var(--rendr-purple))] hover:bg-[hsl(var(--rendr-purple))]/90 text-white font-bold shadow-[0_4px_12px_rgba(136,61,245,0.4)]"
                    : "border-[hsl(0_0%_30%)] text-white hover:border-[hsl(var(--rendr-orange))] hover:text-[hsl(var(--rendr-orange))]"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Rendr Section */}
      <section id="team-rendr" aria-labelledby="team-heading" className="py-16 md:py-24 bg-gradient-to-b from-[hsl(0_0%_12%)] to-[hsl(var(--rendr-black))]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-10 md:mb-14 text-center animate-fade-in">
            <p className="text-sm uppercase tracking-widest text-[hsl(var(--rendr-orange))] mb-2">Meet the Core</p>
            <h2 id="team-heading" className="text-4xl md:text-5xl font-black text-white mb-4">
              Team <span className="text-gradient">Rendr</span>
            </h2>
            <p className="text-lg text-[hsl(var(--rendr-gray))] max-w-2xl mx-auto">
              Three minds. One vision. We blend strategy, craft, and culture to render stories that move.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Rizan Amani",
                role: "CEO & Founder",
                tags: ["Creative Direction", "Management", "SOPs"],
                bio: "Leads Rendr's vision and end-to-end creative direction, aligning teams, SOPs, and client outcomes.",
                img: "/portfolio/Rizan Amani.jpg",
                badge: "CEO",
                phone: "+91 9562842489"
              },
              {
                name: "Sreerag N",
                role: "CTO",
                tags: ["Production", "Photography", "Videography"],
                bio: "Owns the technical heartbeat—camera systems, production workflows, and delivery quality.",
                img: "/portfolio/Sreerag N.JPG",
                badge: "CTO",
                phone: "+91 9567563944"
              },
              {
                name: "N Najma Sulthana",
                role: "CFO",
                tags: ["Finance", "PR", "Outreach"],
                bio: "Oversees finance and external relations—public relations, inquiries, partnerships, and outreach.",
                img: "/portfolio/N Najma Sulthana.jpg",
                badge: "CFO",
                phone: "+91 9633893065"
              }
            ].map((member, index) => (
              <article
                key={member.name}
                tabIndex={0}
                className="group rounded-2xl border border-[hsl(0_0%_20%)] bg-[hsl(0_0%_12%)] backdrop-blur-sm overflow-hidden focus:outline-none focus:ring-2 focus:ring-[hsl(var(--rendr-purple))]/50 hover:border-[hsl(var(--rendr-orange))] hover:shadow-[0_8px_32px_rgba(136,61,245,0.3)] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.img}
                    alt={`${member.name}, ${member.role} at Rendr Media`}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=883DF5&color=fff&bold=true`;
                    }}
                  />
                  <span className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold bg-[hsl(var(--rendr-purple))]/90 backdrop-blur text-white border border-[hsl(var(--rendr-purple))]/30">
                    {member.badge}
                  </span>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="mt-1 text-sm text-[hsl(var(--rendr-orange))] font-medium">{member.role}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {member.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-[hsl(var(--rendr-purple))]/10 text-[hsl(var(--rendr-purple))] border border-[hsl(var(--rendr-purple))]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--rendr-gray))]">{member.bio}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <a
                      href={`tel:${member.phone}`}
                      aria-label={`Call ${member.name}`}
                      className="text-xs text-[hsl(var(--rendr-orange))] hover:text-[hsl(var(--rendr-orange))]/80 font-medium transition-colors"
                    >
                      📞 {member.phone}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-[hsl(var(--rendr-black))]">
        <div className="container mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-[hsl(var(--rendr-gray))]">
                No projects found in this category
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <Link
                  key={item.id}
                  to={`/portfolio/${item.id}`}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-[hsl(0_0%_12%)] border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-orange))] transition-all duration-300 hover:shadow-[0_8px_32px_rgba(242,178,76,0.3)]">
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-[hsl(var(--rendr-orange))]/20 to-[hsl(var(--rendr-purple))]/20">
                      <img
                        src={item.coverImage}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="inline-block mb-3">
                        <span className="text-xs font-bold text-[hsl(var(--rendr-purple))] bg-[hsl(var(--rendr-purple))]/10 px-3 py-1 rounded-full border border-[hsl(var(--rendr-purple))]/30">
                          {item.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[hsl(var(--rendr-orange))] transition-colors">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[hsl(var(--rendr-gray))] mb-4">{item.description}</p>

                      {/* Client & Date */}
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-[hsl(var(--rendr-gray))]">{item.client}</span>
                        <span className="text-[hsl(var(--rendr-gray))]">{item.date}</span>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--rendr-orange))]/0 to-[hsl(var(--rendr-purple))]/0 group-hover:from-[hsl(var(--rendr-orange))]/10 group-hover:to-[hsl(var(--rendr-purple))]/10 transition-all duration-300 pointer-events-none"></div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[hsl(var(--rendr-purple))]/10 to-[hsl(var(--rendr-orange))]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-white">Want to Be</span> <span className="text-gradient">Our Next Success Story?</span>
          </h2>
          <p className="text-xl text-[hsl(var(--rendr-gray))] mb-8 max-w-2xl mx-auto">
            Let's create something amazing together
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

export default Portfolio;
