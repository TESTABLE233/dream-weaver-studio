import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service_type: formData.serviceType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.description,
          subject: "New Project Enquiry from Rendr Media Website",
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you! We'll get back to you within 24 hours.", {
          description: "Your project enquiry has been received.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          serviceType: "",
          budget: "",
          timeline: "",
          description: "",
        });
        setStep(1);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  const nextStep = () => {
    if (step === 1 && (!formData.name || !formData.email || !formData.phone)) {
      toast.error("Please fill in all required fields");
      return;
    }
    if (step === 2 && (!formData.serviceType || !formData.budget)) {
      toast.error("Please fill in all required fields");
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-[hsl(var(--rendr-black))] to-[hsl(0_0%_12%)]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-fade-in">
            <span className="text-white">Let's</span> <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-xl text-[hsl(var(--rendr-gray))] max-w-3xl mx-auto animate-fade-in-delay">
            Ready to bring your vision to life? Get in touch and let's create something amazing
          </p>
        </div>
      </section>

      <section className="py-16 bg-[hsl(var(--rendr-black))]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-black text-white mb-6">Get in Touch</h2>
                <p className="text-lg text-[hsl(var(--rendr-gray))] mb-8">
                  Have a project in mind? Fill out the form and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--rendr-orange))]/10 border border-[hsl(var(--rendr-orange))]/30 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[hsl(var(--rendr-orange))]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                    <p className="text-[hsl(var(--rendr-gray))]">hello@rendrmedia.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--rendr-purple))]/10 border border-[hsl(var(--rendr-purple))]/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[hsl(var(--rendr-purple))]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                    <p className="text-[hsl(var(--rendr-gray))]">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-[hsl(var(--rendr-red))]/10 border border-[hsl(var(--rendr-red))]/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[hsl(var(--rendr-red))]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                    <p className="text-[hsl(var(--rendr-gray))]">123 Creative Street, Design City, DC 12345</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {["Instagram", "LinkedIn", "Twitter", "Facebook"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-12 h-12 rounded-lg bg-[hsl(0_0%_12%)] border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-orange))] flex items-center justify-center transition-all duration-300 hover:shadow-[0_4px_16px_rgba(242,178,76,0.3)]"
                    >
                      <span className="text-white text-sm font-bold">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Multi-Step Form */}
            <div className="bg-[hsl(0_0%_12%)] rounded-2xl p-8 border border-[hsl(0_0%_20%)] animate-fade-in-delay">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                        step >= s
                          ? "bg-[hsl(var(--rendr-purple))] text-white"
                          : "bg-[hsl(0_0%_20%)] text-[hsl(var(--rendr-gray))]"
                      }`}
                    >
                      {s}
                    </div>
                    {s < 3 && (
                      <div
                        className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                          step > s ? "bg-[hsl(var(--rendr-purple))]" : "bg-[hsl(0_0%_20%)]"
                        }`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Basic Info */}
                {step === 1 && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-2xl font-bold text-white mb-4">Your Information</h3>
                    
                    <div>
                      <Label htmlFor="name" className="text-white">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="bg-[hsl(0_0%_8%)] border-[hsl(0_0%_30%)] text-white focus:border-[hsl(var(--rendr-orange))] focus:ring-[hsl(var(--rendr-orange))]"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-white">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-[hsl(0_0%_8%)] border-[hsl(0_0%_30%)] text-white focus:border-[hsl(var(--rendr-orange))] focus:ring-[hsl(var(--rendr-orange))]"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-white">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-[hsl(0_0%_8%)] border-[hsl(0_0%_30%)] text-white focus:border-[hsl(var(--rendr-orange))] focus:ring-[hsl(var(--rendr-orange))]"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-white">Company/Brand</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="bg-[hsl(0_0%_8%)] border-[hsl(0_0%_30%)] text-white focus:border-[hsl(var(--rendr-orange))] focus:ring-[hsl(var(--rendr-orange))]"
                      />
                    </div>

                    <Button
                      type="button"
                      onClick={nextStep}
                      className="w-full bg-[hsl(var(--rendr-purple))] hover:bg-[hsl(var(--rendr-purple))]/90 text-white font-bold"
                    >
                      Next Step
                    </Button>
                  </div>
                )}

                {/* Step 2: Project Details */}
                {step === 2 && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-2xl font-bold text-white mb-4">Project Details</h3>
                    
                    <div>
                      <Label htmlFor="serviceType" className="text-white">Service Type *</Label>
                      <Select value={formData.serviceType} onValueChange={(value) => handleInputChange("serviceType", value)}>
                        <SelectTrigger className="bg-[hsl(0_0%_8%)] border-[hsl(0_0%_30%)] text-white">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="branding">Branding & Identity</SelectItem>
                          <SelectItem value="design">Graphic Design</SelectItem>
                          <SelectItem value="photography">Photography</SelectItem>
                          <SelectItem value="videography">Videography</SelectItem>
                          <SelectItem value="uiux">UI/UX Design</SelectItem>
                          <SelectItem value="marketing">Digital Marketing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="budget" className="text-white">Budget Range *</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="bg-[hsl(0_0%_8%)] border-[hsl(0_0%_30%)] text-white">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-plus">$50,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="timeline" className="text-white">Timeline</Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger className="bg-[hsl(0_0%_8%)] border-[hsl(0_0%_30%)] text-white">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="urgent">ASAP (1-2 weeks)</SelectItem>
                          <SelectItem value="soon">Soon (1 month)</SelectItem>
                          <SelectItem value="flexible">Flexible (2-3 months)</SelectItem>
                          <SelectItem value="planning">Just Planning</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        type="button"
                        onClick={prevStep}
                        variant="outline"
                        className="flex-1 border-[hsl(0_0%_30%)] text-white hover:bg-[hsl(0_0%_20%)]"
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="flex-1 bg-[hsl(var(--rendr-purple))] hover:bg-[hsl(var(--rendr-purple))]/90 text-white font-bold"
                      >
                        Next Step
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Project Description */}
                {step === 3 && (
                  <div className="space-y-4 animate-fade-in">
                    <h3 className="text-2xl font-bold text-white mb-4">Tell Us More</h3>
                    
                    <div>
                      <Label htmlFor="description" className="text-white">Project Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        rows={6}
                        placeholder="Tell us about your project, goals, and vision..."
                        className="bg-[hsl(0_0%_8%)] border-[hsl(0_0%_30%)] text-white focus:border-[hsl(var(--rendr-orange))] focus:ring-[hsl(var(--rendr-orange))]"
                      />
                    </div>

                    <div className="flex space-x-4">
                      <Button
                        type="button"
                        onClick={prevStep}
                        variant="outline"
                        className="flex-1 border-[hsl(0_0%_30%)] text-white hover:bg-[hsl(0_0%_20%)]"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-[hsl(var(--rendr-purple))] hover:bg-[hsl(var(--rendr-purple))]/90 text-white font-bold shadow-[0_8px_24px_rgba(136,61,245,0.5)] group"
                      >
                        <span>Submit Enquiry</span>
                        <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
