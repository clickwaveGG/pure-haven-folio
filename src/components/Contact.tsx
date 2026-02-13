import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useSkipAnimations } from "@/pages/Index";

const Contact = () => {
  const ref = useRef(null);
  const skipAnimations = useSkipAnimations();
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada! 🎉",
      description: "Entrarei em contato em breve.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30 relative">
      <div className="container-luxury">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Content */}
          <motion.div
            initial={skipAnimations ? false : { opacity: 0, x: -40 }}
            animate={skipAnimations ? { opacity: 1, x: 0 } : (isInView ? { opacity: 1, x: 0 } : {})}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-primary mb-4">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              Contato
            </span>
            <h2 className="text-headline text-foreground mb-4">
              Vamos conversar sobre seu próximo imóvel?
            </h2>
            <p className="text-subheadline mb-10">
              Estou aqui para ajudar você a encontrar o lar perfeito. 
              Entre em contato sem compromisso, terei prazer em ouvir você.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-0.5">
                    Telefone
                  </p>
                  <p className="text-foreground font-medium">+55 74 99999-3009</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-0.5">
                    Email
                  </p>
                  <p className="text-foreground font-medium">joile@remaxgardense.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-0.5">
                    Localização
                  </p>
                  <p className="text-foreground font-medium">Irecê, Bahia</p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a 
                href="https://wa.me/5574999993009" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-green-800">
                    Prefere WhatsApp?
                  </p>
                  <p className="text-green-700 font-medium group-hover:underline">Clique aqui para conversar →</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={skipAnimations ? false : { opacity: 0, x: 40 }}
            animate={skipAnimations ? { opacity: 1, x: 0 } : (isInView ? { opacity: 1, x: 0 } : {})}
            transition={{ duration: 0.8, delay: skipAnimations ? 0 : 0.2 }}
          >
            <form onSubmit={handleSubmit} className="welcome-card p-6 md:p-8 space-y-5">
              <div className="text-center mb-2">
                <h3 className="text-xl font-serif text-foreground mb-1">Envie uma mensagem</h3>
                <p className="text-sm text-muted-foreground">Respondo em até 24 horas</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Seu nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="bg-background border-border focus:border-primary focus:ring-primary/20"
                    placeholder="Como posso te chamar?"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    WhatsApp
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="bg-background border-border focus:border-primary focus:ring-primary/20"
                    placeholder="(74) 99999-3009"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="bg-background border-border focus:border-primary focus:ring-primary/20"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Como posso ajudar?
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="bg-background border-border focus:border-primary focus:ring-primary/20 resize-none"
                  placeholder="Conte um pouco sobre o que você procura..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="welcome-button w-full flex items-center justify-center gap-2 disabled:opacity-50"
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
                Suas informações estão seguras e não serão compartilhadas.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
