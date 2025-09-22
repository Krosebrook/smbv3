import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Building2, Users, Award } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    position: "Marketing Director",
    company: "TechFlow Solutions",
    rating: 5,
    content: "SoleMuchBetter transformed our corporate gifting program. The quality and attention to detail exceeded our expectations. Our clients love the custom branded items, and it's significantly strengthened our business relationships.",
    logo: "TF"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    position: "CEO",
    company: "GreenSpace Industries",
    rating: 5,
    content: "Working with SoleMuchBetter was a game-changer for our employee engagement initiatives. The custom uniforms and branded merchandise created a sense of unity and pride across all our locations.",
    logo: "GS"
  },
  {
    id: 3,
    name: "Jennifer Chen",
    position: "HR Manager",
    company: "Innovate Corp",
    rating: 5,
    content: "The team at SoleMuchBetter understood our vision perfectly. From initial concept to final delivery, the process was seamless. The quality of our promotional products is outstanding.",
    logo: "IC"
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Brand Manager",
    company: "Summit Financial",
    rating: 5,
    content: "Exceptional service and premium quality products. SoleMuchBetter helped us create a cohesive brand experience that resonates with our clients. Highly recommend their expertise.",
    logo: "SF"
  },
  {
    id: 5,
    name: "Lisa Park",
    position: "Operations Director",
    company: "Coastal Enterprises",
    rating: 5,
    content: "Their warehousing and fulfillment services are top-notch. We've streamlined our entire promotional product distribution process thanks to SoleMuchBetter's comprehensive solutions.",
    logo: "CE"
  },
  {
    id: 6,
    name: "Robert Kim",
    position: "Marketing VP",
    company: "Urban Dynamics",
    rating: 5,
    content: "The on-site experience events they created for us were incredible. The branded activations generated significant buzz and helped us connect with our target audience in meaningful ways.",
    logo: "UD"
  }
];

const stats = [
  {
    icon: Building2,
    value: "500+",
    label: "Happy Clients",
    description: "Businesses trust us with their branding"
  },
  {
    icon: Users,
    value: "50K+",
    label: "Products Delivered",
    description: "Custom branded items created"
  },
  {
    icon: Award,
    value: "98%",
    label: "Satisfaction Rate",
    description: "Client satisfaction guarantee"
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
    description: "Based on client reviews"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See what business leaders across industries 
            are saying about their experience with SoleMuchBetter.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-lg transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="font-semibold text-foreground mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="hover:shadow-xl transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="font-bold text-primary">{testimonial.logo}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      <div className="text-sm font-medium text-primary">{testimonial.company}</div>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["TechFlow", "GreenSpace", "Innovate", "Summit", "Coastal", "Urban"].map((company) => (
              <Badge key={company} variant="outline" className="px-4 py-2 text-sm">
                {company}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;