import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Aviso legal de Maximize IA. Información sobre la empresa, responsabilidades y marcos legales aplicables.",
};

export default function LegalPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Aviso Legal</h1>
      <div className="prose prose-gray max-w-none dark:prose-invert space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            1. Información de la Empresa
          </h2>
          <div className="bg-muted p-4 rounded-lg">
            <p>
              <strong>Denominación:</strong> Maximize IA
            </p>
            <p>
              <strong>Titular:</strong> Máximo Dip
            </p>
            <p>
              <strong>Actividad:</strong> Servicios de consultoría y desarrollo
              en inteligencia artificial
            </p>
            <p>
              <strong>Domicilio:</strong> Tucumán, Argentina
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:maximodipaparicio@gmail.com"
                className="text-primary hover:underline"
              >
                maximodipaparicio@gmail.com
              </a>
            </p>
            <p>
              <strong>Teléfono:</strong>{" "}
              <a
                href="tel:+5493814057449"
                className="text-primary hover:underline"
              >
                +54 9 381 405 7449
              </a>
            </p>
            <p>
              <strong>Sitio web:</strong>{" "}
              <a
                href="https://maximizeia.com"
                className="text-primary hover:underline"
              >
                maximizeia.com
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            2. Objeto del Sitio Web
          </h2>
          <p>
            Este sitio web tiene como finalidad proporcionar información sobre
            los servicios de implementación de soluciones de inteligencia
            artificial que ofrece Maximize IA, así como facilitar el contacto
            con potenciales clientes interesados en nuestros servicios.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            3. Condiciones de Uso del Sitio Web
          </h2>
          <p className="mb-4">
            Al acceder a este sitio web, aceptas las siguientes condiciones:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>El uso del sitio es bajo tu propia responsabilidad</li>
            <li>
              No está permitido el uso del sitio para fines ilegales o no
              autorizados
            </li>
            <li>No puedes intentar acceder a áreas restringidas del sitio</li>
            <li>
              Respetas los derechos de propiedad intelectual de todo el
              contenido
            </li>
            <li>
              No realizas actividades que puedan dañar el funcionamiento del
              sitio
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            4. Propiedad Intelectual
          </h2>
          <p className="mb-4">
            Todo el contenido de este sitio web, incluyendo pero no limitado a:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Textos, imágenes, gráficos y diseños</li>
            <li>Código fuente y estructura del sitio</li>
            <li>Logotipos y marcas</li>
            <li>Metodologías y procesos descritos</li>
          </ul>
          <p className="mt-4">
            Está protegido por derechos de autor y otras leyes de propiedad
            intelectual. Queda prohibida su reproducción, distribución o
            modificación sin autorización expresa.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Responsabilidad</h2>
          <p className="mb-4">
            <strong>Información del sitio:</strong> Nos esforzamos por mantener
            la información actualizada y precisa, pero no garantizamos la
            exactitud completa de todo el contenido.
          </p>
          <p className="mb-4">
            <strong>Disponibilidad:</strong> No garantizamos la disponibilidad
            continua del sitio web. Pueden producirse interrupciones por
            mantenimiento, actualizaciones o causas técnicas.
          </p>
          <p>
            <strong>Enlaces externos:</strong> Este sitio puede contener enlaces
            a sitios web de terceros. No somos responsables del contenido o
            políticas de privacidad de estos sitios externos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            6. Protección de Datos Personales
          </h2>
          <p>
            El tratamiento de datos personales se rige por nuestra{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Política de Privacidad
            </Link>
            . Cumplimos con las regulaciones aplicables de protección de datos,
            incluyendo:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              Ley de Protección de Datos Personales de Argentina (Ley 25.326)
            </li>
            <li>
              Reglamento General de Protección de Datos (GDPR) para usuarios
              europeos
            </li>
            <li>Otras regulaciones locales aplicables según tu ubicación</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            7. Cookies y Tecnologías de Seguimiento
          </h2>
          <p>
            Este sitio web utiliza cookies y tecnologías similares para mejorar
            la experiencia del usuario y analizar el tráfico del sitio. Para más
            información, consulta nuestra
            <Link href="/privacy" className="text-primary hover:underline">
              Política de Privacidad
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar este aviso legal en cualquier
            momento. Los cambios serán efectivos desde su publicación en el
            sitio web. Te recomendamos revisar periódicamente este documento.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            9. Legislación Aplicable y Jurisdicción
          </h2>
          <p>
            Este aviso legal se rige por la legislación argentina. Para
            cualquier controversia derivada del uso de este sitio web, las
            partes se someten a los tribunales competentes de Tucumán,
            Argentina, renunciando expresamente a cualquier otro fuero que
            pudiera corresponderles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Contacto Legal</h2>
          <p className="mb-4">
            Para cualquier consulta legal relacionada con este sitio web o
            nuestros servicios, puedes contactarnos:
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <p>
              <strong>Contacto Legal - Maximize IA</strong>
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
            <p>Asunto: "Consulta Legal"</p>
            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/5493814057449"
                className="text-primary hover:underline"
              >
                +54 9 381 405 7449
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            11. Resolución de Disputas
          </h2>
          <p>
            En caso de disputas relacionadas con el uso de este sitio web,
            alentamos la resolución amigable a través de comunicación directa.
            Si esto no es posible, las disputas se resolverán según lo
            establecido en el punto 9 de este aviso legal.
          </p>
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
