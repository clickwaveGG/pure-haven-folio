import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSafeBack } from "@/hooks/use-safe-back";
import { motion } from "framer-motion";
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePageTransition } from "@/contexts/PageTransitionContext";
import { PropertyCard } from "@/components/ui/property-card";
import { allProperties, Property } from "@/data/properties";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import logo from "@/assets/logo-joile-barreto.png";

interface CategoryPropertiesProps {
  title: string;
  subtitle: string;
  categoryFilter: string[];
  emptyMessage?: string;
}

const CategoryProperties = ({ title, subtitle, categoryFilter, emptyMessage }: CategoryPropertiesProps) => {
  const navigate = useNavigate();
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const { startTransition } = usePageTransition();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handlePropertyClick = (property: Property) => {
    const cardElement = cardRefs.current[property.id];
    if (cardElement) {
      const rect = cardElement.getBoundingClientRect();
      startTransition({
        rect,
        image: property.image,
        title: property.title,
        location: property.location,
      });
      setTimeout(() => navigate(`/imovel/${property.id}`), 50);
    } else {
      navigate(`/imovel/${property.id}`);
    }
  };

  const categoryProperties = allProperties.filter((p) =>
    categoryFilter.some((cat) => p.category.toLowerCase().includes(cat.toLowerCase()))
  );

  const filteredProperties = categoryProperties
    .filter((property) =>
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-asc": return a.priceNumber - b.priceNumber;
        case "price-desc": return b.priceNumber - a.priceNumber;
        case "area-asc": return a.areaNumber - b.areaNumber;
        case "area-desc": return b.areaNumber - a.areaNumber;
        default: return 0;
      }
    });

  return (
    <div className="min-h-screen bg-background">
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

      <section className="bg-gradient-to-b from-primary/5 to-background py-12 lg:py-16">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground mb-4">
              {title}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl p-4 md:p-6 shadow-sm border border-border"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nome ou localização..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
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

      <section className="py-8 lg:py-12">
        <div className="container-luxury">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">{filteredProperties.length}</span>{" "}
              {filteredProperties.length === 1 ? "imóvel encontrado" : "imóveis encontrados"}
            </p>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                {emptyMessage || "Nenhum imóvel encontrado nesta categoria no momento."}
              </p>
              <Button variant="outline" onClick={() => navigate("/imoveis")}>
                Ver todos os imóveis
              </Button>
            </div>
          )}
        </div>
      </section>

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

export default CategoryProperties;
