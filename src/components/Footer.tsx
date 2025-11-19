import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(0_0%_8%)] border-t border-[hsl(0_0%_20%)]">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img 
              src="/logo.png" 
              alt="Rendr Media Logo" 
              className="h-10 w-auto"
            />
            <p className="text-sm text-[hsl(var(--rendr-gray))]">
              Passion Rendered for Your Brand. Bold creativity that makes an impact.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/rendr_media?igsh=MTZ3dmVvdXBoNDNyNg=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[hsl(0_0%_12%)] border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-orange))] flex items-center justify-center transition-all duration-300 hover:shadow-[0_4px_16px_rgba(242,178,76,0.3)]"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/rendrmedia2025"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[hsl(0_0%_12%)] border border-[hsl(0_0%_20%)] hover:border-[hsl(var(--rendr-purple))] flex items-center justify-center transition-all duration-300 hover:shadow-[0_4px_16px_rgba(136,61,245,0.3)]"
              >
                <Linkedin size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-[hsl(var(--rendr-gray))] hover:text-[hsl(var(--rendr-orange))] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-[hsl(var(--rendr-gray))] hover:text-[hsl(var(--rendr-orange))] transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-[hsl(var(--rendr-gray))] hover:text-[hsl(var(--rendr-orange))] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-[hsl(var(--rendr-gray))] hover:text-[hsl(var(--rendr-orange))] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-[hsl(var(--rendr-gray))] hover:text-[hsl(var(--rendr-orange))] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-[hsl(var(--rendr-gray))]">Branding & Identity</li>
              <li className="text-sm text-[hsl(var(--rendr-gray))]">Graphic Design</li>
              <li className="text-sm text-[hsl(var(--rendr-gray))]">Photography</li>
              <li className="text-sm text-[hsl(var(--rendr-gray))]">Videography</li>
              <li className="text-sm text-[hsl(var(--rendr-gray))]">UI/UX Design</li>
              <li className="text-sm text-[hsl(var(--rendr-gray))]">Digital Marketing</li>
              <li className="text-sm text-[hsl(var(--rendr-gray))]">Event Management</li>
              <li className="text-sm text-[hsl(var(--rendr-gray))]">Sound & Light Production</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-[hsl(var(--rendr-gray))]">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[hsl(var(--rendr-purple))]" />
                <span>Soorya P-8,Vishwambharan Rd, Pappanamcode, Trivandrum</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-[hsl(var(--rendr-gray))]">
                <Mail size={18} className="flex-shrink-0 text-[hsl(var(--rendr-orange))]" />
                <a href="mailto:rendrmedia2025@gmail.com" className="hover:text-[hsl(var(--rendr-orange))] transition-colors">
                  rendrmedia2025@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-[hsl(var(--rendr-gray))]">
                <Phone size={18} className="flex-shrink-0 text-[hsl(var(--rendr-red))]" />
                <a href="tel:+919562842489" className="hover:text-[hsl(var(--rendr-orange))] transition-colors">
                  +91 (956) 284-2489
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[hsl(0_0%_20%)]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[hsl(var(--rendr-gray))]">
              © {currentYear} Rendr Media. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-[hsl(var(--rendr-gray))] hover:text-[hsl(var(--rendr-orange))] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-[hsl(var(--rendr-gray))] hover:text-[hsl(var(--rendr-orange))] transition-colors">
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
