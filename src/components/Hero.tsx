import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-joile.jpg";
import heroImageMobile from "@/assets/hero-joile-mobile.png";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroContent = () => {
  return (
    <div className="container-luxury text-center">
      <span className="inline-flex items-center gap-3 text-sm font-sans tracking-[0.3em] uppercase text-primary mb-6">
        <span className="w-8 h-px bg-primary" />
        Corretor de Imóveis
        <span className="w-8 h-px bg-primary" />
      </span>
      
      <p className="text-subheadline max-w-xl mx-auto mb-8">
        Curadoria personalizada de casas e terrenos premium para quem busca
        mais que um imóvel — busca um estilo de vida.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
        >
          Fale Comigo
        </a>
        <a
          href="#properties"
          className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors"
        >
          Ver Imóveis
        </a>
      </div>
    </div>
  );
};

const Hero = () => {
  const isMobile = useIsMobile();
  const currentHeroImage = isMobile ? heroImageMobile : heroImage;

  return (
    <section id="hero">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={currentHeroImage}
        bgImageSrc={heroImage}
        title="Joíle Barreto"
        scrollToExpand="Role para expandir"
        textBlend={false}
      >
        <HeroContent />
      </ScrollExpandMedia>
    </section>
  );
};

export default Hero;
