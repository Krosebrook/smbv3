import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Calendar, Users, Briefcase, Trophy } from "lucide-react";
import businessEvent from "@/assets/business-event.jpg";

const EventsSection = () => {
  const eventServices = [
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Corporate Events",
      description: "Professional event planning and execution with branded experiences that engage your audience."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Building",
      description: "Custom team building activities designed to strengthen relationships and boost morale."
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Product Launches",
      description: "Memorable product launch events that create buzz and drive engagement with your brand."
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "Award Ceremonies",
      description: "Prestigious award ceremonies and recognition events that honor achievements and inspire excellence."
    }
  ];

  return (
    <section id="events" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-accent mb-6">
            CORPORATE EVENTS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Create unforgettable experiences with our comprehensive event planning services. 
            From intimate corporate gatherings to large-scale brand activations, we bring your vision to life.
          </p>
        </div>

        {/* Services Grid & Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {eventServices.map((service, index) => (
              <Card key={index} className="border-border hover:shadow-card transition-all duration-200 hover-scale">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    {service.icon}
                    <CardTitle className="text-lg text-accent">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Event Image */}
          <div className="relative">
            <div className="relative rounded-brand-hero overflow-hidden shadow-elegant">
              <img 
                src={businessEvent} 
                alt="Corporate Event Setup" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-bold shadow-brand">
              Professional Events
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Events Executed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Corporate Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Event Support</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card rounded-brand-hero p-12 shadow-card">
          <h3 className="text-3xl font-bold text-accent mb-4">
            Let's Plan Your Next Corporate Event
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether it's a product launch, team building retreat, or corporate celebration, 
            we'll create an event that perfectly represents your brand and exceeds your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-cta text-primary-foreground px-10 py-4 text-lg font-bold rounded-brand-button shadow-brand hover:shadow-xl transition-all duration-200 hover-scale"
            >
              PLAN AN EVENT
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-10 py-4 text-lg font-bold rounded-brand-button transition-all duration-200"
            >
              VIEW PAST EVENTS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;