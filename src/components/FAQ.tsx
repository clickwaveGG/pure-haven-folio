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
    question: "Como funciona o processo de compra de um imóvel?",
    answer: "Tudo começa com uma conversa. Entendo suas necessidades, orçamento e o que realmente importa para você. A partir daí, seleciono imóveis que fazem sentido — sem perda de tempo. Acompanho todas as visitas, cuido de toda a negociação e da documentação até a entrega das chaves.",
  },
  {
    question: "Preciso ter todo o valor disponível para comprar?",
    answer: "Não. Existem diversas modalidades de financiamento, incluindo Caixa Econômica, bancos privados e consórcios. Posso orientá-lo sobre as melhores opções e indicar parceiros de confiança para simular as condições ideais para o seu perfil.",
  },
  {
    question: "Quanto tempo leva todo o processo?",
    answer: "Em média, de 30 a 90 dias — desde a escolha do imóvel até a assinatura do contrato. O prazo varia de acordo com a forma de pagamento e a documentação das partes. Trabalho para agilizar cada etapa sem comprometer a segurança do negócio.",
  },
  {
    question: "Vocês também ajudam a vender imóveis?",
    answer: "Sim. Ofereço assessoria completa para proprietários que querem vender: avaliação de mercado justa, fotos e divulgação profissional, e condução das negociações para fechar o melhor negócio. Entre em contato para conversarmos.",
  },
  {
    question: "Qual é a área de atuação?",
    answer: "Atuo principalmente em Irecê e região, na Bahia. Para imóveis em outras localidades, trabalho em parceria com corretores de confiança para garantir o mesmo nível de atendimento.",
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
              Respostas para as dúvidas mais comuns
            </h2>
            <p className="text-subheadline">
              Comprar ou vender um imóvel é uma das decisões mais importantes da vida.
              Aqui estão as respostas que mais me pedem — com clareza e sem enrolação.
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
