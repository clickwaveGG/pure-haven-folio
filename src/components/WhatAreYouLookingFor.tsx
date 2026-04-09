import { PropertyCarousel } from "@/components/ui/property-carousel";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSkipAnimations } from "@/pages/Index";

const WhatAreYouLookingFor = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const skipAnimations = useSkipAnimations();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const slideData = [
    {
      title: "Terrenos",
      button: "Ver Terrenos",
      src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop",
      href: "/terrenos",
    },
    {
      title: "Casas",
      button: "Ver Casas",
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2875&auto=format&fit=crop",
      href: "/casas",
    },
    {
      title: "Apartamentos",
      button: "Ver Apartamentos",
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2835&auto=format&fit=crop",
      href: "/apartamentos",
    },
    {
      title: "Vender meu Imóvel",
      button: "Saiba Mais",
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2873&auto=format&fit=crop",
      href: "https://wa.me/5574999993009?text=Olá! Gostaria de vender meu imóvel.",
    },
  ];

  return (
    <section ref={ref} className="section-padding bg-secondary/30 relative overflow-hidden">
      <div className="container-luxury">
        <motion.div
          initial={skipAnimations ? false : { opacity: 0, y: 30 }}
          animate={skipAnimations ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 })}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center justify-center gap-3 text-sm font-medium tracking-wide text-primary mb-4">
            <span className="w-8 h-0.5 bg-primary rounded-full" />
            Explore
            <span className="w-8 h-0.5 bg-primary rounded-full" />
          </span>
          <h2 className="text-headline text-foreground">
            O que você está buscando?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Selecione a categoria e explore as melhores oportunidades disponíveis em Irecê e região.
          </p>
        </motion.div>

        <motion.div
          initial={skipAnimations ? false : { opacity: 0, y: 50 }}
          animate={skipAnimations ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 })}
          transition={{ duration: 0.8, delay: skipAnimations ? 0 : 0.2, ease: "easeOut" }}
        >
          <PropertyCarousel 
            slides={slideData} 
            onButtonClick={(href) => {
              if (href?.startsWith("http")) {
                window.open(href, "_blank");
              } else if (href) {
                navigate(href);
              }
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhatAreYouLookingFor;
