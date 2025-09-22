import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import brandLogo from "@/assets/brand-logo-main.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "SUPPLY CHAIN", href: "#supply-chain" },
    { label: "BLOG", href: "#blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={brandLogo} alt="SoleMuchBetter Branding Solutions - Women-owned corporate branding company logo" className="h-8 w-auto" />
            <div className="text-xl font-bold">
              <span className="text-white">SOLEMUCHBETTER</span>
              <div className="text-sm text-white/70 font-normal">Branding Solutions</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-primary transition-colors duration-200 font-medium text-sm tracking-wide focus:outline-none focus:ring-2 focus:ring-primary focus:rounded px-2 py-1"
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-none font-bold tracking-wide">
              CONTACT US
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:rounded p-1"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white hover:text-primary transition-colors duration-200 font-medium text-sm tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-none font-bold tracking-wide w-fit">
                CONTACT US
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;