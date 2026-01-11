import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Shield, Handshake, TrendingUp } from "lucide-react";
const services = [{
  icon: Home,
  number: "01",
  title: "Curadoria de Imóveis",
  description: "Seleção criteriosa de propriedades de alto padrão que atendem aos mais exigentes requisitos de qualidade, localização e exclusividade."
}, {
  icon: Shield,
  number: "02",
  title: "Atendimento Discreto",
  description: "Privacidade total em cada etapa. Seu nome e seus interesses são tratados com absoluta confidencialidade."
}, {
  icon: Handshake,
  number: "03",
  title: "Assessoria Completa",
  description: "Acompanhamento integral desde a primeira visita até a entrega das chaves, incluindo análise documental e jurídica."
}, {
  icon: TrendingUp,
  number: "04",
  title: "Negociação Estratégica",
  description: "Expertise em negociações de alto valor, garantindo as melhores condições para sua aquisição ou venda."
}];
const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="services" className="section-padding bg-grain relative">
      <div className="container-luxury">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Title */}
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8
        }}>
            <span className="inline-flex items-center gap-3 text-sm font-sans tracking-[0.3em] uppercase text-primary mb-6">
              <span className="w-12 h-px bg-primary" />
              O que fazemos
            </span>
            <h2 className="text-headline text-foreground mb-6">
              Serviços pensados para quem não aceita o comum
            </h2>
            <p className="text-subheadline">
              Cada cliente é único. Por isso, oferecemos um atendimento
              sob medida, com foco total em suas necessidades e aspirações.
            </p>
          </motion.div>

          {/* Right Column - Services List */}
          <div className="space-y-8">
            {services.map((service, index) => <motion.div key={service.number} initial={{
            opacity: 0,
            y: 30
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: index * 0.15
          }} className="group">
                <div className="luxury-card p-8 hover-lift hover-glow transition-all duration-500 cursor-default">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <span className="text-xs font-sans tracking-widest text-primary/60">
                        {service.number}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-4">
                        <service.icon className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-serif text-foreground group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Services;