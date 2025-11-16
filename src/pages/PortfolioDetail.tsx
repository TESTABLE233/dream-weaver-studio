import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { portfolioProjects } from "@/data/portfolio";

const PortfolioDetail = () => {
  const { id } = useParams();
  const project = portfolioProjects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/portfolio">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Back Button */}
        <Link to="/portfolio">
          <Button variant="outline" className="mb-8 hover:bg-primary hover:text-primary-foreground">
            <ArrowLeft className="mr-2" size={20} />
            Back to Portfolio
          </Button>
        </Link>

        {/* Hero Image */}
        <div className="relative h-[60vh] rounded-2xl overflow-hidden mb-12 animate-fade-in">
          <img 
            src={project.coverImage} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <Badge className="mb-4 bg-primary">{project.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
            <p className="text-xl">Client: {project.client}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12 animate-fade-in-delay">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.fullDescription}
              </p>
            </section>

            {/* Goal */}
            <section>
              <h2 className="text-3xl font-bold mb-4">Project Goal</h2>
              <Card className="border-l-4 border-primary">
                <CardContent className="p-6">
                  <p className="text-lg">{project.goal}</p>
                </CardContent>
              </Card>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative h-80 rounded-xl overflow-hidden group cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-colors duration-300 flex items-center justify-center">
                      <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 animate-fade-in-delay">
            {/* Deliverables */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Deliverables</h3>
                <ul className="space-y-2">
                  {project.deliverables.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-primary">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Tools Used */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Tools Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-hero text-white border-none">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-3">Like What You See?</h3>
                <p className="mb-6">Let's create something amazing for your brand too.</p>
                <Link to="/contact">
                  <Button className="w-full bg-white text-secondary hover:bg-white/90">
                    Start Your Project
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
