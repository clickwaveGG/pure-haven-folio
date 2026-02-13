import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePageTransition } from "@/contexts/PageTransitionContext";
import { PropertyCard } from "@/components/ui/property-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Assets
import terrenoAsaSul1 from "@/assets/terreno-asa-sul-1.jpg";
import predioAdolfo1 from "@/assets/predio-adolfo-moitinho-1.jpg";
import terrenoGreenville1 from "@/assets/terreno-greenville-1.jpg";
import terrenoSaoGabriel1 from "@/assets/terreno-sao-gabriel-1.jpg";
import casaDonaMarta1 from "@/assets/casa-dona-marta-1.jpg";
import terrenoAltoMoura1 from "@/assets/terreno-alto-moura-1.jpg";
import fazendaMocozeiro1 from "@/assets/fazenda-mocozeiro-1.jpg";
import terrenoMocozeiro2_1 from "@/assets/terreno-mocozeiro2-1.jpg";
import terrenoAlphaGarden1 from "@/assets/terreno-alpha-garden-1.jpg";
import terrenoAlphaGarden2_1 from "@/assets/terreno-alpha-garden2-1.jpg";
import loteAcquaville1 from "@/assets/lote-acquaville-1.jpg";
import lotePiemont1 from "@/assets/lote-piemont-1.jpg";
import loteCabore2_1 from "@/assets/lote-cabore2-1.jpg";
import terrenoGreenville2_1 from "@/assets/terreno-greenville2-1.jpg";
import logo from "@/assets/logo-joile-barreto.png";

