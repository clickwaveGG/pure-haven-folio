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
import FloatingNav from "@/components/FloatingNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
      
      {/* Floating Navigation */}
      <FloatingNav />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
