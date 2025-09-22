import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for small teams and pilot projects",
    features: [
      "Up to 5 custom designs per month",
      "Basic AI mockup generation",
      "Standard shipping options",
      "Email support",
      "Basic analytics"
    ],
    cta: "Get Started Free",
    popular: false
  },
  {
    name: "Professional",
    price: "$299",
    period: "/month",
    description: "Ideal for growing businesses and marketing teams",
    features: [
      "Unlimited custom designs",
      "Advanced AI with brand learning",
      "Priority production & shipping",
      "Territory management",
      "Advanced analytics & reporting",
      "Dedicated account manager",
      "Custom approval workflows"
    ],
    cta: "Start Professional Trial",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale solution for large organizations",
    features: [
      "Everything in Professional",
      "White-label platform",
      "Custom integrations",
      "Advanced security & compliance",
      "24/7 phone support",
      "Custom SLAs",
      "Volume discounting"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Scale as you grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative border-0 shadow-card transition-all duration-300 hover:shadow-brand hover:-translate-y-1 ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-white px-6 py-2 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-accent-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "default" : "outline"} 
                  className="w-full" 
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All plans include free setup and onboarding support
          </p>
          <p className="text-sm text-muted-foreground">
            Need a custom solution? <a href="#contact" className="text-primary hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;