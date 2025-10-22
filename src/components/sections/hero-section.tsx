import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  return (
    <section className="relative isolate mt-12 rounded-3xl border border-border/60 bg-gradient-to-br from-background via-background to-primary/5 px-6 py-12 shadow-sm md:mt-16 md:px-12 md:py-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.05),_transparent_45%)]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-12 text-center">
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 font-medium text-primary">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            Disponibilidad inmediata
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-muted/60 bg-muted/20 px-4 py-1 text-muted-foreground">
            Experiencia comprobada en IA comercial
          </span>
        </div>

        <div className="space-y-6">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Despliega soluciones de IA que aceleran tus resultados
          </h1>
          <p className="mx-auto max-w-3xl text-balance text-lg text-muted-foreground md:text-xl">
            Construimos e integramos asistentes, automatizaciones y analítica
            inteligente para que tu equipo se concentre en lo que más importa:
            crecer.
          </p>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="https://calendly.com/maximodipaparicio/30min"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group w-full sm:w-auto"
            )}
          >
            <span className="inline-flex items-center gap-2">
              Agenda una reunión sin costo
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </span>
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5493816708372&text=Hola%20Máximo%20quiero%20implementar%20una%20infraestructura%20de%20IA%20en%20mi%20empresa"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "group w-full border-primary/40 text-primary transition-colors hover:border-primary hover:bg-primary/10 sm:w-auto"
            )}
          >
            <span className="inline-flex items-center gap-2">
              Escríbeme por WhatsApp
              <MessageCircle
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>

        <div className="grid w-full gap-4 rounded-2xl border border-border/50 bg-background/80 p-6 text-left sm:grid-cols-3">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Tiempo de implementación
            </p>
            <p className="text-lg font-semibold">3-5 semanas</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Casos de uso cubiertos
            </p>
            <p className="text-lg font-semibold">
              Ventas, soporte, operaciones
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              Acompañamiento
            </p>
            <p className="text-lg font-semibold">
              Chat 1:1 durante la implementación
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
