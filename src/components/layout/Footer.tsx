import { Link } from "react-router-dom";
import { Zap, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl text-foreground">
                Appliances<span className="gradient-text">Help</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              India's most trusted appliance repair service. We bring your home back to life with expert technicians and guaranteed satisfaction.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-primary">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-5">Navigation</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-5">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">+91-9876543210</span>
                </a>
              </li>
              <li>
                <a href="mailto:help@applianceshelp.in" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">help@applianceshelp.in</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Mumbai, Delhi, Bangalore & 50+ cities across India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} AppliancesHelp. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
