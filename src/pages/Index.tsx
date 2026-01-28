import { createContext, useContext } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import FeaturedProperties from "@/components/FeaturedProperties";
import WhatAreYouLookingFor from "@/components/WhatAreYouLookingFor";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileNav from "@/components/MobileNav";
import { useInitialLoad } from "@/hooks/use-initial-load";

// Context to share skip animations state with all child components
export const SkipAnimationsContext = createContext(false);
export const useSkipAnimations = () => useContext(SkipAnimationsContext);

const Index = () => {
  const { skipAnimations } = useInitialLoad();

  return (
    <SkipAnimationsContext.Provider value={skipAnimations}>
      <div className="min-h-screen bg-background overflow-x-hidden w-full">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <FeaturedProperties />
          <WhatAreYouLookingFor />
          <Testimonials />
          <FAQ />
          <Insights />
          <Contact />
        </main>
        <Footer />
        
        {/* Mobile Navigation */}
        <MobileNav />
        
        {/* WhatsApp Floating Button */}
        <WhatsAppButton />
      </div>
    </SkipAnimationsContext.Provider>
  );
};

export default Index;
