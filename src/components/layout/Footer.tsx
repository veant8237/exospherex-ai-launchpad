import { Link } from "react-router-dom";
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Youtube, ArrowRight } from "lucide-react";
const footerLinks = {
  company: [{
    name: "About Us",
    path: "/about"
  }, {
    name: "Services",
    path: "/services"
  }, {
    name: "How It Works",
    path: "/how-it-works"
  }, {
    name: "Solutions",
    path: "/solutions"
  }],
  resources: [{
    name: "Why Choose Us",
    path: "/why-us"
  },  
  
  {
    name: "Contact",
    path: "/contact"
  }]
};
const socialLinks = [{
  icon: Linkedin,
  href: "#",
  label: "LinkedIn"
}, {
  icon: Twitter,
  href: "#",
  label: "Twitter"
}, {
  icon: Youtube,
  href: "#",
  label: "YouTube"
}];
export const Footer = () => {
  return <footer className="relative bg-surface-1 border-t border-border/50">
      {/* Gradient overlay */}
      <div className="absolute inset-0 radial-glow opacity-30 pointer-events-none" />

      <div className="container-custom relative">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                ExosphereX<span className="text-primary">.AI</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Empowering businesses with intelligent AI automation solutions. Scale faster, work smarter, grow exponentially.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(social => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300" aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </a>)}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <a href="mailto:info@exospherexai.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  info@exospherexai.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">India

              </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ExosphereX A.I. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};