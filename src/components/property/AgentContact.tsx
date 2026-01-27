import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, Star } from "lucide-react";
import brokerPhoto from "@/assets/broker-photo.png";

interface AgentContactProps {
  whatsappLink: string;
  phoneNumber: string;
  email: string;
}

const AgentContact = ({ whatsappLink, phoneNumber, email }: AgentContactProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-card rounded-2xl p-6 shadow-lg border border-border sticky top-24"
    >
      {/* Agent Info */}
      <div className="flex items-center gap-4 pb-6 border-b border-border">
        <div className="relative">
          <img
            src={brokerPhoto}
            alt="Joíle Barreto"
            className="w-16 h-16 rounded-full object-cover border-2 border-primary"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
        </div>
        <div>
          <h3 className="font-serif text-lg text-foreground">Joíle Barreto</h3>
          <p className="text-sm text-muted-foreground">Consultor Imobiliário</p>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Buttons */}
      <div className="space-y-3 pt-6">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#20BA5C] transition-colors"
        >
          <MessageCircle size={20} />
          Conversar agora
        </a>

        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
        >
          <Phone size={20} />
          Agendar Visita
        </a>

        <a
          href={`mailto:${email}`}
          className="flex items-center justify-center gap-2 w-full px-6 py-3 border-2 border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Mail size={20} />
          Enviar E-mail
        </a>
      </div>
    </motion.div>
  );
};

export default AgentContact;
