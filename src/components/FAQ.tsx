import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSkipAnimations } from "@/pages/Index";

const faqs = [
  {
    question: "Como funciona o processo de compra de um Imóvel?",
    answer: "Começamos com uma conversa para entender suas necessidades, orçamento e preferências. Depois, seleciono Imóveis que fazem sentido para você, agendamos visitas e acompanho toda a negociação e documentação até a entrega das chaves.",
  },
  {
    question: "Preciso ter todo o dinheiro para comprar um imóvel?",
    answer: "Não necessariamente. Existem diversas opções de financiamento disponíveis. Posso ajudá-lo a entender as melhores condições e indicar parceiros de confiança para orientar sobre financiamento.",
  },
  {
    question: "Quanto tempo leva para comprar um imóvel?",
    answer: "Depende de vários fatores, mas geralmente o processo leva de 30 a 90 dias, desde encontrar o imóvel ideal até a assinatura do contrato. Faço o possível para agilizar cada etapa.",
  },
  {
    question: "Vocês ajudam a vender imóveis também?",
    answer: "Sim! Ofereço assessoria completa para venda, incluindo avaliação de mercado, fotos profissionais, divulgação e condução das negociações.",
  },
  {
    question: "Qual é a área de atuação?",
    answer: "Atuo principalmente em Brasília e região, incluindo Águas Claras, Sudoeste, Lago Sul, Lago Norte e cidades do entorno. Para outras localidades, trabalho em parceria com corretores de confiança.",
  },
];

const FAQ = () => {
  const ref = useRef(null);
  const skipAnimations = useSkipAnimations();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative">
      <div className="container-luxury">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Title */}
          <motion.div
            initial={skipAnimations ? false : { opacity: 0, x: -40 }}
            animate={skipAnimations ? { opacity: 1, x: 0 } : (isInView ? { opacity: 1, x: 0 } : {})}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="inline-flex items-center gap-3 text-sm font-medium tracking-wide text-primary mb-4">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              Dúvidas Frequentes
            </span>
            <h2 className="text-headline text-foreground mb-4">
              Perguntas comuns sobre o processo
            </h2>
            <p className="text-subheadline">
              Entendo que comprar ou vender um imóvel pode gerar muitas dúvidas. 
              Aqui estão as respostas para as perguntas mais frequentes.
            </p>
          </motion.div>

          {/* Right Column - FAQ */}
          <motion.div
            initial={skipAnimations ? false : { opacity: 0, y: 30 }}
            animate={skipAnimations ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : {})}
            transition={{ duration: 0.8, delay: skipAnimations ? 0 : 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="welcome-card px-5 border-none"
                >
                  <AccordionTrigger className="text-left font-serif text-base text-foreground hover:text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
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
