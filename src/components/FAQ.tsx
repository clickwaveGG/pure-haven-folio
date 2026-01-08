import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o processo de compra de um imóvel de alto padrão?",
    answer: "O processo começa com uma conversa detalhada para entender suas necessidades, preferências e estilo de vida. A partir daí, faço uma curadoria personalizada de imóveis que atendam aos seus critérios, agendamos visitas privativas, e conduzo toda a negociação e documentação até a entrega das chaves.",
  },
  {
    question: "Vocês trabalham com imóveis off-market?",
    answer: "Sim, grande parte do nosso portfólio consiste em propriedades exclusivas que não estão anunciadas publicamente. Nossa rede de contatos nos dá acesso a oportunidades antes de chegarem ao mercado aberto.",
  },
  {
    question: "Qual é o nível de confidencialidade nas negociações?",
    answer: "Absoluto. Trabalhamos com acordos de confidencialidade quando necessário, e todas as informações sobre clientes e transações são tratadas com o mais alto nível de discrição. Sua privacidade é nossa prioridade.",
  },
  {
    question: "Atendem investidores internacionais?",
    answer: "Sim, temos experiência em atender clientes internacionais, oferecendo suporte completo incluindo questões legais específicas, tributação e assessoria em todo o processo de aquisição.",
  },
  {
    question: "Qual é a área de atuação?",
    answer: "Atuamos principalmente em São Paulo, litoral paulista, serra da Mantiqueira e regiões metropolitanas. Para imóveis em outras localidades, trabalhamos em parceria com corretores de confiança.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-grain relative">
      <div className="container-luxury">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Title */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="inline-flex items-center gap-3 text-sm font-sans tracking-[0.3em] uppercase text-primary mb-6">
              <span className="w-12 h-px bg-primary" />
              Perguntas Frequentes
            </span>
            <h2 className="text-headline text-foreground mb-6">
              Dúvidas sobre o processo?
            </h2>
            <p className="text-subheadline">
              Transparência é fundamental. Aqui estão as respostas para as
              perguntas mais comuns sobre nossos serviços.
            </p>
          </motion.div>

          {/* Right Column - FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="luxury-card px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground font-sans text-sm leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
