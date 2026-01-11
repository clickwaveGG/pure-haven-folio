import React from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { cn } from '@/lib/utils';
import { Variants } from 'framer-motion';

const transitionVariants: { item: Variants } = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: 'spring' as const,
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
                alt="background"
                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 lg:block"
                width={2000}
              />
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
                alt="background"
                className="absolute inset-x-0 top-56 -z-20 hidden md:top-32 md:block lg:hidden"
                width={1600}
              />
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
                alt="background"
                className="absolute inset-x-0 top-56 -z-20 md:hidden"
                width={500}
              />
            </AnimatedGroup>
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <a
                    href="#"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <span className="text-foreground text-sm">
                      Introducing Support for AI Models
                    </span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </a>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    item: transitionVariants.item,
                  }}
                  className="mt-8 flex flex-col gap-6 md:gap-10"
                >
                  <h1 className="text-balance text-4xl font-medium md:text-5xl lg:text-6xl xl:text-7xl">
                    Modern Solutions for Customer Engagement
                  </h1>
                  <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
                    Highly customizable components for building modern websites
                    and applications that look and feel the way you mean it.
                  </p>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    item: transitionVariants.item,
                  }}
                  className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row"
                >
                  <div className="bg-foreground/10 rounded-xl border p-0.5">
                    <Button size="lg" className="rounded-lg px-5 text-base">
                      <a href="#link" className="flex items-center gap-2">
                        Start Building
                      </a>
                    </Button>
                  </div>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5"
                  >
                    <a href="#link">Request a demo</a>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                item: transitionVariants.item,
              }}
            >
              <div className="relative mx-auto mt-8 overflow-hidden px-2 sm:mt-12 md:mt-20 lg:px-0">
                <div
                  aria-hidden
                  className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <img
                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
                    alt="app screen"
                    width="2700"
                  />
                  <img
                    className="z-2 border-border/25 bg-background aspect-15/8 relative rounded-2xl border dark:hidden"
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
                    alt="app screen"
                    width="2700"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
        <section className="bg-background pb-2 md:pb-32">
          <div className="group relative m-auto max-w-5xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="inline md:w-1/2">
                <span className="text-muted-foreground">
                  {' '}
                  Meet Our Customers
                </span>
              </div>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-6 brightness-0 grayscale md:justify-start lg:gap-10 dark:invert">
              <div className="flex">
                <Logo className="h-5 w-fit dark:invert" />
              </div>

              <div className="flex">
                <Logo className="h-5 w-fit dark:invert" />
              </div>
              <div className="flex">
                <Logo className="h-5 w-fit dark:invert" />
              </div>
              <div className="flex">
                <Logo className="h-5 w-fit dark:invert" />
              </div>
              <div className="flex">
                <Logo className="h-5 w-fit dark:invert" />
              </div>
              <div className="flex">
                <Logo className="h-5 w-fit dark:invert" />
              </div>
              <div className="flex">
                <Logo className="h-5 w-fit dark:invert" />
              </div>

              <div className="flex">
                <Logo className="h-5 w-fit dark:invert" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const menuItems = [
  { name: 'Features', href: '#link' },
  { name: 'Solution', href: '#link' },
  { name: 'Pricing', href: '#link' },
  { name: 'About', href: '#link' },
];

const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header>
      <nav
        data-state={isScrolled ? 'active' : undefined}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(
            'mx-auto mt-2 max-w-6xl rounded-full px-6 transition-all duration-300 lg:px-12',
            isScrolled &&
              'bg-background/50 max-w-4xl border backdrop-blur-lg lg:px-5'
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <a
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </a>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className={cn('m-auto size-6 duration-200', menuState && 'rotate-180 scale-0 opacity-0')} />
                <X className={cn('absolute inset-0 m-auto size-6 duration-200', menuState ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0')} />
              </button>
            </div>

            <div className="hidden lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={cn(
                'bg-background mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent',
                menuState && 'block'
              )}
            >
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button variant="outline" size="sm" className={cn(isScrolled && 'lg:hidden')}>
                  <a href="#link">Login</a>
                </Button>
                <Button variant="outline" size="sm" className={cn(isScrolled ? 'lg:inline-flex' : 'lg:hidden')}>
                  <a href="#link">Sign Up</a>
                </Button>
                <Button size="sm">
                  <a href="#link">Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn('h-5 text-foreground', className)}
      viewBox="0 0 78 30"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M55.8 24.2h-7.4V5.7h7.4c5.3 0 9.5 4.1 9.5 9.3 0 5.1-4.2 9.2-9.5 9.2Zm0-15.6h-4.3v12.6h4.3c3.8 0 6.5-2.9 6.5-6.3 0-3.4-2.7-6.3-6.5-6.3Z" />
      <path d="M44.5 24.2h-3.3l-5.4-7.3-2.3 2.4v4.9h-3V5.7h3v10.4l7.2-7.8h3.9l-6.4 6.9 6.3 9Z" />
      <path d="M15 5.7l-6.4 18.5h-3L10.4 11 7.2 20.5H4L0 5.7h3.2l2.7 10L9 5.7h3l3.1 10 2.7-10H21L15 24.2h-3L15 5.7Z" />
    </svg>
  );
};

export default HeroSection;
