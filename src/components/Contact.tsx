import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding bg-grain relative">
      <div className="container-luxury">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-3 text-sm font-sans tracking-[0.3em] uppercase text-primary mb-6">
              <span className="w-12 h-px bg-primary" />
              Contato
            </span>
            <h2 className="text-headline text-foreground mb-6">
              Vamos criar algo extraordinário juntos
            </h2>
            <p className="text-subheadline mb-12">
              O primeiro passo para encontrar sua próxima propriedade exclusiva
              é uma conversa. Entre em contato e descubra como posso ajudá-lo.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-1">
                    Telefone
                  </p>
                  <p className="text-foreground font-sans">+55 11 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-1">
                    Email
                  </p>
                  <p className="text-foreground font-sans">contato@joilebarreto.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-sans tracking-widest uppercase text-muted-foreground mb-1">
                    Localização
                  </p>
                  <p className="text-foreground font-sans">São Paulo, SP</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="luxury-card p-8 md:p-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-sans tracking-widest uppercase text-muted-foreground mb-3">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="bg-secondary border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-sans tracking-widest uppercase text-muted-foreground mb-3">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="bg-secondary border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-sans tracking-widest uppercase text-muted-foreground mb-3">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-secondary border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-sans tracking-widest uppercase text-muted-foreground mb-3">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="bg-secondary border-border/50 focus:border-primary text-foreground placeholder:text-muted-foreground resize-none"
                  placeholder="Como posso ajudá-lo?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="luxury-button w-full flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar mensagem
                    <Send size={16} />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-muted-foreground">
                Respondemos em até 24 horas úteis.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
