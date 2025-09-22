import NavigationEnhanced from "@/components/NavigationEnhanced";
import HeroEnhanced from "@/components/HeroEnhanced";
import ShoesSection from "@/components/ShoesSection";
import EventsSection from "@/components/EventsSection";
import Services from "@/components/Services";
import About from "@/components/About";
import BrandShowcase from "@/components/BrandShowcase";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SkipNavigation from "@/components/SkipNavigation";
import StructuredData from "@/components/StructuredData";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SkipNavigation />
      <StructuredData />
      <NavigationEnhanced />
      <main id="main-content">
        <HeroEnhanced />
        <ShoesSection />
        <EventsSection />
        <About />
        <Services />
        <BrandShowcase />
        <Testimonials />
        <Newsletter />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
