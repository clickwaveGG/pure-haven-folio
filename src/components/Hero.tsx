import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, Home, Star, ShieldCheck, MapPin } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import handshake3d from "@/assets/handshake-3d.png";
import brokerPhoto from "@/assets/broker-photo.png";
import logoJoile from "@/assets/logo-joile-barreto.png";
import { motion } from "framer-motion";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ShinyButton } from "@/components/ui/shiny-button";
import { useSkipAnimations } from "@/pages/Index";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "warm" | "outline";
}

interface HeroProps {
  badge?: {
    text: string;
    action: { text: string; href: string };
  };
  title: string;
  description: string;
  actions: HeroAction[];
}

function AgentTrustCard({ skipAnimations }: { skipAnimations: boolean }) {
  const stats = [
    { value: "150+", label: "Famílias atendidas" },
    { value: "98%",  label: "Satisfação" },
    { value: "CRECI", label: "34117" },
  ];

  return (
    <motion.div
      initial={skipAnimations ? false : { opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: skipAnimations ? 0 : 0.7, ease: "easeOut" }}
      className="w-full max-w-md mx-auto"
    >
      <div className="bg-card border border-border rounded-3xl shadow-xl overflow-hidden">

        {/* Photo */}
        <div className="relative h-72 bg-gradient-to-br from-primary/8 to-secondary overflow-hidden">
          <img
            src={brokerPhoto}
            alt="Joíle Barreto — Corretor de Imóveis RE/MAX Gardense"
            className="w-full h-full object-cover object-top"
          />
          {/* Subtle bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent" />

          {/* RE/MAX badge — top right */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-md flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-primary" />
            <span className="text-xs font-semibold text-foreground">RE/MAX Gardense</span>
          </div>

          {/* Available badge — top left */}
          <div className="absolute top-4 left-4 bg-green-500 text-white rounded-xl px-3 py-1.5 shadow-md flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            <span className="text-xs font-semibold">Online agora</span>
          </div>
        </div>

        {/* Info */}
        <div className="px-6 pt-4 pb-5">
          {/* Name + location */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-foreground tracking-tight">Joíle Barreto</h3>
            <div className="flex items-center gap-1.5 mt-1 text-muted-foreground">
              <MapPin size={12} />
              <span className="text-sm">Corretor de Imóveis · Irecê, Bahia</span>
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-xs text-muted-foreground ml-1.5">98% de satisfação</span>
          </div>

          {/* Divider */}
          <div className="h-px bg-border mb-4" />

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2">
            {stats.map((s) => (
              <div key={s.label} className="text-center bg-secondary/50 rounded-xl py-3">
                <p className="text-base font-bold text-primary leading-tight">{s.value}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote below card */}
      <motion.div
        initial={skipAnimations ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: skipAnimations ? 0 : 1.1 }}
        className="mt-4 bg-primary/5 border border-primary/15 rounded-2xl px-5 py-4"
      >
        <p className="text-sm font-serif italic text-foreground/80 leading-relaxed text-center">
          "Minha missão é tornar a sua jornada imobiliária simples, segura e, por que não, prazerosa."
        </p>
      </motion.div>
    </motion.div>
  );
}

function HeroSection({ badge, title, description, actions }: HeroProps) {
  const skipAnimations = useSkipAnimations();
  const animationClass = skipAnimations ? "" : "animate-appear opacity-0";

  return (
    <section id="hero" className="overflow-hidden bg-background pt-24 pb-16 relative min-h-screen">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <DottedSurface className="opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />
      </div>
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl z-0" />

      <div className="container-luxury relative z-10">
        <div className="relative z-10 flex flex-col items-center gap-4 pb-8 -mt-20 md:pb-12 md:-mt-16 lg:pb-16 lg:-mt-14">

          {/* Badge */}
          {badge && (
            <div className="flex flex-col items-center">
              <motion.img
                src={handshake3d}
                alt="Parceria imobiliária"
                initial={skipAnimations ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-28 h-28 md:w-36 md:h-36 object-contain mb-[1px] -mt-[5px]"
              />
              <Badge variant="outline" className={`${animationClass} gap-2 border-primary/30 bg-primary/5 text-primary px-4 py-1.5 rounded-full`}>
                <span className="text-muted-foreground">{badge.text}</span>
                <a href={badge.action.href} className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-medium">
                  {badge.action.text}
                  <ArrowRightIcon className="h-3 w-3" />
                </a>
              </Badge>
            </div>
          )}

          {/* Title */}
          <h1 className={`${animationClass} text-balance text-center font-serif text-4xl font-normal tracking-tight text-foreground ${skipAnimations ? '' : 'delay-100'} md:text-5xl lg:text-6xl xl:text-7xl`}>
            {title}
          </h1>

          {/* Description */}
          <p className={`${animationClass} max-w-2xl text-balance text-center text-base font-normal text-muted-foreground ${skipAnimations ? '' : 'delay-300'} md:text-lg lg:text-xl leading-relaxed`}>
            {description}
          </p>

          {/* Actions */}
          <div className={`${animationClass} relative z-10 flex flex-col items-center justify-center gap-4 ${skipAnimations ? '' : 'delay-300'} sm:flex-row`}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {actions.map((action, index) => (
                <ShinyButton
                  key={index}
                  href={action.href}
                  className={index === 1 ? "shiny-cta-green" : ""}
                >
                  {action.icon}
                  {action.text}
                </ShinyButton>
              ))}
            </div>
          </div>

          {/* Trust indicators */}
          <div className={`${animationClass} flex items-center gap-6 text-sm text-muted-foreground ${skipAnimations ? '' : 'delay-500'}`}>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Atendimento personalizado
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              +150 famílias atendidas
            </span>
            <span className="hidden md:flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              CRECI 34117
            </span>
          </div>

          {/* Agent Trust Card */}
          <div className={`${animationClass} relative w-full pt-8 ${skipAnimations ? '' : 'delay-700'}`}>
            <AgentTrustCard skipAnimations={skipAnimations} />
          </div>

        </div>
      </div>
    </section>
  );
}

const Hero = () => (
  <HeroSection
    badge={{
      text: "RE/MAX Gardense",
      action: { text: "Conheça", href: "#about" },
    }}
    title="O Imóvel certo em Irecê começa aqui"
    description="Sou Joíle Barreto, Corretor RE/MAX em Irecê. Ajudo famílias e investidores a encontrar o imóvel ideal — com atendimento próximo, processo transparente e suporte completo do início ao fim."
    actions={[
      {
        text: "Ver Imóveis",
        href: "#properties",
        variant: "default",
        icon: <Home className="h-4 w-4" />,
      },
      {
        text: "WhatsApp",
        href: "https://wa.me/5574999993009",
        variant: "outline",
        icon: <Icons.whatsapp className="h-4 w-4" />,
      },
    ]}
  />
);

export default Hero;
