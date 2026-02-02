import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePageTransition } from "@/contexts/PageTransitionContext";

// Property Components
import PropertyHero from "@/components/property/PropertyHero";
import PropertyOverview from "@/components/property/PropertyOverview";
import PropertyDescription from "@/components/property/PropertyDescription";
import PropertyAmenities from "@/components/property/PropertyAmenities";
import PropertyLocation from "@/components/property/PropertyLocation";
import InvestmentAnalysis from "@/components/property/InvestmentAnalysis";
import AgentContact from "@/components/property/AgentContact";

// Assets
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import terrenoAsaSul1 from "@/assets/terreno-asa-sul-1.jpg";
import terrenoAsaSul2 from "@/assets/terreno-asa-sul-2.jpg";
import terrenoAsaSul3 from "@/assets/terreno-asa-sul-3.jpg";
import predioAdolfo1 from "@/assets/predio-adolfo-moitinho-1.jpg";
import predioAdolfo2 from "@/assets/predio-adolfo-moitinho-2.jpg";
import predioAdolfo3 from "@/assets/predio-adolfo-moitinho-3.jpg";
import logo from "@/assets/logo-joile-barreto.png";

const properties = [
  {
    id: 1,
    image: predioAdolfo1,
    images: [predioAdolfo1, predioAdolfo2, predioAdolfo3],
    title: "Prédio Comercial Av. Adolfo Moitinho",
    location: "Av. Adolfo Moitinho, Centro, Irecê, Bahia",
    area: "416m²",
    category: "Prédio Comercial",
    description: "Oportunidade de investimento no epicentro comercial de Irecê! Sobrado/prédio com 416m² de área construída em 3 pavimentos. Localização privilegiada na via de maior fluxo da cidade.",
    fullDescription: "Esta é a sua chance de adquirir um imóvel no epicentro comercial de Irecê! Apresentamos este sobrado/prédio comercial estrategicamente localizado na Avenida Adolfo Moitinho, a via de maior fluxo de pessoas e negócios da cidade. Com uma fachada de 6,40 metros e um terreno de 138,88m², o imóvel conta com 416,64m² de área construída, distribuídos em três pavimentos.\n\nA maior vantagem deste imóvel é sua incrível versatilidade. A estrutura robusta e a localização permitem uma transformação para uso misto, maximizando seu potencial de rentabilidade: Térreo Comercial perfeito para loja âncora, farmácia, clínica ou escritório de grande visibilidade. Andares Superiores ideais para apartamentos modernos (altamente procurados para locação no centro) ou salas comerciais.\n\nCom um valor atrativo pela metragem e localização, este sobrado não é apenas um imóvel, é um investimento com retorno garantido.",
    features: ["Uso Misto (Comercial/Residencial)", "3 Pavimentos", "Fachada 6,40m", "Térreo Comercial", "Andares p/ Apartamentos", "Alta Visibilidade", "Próximo ao Hospital", "Próximo à Rodoviária", "Próximo à Av. 1º de Janeiro", "Cercado de Bancos e Lojas"],
    price: "R$ 2.500.000",
    priceNumber: 2500000,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    // Building-specific properties
    floors: 3,
    facadeWidth: "6,40m",
    landArea: "138,88m²",
    builtArea: "416,64m²",
    pricePerM2: "R$ 6.000",
    avgPricePerM2: "R$ 7.000",
    walkScore: 98,
    coordinates: "11.3039° S, 41.8559° W",
    latitude: -11.3039,
    longitude: -41.8559,
    mapsUrl: "https://maps.app.goo.gl/irece",
    nearbyPlaces: [
      { icon: "hospital", name: "Hospital", distance: "2 min a pé" },
      { icon: "bus", name: "Rodoviária", distance: "3 min a pé" },
      { icon: "market", name: "Av. 1º de Janeiro", distance: "1 min a pé" },
      { icon: "bank", name: "Bancos e Serviços", distance: "No local" },
    ],
  },
  {
    id: 2,
    image: property2,
    title: "Apartamento Jardim das Flores",
    location: "Bairro São José, Irecê",
    area: "75m²",
    category: "Apartamento",
    description: "Apartamento moderno em condomínio com área de lazer. Localizado em um dos bairros mais tranquilos de Irecê.",
    fullDescription: "Este imóvel oferece 2 quartos sendo 1 suíte, sala ampla com varanda e vista privilegiada. Cozinha americana integrada, área de serviço e 1 vaga de garagem. O condomínio conta com área de lazer, playground e segurança 24h. Os acabamentos incluem piso porcelanato e armários planejados.",
    features: ["Varanda", "Condomínio com Lazer", "Segurança 24h", "Portaria", "Armários Planejados", "Área de Serviço"],
    price: "R$ 220.000",
    priceNumber: 220000,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    pricePerM2: "R$ 2.933",
    avgPricePerM2: "R$ 3.200",
    walkScore: 88,
    coordinates: "11.3039° S, 41.8559° W",
    latitude: -11.3039,
    longitude: -41.8559,
    mapsUrl: "https://maps.app.goo.gl/irece",
    nearbyPlaces: [
      { icon: "school", name: "Escola Estadual", distance: "4 min a pé" },
      { icon: "market", name: "Mercado Central", distance: "2 min a pé" },
      { icon: "metro", name: "Praça da Bandeira", distance: "6 min a pé" },
    ],
  },
  {
    id: 3,
    image: property3,
    title: "Terreno Vila Nova",
    location: "Bairro Vila Nova, Irecê",
    area: "360m²",
    category: "Terreno",
    description: "Oportunidade única de construir a casa dos seus sonhos em Irecê. Terreno plano em área valorizada com infraestrutura completa.",
    fullDescription: "Este terreno de 360m² está localizado em uma área residencial em pleno crescimento. Topografia plana, ideal para projetos arquitetônicos. Próximo a comércios, escolas e com fácil acesso às principais vias da cidade. Infraestrutura completa com água, luz e esgoto.",
    features: ["Topografia Plana", "Área Residencial", "Infraestrutura Completa", "Documentação OK", "Próximo ao Comércio", "Fácil Acesso"],
    price: "R$ 120.000",
    priceNumber: 120000,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    pricePerM2: "R$ 333",
    avgPricePerM2: "R$ 400",
    walkScore: 70,
    coordinates: "11.3039° S, 41.8559° W",
    latitude: -11.3039,
    longitude: -41.8559,
    mapsUrl: "https://maps.app.goo.gl/irece",
    nearbyPlaces: [
      { icon: "school", name: "Escola Municipal", distance: "10 min a pé" },
      { icon: "market", name: "Comércio Local", distance: "5 min a pé" },
      { icon: "metro", name: "Centro de Irecê", distance: "8 min de carro" },
    ],
  },
  {
    id: 4,
    image: terrenoAsaSul1,
    images: [terrenoAsaSul1, terrenoAsaSul2, terrenoAsaSul3],
    title: "Terreno Asa Sul com Duas Frentes",
    location: "128 Rua Rio Tapajós, Asa Sul, Irecê, Bahia",
    area: "210m²",
    category: "Terreno",
    description: "Oportunidade única no Asa Sul! Terreno 7x30m com acesso duplo (duas frentes), ideal para casa ou comércio. Localização estratégica próxima à UPA, Faculdade FAI e Av. 1º de Janeiro.",
    fullDescription: "Você encontrou o terreno perfeito para construir ou investir em Irecê! Este lote excepcional no Bairro Asa Sul, uma das áreas de maior valorização da cidade, possui dimensões ideais de 7 metros de frente por 30 metros de comprimento. O grande diferencial: vai de uma rua a outra, oferecendo acesso duplo! Construa a casa dos seus sonhos com fachada imponente e área de lazer nos fundos, ou desenvolva um projeto comercial/misto aproveitando o fluxo das duas vias. A localização combina tranquilidade residencial com conveniência total.",
    features: ["Acesso Duplo (Duas Frentes)", "7x30m (210m²)", "Alta Valorização", "Próximo à UPA", "Próximo à Faculdade FAI", "Próximo ao Colégio Cometa", "Próximo à Av. 1º de Janeiro", "Ideal para Casa ou Comércio", "Documentação OK", "Infraestrutura Completa"],
    price: "R$ 280.000",
    priceNumber: 280000,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    // Land-specific properties
    dimensions: "7x30m",
    fronts: 2,
    hasInfrastructure: true,
    hasDocumentation: true,
    pricePerM2: "R$ 1.333",
    avgPricePerM2: "R$ 1.500",
    walkScore: 92,
    coordinates: "11.3039° S, 41.8559° W",
    latitude: -11.3039,
    longitude: -41.8559,
    mapsUrl: "https://maps.app.goo.gl/irece",
    nearbyPlaces: [
      { icon: "hospital", name: "UPA Irecê", distance: "3 min a pé" },
      { icon: "school", name: "Faculdade FAI", distance: "2 min a pé" },
      { icon: "school", name: "Colégio Cometa", distance: "3 min a pé" },
      { icon: "market", name: "Av. 1º de Janeiro", distance: "5 min a pé" },
    ],
  },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { transitionData, endTransition, isTransitioning, clearTransition } = usePageTransition();
  const [animationPhase, setAnimationPhase] = useState<"initial" | "animating" | "complete">("initial");
  
  const property = properties.find((p) => p.id === Number(id));

  // Clear transition on unmount (when navigating back)
  useEffect(() => {
    return () => {
      clearTransition();
    };
  }, [clearTransition]);

  // Handle the page entry animation
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    if (transitionData?.rect && isTransitioning) {
      // Start animation immediately
      setAnimationPhase("animating");
      
      // Complete animation after transition
      const timer = setTimeout(() => {
        setAnimationPhase("complete");
        endTransition();
      }, 600);
      
      return () => clearTimeout(timer);
    } else {
      // No transition data, show immediately
      setAnimationPhase("complete");
    }
  }, [id, transitionData, isTransitioning, endTransition]);

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
  const whatsappLink = `https://wa.me/5574999999999?text=${whatsappMessage}`;

  // Calculate initial transform based on card position
  const hasTransition = transitionData?.rect && animationPhase !== "complete";
  const rect = transitionData?.rect;
  
  const initialTransform = rect ? {
    x: rect.left + rect.width / 2 - window.innerWidth / 2,
    y: rect.top + rect.height / 2 - window.innerHeight / 2,
    scale: Math.min(rect.width / window.innerWidth, rect.height / window.innerHeight),
  } : { x: 0, y: 0, scale: 0.8 };

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial={hasTransition ? {
        opacity: 0,
        scale: initialTransform.scale,
        x: initialTransform.x,
        y: initialTransform.y,
        borderRadius: 16,
      } : { opacity: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        borderRadius: 0,
      }}
      transition={{
        type: "spring",
        damping: 28,
        stiffness: 180,
        mass: 0.8,
      }}
    >
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: animationPhase === "complete" ? 1 : 0, y: animationPhase === "complete" ? 0 : -20 }}
        transition={{ delay: 0.3, duration: 0.4 }}
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
          images={property.images}
          title={property.title}
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
              dimensions={property.dimensions}
              fronts={property.fronts}
              hasInfrastructure={property.hasInfrastructure}
              hasDocumentation={property.hasDocumentation}
              floors={property.floors}
              facadeWidth={property.facadeWidth}
              landArea={property.landArea}
              builtArea={property.builtArea}
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
              phoneNumber="+5574999999999"
              email="joile@remaxgardense.com.br"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container-luxury text-center">
          <img src={logo} alt="Joíle Barreto - RE/MAX Gardense" className="h-10 mx-auto mb-4 brightness-0 invert" />
          <p className="text-sm opacity-70">
            © 2024 Joíle Barreto | RE/MAX Gardense | Irecê, BA. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default PropertyDetails;
