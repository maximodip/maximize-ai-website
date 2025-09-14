import {
  Bot,
  Target,
  MessageCircle,
  Database,
  Server,
  Smartphone,
} from "lucide-react";

const features = [
  {
    title: "Agente de IA Autónomo",
    desc: "Resuelve consultas y tareas sin intervención, 24/7.",
    icon: Bot,
  },
  {
    title: "Agente IA para Seguimientos",
    desc: "Nutre leads y retiene clientes con mensajes oportunos.",
    icon: Target,
  },
  {
    title: "Respuestas Humanizadas",
    desc: "Tono natural y coherente con tu marca.",
    icon: MessageCircle,
  },
  {
    title: "Plataforma CRM",
    desc: "Control centralizado de conversaciones y equipos.",
    icon: Database,
  },
  {
    title: "Implementación On‑Premise",
    desc: "Despliegue en tus propios servidores si lo necesitas.",
    icon: Server,
  },
  {
    title: "Canales: WhatsApp, Instagram, Facebook",
    desc: "Integra donde está tu audiencia.",
    icon: Smartphone,
  },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="space-y-8 scroll-mt-28 animate-in fade-in duration-700"
    >
      <h2 className="text-center text-2xl font-semibold md:text-3xl">
        Infraestructura de Atención al Cliente con IA
      </h2>
      <p className="mx-auto max-w-2xl text-center text-muted-foreground">
        Todo lo necesario para automatizar al 100% la atención: agentes
        autónomos, seguimiento inteligente y control total desde tu CRM.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group rounded-xl border bg-card p-6 shadow-sm transition-all duration-400 ease-out hover:shadow-md hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 ease-out group-hover:bg-primary/20 group-hover:scale-110">
                <Icon className="h-6 w-6 transition-transform duration-300 ease-out group-hover:scale-110" />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="mx-auto mt-2 max-w-3xl rounded-xl border bg-card p-6 text-sm text-muted-foreground">
        <strong>Dashboard interactivo</strong>: KPIs clave del negocio en tiempo
        real. Se incluye un PDF completo para que tú o tu equipo puedan mantener
        la solución.
      </div>
    </section>
  );
}
