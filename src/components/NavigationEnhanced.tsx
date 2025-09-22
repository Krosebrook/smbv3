import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import brandLogoMain from "@/assets/brand-logo-main.png";

const NavigationEnhanced = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("SHOES");

  const navTabs = [
    { label: "SHOES", href: "#shoes" },
    { label: "EVENTS", href: "#events" },
    { label: "ABOUT US", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleSmoothScroll = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/98 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={brandLogoMain} 
              alt="SoleMuchBetter Logo" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-accent">SoleMuchBetter</h1>
              <p className="text-sm text-muted-foreground">Step Into The Brand Experience</p>
            </div>
          </div>

          {/* Desktop Navigation - Red Tabs */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navTabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => {
                  setActiveTab(tab.label);
                  handleSmoothScroll(tab.href);
                }}
                className={`px-6 py-3 rounded-t-lg font-bold text-sm transition-all duration-200 ${
                  activeTab === tab.label
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-accent hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-accent hover:text-primary"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <nav className="px-4 py-4 space-y-2">
              {navTabs.map((tab) => (
                <button
                  key={tab.label}
                  onClick={() => {
                    setActiveTab(tab.label);
                    handleSmoothScroll(tab.href);
                  }}
                  className={`block w-full text-left py-3 px-4 rounded-lg font-bold transition-all ${
                    activeTab === tab.label
                      ? "bg-primary text-primary-foreground"
                      : "text-accent hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavigationEnhanced;