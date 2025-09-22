import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Enterprise", href: "/enterprise" },
        { label: "API Documentation", href: "/docs" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Press", href: "/press" },
        { label: "Blog", href: "/blog" },
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "/help" },
        { label: "Contact Sales", href: "#contact" },
        { label: "Status Page", href: "/status" },
        { label: "Community", href: "/community" },
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Security", href: "/security" },
        { label: "Compliance", href: "/compliance" },
      ]
    }
  ];

  return (
    <footer className="bg-secondary-foreground text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="text-3xl font-bold mb-4">
                <span className="text-primary">Sole</span>
                <span className="text-white">MuchBetter</span>
              </div>
              <p className="text-white/70 leading-relaxed">
                Transforming corporate merchandise with AI-powered customization. 
                Create branded products that leave lasting impressions.
              </p>
            </div>
            
            <div className="space-y-3">
            <div className="flex items-center gap-3 text-white/70">
              <Mail className="w-5 h-5 text-primary" />
              <span>hello@solemuchbetter.com</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <Phone className="w-5 h-5 text-primary" />
              <span>1-800-SOLE-BETTER</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Global Service Available</span>
            </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-white text-lg">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-white/70 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded"
                      aria-label={`Navigate to ${link.label}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-12 bg-white/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright & Disclaimer */}
          <div className="text-white/60 text-sm space-y-1">
            <div>© 2024 SoleMuchBetter LLC. All rights reserved.</div>
            <div className="text-xs">
              Powered by <a href="https://flashfusion.co" className="text-primary hover:text-primary/80" target="_blank" rel="noopener noreferrer">FlashFusion.co</a>
            </div>
            <div className="text-xs text-white/40">
              SoleMuchBetter operates independently and is not directly affiliated with any other entities, except for our sister company relationship with FlashFusion.
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-primary hover:bg-white/10">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-primary hover:bg-white/10">
              <Twitter className="w-5 h-5" />
            </Button>
          </div>

          {/* Newsletter signup */}
          <div className="flex items-center gap-3">
            <span className="text-white/70 text-sm">Stay updated:</span>
            <Button variant="outline" size="sm" className="bg-transparent border-white/30 text-white hover:bg-white hover:text-secondary-foreground">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;