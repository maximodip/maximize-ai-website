import {
  Bot,
  ShoppingCart,
  FileText,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Agente de atención al cliente",
    desc: "Atención 24/7 con seguimientos automáticos cada 6 y 23 horas. Implementación oficial en WhatsApp, Instagram y Facebook.",
    icon: Bot,
    highlights: ["WhatsApp", "Instagram", "Facebook", "Seguimientos automáticos"],
  },
  {
    title: "Agente RAG con información empresarial",
    desc: "Tu IA accede y procesa hasta 1000 hojas de documentación de tu negocio para responder consultas precisas al instante.",
    icon: FileText,
    highlights: ["Hasta 1000 hojas", "Respuestas precisas", "Base de conocimiento"],
  },
  {
    title: "Agente e-commerce inteligente",
    desc: "Gestiona hasta 50.000 productos, brinda información detallada y recomienda productos personalizados a cada cliente.",
    icon: ShoppingCart,
    highlights: ["50.000 productos", "Recomendaciones IA", "Información detallada"],
  },
  {
    title: "Automatizaciones personalizadas",
    desc: "Automatiza procesos según tus necesidades: notificaciones por email, filtrado de leads, workflows personalizados y más.",
    icon: Zap,
    highlights: ["Emails automáticos", "Filtrado de leads", "Workflows custom"],
  },
];

export const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="space-y-12 scroll-mt-28 animate-in fade-in duration-700"
    >
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-semibold md:text-4xl">
          Infraestructura de Inteligencia Artificial
        </h2>
        <p className="mx-auto max-w-3xl text-base text-muted-foreground md:text-lg">
          Una infraestructura completa y escalable que se adapta a las necesidades de tu negocio. 
          Implementa los componentes que necesites.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group rounded-xl border bg-card p-6 shadow-sm transition-all duration-400 ease-out hover:shadow-md hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/15 text-primary transition-all duration-300 ease-out group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6 transition-transform duration-300 ease-out group-hover:scale-105" />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {item.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mx-auto max-w-3xl rounded-xl border border-primary/20 bg-gradient-to-br from-card to-primary/5 p-6 shadow-sm">
        <div className="space-y-3 text-sm">
          <p className="flex items-start gap-2">
            <span className="mt-0.5 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            <span>
              <strong>Dashboard interactivo</strong>: KPIs clave del negocio en tiempo real
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="mt-0.5 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            <span>
              <strong>Documentación completa</strong>: PDF detallado para que tú o tu equipo puedan mantener la solución
            </span>
          </p>
          <p className="flex items-start gap-2">
            <span className="mt-0.5 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            <span>
              <strong>Modular y escalable</strong>: Implementa solo lo que necesitas y expande cuando quieras
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
