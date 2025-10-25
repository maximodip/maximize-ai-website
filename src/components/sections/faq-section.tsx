"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question:
      "¿Cuánto tiempo toma implementar una solución de IA en mi empresa?",
    answer:
      "El tiempo de implementación varía según la complejidad, pero típicamente de 3 a 5 semanas para una solución básica de IA. Esto incluye el análisis inicial, configuración del agente, entrenamiento con datos específicos de tu negocio y pruebas antes del lanzamiento.",
  },
  {
    question: "¿Qué tan costoso es mantener un sistema de IA?",
    answer:
      "Los costos de mantenimiento son significativamente menores que mantener un equipo de atención 24/7. Incluye hosting, actualizaciones del modelo y soporte técnico. La mayoría de nuestros clientes recuperan la inversión en los primeros 3-6 meses por el ahorro en costos operativos.",
  },
  {
    question:
      "¿La IA puede realmente reemplazar a mi equipo de atención al cliente?",
    answer:
      "La IA puede automatizar el 80-90% de consultas rutinarias, permitiendo que tu equipo se enfoque en casos complejos y ventas. No se trata de reemplazar completamente, sino de optimizar recursos y mejorar la experiencia del cliente con respuestas instantáneas.",
  },
  {
    question: "¿Qué pasa si la IA no entiende una consulta específica?",
    answer:
      "Nuestros sistemas incluyen escalamiento automático a agentes humanos cuando detectan consultas complejas o fuera del alcance entrenado. Además, el sistema aprende continuamente de estas interacciones para mejorar sus respuestas futuras.",
  },
  {
    question: "¿Mis datos están seguros con una solución de IA?",
    answer:
      "Absolutamente. Ofrecemos implementación on-premise para máxima seguridad, donde todos los datos permanecen en tus servidores. Para soluciones en la nube, utilizamos encriptación de extremo a extremo y cumplimos con estándares internacionales de seguridad.",
  },
  {
    question: "¿Cómo puedo integrar una Infraestructura de IA con mi CRM?",
    answer:
      "Nuestras soluciones se integran con los principales sistemas de CRM, como Salesforce, HubSpot, Zendesk y muchas más. También podemos integrar con tu propio sistema de CRM si lo necesitas.",
  },
  {
    question:
      "¿Qué tengo que hacer para que mi Infraestructura de IA funcione correctamente?",
    answer:
      "Solamente llenando un formulario con los datos de tu negocio y tus expectativas, y nosotros nos encargamos de la implementación.",
  },
  {
    question: "¿Necesito conocimientos técnicos para usar el sistema?",
    answer:
      "No. Diseñamos interfaces intuitivas que cualquier persona puede usar. Incluimos capacitación completa para tu equipo y documentación detallada. El sistema está pensado para que puedas enfocarte en tu negocio, no en la tecnología.",
  },
];

export const FAQSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };

  const handleClick = (index: number, event: React.MouseEvent) => {
    // Remove focus after click to avoid visual focus state
    (event.currentTarget as HTMLElement).blur();
    toggleItem(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleItem(index);
    }
  };

  return (
    <section
      id="faq"
      className="space-y-8 scroll-mt-28 animate-in fade-in duration-700"
    >
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold md:text-3xl">
          Preguntas Frecuentes
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Resolvemos las dudas más comunes que tienen los dueños de negocio al
          considerar implementar IA en su empresa.
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openItem === index;

          return (
            <div
              key={index}
              className="rounded-xl border border-accent/40 bg-card transition-all duration-300 ease-out hover:shadow-lg hover:border-primary/60 hover:scale-[1.01]"
            >
              <button
                onClick={(e) => handleClick(index, e)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-full px-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-inset rounded-xl"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                tabIndex={0}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-medium text-sm md:text-base leading-relaxed">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-all duration-300 ease-out flex-shrink-0",
                      isOpen && "rotate-180 text-foreground"
                    )}
                  />
                </div>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={cn(
                  "overflow-hidden transition-all duration-400 ease-out",
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground mb-4">
          ¿Tienes otra pregunta? Hablemos sin compromiso.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://calendly.com/maximodipaparicio/30min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 w-full sm:w-auto group"
            tabIndex={0}
          >
            Agenda una llamada sin costo
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5493816708372&text=Hola%20Máximo%20quiero%20implementar%20una%20infraestructura%20de%20IA%20en%20mi%20negocio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-primary/40 bg-background px-4 py-2 text-sm font-semibold text-foreground hover:bg-accent hover:text-primary-foreground transition-all duration-300 w-full sm:w-auto"
            tabIndex={0}
          >
            Escríbeme por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
