import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function CTASection() {
  return (
    <section id="book" className="space-y-4 text-center scroll-mt-20">
      <h2 className="text-2xl font-semibold md:text-3xl">
        La IA no es el futuro, es el presente.
      </h2>
      <p className="text-muted-foreground">
        Cuéntame tus objetivos — respondo dentro de 24 horas.
      </p>
      <div className="mt-4 flex justify-center">
        <Link
          href="https://calendly.com/maximodipaparicio/30min"
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({}), "w-full sm:w-auto")}
        >
          Agenda una reunión
        </Link>
      </div>
      <p className="text-xs text-muted-foreground">
        O escribe a maximodipaparicio@gmail.com
      </p>
    </section>
  );
}
