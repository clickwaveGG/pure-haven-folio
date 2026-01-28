import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Maximize, ArrowUpRight } from "lucide-react";
import { usePageTransition } from "@/contexts/PageTransitionContext";
import { useSkipAnimations } from "@/pages/Index";
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
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const skipAnimations = useSkipAnimations();
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const navigate = useNavigate();
  const { startTransition } = usePageTransition();

  const handlePropertyClick = (property: typeof properties[0], e: React.MouseEvent) => {
    const cardElement = cardRefs.current[property.id];
    if (cardElement) {
      const rect = cardElement.getBoundingClientRect();
      startTransition({
        rect,
        image: property.image,
        title: property.title,
        location: property.location,
      });
      
      // Navigate after a small delay to let the animation start
      setTimeout(() => {
        navigate(`/imovel/${property.id}`);
      }, 50);
    } else {
      navigate(`/imovel/${property.id}`);
    }
  };

  return (
    <section id="properties" className="section-padding bg-background relative">
      <div className="container-luxury">
        <motion.div
          ref={ref}
          initial={skipAnimations ? false : { opacity: 0, y: 30 }}
          animate={skipAnimations ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : {})}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{properties.map((property, index) => (
            <motion.div
              key={property.id}
              ref={(el) => { cardRefs.current[property.id] = el; }}
              initial={skipAnimations ? false : { opacity: 0, y: 40 }}
              animate={skipAnimations ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : {})}
              transition={{ duration: 0.8, delay: skipAnimations ? 0 : index * 0.15 }}
              onMouseEnter={() => setHoveredId(property.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={(e) => handlePropertyClick(property, e)}
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

                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
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
          initial={skipAnimations ? false : { opacity: 0, y: 20 }}
          animate={skipAnimations ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : {})}
          transition={{ duration: 0.6, delay: skipAnimations ? 0 : 0.6 }}
          className="text-center mt-8"
        >
          <button 
            onClick={() => navigate("/imoveis")} 
            className="welcome-button-outline"
          >
            Ver todos os imóveis
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
