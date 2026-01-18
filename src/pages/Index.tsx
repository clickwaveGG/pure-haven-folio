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
import { EtherealShadow } from "@/components/ui/ethereal-shadow";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Ethereal Shadow Background */}
      <div className="fixed inset-0 z-0">
        <EtherealShadow
          color="hsl(20 15% 6%)"
          animation={{ scale: 30, speed: 15 }}
          noise={{ opacity: 3, scale: 1 }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
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
      </div>
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
