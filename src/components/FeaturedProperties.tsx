import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePageTransition } from "@/contexts/PageTransitionContext";
import { useSkipAnimations } from "@/pages/Index";
import { PropertyCard } from "@/components/ui/property-card";
import { PropertyPreviewModal } from "@/components/ui/property-preview-modal";
import property2 from "@/assets/property-2.jpg";
import terrenoAsaSul1 from "@/assets/terreno-asa-sul-1.jpg";
import predioComercial1 from "@/assets/predio-comercial-1.jpg";

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
    image: predioComercial1,
    title: "Prédio Comercial Av. Adolfo Moitinho",
    location: "Av. Adolfo Moitinho, Centro, Irecê",
    area: "416m²",
    category: "Prédio Comercial",
    description: "Investimento no epicentro comercial de Irecê! Sobrado com 3 pavimentos, 416m² construídos. Ideal para uso misto: comércio no térreo e apartamentos/salas nos andares superiores.",
    builtArea: "416,64m²",
    landArea: "138,88m²",
    floors: 3,
    price: "R$ 2.500.000",
  },
  {
    id: 2,
    image: property2,
    title: "Apartamento Jardim das Flores",
    location: "Bairro São José, Irecê",
    area: "75m²",
    category: "Apartamento",
    description: "Apartamento moderno com 2 quartos em condomínio com área de lazer. Ideal para casais e jovens profissionais.",
    price: "R$ 220.000",
  },
];

const FeaturedProperties = () => {
  const ref = useRef(null);
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const skipAnimations = useSkipAnimations();
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  const { startTransition } = usePageTransition();
  
  // Preview modal state
  const [selectedProperty, setSelectedProperty] = useState<typeof properties[0] | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handlePropertyClick = (property: typeof properties[0]) => {
    // Show preview modal instead of navigating directly
    setSelectedProperty(property);
    setIsPreviewOpen(true);
  };

  const handleViewDetails = () => {
    if (!selectedProperty) return;
    
    const cardElement = cardRefs.current[selectedProperty.id];
    setIsPreviewOpen(false);
    
    // Small delay to allow modal to close before transitioning
    setTimeout(() => {
      if (cardElement) {
        const rect = cardElement.getBoundingClientRect();
        startTransition({
          rect,
          image: selectedProperty.image,
          title: selectedProperty.title,
          location: selectedProperty.location,
        });
        
        setTimeout(() => {
          navigate(`/imovel/${selectedProperty.id}`);
        }, 50);
      } else {
        navigate(`/imovel/${selectedProperty.id}`);
      }
    }, 150);
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
            Imóveis em Irecê e região
          </h2>
          <p className="text-subheadline max-w-2xl mx-auto">
            Uma seleção de imóveis para diferentes necessidades e momentos de vida na nossa cidade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            Ver todos os imóveis
          </button>
        </motion.div>

        {/* Property Preview Modal */}
        <PropertyPreviewModal
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
          onViewDetails={handleViewDetails}
          property={selectedProperty}
        />
      </div>
    </section>
  );
};

export default FeaturedProperties;
