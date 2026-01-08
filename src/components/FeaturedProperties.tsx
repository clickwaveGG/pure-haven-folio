import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Maximize, ArrowUpRight } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    title: "Villa Serenata",
    location: "Serra da Mantiqueira, MG",
    area: "850m²",
    category: "Casa de Campo",
    description: "Villa contemporânea com piscina de borda infinita e vista panorâmica para as montanhas.",
  },
  {
    id: 2,
    image: property2,
    title: "Penthouse Aurora",
    location: "Jardins, São Paulo",
    area: "420m²",
    category: "Cobertura",
    description: "Cobertura duplex com pé-direito triplo e vista 360° para o skyline paulistano.",
  },
  {
    id: 3,
    image: property3,
    title: "Casa Costa Azul",
    location: "Litoral Norte, SP",
    area: "680m²",
    category: "Beachfront",
    description: "Residência à beira-mar com acesso privativo à praia e arquitetura contemporânea.",
  },
];

const FeaturedProperties = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="properties" className="section-padding bg-grain relative">
      <div className="container-luxury">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center justify-center gap-3 text-sm font-sans tracking-[0.3em] uppercase text-primary mb-6">
            <span className="w-12 h-px bg-primary" />
            Portfólio
            <span className="w-12 h-px bg-primary" />
          </span>
          <h2 className="text-headline text-foreground mb-6">
            Imóveis em Destaque
          </h2>
          <p className="text-subheadline max-w-2xl mx-auto">
            Uma seleção exclusiva das propriedades mais excepcionais do nosso portfólio.
          </p>
        </motion.div>

        <div className="space-y-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredId(property.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative luxury-card overflow-hidden cursor-pointer"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-96 overflow-hidden">
                  <motion.img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredId === property.id ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80 md:block hidden" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-4 py-2 bg-background/90 backdrop-blur-sm text-xs font-sans tracking-widest uppercase text-primary">
                      {property.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin size={14} className="text-primary" />
                    <span className="text-sm font-sans">{property.location}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {property.title}
                  </h3>

                  <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-6">
                    {property.description}
                  </p>

                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-2">
                      <Maximize size={14} className="text-primary" />
                      <span className="text-sm font-sans text-foreground">{property.area}</span>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: hoveredId === property.id ? 1 : 0.7, x: 0 }}
                    className="flex items-center gap-2 text-primary"
                  >
                    <span className="text-sm font-sans tracking-widest uppercase">
                      Ver detalhes
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="luxury-button-outline">
            Ver todos os imóveis
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
