import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Maximize, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    fullDescription: "Esta casa encantadora oferece o ambiente perfeito para famílias que buscam qualidade de vida. Com 3 quartos espaçosos, sendo 1 suíte master, sala de estar e jantar integradas, cozinha planejada e área de lazer completa com churrasqueira. O quintal amplo é ideal para crianças e pets. Localizada em uma das melhores quadras de Águas Claras, próxima a escolas, supermercados e parques.",
    features: ["3 Quartos", "2 Banheiros", "2 Vagas", "Quintal", "Churrasqueira", "Cozinha Planejada"],
    price: "R$ 680.000",
  },
  {
    id: 2,
    image: property2,
    title: "Apartamento Jardins",
    location: "Sudoeste, Brasília",
    area: "95m²",
    category: "Apartamento",
    description: "Apartamento moderno com 2 quartos, varanda gourmet e vista privilegiada. Ideal para casais e jovens profissionais.",
    fullDescription: "Apartamento sofisticado no coração do Sudoeste, uma das regiões mais valorizadas de Brasília. Com acabamentos de alto padrão, este imóvel oferece 2 quartos (1 suíte), sala ampla com varanda gourmet e vista panorâmica. Cozinha americana integrada, área de serviço e 2 vagas de garagem. O condomínio conta com academia, salão de festas, playground e segurança 24h.",
    features: ["2 Quartos", "2 Banheiros", "2 Vagas", "Varanda Gourmet", "Academia", "Segurança 24h"],
    price: "R$ 520.000",
  },
  {
    id: 3,
    image: property3,
    title: "Terreno Vista Verde",
    location: "Lago Sul, Brasília",
    area: "450m²",
    category: "Terreno",
    description: "Terreno em condomínio fechado com infraestrutura completa. Realize o sonho de construir sua casa ideal.",
    fullDescription: "Oportunidade única de construir a casa dos seus sonhos no exclusivo Lago Sul. Este terreno de 450m² está localizado em um condomínio fechado com segurança 24h, área verde preservada e infraestrutura completa. Topografia plana, ideal para projetos arquitetônicos. Próximo ao Lago Paranoá, escolas internacionais e centros comerciais de alto padrão.",
    features: ["450m²", "Condomínio Fechado", "Topografia Plana", "Área Verde", "Segurança 24h", "Infraestrutura Completa"],
    price: "R$ 1.200.000",
  },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-foreground mb-4">Imóvel não encontrado</h1>
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      >
        <div className="container-luxury py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Voltar</span>
          </button>
          <span className="text-sm text-muted-foreground">{property.category}</span>
        </div>
      </motion.header>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-[50vh] md:h-[60vh] w-full mt-16"
      >
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-6 left-6">
          <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full">
            {property.category}
          </span>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container-luxury -mt-20 relative z-10 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-card rounded-2xl shadow-xl p-6 md:p-10"
        >
          {/* Title & Location */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-3">
              {property.title}
            </h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              <span>{property.location}</span>
            </div>
          </div>

          {/* Price & Area */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-primary/5 rounded-xl p-5 text-center">
              <p className="text-sm text-muted-foreground mb-1">Valor</p>
              <p className="text-2xl md:text-3xl font-serif text-primary font-medium">
                {property.price}
              </p>
            </div>
            <div className="bg-accent/10 rounded-xl p-5 text-center">
              <p className="text-sm text-muted-foreground mb-1">Área</p>
              <div className="flex items-center justify-center gap-2">
                <Maximize size={20} className="text-accent" />
                <p className="text-2xl md:text-3xl font-serif text-foreground">
                  {property.area}
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h2 className="text-xl font-serif text-foreground mb-4">Características</h2>
            <div className="flex flex-wrap gap-3">
              {property.features.map((feature, index) => (
                <motion.span
                  key={feature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full"
                >
                  {feature}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-10">
            <h2 className="text-xl font-serif text-foreground mb-4">Sobre o imóvel</h2>
            <p className="text-muted-foreground leading-relaxed">
              {property.fullDescription}
            </p>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl font-serif text-foreground mb-2 text-center">
              Interessado neste imóvel?
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              Entre em contato comigo para agendar uma visita ou tirar suas dúvidas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#20BA5C] transition-colors"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a
                href="tel:+5561999999999"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                <Phone size={20} />
                Ligar Agora
              </a>
              <a
                href="mailto:contato@joilebarreto.com.br"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail size={20} />
                E-mail
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PropertyDetails;
