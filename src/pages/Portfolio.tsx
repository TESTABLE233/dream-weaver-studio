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
