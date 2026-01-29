import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Maximize, ArrowUpRight, Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePageTransition } from "@/contexts/PageTransitionContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Assets
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import logo from "@/assets/logo-joile-barreto.png";

const allProperties = [
  {
    id: 4,
    image: property1,
    title: "Terreno Asa Sul com Duas Frentes",
    location: "Bairro Asa Sul, Irecê",
    area: "210m²",
    areaNumber: 210,
    category: "Terreno",
    price: "R$ 280.000",
    priceNumber: 280000,
    bedrooms: 0,
    bathrooms: 0,
    description: "Oportunidade única! Terreno 7x30m com acesso duplo (duas frentes). Próximo à UPA, Faculdade FAI e Av. 1º de Janeiro.",
  },
  {
    id: 1,
    image: property1,
    title: "Casa Alto da Colina",
    location: "Centro, Irecê",
    area: "180m²",
    areaNumber: 180,
    category: "Casa",
    price: "R$ 380.000",
    priceNumber: 380000,
    bedrooms: 3,
    bathrooms: 2,
    description: "Casa espaçosa com 3 quartos, quintal e área de lazer. Perfeita para famílias que buscam conforto e praticidade.",
  },
  {
    id: 2,
    image: property2,
    title: "Apartamento Jardim das Flores",
    location: "Bairro São José, Irecê",
    area: "75m²",
    areaNumber: 75,
    category: "Apartamento",
    price: "R$ 220.000",
    priceNumber: 220000,
    bedrooms: 2,
    bathrooms: 2,
    description: "Apartamento moderno com 2 quartos em condomínio com área de lazer. Ideal para casais e jovens profissionais.",
  },
  {
    id: 3,
    image: property3,
    title: "Terreno Vila Nova",
    location: "Bairro Vila Nova, Irecê",
    area: "360m²",
    areaNumber: 360,
    category: "Terreno",
    price: "R$ 120.000",
    priceNumber: 120000,
    bedrooms: 0,
    bathrooms: 0,
    description: "Terreno plano em área residencial com infraestrutura completa. Realize o sonho de construir sua casa ideal.",
  },
];

const AllProperties = () => {
  const navigate = useNavigate();
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const { startTransition } = usePageTransition();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
                  onMouseEnter={() => setHoveredId(property.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handlePropertyClick(property)}
                  className="group bg-card rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
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
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <MapPin size={14} className="text-accent" />
                      <span className="text-sm">{property.location}</span>
                    </div>

                    <h3 className="text-lg font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300 line-clamp-1">
                      {property.title}
                    </h3>

                    <p
                      className="text-xl font-semibold text-primary mb-3"
                      style={{ fontFamily: "Helvetica, sans-serif" }}
                    >
                      {property.price}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Maximize size={14} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {property.area}
                        </span>
                      </div>

                      {property.bedrooms > 0 && (
                        <span className="text-sm text-muted-foreground">
                          {property.bedrooms} quartos
                        </span>
                      )}

                      <motion.div
                        className="flex items-center text-primary"
                        animate={{ x: hoveredId === property.id ? 4 : 0 }}
                      >
                        <ArrowUpRight size={16} />
                      </motion.div>
                    </div>
                  </div>
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
