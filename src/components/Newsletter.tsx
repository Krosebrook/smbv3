import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowRight } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        variant: "destructive",
        title: "Invalid email",
        description: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our latest branding insights and tips.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Subscription failed",
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <Mail className="w-12 h-12 text-white mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Stay Updated with Branding Insights
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest tips, trends, and case studies delivered to your inbox. 
            Join thousands of business leaders elevating their brands.
          </p>
          
          <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="w-full bg-white text-primary hover:bg-white/90 font-semibold hover-scale"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-2"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
              
              <p className="text-white/60 text-xs mt-3">
                No spam, unsubscribe anytime. Privacy policy applies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;