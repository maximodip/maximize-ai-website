import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio",
  description:
    "Términos y condiciones de uso de los servicios de Maximize IA. Conoce tus derechos y obligaciones.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Términos de Servicio</h1>
      <div className="prose prose-gray max-w-none dark:prose-invert space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            1. Aceptación de los Términos
          </h2>
          <p>
            Al acceder y utilizar los servicios de Maximize IA, aceptas estar
            sujeto a estos términos de servicio. Si no estás de acuerdo con
            alguno de estos términos, no debes utilizar nuestros servicios.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            2. Descripción de los Servicios
          </h2>
          <p className="mb-4">Maximize IA ofrece los siguientes servicios:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Implementación de agentes de inteligencia artificial para atención
              al cliente
            </li>
            <li>Desarrollo de chatbots y sistemas de respuesta automática</li>
            <li>Integración de soluciones de IA con plataformas CRM</li>
            <li>
              Automatización de procesos de seguimiento y nurturing de leads
            </li>
            <li>Consultoría en transformación digital con IA</li>
            <li>Soporte técnico y mantenimiento de sistemas implementados</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Elegibilidad</h2>
          <p>
            Nuestros servicios están dirigidos exclusivamente a empresas,
            organizaciones y profesionales. Debes tener al menos 18 años y la
            autoridad legal para representar a tu organización para utilizar
            nuestros servicios.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            4. Proceso de Contratación
          </h2>
          <p className="mb-4">El proceso de contratación incluye:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Consulta inicial:</strong> Evaluación de necesidades sin
              costo
            </li>
            <li>
              <strong>Propuesta técnica:</strong> Documento detallado con
              alcance y costos
            </li>
            <li>
              <strong>Contrato de servicios:</strong> Acuerdo formal con
              términos específicos
            </li>
            <li>
              <strong>Implementación:</strong> Desarrollo y despliegue de la
              solución
            </li>
            <li>
              <strong>Entrega y capacitación:</strong> Transferencia de
              conocimiento y documentación
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            5. Obligaciones del Cliente
          </h2>
          <p className="mb-4">Como cliente, te comprometes a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Proporcionar información precisa y completa sobre tus necesidades
            </li>
            <li>
              Facilitar el acceso necesario a sistemas y datos para la
              implementación
            </li>
            <li>Designar un punto de contacto técnico durante el proyecto</li>
            <li>Cumplir con los pagos según los términos acordados</li>
            <li>Utilizar los servicios de manera legal y ética</li>
            <li>
              No intentar realizar ingeniería inversa de nuestras soluciones
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            6. Nuestras Obligaciones
          </h2>
          <p className="mb-4">Nos comprometemos a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Entregar servicios de calidad profesional</li>
            <li>Cumplir con los plazos acordados en el contrato</li>
            <li>Proporcionar soporte técnico durante el período acordado</li>
            <li>Mantener la confidencialidad de tu información</li>
            <li>Implementar medidas de seguridad adecuadas</li>
            <li>Proporcionar documentación completa de las soluciones</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            7. Pagos y Facturación
          </h2>
          <p className="mb-4">Términos de pago:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Los precios se especifican en cada propuesta comercial</li>
            <li>Los pagos se realizan según el cronograma acordado</li>
            <li>
              Los retrasos en pagos pueden resultar en suspensión de servicios
            </li>
            <li>
              Los precios no incluyen impuestos aplicables salvo que se
              especifique
            </li>
            <li>No hay reembolsos por servicios ya prestados</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            8. Propiedad Intelectual
          </h2>
          <p className="mb-4">
            <strong>Código y metodologías:</strong> Maximize IA retiene todos
            los derechos sobre metodologías, código base y herramientas
            desarrolladas internamente.
          </p>
          <p className="mb-4">
            <strong>Soluciones personalizadas:</strong> Las configuraciones y
            personalizaciones específicas para tu empresa son de tu propiedad
            una vez completado el pago.
          </p>
          <p>
            <strong>Datos del cliente:</strong> Mantienes la propiedad completa
            de todos tus datos comerciales y de clientes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Confidencialidad</h2>
          <p>
            Ambas partes se comprometen a mantener la confidencialidad de la
            información sensible intercambiada durante la prestación de
            servicios. Esta obligación permanece vigente incluso después de la
            finalización del contrato.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            10. Limitación de Responsabilidad
          </h2>
          <p className="mb-4">Maximize IA no será responsable por:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Daños indirectos, incidentales o consecuenciales</li>
            <li>Pérdida de beneficios, datos o oportunidades comerciales</li>
            <li>
              Interrupciones del servicio por causas fuera de nuestro control
            </li>
            <li>
              Mal uso de las soluciones implementadas por parte del cliente
            </li>
            <li>Problemas derivados de modificaciones no autorizadas</li>
          </ul>
          <p className="mt-4">
            Nuestra responsabilidad máxima se limita al valor del contrato
            específico.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Garantías</h2>
          <p className="mb-4">Garantizamos que:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Los servicios se prestarán con habilidad y cuidado profesional
            </li>
            <li>
              Las soluciones funcionarán según las especificaciones acordadas
            </li>
            <li>
              Proporcionaremos soporte para corrección de errores durante 90
              días
            </li>
            <li>
              Cumpliremos con las leyes aplicables en la prestación de servicios
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Terminación</h2>
          <p className="mb-4">Este acuerdo puede terminarse:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Por mutuo acuerdo de ambas partes</li>
            <li>Por incumplimiento material de cualquiera de las partes</li>
            <li>Con 30 días de aviso previo para servicios continuos</li>
            <li>Inmediatamente en caso de insolvencia o quiebra</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">13. Ley Aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de Argentina. Cualquier
            disputa se resolverá en los tribunales competentes de Tucumán,
            Argentina.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">14. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar estos términos en cualquier
            momento. Los cambios entrarán en vigor al publicarse en nuestro
            sitio web. El uso continuado de nuestros servicios constituye
            aceptación de los términos modificados.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">15. Contacto</h2>
          <p className="mb-4">
            Para consultas sobre estos términos de servicio, puedes
            contactarnos:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <p>
              <strong>Maximize IA</strong>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:maximodipaparicio@gmail.com"
                className="text-primary hover:underline"
              >
                maximodipaparicio@gmail.com
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/5493814057449"
                className="text-primary hover:underline"
              >
                +54 9 381 405 7449
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/maximodipaparicio"
                className="text-primary hover:underline"
              >
                linkedin.com/in/maximodipaparicio
              </a>
            </p>
          </div>
        </section>

        <section className="border-t pt-6 mt-8">
          <p className="text-sm text-muted-foreground">
            <strong>Última actualización:</strong>{" "}
            {new Date().toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </section>
      </div>
    </div>
  );
}
