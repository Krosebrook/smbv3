import brandLogoMain from "@/assets/brand-logo-main.png";
import brandLogoRed from "@/assets/brand-logo-red.png";
import brandLogoNeon from "@/assets/brand-logo-neon.png";
import brandLogoVintage from "@/assets/brand-logo-vintage.png";

const BrandShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <h2 className="text-[6rem] md:text-[10rem] lg:text-[14rem] font-bold text-gray-100 select-none rotate-12 opacity-30">
          BRAND
        </h2>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
            Your Brand. Our Vision.
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From traditional to modern, we create branded merchandise that tells your unique story 
            across every touchpoint of your business.
          </p>
        </div>

        {/* Logo Variations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-square flex items-center justify-center mb-4">
              <img 
                src={brandLogoMain} 
                alt="SoleMuchBetter Classic Logo - Professional Branding" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-center text-accent">Classic Professional</h3>
            <p className="text-sm text-gray-600 text-center mt-2">Clean, corporate aesthetic for professional settings</p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-square flex items-center justify-center mb-4">
              <img 
                src={brandLogoRed} 
                alt="SoleMuchBetter Dynamic Logo - Sports & Events Branding" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-center text-accent">Dynamic Sports</h3>
            <p className="text-sm text-gray-600 text-center mt-2">Bold design perfect for athletic and event branding</p>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-square flex items-center justify-center mb-4">
              <img 
                src={brandLogoNeon} 
                alt="SoleMuchBetter Neon Logo - Modern Retail Branding" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-center text-white">Modern Retail</h3>
            <p className="text-sm text-gray-300 text-center mt-2">Contemporary neon aesthetic for trendy retail spaces</p>
          </div>
          
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-square flex items-center justify-center mb-4">
              <img 
                src={brandLogoVintage} 
                alt="SoleMuchBetter Vintage Logo - Heritage Brand Styling" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-bold text-center text-accent">Heritage Vintage</h3>
            <p className="text-sm text-gray-600 text-center mt-2">Timeless design for established brands and heritage companies</p>
          </div>
        </div>

        {/* Brand Promise */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg">
            <span className="text-primary font-bold text-lg">★</span>
            <span className="font-semibold text-accent">Est. 2025</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-700">Your brand from the ground up</span>
            <span className="text-primary font-bold text-lg">★</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandShowcase;