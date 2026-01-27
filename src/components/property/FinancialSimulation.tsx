import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Calculator, Info } from "lucide-react";

interface FinancialSimulationProps {
  propertyPrice: number;
}

const FinancialSimulation = ({ propertyPrice }: FinancialSimulationProps) => {
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTermYears] = useState(30);

  const calculation = useMemo(() => {
    const downPayment = propertyPrice * (downPaymentPercent / 100);
    const loanAmount = propertyPrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTermYears * 12;

    const monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return {
      downPayment,
      monthlyPayment: isNaN(monthlyPayment) ? 0 : monthlyPayment,
    };
  }, [propertyPrice, downPaymentPercent, interestRate, loanTermYears]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="bg-gradient-to-br from-muted/50 to-muted rounded-2xl p-6 space-y-5"
    >
      <div className="flex items-center gap-2 text-foreground">
        <Calculator size={20} className="text-primary" />
        <h3 className="font-serif text-lg">Simulação</h3>
      </div>

      <div className="space-y-4">
        {/* Down Payment */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Entrada ({downPaymentPercent}%)</span>
            <span className="font-medium text-foreground">
              {formatCurrency(calculation.downPayment)}
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="50"
            value={downPaymentPercent}
            onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            className="w-full h-2 bg-primary/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary"
          />
        </div>

        {/* Interest Rate */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Taxa de Juro Anual (%)</span>
          </div>
          <input
            type="number"
            step="0.1"
            min="0.1"
            max="15"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full px-4 py-2 bg-white border border-border rounded-lg text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>

        {/* Result */}
        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              Prestação Estimada
              <Info size={14} className="text-muted-foreground/50" />
            </span>
          </div>
          <p className="text-2xl font-serif text-primary">
            {formatCurrency(calculation.monthlyPayment)}/mês
          </p>
        </div>
      </div>

      <p className="text-xs text-muted-foreground">
        *Simulação meramente ilustrativa. Consulte seu banco para valores exatos.
      </p>
    </motion.div>
  );
};

export default FinancialSimulation;
