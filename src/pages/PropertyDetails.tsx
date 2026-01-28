import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyEntryAnimation } from "@/components/ui/expandable-card";

// Property Components
import PropertyHero from "@/components/property/PropertyHero";
import PropertyOverview from "@/components/property/PropertyOverview";
import PropertyDescription from "@/components/property/PropertyDescription";
import PropertyAmenities from "@/components/property/PropertyAmenities";
import PropertyLocation from "@/components/property/PropertyLocation";
import InvestmentAnalysis from "@/components/property/InvestmentAnalysis";
import AgentContact from "@/components/property/AgentContact";

// Assets
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import logo from "@/assets/logo-joile-barreto.png";

const properties = [
  {
    id: 1,
    image: property1,
    title: "Casa Família Silva",
    location: "Águas Claras, DF",
    area: "180m²",
    category: "Casa",
    description: "Casa espaçosa com 3 quartos, quintal e área de lazer. Perfeita para famílias que buscam conforto e praticidade.",
    fullDescription: "Esta casa encantadora oferece o ambiente perfeito para famílias que buscam qualidade de vida. Com 3 quartos espaçosos, sendo 1 suíte master, sala de estar e jantar integradas, cozinha planejada e área de lazer completa com churrasqueira. O quintal amplo é ideal para crianças e pets. Localizada em uma das melhores quadras de Águas Claras, próxima a escolas, supermercados e parques.",
    features: ["Domótica Integrada", "Piso Aquecido", "Churrasqueira", "Isolamento Acústico", "Segurança 24h", "Cozinha Planejada"],
    price: "R$ 680.000",
    priceNumber: 680000,
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    pricePerM2: "R$ 3.778",
    avgPricePerM2: "R$ 4.200",
    walkScore: 85,
    coordinates: "15.8350° S, 48.0267° W",
    latitude: -15.835046,
    longitude: -48.026712,
    mapsUrl: "https://maps.app.goo.gl/fiAFNBeH43ieYeB1A",
    nearbyPlaces: [
      { icon: "school", name: "Colégio Sigma", distance: "8 min a pé" },
      { icon: "market", name: "Supermercado Extra", distance: "5 min a pé" },
      { icon: "metro", name: "Metrô Águas Claras", distance: "10 min a pé" },
    ],
  },
  {
    id: 2,
    image: property2,
    title: "Apartamento Jardins",
    location: "Sudoeste, Brasília",
    area: "95m²",
    category: "Apartamento",
    description: "Apartamento sofisticado no coração do Sudoeste, uma das regiões mais valorizadas de Brasília. Com acabamentos de alto padrão e vista panorâmica deslumbrante.",
    fullDescription: "Este imóvel oferece 2 quartos sendo 1 suíte, sala ampla com varanda gourmet e vista privilegiada. Cozinha americana integrada, área de serviço e 2 vagas de garagem. O condomínio conta com academia, salão de festas, playground e segurança 24h. Os acabamentos incluem piso porcelanato, armários planejados e sistema de ar condicionado split em todos os ambientes.",
    features: ["Varanda Gourmet", "Academia no Prédio", "Segurança 24h", "Piscina", "Ar Condicionado", "Armários Planejados"],
    price: "R$ 520.000",
    priceNumber: 520000,
    bedrooms: 2,
    bathrooms: 2,
    parking: 2,
    pricePerM2: "R$ 5.474",
    avgPricePerM2: "R$ 6.100",
    walkScore: 92,
    nearbyPlaces: [
      { icon: "school", name: "Escola Maple Bear", distance: "4 min a pé" },
      { icon: "market", name: "Mercado Orgânico", distance: "2 min a pé" },
      { icon: "metro", name: "Metrô Sudoeste", distance: "6 min a pé" },
    ],
  },
  {
    id: 3,
    image: property3,
    title: "Terreno Vista Verde",
    location: "Lago Sul, Brasília",
    area: "450m²",
    category: "Terreno",
    description: "Oportunidade única de construir a casa dos seus sonhos no exclusivo Lago Sul. Terreno em condomínio fechado com segurança e infraestrutura completa.",
    fullDescription: "Este terreno de 450m² está localizado em um condomínio fechado com segurança 24h, área verde preservada e infraestrutura completa. Topografia plana, ideal para projetos arquitetônicos. Próximo ao Lago Paranoá, escolas internacionais e centros comerciais de alto padrão. O condomínio oferece ruas pavimentadas, iluminação pública, rede de água e esgoto.",
    features: ["Condomínio Fechado", "Topografia Plana", "Área Verde", "Segurança 24h", "Infraestrutura Completa", "Próximo ao Lago"],
    price: "R$ 1.200.000",
    priceNumber: 1200000,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    pricePerM2: "R$ 2.667",
    avgPricePerM2: "R$ 3.200",
    walkScore: 45,
    nearbyPlaces: [
      { icon: "school", name: "Escola Americana", distance: "5 min de carro" },
      { icon: "market", name: "Iguatemi Brasília", distance: "8 min de carro" },
      { icon: "metro", name: "Centro da cidade", distance: "15 min de carro" },
    ],
  },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [animationComplete, setAnimationComplete] = useState(false);
  
  const property = properties.find((p) => p.id === Number(id));

  // Scroll to top when page loads
  useEffect(() => {
    // Immediate scroll
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    // Fallback for after render
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 0);
    return () => clearTimeout(timer);
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-semibold text-foreground mb-4">Imóvel não encontrado</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            Voltar para o início
          </Button>
        </div>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(`Olá! Tenho interesse no imóvel: ${property.title} - ${property.location}`);
  const whatsappLink = `https://wa.me/5561999999999?text=${whatsappMessage}`;

  return (
    <PropertyEntryAnimation
      image={property.image}
      title={property.title}
      location={property.location}
      onAnimationComplete={() => setAnimationComplete(true)}
    >
      <div className="min-h-screen bg-background">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: animationComplete ? 1 : 0, y: animationComplete ? 0 : -20 }}
          transition={{ delay: 0.2 }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
        >
          <div className="container-luxury py-4 flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium hidden sm:inline">Voltar</span>
            </button>
            
            <img src={logo} alt="Joíle Barreto" className="h-14 md:h-16 object-contain" />
            
            <span className="text-sm text-muted-foreground">{property.category}</span>
          </div>
        </motion.header>

        {/* Hero Gallery */}
        <div className="pt-16">
          <PropertyHero
            image={property.image}
            title={property.title}
            imageCount={18}
          />
        </div>

        {/* Main Content */}
        <div className="container-luxury py-8 lg:py-12">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Property Details */}
            <div className="lg:col-span-2 space-y-8">
              <PropertyOverview
                title={property.title}
                location={property.location}
                price={property.price}
                area={property.area}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
                parking={property.parking}
                category={property.category}
                isExclusive={true}
              />

              <PropertyDescription
                description={property.description}
                fullDescription={property.fullDescription}
              />

              <PropertyAmenities amenities={property.features} />

              <InvestmentAnalysis
                pricePerM2={property.pricePerM2}
                avgPricePerM2={property.avgPricePerM2}
                walkScore={property.walkScore}
                nearbyPlaces={property.nearbyPlaces}
              />

              <PropertyLocation 
                location={property.location} 
                coordinates={property.coordinates}
                latitude={property.latitude}
                longitude={property.longitude}
                mapsUrl={property.mapsUrl}
              />
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              <AgentContact
                whatsappLink={whatsappLink}
                phoneNumber="+5561999999999"
                email="contato@joilebarreto.com.br"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-foreground text-background py-8">
          <div className="container-luxury text-center">
            <img src={logo} alt="Joíle Barreto" className="h-10 mx-auto mb-4 brightness-0 invert" />
            <p className="text-sm opacity-70">
              © 2024 Joíle Barreto. CRECI: 64117. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </PropertyEntryAnimation>
  );
};

export default PropertyDetails;
