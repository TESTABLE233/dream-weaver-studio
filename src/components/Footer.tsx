import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                Rendr
              </div>
              <div className="text-2xl font-light">Media</div>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Passion Rendered for Your Brand. We bring creative visions to life through design, branding, and digital marketing.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-foreground/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-secondary-foreground/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-secondary-foreground/80">Branding & Identity</li>
              <li className="text-sm text-secondary-foreground/80">UI/UX Design</li>
              <li className="text-sm text-secondary-foreground/80">Video Production</li>
              <li className="text-sm text-secondary-foreground/80">Photography</li>
              <li className="text-sm text-secondary-foreground/80">Digital Marketing</li>
              <li className="text-sm text-secondary-foreground/80">Social Media</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-secondary-foreground/80">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-secondary-foreground/80">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:hello@rendrmedia.com" className="hover:text-primary transition-colors">
                  hello@rendrmedia.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-secondary-foreground/80">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/60">
              © {currentYear} Rendr Media. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
