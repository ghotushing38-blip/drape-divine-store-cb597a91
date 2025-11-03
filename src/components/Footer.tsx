import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("🌸 Thank you for subscribing to SareeVastra!");
  };

  return (
    <footer className="bg-card border-t border-border mt-20 pattern-mandala">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SareeVastra
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Grace in Every Drape – Discover timeless Indian sarees that blend tradition with elegance.
            </p>
            <div className="flex space-x-3">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="bg-muted hover:bg-primary hover:text-primary-foreground transition-all p-2 rounded-full hover-lift"
                  aria-label={Icon.name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Shop", "About", "Contact", "Wishlist"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Customer Service</h4>
            <ul className="space-y-2">
              {["Track Order", "Returns & Exchange", "Shipping Info", "Size Guide", "FAQ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-foreground">Stay Updated</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe for exclusive offers and new arrivals
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background"
                required
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground hover:shadow-gold"
              >
                Subscribe
              </Button>
            </form>
            
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4 text-secondary" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4 text-secondary" />
                <span>hello@sareevastra.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Surat, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-ethnic"></div>

        {/* Payment Methods & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-8">
          <p className="text-muted-foreground text-sm">
            © 2025 SareeVastra. All rights reserved. Crafted with 💛 in India.
          </p>
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground text-sm">We Accept:</span>
            <div className="flex space-x-2 opacity-70">
              {["VISA", "MC", "UPI", "PayPal"].map((method) => (
                <div
                  key={method}
                  className="bg-muted px-3 py-1 rounded text-xs font-semibold text-muted-foreground"
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
