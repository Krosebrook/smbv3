import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, CheckCircle, Factory, Package } from "lucide-react";
import businessEvent from "@/assets/business-event.jpg";

const steps = [
  {
    icon: MessageSquare,
    title: "Get Quote",
    description: "Contact us with your custom branding needs. We'll provide a detailed quote with no geographic restrictions.",
    step: "01"
  },
  {
    icon: CheckCircle,
    title: "Customer Approval",
    description: "Review and approve your custom design and quote. Make any necessary adjustments with our team.",
    step: "02"
  },
  {
    icon: Factory,
    title: "In-House Production",
    description: "Our dedicated production team creates your branded merchandise with quality control at every step.",
    step: "03"
  },
  {
    icon: Package,
    title: "Our Fulfillment",
    description: "Final Products are processed through our system and shipped globally to your location.",
    step: "04"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50 relative">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <h2 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-gray-200 select-none">
          workflow
        </h2>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
            How it works.
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our streamlined process ensures your custom branded merchandise is delivered efficiently, 
            anywhere in the world.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                <CardHeader className="text-center pb-4">
                  <div className="absolute -top-4 -right-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold text-accent leading-tight">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Production Facility Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-accent">
              Our Production Advantage.
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                With our dedicated in-house production facility, we maintain complete control over 
                quality, timing, and customization. No outsourcing means faster turnaround and 
                consistent results.
              </p>
              <p>
                Our team of skilled professionals uses state-of-the-art equipment to bring your 
                branded vision to life, backed by our partnership with FlashFusion technology.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={businessEvent} 
                alt="SoleMuchBetter Corporate Event and Networking Experience" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute inset-0 bg-black/30 rounded-lg flex items-end">
              <div className="p-6 text-white">
                <p className="text-sm font-semibold">Corporate Events & Networking</p>
                <p className="text-xs opacity-90">Building brands through professional gatherings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;