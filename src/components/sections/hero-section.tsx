import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden rounded-2xl border bg-gradient-to-b from-background to-muted/40 p-8 md:p-12 mt-12 md:mt-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
          Disponible
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-relaxed bg-gradient-to-b from-primary to-primary/60 bg-clip-text text-transparent pb-2">
          Soluciones con IA para tu empresa.
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Usa tu tiempo para crecer, no para atender.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="https://calendly.com/maximodipaparicio/30min"
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({}), "w-full sm:w-auto")}
          >
            Agenda una reunión sin costo
          </Link>
          <Link
            href="https://wa.me/5493814057449?text=Hola%20Máximo%20quiero%20implementar%20una%20infraestructura%20de%20IA%20en%20mi%20empresa"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "w-full sm:w-auto"
            )}
          >
            Escríbeme por WhatsApp
          </Link>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
