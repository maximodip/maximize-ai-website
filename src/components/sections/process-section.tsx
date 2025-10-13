const processSteps = [
  {
    step: "00",
    title: "Descubrir",
    desc: "Entender oportunidades concretas para aumentar ventas/ahorrar tiempo.",
  },
  {
    step: "01",
    title: "Análisis de viabilidad",
    desc: "Evaluar la factibilidad técnica y el retorno de inversión del proyecto.",
  },
  {
    step: "02",
    title: "Diseñar",
    desc: "Asegurar que el prototipo se ajuste al negocio real.",
  },
  {
    step: "03",
    title: "Desarrollar",
    desc: "Implementar la solución con las mejores prácticas y tecnologías.",
  },
  {
    step: "04",
    title: "Desplegar",
    desc: "Garantizar que el sistema sea escalable y con soporte continuo.",
  },
];

export const ProcessSection = () => {
  return (
    <section
      id="how"
      className="space-y-8 scroll-mt-28 animate-in fade-in duration-700"
    >
      <h2 className="text-center text-2xl font-semibold md:text-3xl">
        Proceso
      </h2>
      <div className="space-y-6">
        {/* Primera fila - Cards 00, 01 y 02 */}
        <div className="flex flex-wrap justify-center gap-6">
          {processSteps.slice(0, 3).map((s) => (
            <div
              key={s.step}
              className="w-full md:w-[calc(33.333%-1rem)] md:max-w-[320px] rounded-xl border border-accent/40 bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/60 hover:-translate-y-1"
            >
              <div className="text-sm font-medium text-muted-foreground">
                {s.step}
              </div>
              <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Segunda fila - Cards 03 y 04 centradas */}
        <div className="flex flex-wrap justify-center gap-6">
          {processSteps.slice(3, 5).map((s) => (
            <div
              key={s.step}
              className="w-full md:w-[calc(33.333%-1rem)] md:max-w-[320px] rounded-xl border border-accent/40 bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/60 hover:-translate-y-1"
            >
              <div className="text-sm font-medium text-muted-foreground">
                {s.step}
              </div>
              <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
