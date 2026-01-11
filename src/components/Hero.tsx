import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-joile.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Full screen */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Casa de alto padrão com arquitetura tropical moderna"
          className="w-full h-full object-cover"
        />
        {/* Subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
      </div>

      {/* Main Content - Name Typography */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center"
        >
          {/* Joíle - Large display text */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif text-[15vw] md:text-[12vw] lg:text-[10vw] font-medium leading-none text-foreground/95 tracking-tight"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.4)' }}
          >
            Joíle
          </motion.h1>
          
          {/* Barreto - Elegant subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-serif text-[8vw] md:text-[6vw] lg:text-[5vw] font-normal text-foreground/90 -mt-2 md:-mt-4 tracking-wide"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
          >
            Barreto
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-24 md:bottom-32 left-0 right-0 z-10"
      >
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
            <a href="#contact" className="luxury-button">
              Agendar uma conversa
            </a>
            <a href="#properties" className="luxury-button-outline">
              Conhecer imóveis
            </a>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#services"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Rolar</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;