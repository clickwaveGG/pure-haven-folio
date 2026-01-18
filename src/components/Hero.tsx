import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, Phone, Heart } from "lucide-react";
import { Mockup, MockupFrame } from "@/components/ui/mockup";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-joile.jpg";
import heroImageMobile from "@/assets/hero-joile-mobile.png";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";
import { DottedSurface } from "@/components/ui/dotted-surface";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "warm" | "outline";
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: string;
  description: string;
  actions: HeroAction[];
  image: {
    src: string;
    alt: string;
  };
}

function HeroSection({
  badge,
  title,
  description,
  actions,
  image,
}: HeroProps) {
  return (
    <section id="hero" className="overflow-hidden bg-background pt-24 pb-8 relative min-h-screen">
      {/* Animated 3D Dotted Surface Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <DottedSurface className="opacity-80" />
        {/* Gradient overlay to fade effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />
      </div>

      {/* Decorative background shapes */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl z-0" />

      <div className="container-luxury relative z-10">
        <div className="relative z-10 flex flex-col items-center gap-6 pb-8 pt-8 md:pb-12 md:pt-12 lg:pb-16 lg:pt-16">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2 border-primary/30 bg-primary/5 text-primary px-4 py-1.5 rounded-full">
              <Heart className="h-3.5 w-3.5 fill-accent text-accent" />
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-medium">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          {/* Title */}
          <h1 className="animate-appear text-balance text-center font-serif text-4xl font-normal tracking-tight text-foreground opacity-0 delay-100 md:text-5xl lg:text-6xl xl:text-7xl">
            {title}
          </h1>

          {/* Description */}
          <p className="animate-appear max-w-2xl text-balance text-center text-base font-normal text-muted-foreground opacity-0 delay-300 md:text-lg lg:text-xl leading-relaxed">
            {description}
          </p>

          {/* Actions */}
          <div className="animate-appear relative z-10 flex flex-col items-center justify-center gap-4 opacity-0 delay-300 sm:flex-row">
            <div className="flex flex-col gap-3 sm:flex-row">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  asChild
                  size="lg"
                  className={cn(
                    "rounded-lg px-6 py-3",
                    action.variant === "warm" && "bg-accent text-accent-foreground hover:bg-accent/90",
                    action.variant === "outline" && "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  )}
                  variant={action.variant === "outline" ? "outline" : "default"}
                >
                  <a href={action.href} className="flex items-center gap-2">
                    {action.icon}
                    {action.text}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Trust indicators */}
          <div className="animate-appear flex items-center gap-6 text-sm text-muted-foreground opacity-0 delay-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Atendimento personalizado
            </span>
            <span className="hidden sm:flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              +280 clientes satisfeitos
            </span>
          </div>

          {/* Image with soft styling */}
          <div className="animate-appear relative w-full pt-8 opacity-0 delay-700">
            <MockupFrame size="small" className="mx-auto max-w-5xl">
              <Mockup type="responsive" className="w-full rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto aspect-[16/9] object-cover"
                />
              </Mockup>
            </MockupFrame>
          </div>
        </div>
      </div>
    </section>
  );
}

const Hero = () => {
  const isMobile = useIsMobile();
  const currentHeroImage = isMobile ? heroImageMobile : heroImage;

  return (
    <HeroSection
      badge={{
        text: "Seu parceiro imobiliário",
        action: {
          text: "Conheça",
          href: "#about",
        },
      }}
      title="Encontre o lar dos seus sonhos"
      description="Sou Joíle Barreto, corretor dedicado a ajudar famílias e investidores a encontrar o imóvel perfeito. Atendimento próximo, transparente e focado nas suas necessidades."
      actions={[
        {
          text: "Fale Comigo",
          href: "#contact",
          variant: "default",
          icon: <Phone className="h-4 w-4" />,
        },
        {
          text: "WhatsApp",
          href: "https://wa.me/5561999999999",
          variant: "outline",
          icon: <Icons.whatsapp className="h-4 w-4" />,
        },
      ]}
      image={{
        src: currentHeroImage,
        alt: "Joíle Barreto, Corretor de Imóveis",
      }}
    />
  );
};

export default Hero;
