import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { usePageTransition } from "@/contexts/PageTransitionContext";
import { useSkipAnimations } from "@/pages/Index";
import { PropertyCard } from "@/components/ui/property-card";
import terrenoAsaSul1 from "@/assets/terreno-asa-sul-1.webp";
import predioAdolfo1 from "@/assets/predio-adolfo-moitinho-1.webp";
import terrenoGreenville1 from "@/assets/terreno-greenville-1.jpg";
import casaDonaMarta1 from "@/assets/casa-dona-marta-1.jpg";

const properties = [
  {
    id: 4,
    image: terrenoAsaSul1,
    title: "Terreno Asa Sul com Duas Frentes",
    location: "Bairro Asa Sul, Irecê",
    area: "210m²",
    category: "Terreno",
    description: "Oportunidade única! Terreno 7x30m com acesso duplo (duas frentes). Próximo à UPA, Faculdade FAI e Av. 1º de Janeiro.",
    dimensions: "7x30m",
    fronts: 2,
    price: "R$ 280.000",
  },
  {
    id: 1,
    image: predioAdolfo1,
    title: "Prédio Comercial Av. Adolfo Moitinho",
    location: "Centro, Irecê",
    area: "416m²",
    category: "Prédio Comercial",
    description: "Investimento no epicentro comercial! Sobrado com 416m² em 3 pavimentos na via de maior fluxo de Irecê.",
    floors: 3,
    facadeWidth: "6,40m",
    price: "R$ 2.530.000",
  },
  {
    id: 2,
    image: terrenoGreenville1,
    title: "Terreno Condomínio Green Ville",
    location: "Cond. Green Ville, Irecê",
    area: "200m²",
    category: "Terreno",
    description: "Terreno privilegiado nas primeiras quadras do condomínio. Piscina, churrasqueira, parquinhos e segurança 24h.",
    isGatedCommunity: true,
    price: "R$ 85.000",
  },
  {
    id: 6,
    image: casaDonaMarta1,
    title: "Casa de Alto Padrão Cond. Dona Marta",
    location: "Cond. Dona Marta, Irecê",
    area: "600m²",
    category: "Casa",
    description: "Exclusiva casa de alto padrão com 5 quartos, 2 suítes, piscina, espaço gourmet e sacada panorâmica.",
    highlights: ["Alto Padrão", "Piscina + Gourmet"],
    price: "R$ 1.350.000",
  },
];

const FeaturedProperties = () => {
  const ref = useRef(null);
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const skipAnimations = useSkipAnimations();
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  const { startTransition } = usePageTransition();

  const handlePropertyClick = (property: typeof properties[0]) => {
    const cardElement = cardRefs.current[property.id];
    if (cardElement) {
      const rect = cardElement.getBoundingClientRect();
      startTransition({
        rect,
        image: property.image,
        title: property.title,
        location: property.location,
      });
      
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
            Imóveis Disponíveis em Irecê
          </h2>
          <p className="text-subheadline max-w-2xl mx-auto">
            Uma seleção atual de imóveis para diferentes necessidades e momentos de vida — da primeira casa ao investimento estratégico.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              ref={(el) => { cardRefs.current[property.id] = el; }}
              initial={skipAnimations ? false : { opacity: 0, y: 40 }}
              animate={skipAnimations ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : {})}
              transition={{ duration: 0.8, delay: skipAnimations ? 0 : index * 0.15 }}
            >
              <PropertyCard
                imageUrl={property.image}
                title={property.title}
                location={property.location}
                category={property.category}
                description={property.description}
                area={property.area}
                dimensions={property.dimensions}
                fronts={property.fronts}
                floors={property.floors}
                facadeWidth={property.facadeWidth}
                isGatedCommunity={property.isGatedCommunity}
                price={property.price}
                onDetailsClick={() => handlePropertyClick(property)}
              />
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
            Ver todos os Imóveis
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
