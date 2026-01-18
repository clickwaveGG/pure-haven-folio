import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Shield, Handshake, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Home,
    number: "01",
    title: "Busca Personalizada",
    description: "Entendo suas necessidades e encontro imóveis que realmente fazem sentido para você e sua família.",
  },
  {
    icon: Shield,
    number: "02",
    title: "Transparência Total",
    description: "Você acompanha cada etapa do processo com clareza. Sem surpresas, sem letras miúdas.",
  },
  {
    icon: Handshake,
    number: "03",
    title: "Acompanhamento Completo",
    description: "Estou ao seu lado da primeira visita até a entrega das chaves, cuidando de toda a documentação.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Melhor Negociação",
    description: "Experiência de mercado para garantir as melhores condições na sua compra ou venda.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary/30 relative">
      <div className="container-luxury">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Title */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-primary mb-4">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              Como posso ajudar
            </span>
            <h2 className="text-headline text-foreground mb-6">
              Um atendimento feito para você
            </h2>
            <p className="text-subheadline">
              Cada pessoa tem uma história única. Por isso, meu trabalho é 
              ouvir, entender e encontrar a melhor solução para você.
            </p>
          </motion.div>

          {/* Right Column - Services List */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="welcome-card p-6 hover-lift transition-all duration-300">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <service.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-serif text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
