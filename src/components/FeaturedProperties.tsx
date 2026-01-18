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
    title: "Casa Família Silva",
    location: "Águas Claras, DF",
    area: "180m²",
    category: "Casa",
    description: "Casa espaçosa com 3 quartos, quintal e área de lazer. Perfeita para famílias que buscam conforto e praticidade.",
  },
  {
    id: 2,
    image: property2,
    title: "Apartamento Jardins",
    location: "Sudoeste, Brasília",
    area: "95m²",
    category: "Apartamento",
    description: "Apartamento moderno com 2 quartos, varanda gourmet e vista privilegiada. Ideal para casais e jovens profissionais.",
  },
  {
    id: 3,
    image: property3,
    title: "Terreno Vista Verde",
    location: "Lago Sul, Brasília",
    area: "450m²",
    category: "Terreno",
    description: "Terreno em condomínio fechado com infraestrutura completa. Realize o sonho de construir sua casa ideal.",
  },
];

const FeaturedProperties = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="properties" className="section-padding bg-background relative">
      <div className="container-luxury">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center justify-center gap-3 text-sm font-medium tracking-wide text-primary mb-4">
            <span className="w-8 h-0.5 bg-primary rounded-full" />
            Imóveis
            <span className="w-8 h-0.5 bg-primary rounded-full" />
          </span>
          <h2 className="text-headline text-foreground mb-4">
            Encontre seu próximo lar
          </h2>
          <p className="text-subheadline max-w-2xl mx-auto">
            Uma seleção de imóveis para diferentes necessidades e momentos de vida.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredId(property.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group welcome-card overflow-hidden cursor-pointer hover-lift"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredId === property.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    {property.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin size={14} className="text-accent" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <h3 className="text-xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {property.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {property.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Maximize size={14} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">{property.area}</span>
                  </div>

                  <motion.div
                    className="flex items-center gap-1 text-primary"
                    animate={{ x: hoveredId === property.id ? 4 : 0 }}
                  >
                    <span className="text-sm font-medium">Ver mais</span>
                    <ArrowUpRight size={14} />
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
          className="text-center mt-12"
        >
          <a href="#contact" className="welcome-button-outline">
            Ver todos os imóveis
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
