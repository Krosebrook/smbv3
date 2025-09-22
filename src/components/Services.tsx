import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Zap, Shield, Truck, BarChart3, Users, Store, Factory } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Custom Branded Products",
    description: "SOLEMUCHBETTER offers endless branding possibilities for any product you can imagine—from drinkware, pens, and bags to custom shoes, bikes, and even snowboards. If you can dream it, SOLEMUCHBETTER can make it!"
  },
  {
    icon: Users,
    title: "Corporate Gifting Solutions", 
    description: "SOLEMUCHBETTER elevates your brand's impact with personalized corporate gifts designed to foster stronger relationships with clients and employees."
  },
  {
    icon: Shield,
    title: "Uniform Programs",
    description: "SOLEMUCHBETTER's elevated uniforms create a cohesive, professional look for your team, promoting brand consistency across all locations and departments."
  },
  {
    icon: Store,
    title: "Corporate Webstore Programs",
    description: "SOLEMUCHBETTER's corporate webstore portals simplify the ordering process for branded merchandise, offering seamless integration and complete custom reporting."
  },
  {
    icon: Zap,
    title: "On-Site Experience Events",
    description: "SOLEMUCHBETTER creates immersive on-site experience events that allow your brand to connect directly with customers and employees."
  },
  {
    icon: Factory,
    title: "Factory Direct Importing",
    description: "SOLEMUCHBETTER sources products directly from global manufacturers with factory direct importing, providing cost effective solutions with full control over product customization."
  },
  {
    icon: BarChart3,
    title: "Decorate-on Demand",
    description: "SOLEMUCHBETTER's decorate-on-demand solution allows for flexible, on-the-go customization, minimizing inventory costs and offering rapid response to market demand."
  },
  {
    icon: Truck,
    title: "Warehousing and Fulfillment",
    description: "SOLEMUCHBETTER handles everything from storage to delivery, ensuring your products are bundled and shipped on time."
  }
];

const Services = () => {
  return (
    <>
      {/* What We Do Section - CODA Style */}
      <section className="py-24 bg-white relative">
        {/* Large background text like CODA */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <h2 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-bold text-gray-100 select-none">
            custom branding
          </h2>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              What we do.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              At SOLEMUCHBETTER Branding Solutions, we specialize in helping businesses worldwide create lasting impressions 
              through comprehensive branding services. From custom promotional products and corporate gifting to employee 
              uniform programs and corporate webstores - we deliver globally with our streamlined production workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-gray-50 relative">
        {/* Large background text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <h2 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-gray-200 select-none">
            branding solutions
          </h2>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-accent mb-6">
              Services and benefits.
            </h3>
            <p className="text-xl text-gray-700">
              SOLEMUCHBETTER takes pride in delivering exceptional customer service globally with zero geographic restrictions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-bold text-accent leading-tight">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;