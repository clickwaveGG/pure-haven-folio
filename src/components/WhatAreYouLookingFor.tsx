import { PropertyCarousel } from "@/components/ui/property-carousel";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const WhatAreYouLookingFor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const slideData = [
    {
      title: "Terrenos",
      button: "Ver Terrenos",
      src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop",
    },
    {
      title: "Casas",
      button: "Ver Casas",
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2875&auto=format&fit=crop",
    },
    {
      title: "Apartamentos",
      button: "Ver Apartamentos",
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2835&auto=format&fit=crop",
    },
    {
      title: "Vender meu Imóvel",
      button: "Saiba Mais",
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2873&auto=format&fit=crop",
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="text-terracotta text-sm tracking-[0.3em] uppercase font-medium">
            Explore
          </span>
          <h2 className="text-display mt-4 text-cream">
            O que você procura?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Encontre o imóvel ideal para você. Navegue pelas categorias e descubra as melhores oportunidades do mercado.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <PropertyCarousel slides={slideData} />
        </motion.div>
      </div>
    </section>
  );
};

export default WhatAreYouLookingFor;
