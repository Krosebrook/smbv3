import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Palette, Zap, Award, Users } from "lucide-react";

const ShoesSection = () => {
  const shoeServices = [
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Custom Design",
      description: "Personalized shoe designs that reflect your brand identity and style preferences."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Quick Turnaround",
      description: "Fast production and delivery without compromising on quality or attention to detail."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Premium Materials",
      description: "High-quality materials and craftsmanship ensure durability and comfort."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Bulk Orders",
      description: "Scalable solutions for corporate teams, events, and promotional campaigns."
    }
  ];

  return (
    <section id="shoes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-accent mb-6">
            CUSTOM SHOES
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Step into excellence with our custom shoe solutions. From athletic footwear to corporate branding, 
            we create footwear that makes a statement and leaves a lasting impression.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {shoeServices.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-card transition-all duration-200 hover-scale">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-accent">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card rounded-brand-hero p-12 shadow-card">
          <h3 className="text-3xl font-bold text-accent mb-4">
            Ready to Create Your Custom Shoes?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            From concept to completion, we'll work with you to design the perfect custom footwear 
            that represents your brand and meets your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-cta text-primary-foreground px-10 py-4 text-lg font-bold rounded-brand-button shadow-brand hover:shadow-xl transition-all duration-200 hover-scale"
            >
              GET SHOE QUOTE
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-10 py-4 text-lg font-bold rounded-brand-button transition-all duration-200"
            >
              VIEW PORTFOLIO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoesSection;