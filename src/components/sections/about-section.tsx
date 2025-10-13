"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const skills = [
  "Machine Learning",
  "SQL",
  "Python",
  "JavaScript",
  "Node.js",
  "Next.js",
  "n8n",
  "Cloud",
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="space-y-8 scroll-mt-28 animate-in fade-in duration-700"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-semibold md:text-3xl">
          Quién soy
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">
              Especialista en automatización con IA y desarrollo de sistemas
              inteligentes que{" "}
              <strong className="text-foreground">
                transforman la atención al cliente
              </strong>
              .
            </p>
            <p className="text-muted-foreground">
              Terminé la carrera de Tecnicatura Universitaria en Programación,
              tengo más de 3 años de experiencia en desarrollo de software y 1
              año especializándome en soluciones aplicando inteligencia
              artificial.
            </p>
            <p className="text-muted-foreground">
              Mi enfoque combina la potencia de la inteligencia artificial con
              un profundo entendimiento del negocio, asegurando que cada
              solución no solo funcione técnicamente, sino que genere resultados
              medibles para tu empresa.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-muted px-3 py-1 text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="h-80 w-64 rounded-2xl border bg-gradient-to-br from-background to-accent p-1">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-background">
                  <div className="text-center">
                    <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-background text-2xl font-bold text-primary">
                        MD
                      </div>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">
                      Máximo Dip - Founder
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      AI Solutions Specialist
                    </p>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <span className="text-xs text-muted-foreground">
                          Disponible para proyectos
                        </span>
                      </div>
                      <div className="flex justify-center gap-x-2">
                        <Link
                          href="https://linkedin.com/in/maximodipaparicio"
                          target="_blank"
                          rel="noreferrer"
                          tabIndex={0}
                          className="flex h-8 w-8 items-center justify-center rounded-full border bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                          aria-label="Visitar perfil de LinkedIn"
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              window.open(
                                "https://linkedin.com/in/maximodipaparicio",
                                "_blank"
                              );
                            }
                          }}
                        >
                          <Linkedin className="h-4 w-4" />
                        </Link>
                        <Link
                          href="https://github.com/maximodip"
                          target="_blank"
                          rel="noreferrer"
                          tabIndex={0}
                          className="flex h-8 w-8 items-center justify-center rounded-full border bg-accent/20 text-foreground transition-colors hover:bg-accent hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                          aria-label="Visitar perfil de GitHub"
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              window.open(
                                "https://github.com/maximodip",
                                "_blank"
                              );
                            }
                          }}
                        >
                          <Github className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
