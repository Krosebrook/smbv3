import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Zap, Shield, Truck, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "AI-Powered Design",
    description: "Advanced AI creates mockups and designs tailored to your brand guidelines in seconds."
  },
  {
    icon: Zap,
    title: "Instant Customization",
    description: "Real-time product customization with live previews and brand compliance checks."
  },
  {
    icon: Shield,
    title: "Brand Protection",
    description: "Automated brand guideline enforcement ensures consistency across all merchandise."
  },
  {
    icon: Truck,
    title: "Global Fulfillment",
    description: "Worldwide shipping network with quality control and tracking at every step."
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Comprehensive insights into order patterns, popular products, ROI metrics."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Multi-level approval workflows with territory management and coordination."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Why Choose SoleMuchBetter?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to create, manage, and deliver exceptional branded merchandise 
            that elevates your company's professional image.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-shadow-card hover:shadow-shadow-elegant transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 bg-gradient-cta rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-accent mb-3">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;