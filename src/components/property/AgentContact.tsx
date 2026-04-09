import { motion } from "framer-motion";
import { Phone, MessageCircle, Star, ShieldCheck, Clock, Award } from "lucide-react";
import brokerPhoto from "@/assets/broker-photo.png";

interface AgentContactProps {
  whatsappLink: string;
  phoneNumber: string;
  propertyPrice?: string;
}

const AgentContact = ({ whatsappLink, phoneNumber, propertyPrice }: AgentContactProps) => {
  const formattedPhone = phoneNumber
    .replace("+55", "")
    .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="sticky top-24 space-y-4"
    >
      {/* Main Contact Card */}
      <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border">

        {/* Card Header */}
        <div className="bg-gradient-to-br from-primary/10 to-primary/5 px-6 pt-6 pb-5 border-b border-border">
          <div className="flex items-center gap-4">
            <div className="relative flex-shrink-0">
              <img
                src={brokerPhoto}
                alt="Joíle Barreto"
                className="w-16 h-16 rounded-full object-cover border-2 border-primary shadow-md"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-green-500 rounded-full border-2 border-card" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-base text-foreground leading-tight">Joíle Barreto</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Corretor RE/MAX Gardense</p>
              <div className="flex items-center gap-1 mt-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-xs text-muted-foreground ml-1">5.0</span>
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-2 mt-4 flex-wrap">
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-primary bg-primary/10 rounded-full px-2.5 py-1">
              <ShieldCheck size={11} />
              CRECI Ativo
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground bg-secondary rounded-full px-2.5 py-1">
              <Award size={11} />
              RE/MAX Gardense
            </span>
          </div>
        </div>

        {/* Price snapshot */}
        {propertyPrice && (
          <div className="px-6 py-4 border-b border-border">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">Valor à vista</p>
            <p className="text-2xl font-bold text-primary leading-none">{propertyPrice}</p>
          </div>
        )}

        {/* Response time */}
        <div className="px-6 py-3 flex items-center gap-2 bg-green-50 dark:bg-green-950/20 border-b border-border">
          <Clock size={13} className="text-green-600 flex-shrink-0" />
          <p className="text-xs text-green-700 dark:text-green-400 font-medium">
            Respondo em menos de 1 hora via WhatsApp
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="p-5 space-y-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 w-full px-5 py-3.5 bg-[#25D366] text-white rounded-xl font-semibold text-sm hover:bg-[#20BA5C] transition-colors shadow-sm"
          >
            <MessageCircle size={18} />
            Falar pelo WhatsApp
          </a>

          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center gap-2.5 w-full px-5 py-3.5 bg-primary/10 text-primary border border-primary/20 rounded-xl font-semibold text-sm hover:bg-primary/20 transition-colors"
          >
            <Phone size={18} />
            {formattedPhone}
          </a>
        </div>
      </div>

      {/* Social proof quote */}
      <div className="bg-card rounded-2xl p-4 border border-border shadow-sm">
        <p className="text-xs text-center text-muted-foreground leading-relaxed italic">
          "Profissional dedicada e transparente. Me ajudou a encontrar o imóvel ideal em Irecê."
        </p>
        <p className="text-xs text-center font-semibold text-foreground mt-2">— Carlos M., cliente</p>
      </div>
    </motion.div>
  );
};

export default AgentContact;
