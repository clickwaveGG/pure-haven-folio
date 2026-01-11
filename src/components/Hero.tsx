import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-joile.jpg";
import heroImageMobile from "@/assets/hero-joile-mobile.png";
const Hero = () => {
  return <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img src={heroImage} alt="Casa de alto padrão com arquitetura tropical moderna" className="w-full h-full object-cover" />
        {/* Subtle gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
      </div>
      
      {/* Background Image - Mobile (square) */}
      <div className="absolute inset-x-0 top-0 z-0 md:hidden flex justify-center">
        <img src={heroImageMobile} alt="Casa de alto padrão com arquitetura tropical moderna" className="w-full max-w-[100vw] aspect-square object-cover object-center" />
        {/* Gradient overlay for mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Main Content - Name Typography */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        
      </div>

      {/* Bottom Content */}
      <motion.div initial={{
      opacity: 0,
      y: 30
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 1
    }} className="absolute bottom-24 md:bottom-32 left-0 right-0 z-10">
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
            
            
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 1,
      delay: 1.5
    }} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <motion.a href="#services" animate={{
        y: [0, 10, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity
      }} className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs tracking-widest uppercase">Rolar</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>;
};
export default Hero;