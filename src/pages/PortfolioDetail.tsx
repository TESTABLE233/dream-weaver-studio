import { useParams, Link } from "react-router-dom";
import { portfolioItems } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = portfolioItems.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/portfolio">Back to Portfolio</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost" className="text-[hsl(var(--rendr-orange))] hover:text-[hsl(var(--rendr-orange))]/80">
          <Link to="/portfolio" className="flex items-center space-x-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[hsl(var(--rendr-black))] to-[hsl(0_0%_12%)]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            {/* Category Badge */}
            <div className="inline-block mb-6">
              <span className="text-sm font-bold text-[hsl(var(--rendr-purple))] bg-[hsl(var(--rendr-purple))]/10 px-4 py-2 rounded-full border border-[hsl(var(--rendr-purple))]/30">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-gradient">{project.title}</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-[hsl(var(--rendr-gray))] mb-8">{project.description}</p>

            {/* Meta Info */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div>
                <span className="text-[hsl(var(--rendr-gray))]">Client:</span>
                <span className="text-white font-bold ml-2">{project.client}</span>
              </div>
              <div>
                <span className="text-[hsl(var(--rendr-gray))]">Date:</span>
                <span className="text-white font-bold ml-2">{project.date}</span>
              </div>
              <div>
                <span className="text-[hsl(var(--rendr-gray))]">Category:</span>
                <span className="text-white font-bold ml-2">{project.category}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover Image */}
      <section className="py-8 bg-[hsl(var(--rendr-black))]">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden border border-[hsl(0_0%_20%)] shadow-[0_8px_32px_rgba(136,61,245,0.2)] animate-scale-in">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full aspect-video object-cover"
            />
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16 bg-[hsl(var(--rendr-black))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Challenge */}
            <div className="animate-fade-in">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-1 h-12 bg-[hsl(var(--rendr-red))]"></div>
                <h2 className="text-3xl md:text-4xl font-black text-white">The Challenge</h2>
              </div>
              <p className="text-lg text-[hsl(var(--rendr-gray))] leading-relaxed pl-7">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="animate-fade-in-delay">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-1 h-12 bg-[hsl(var(--rendr-purple))]"></div>
                <h2 className="text-3xl md:text-4xl font-black text-white">Our Solution</h2>
              </div>
              <p className="text-lg text-[hsl(var(--rendr-gray))] leading-relaxed pl-7">
                {project.solution}
              </p>
            </div>

            {/* Tools Used */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-1 h-12 bg-[hsl(var(--rendr-orange))]"></div>
                <h2 className="text-3xl md:text-4xl font-black text-white">Tools & Technologies</h2>
              </div>
              <div className="flex flex-wrap gap-3 pl-7">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-[hsl(0_0%_12%)] border border-[hsl(var(--rendr-orange))]/30 text-[hsl(var(--rendr-orange))] px-4 py-2 rounded-lg font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Gallery */}
            {project.images.length > 0 && (
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-1 h-12 bg-[hsl(var(--rendr-purple))]"></div>
                  <h2 className="text-3xl md:text-4xl font-black text-white">Project Gallery</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6 pl-7">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="rounded-xl overflow-hidden border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-purple))] transition-all duration-300"
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full aspect-video object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-1 h-12 bg-[hsl(var(--rendr-orange))]"></div>
                <h2 className="text-3xl md:text-4xl font-black text-white">Results & Impact</h2>
              </div>
              <div className="space-y-4 pl-7">
                {project.results.map((result, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-[hsl(var(--rendr-orange))] flex-shrink-0 mt-1" />
                    <p className="text-lg text-[hsl(var(--rendr-gray))]">{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[hsl(var(--rendr-purple))]/10 to-[hsl(var(--rendr-orange))]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-white">Ready for</span> <span className="text-gradient">Similar Results?</span>
          </h2>
          <p className="text-xl text-[hsl(var(--rendr-gray))] mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your brand achieve its goals
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[hsl(var(--rendr-purple))] hover:bg-[hsl(var(--rendr-purple))]/90 text-white font-bold text-lg px-12 py-6 shadow-[0_8px_24px_rgba(136,61,245,0.5)]"
            >
              <Link to="/contact">Start Your Project</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[hsl(var(--rendr-orange))] text-[hsl(var(--rendr-orange))] hover:bg-[hsl(var(--rendr-orange))] hover:text-black font-bold text-lg px-12 py-6"
            >
              <Link to="/portfolio">View More Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioDetail;
