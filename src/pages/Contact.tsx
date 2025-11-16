import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  const services = [
    "Branding & Identity",
    "UI/UX Design",
    "Video Production",
    "Photography",
    "Digital Marketing",
    "Social Media Management",
    "Other"
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Let's Create Something <span className="bg-gradient-accent bg-clip-text text-transparent">Amazing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project and let's bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6 animate-fade-in-delay">
            <Card className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-accent rounded-lg text-white group-hover:shadow-glow transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Email Us</h3>
                    <a href="mailto:hello@rendrmedia.com" className="text-muted-foreground hover:text-primary transition-colors">
                      hello@rendrmedia.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-accent rounded-lg text-white group-hover:shadow-glow transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Call Us</h3>
                    <a href="tel:+919876543210" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-accent rounded-lg text-white group-hover:shadow-glow transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Mumbai, Maharashtra<br />
                      India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="bg-gradient-hero text-white border-none">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Quick Response Time</h3>
                <p className="text-white/90 mb-4">
                  We typically respond within 2 hours during business hours (Mon-Sat, 10 AM - 7 PM IST).
                </p>
                <p className="text-sm text-white/80">
                  For urgent inquiries, please call us directly.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in">
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        required 
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        required
                        className="border-border focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+91 98765 43210"
                        className="border-border focus:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company / Brand</Label>
                      <Input 
                        id="company" 
                        placeholder="Your Company"
                        className="border-border focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed *</Label>
                      <Select required>
                        <SelectTrigger id="service" className="border-border">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service.toLowerCase()}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range</Label>
                      <Select>
                        <SelectTrigger id="budget" className="border-border">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                          <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                          <SelectItem value="1l-3l">₹1,00,000 - ₹3,00,000</SelectItem>
                          <SelectItem value="3l-plus">₹3,00,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <Select>
                      <SelectTrigger id="timeline" className="border-border">
                        <SelectValue placeholder="When do you need this?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="urgent">Urgent (Within 2 weeks)</SelectItem>
                        <SelectItem value="1-month">1 Month</SelectItem>
                        <SelectItem value="2-3-months">2-3 Months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      rows={6}
                      required
                      className="border-border focus:ring-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-accent hover:shadow-glow text-lg py-6 h-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
