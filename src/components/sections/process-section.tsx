const processSteps = [
  {
    step: "01",
    title: "Descubrir",
    desc: "Entender oportunidades concretas para aumentar ventas/ahorrar tiempo.",
  },
  {
    step: "02",
    title: "Diseñar",
    desc: "Asegurar que el prototipo se ajuste al negocio real.",
  },
  {
    step: "03",
    title: "Desplegar",
    desc: "Garantizar que el sistema sea escalable y con soporte continuo.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="how"
      className="space-y-8 scroll-mt-28 animate-in fade-in duration-700"
    >
      <h2 className="text-center text-2xl font-semibold md:text-3xl">
        Proceso
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {processSteps.map((s) => (
          <div
            key={s.step}
            className="rounded-xl border bg-card p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <div className="text-sm font-medium text-muted-foreground">
              {s.step}
            </div>
            <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
