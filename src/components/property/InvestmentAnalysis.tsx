import { motion } from "framer-motion";
import { TrendingUp, School, ShoppingCart, Train, Footprints } from "lucide-react";

interface InvestmentAnalysisProps {
  pricePerM2: string;
  avgPricePerM2: string;
  walkScore: number;
  nearbyPlaces: { icon: string; name: string; distance: string }[];
}

const InvestmentAnalysis = ({
  pricePerM2,
  avgPricePerM2,
  walkScore,
  nearbyPlaces,
}: InvestmentAnalysisProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 70) return "text-yellow-600";
    return "text-orange-600";
  };

  const iconMap: Record<string, React.ReactNode> = {
    school: <School size={16} />,
    market: <ShoppingCart size={16} />,
    metro: <Train size={16} />,
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 space-y-6"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">Análise de Investimento</h2>
        <span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
          <TrendingUp size={14} />
          Mercado em Alta
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Price Comparison */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Comparativo Preço / m²
          </h3>
          
          <div className="space-y-3">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Média na Zona</span>
                <span className="font-semibold text-foreground" style={{ fontFamily: "Helvetica, sans-serif" }}>{avgPricePerM2}/m²</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-muted-foreground/40 rounded-full" style={{ width: "75%" }} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-primary font-medium">Este Imóvel (Oportunidade)</span>
                <span className="font-semibold text-primary" style={{ fontFamily: "Helvetica, sans-serif" }}>{pricePerM2}/m²</span>
              </div>
              <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: "65%" }} />
              </div>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            *Baseado em dados de mercado dos últimos 6 meses.
          </p>
        </div>

        {/* Walk Score & Nearby */}
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-card rounded-xl shadow-sm border border-border">
            <div className={`text-4xl font-bold ${getScoreColor(walkScore)}`} style={{ fontFamily: "Helvetica, sans-serif" }}>
              {walkScore}
            </div>
            <div>
              <div className="flex items-center gap-1 text-foreground font-medium">
                <Footprints size={16} />
                Pontuação do Andarilho
              </div>
              <p className="text-xs text-muted-foreground">
                Não necessita de carro para o dia a dia.
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {nearbyPlaces.map((place, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="text-primary">{iconMap[place.icon] || <School size={16} />}</span>
                <span>{place.name}</span>
                <span className="ml-auto text-xs">{place.distance}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default InvestmentAnalysis;
