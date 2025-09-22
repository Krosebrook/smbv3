import { Button } from "@/components/ui/button";
import productMockup1 from "@/assets/product-mockup-1.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gray-700 overflow-hidden">
      {/* Dark gray background like CODA */}
      <div className="absolute inset-0 bg-gray-700"></div>
      
      {/* Content - Following CODA's exact layout */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content - matches CODA's text positioning */}
          <div className="space-y-8">
            {/* Script headline like CODA */}
            <h2 className="text-4xl md:text-5xl font-script text-white italic">
              Custom Branding
            </h2>
            
            {/* Main headline - CODA style */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white uppercase tracking-wide">
              ELEVATE YOUR BRAND
              <span className="text-primary">.</span>
            </h1>
            
            {/* Description paragraph - matches CODA's style exactly */}
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              SOLEMUCHBETTER Branding Solutions is a Women Owned Company that delivers the final touch to your 
              Brand's journey. SOLEMUCHBETTER offers distinctive high-impact merchandise that elevates your brand beyond the norm. 
              Like the "coda" in music and literature which concludes with unique flair, our products complete your 
              brand's story with purpose and depth. Every item SOLEMUCHBETTER creates enhances your brand's message, 
              leaving a resonant, lasting impression.
            </p>
          </div>
          
          {/* Right side - Video placeholder or product image */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
            <img 
                src={productMockup1} 
                alt="SoleMuchBetter custom branded merchandise products including corporate gifts and promotional items" 
                className="w-full h-auto rounded-lg"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;