const allProperties = [
  {
    id: 4,
    image: terrenoAsaSul1,
    title: "Terreno Asa Sul com Duas Frentes",
    location: "Bairro Asa Sul, Irecê",
    area: "210m²",
    areaNumber: 210,
    category: "Terreno",
    price: "R$ 280.000",
    priceNumber: 280000,
    description: "Oportunidade única! Terreno 7x30m com acesso duplo (duas frentes). Próximo à UPA, Faculdade FAI e Av. 1º de Janeiro.",
    dimensions: "7x30m",
    fronts: 2,
  },
  {
    id: 1,
    image: predioAdolfo1,
    title: "Prédio Comercial Av. Adolfo Moitinho",
    location: "Centro, Irecê",
    area: "416m²",
    areaNumber: 416,
    category: "Prédio Comercial",
    price: "R$ 2.530.000",
    priceNumber: 2530000,
    description: "Investimento no epicentro comercial! Sobrado com 416m² em 3 pavimentos na via de maior fluxo de Irecê.",
    floors: 3,
    facadeWidth: "6,40m",
  },
  {
    id: 2,
    image: terrenoGreenville1,
    title: "Terreno Condomínio Green Ville",
    location: "Cond. Green Ville, Irecê",
    area: "200m²",
    areaNumber: 200,
    category: "Terreno",
    price: "R$ 85.000",
    priceNumber: 85000,
    description: "Terreno privilegiado nas primeiras quadras do condomínio. Piscina, churrasqueira, parquinhos e segurança 24h.",
    isGatedCommunity: true,
  },
  {
    id: 5,
    image: terrenoSaoGabriel1,
    title: "Lote Loteamento Caboré",
    location: "São Gabriel, BA",
    area: "200m²",
    areaNumber: 200,
    category: "Terreno",
    price: "R$ 25.000",
    priceNumber: 25000,
    description: "Ao lado do novo Colégio Integral e entrada principal da cidade. Potencial de valorização garantido!",
    highlights: ["Próx. Colégio Integral", "Entrada da Cidade"],
  },
  {
    id: 6,
    image: casaDonaMarta1,
    title: "Casa de Alto Padrão Cond. Dona Marta",
    location: "Cond. Dona Marta, Irecê",
    area: "600m²",
    areaNumber: 600,
    category: "Casa",
    price: "R$ 1.350.000",
    priceNumber: 1350000,
    description: "Exclusiva casa de alto padrão com 5 quartos, 2 suítes, piscina, espaço gourmet e sacada panorâmica.",
    highlights: ["Alto Padrão", "Piscina + Gourmet"],
    bedrooms: 5,
    bathrooms: 4,
  },
  {
    id: 7,
    image: terrenoAltoMoura1,
    title: "Terreno Alto do Moura",
    location: "Alto do Moura, Irecê",
    area: "375m²",
    areaNumber: 375,
    category: "Terreno",
    price: "R$ 210.000",
    priceNumber: 210000,
    description: "Terreno residencial de 375m² no Alto do Moura. Área tranquila com fácil acesso a escolas, comércio e serviços.",
    highlights: ["Área Tranquila", "Em Valorização"],
  },
  {
    id: 8,
    image: fazendaMocozeiro1,
    title: "Fazenda Estrada do Mocozeiro 2",
    location: "Estrada do Mocozeiro 2, Irecê",
    area: "32.670m²",
    areaNumber: 32670,
    category: "Fazenda",
    price: "R$ 800.000",
    priceNumber: 800000,
    description: "Fazenda de 7,5 tarefas com 2 poços artesianos, energia solar e internet. Região de grande valorização, ideal para agropecuária.",
    highlights: ["2 Poços Artesianos", "Energia Solar"],
  },
  {
    id: 9,
    image: terrenoMocozeiro2_1,
    title: "Oito Tarefas de Terras no Mocozeiro 2",
    location: "Mocozeiro 2, Irecê",
    area: "34.848m²",
    areaNumber: 34848,
    category: "Terreno Rural",
    price: "R$ 180.000",
    priceNumber: 180000,
    description: "Terreno de 8 tarefas próximo à BA-800 e grandes condomínios. O mais barato da região com grande potencial de valorização!",
    highlights: ["8 Tarefas", "Mais Barato da Região"],
  },
  {
    id: 10,
    image: terrenoAlphaGarden1,
    title: "Terreno Condomínio Alpha Garden",
    location: "BA-800, Meia Hora, Irecê",
    area: "300m²",
    areaNumber: 300,
    category: "Terreno",
    price: "R$ 105.000",
    priceNumber: 105000,
    description: "Terreno exclusivo no Condomínio Alpha Garden, na BA-800. Segurança 24h, piscinas, academia, salão de festas e quadra poliesportiva.",
    isGatedCommunity: true,
    highlights: ["Condomínio Fechado", "Lazer Completo"],
    dimensions: "10x30m",
  },
  {
    id: 11,
    image: terrenoAlphaGarden2_1,
    title: "Terreno Alpha Garden - 378m²",
    location: "BA-800, Meia Hora, Irecê",
    area: "378m²",
    areaNumber: 378,
    category: "Terreno",
    price: "R$ 132.300",
    priceNumber: 132300,
    description: "Terreno de 378m² (13,5x28m) no Condomínio Alpha Garden. Segurança 24h, piscinas, academia, quadras e aceita permuta.",
    isGatedCommunity: true,
    highlights: ["378m² Esquina", "Aceita Permuta"],
    dimensions: "13,5x28m",
  },
  {
    id: 12,
    image: loteAcquaville1,
    title: "Lote Acquaville Park Show",
    location: "KM 354, BA-052, Irecê",
    area: "150m²",
    areaNumber: 150,
    category: "Terreno",
    price: "R$ 90.000",
    priceNumber: 90000,
    description: "Lote exclusivo de 150m² no Acquaville Park Show com passaporte vitalício ao parque aquático. Piscina semi-olímpica e segurança 24h.",
    isGatedCommunity: true,
    highlights: ["Parque Aquático", "Passaporte Vitalício"],
    dimensions: "10x15m",
  },
  {
    id: 13,
    image: lotePiemont1,
    title: "Lote Reserva Piemont 2",
    location: "BA-144, Morro do Chapéu",
    area: "375m²",
    areaNumber: 375,
    category: "Terreno",
    price: "R$ 55.000",
    priceNumber: 55000,
    description: "Lote de 375m² no Reserva Piemont 2, Morro do Chapéu. Condomínio estilo europeu com vista para o Vale do Agreste, piscina aquecida e lareiras.",
    isGatedCommunity: true,
    highlights: ["Estilo Europeu", "Vista Montanhosa"],
    dimensions: "15x25m",
  },
  {
    id: 14,
    image: loteCabore2_1,
    title: "Lote Caboré - São Gabriel",
    location: "Loteamento Caboré, São Gabriel, BA",
    area: "200m²",
    areaNumber: 200,
    category: "Terreno",
    price: "R$ 35.000",
    priceNumber: 35000,
    description: "Lote de 200m² (10x20m) no Loteamento Caboré, São Gabriel. Próximo ao Colégio Integral e entrada principal da cidade.",
    highlights: ["Próx. Colégio Integral", "R$ 35 mil"],
    dimensions: "10x20m",
  },
  {
    id: 15,
    image: terrenoGreenville2_1,
    title: "Terreno Green Ville - R$ 80 mil",
    location: "Cond. Green Ville, Irecê",
    area: "200m²",
    areaNumber: 200,
    category: "Terreno",
    price: "R$ 80.000",
    priceNumber: 80000,
    description: "Terreno de 200m² nas primeiras quadras do Green Ville. Condomínio com piscina, churrasqueira, parquinhos e segurança 24h.",
    isGatedCommunity: true,
    highlights: ["Primeiras Quadras", "Ótimo Preço"],
    dimensions: "10x20m",
  },
];

