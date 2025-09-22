import productMockup2 from "@/assets/product-mockup-2.png";
import modernWorkspace from "@/assets/modern-workspace.jpg";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <>
      {/* About Section - CODA Style */}
      <section className="py-24 bg-white relative">
        {/* Large background text like CODA */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <h2 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-bold text-gray-100 select-none">
            Your branding partner
          </h2>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-accent">
                Who we are.
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  We take pride in delivering exceptional customer service globally with 
                  zero minimum order quantities, making our services accessible to businesses of all sizes worldwide.
                </p>
                <p>
                  Our workflow: Quote → Customer Approval → In-house Production Team → Direct Fulfillment. 
                  With our dedicated production facility and ethical supply chain, we ensure products meet the highest 
                  standards while offering complete warehousing and fulfillment capabilities for on-time global delivery.
                </p>
              </div>
            </div>
            
            {/* Right content - Production Facility */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={modernWorkspace} 
                  alt="SoleMuchBetter Modern Production Workspace with Professional Equipment" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-lg flex items-end">
                <div className="p-6 text-white">
                  <p className="text-sm font-semibold">Our In-House Production Facility</p>
                  <p className="text-xs opacity-90">Quote → Approval → Production → Fulfillment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Let's discuss how SOLEMUCHBETTER can elevate your brand.
          </h2>
          <Button className="bg-primary hover:bg-primary/90 text-white px-12 py-4 text-lg font-bold rounded-none tracking-wide">
            CONTACT US
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;