const AllProperties = () => {
  const navigate = useNavigate();
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const { startTransition } = usePageTransition();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handlePropertyClick = (property: typeof allProperties[0]) => {
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

  // Filtrar imóveis
  const filteredProperties = allProperties
    .filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        categoryFilter === "all" || property.category === categoryFilter;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.priceNumber - b.priceNumber;
        case "price-desc":
          return b.priceNumber - a.priceNumber;
        case "area-asc":
          return a.areaNumber - b.areaNumber;
        case "area-desc":
          return b.areaNumber - a.areaNumber;
        default:
          return 0;
      }
    });

  const categories = ["all", ...new Set(allProperties.map((p) => p.category))];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
      >
        <div className="container-luxury py-4 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium hidden sm:inline">Voltar</span>
          </button>

          <img
            src={logo}
            alt="Joíle Barreto - RE/MAX Gardense"
            className="h-10 object-contain cursor-pointer"
            onClick={() => navigate("/")}
          />

          <div className="w-20" />
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 lg:py-16">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4">
              Imóveis em Irecê
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore nossa seleção completa de imóveis em Irecê e região
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl p-4 md:p-6 shadow-sm border border-border"
          >
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  placeholder="Buscar por nome ou localização..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>

              {/* Category Filter */}
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-48 h-12">
                  <SlidersHorizontal size={16} className="mr-2" />
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas categorias</SelectItem>
                  {categories
                    .filter((c) => c !== "all")
                    .map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48 h-12">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Mais recentes</SelectItem>
                  <SelectItem value="price-asc">Menor preço</SelectItem>
                  <SelectItem value="price-desc">Maior preço</SelectItem>
                  <SelectItem value="area-asc">Menor área</SelectItem>
                  <SelectItem value="area-desc">Maior área</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8 lg:py-12">
        <div className="container-luxury">
          {/* Results count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">
                {filteredProperties.length}
              </span>{" "}
              {filteredProperties.length === 1 ? "imóvel encontrado" : "imóveis encontrados"}
            </p>
          </div>

          {/* Properties Grid */}
          {filteredProperties.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  ref={(el) => { cardRefs.current[property.id] = el; }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
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
                    highlights={property.highlights}
                    price={property.price}
                    onDetailsClick={() => handlePropertyClick(property)}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">
                Nenhum imóvel encontrado com os filtros selecionados.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
                }}
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container-luxury text-center">
          <img
            src={logo}
            alt="Joíle Barreto - RE/MAX Gardense"
            className="h-10 mx-auto mb-4 brightness-0 invert"
          />
          <p className="text-sm opacity-70">
            © 2024 Joíle Barreto | RE/MAX Gardense | Irecê, BA. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AllProperties;
