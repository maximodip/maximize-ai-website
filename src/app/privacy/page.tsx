import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de Maximize IA. Conoce cómo protegemos y utilizamos tu información personal.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>
      <div className="prose prose-gray max-w-none dark:prose-invert space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            1. Información que Recopilamos
          </h2>
          <p className="mb-4">
            En Maximize IA recopilamos la siguiente información cuando
            interactúas con nuestros servicios:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Información de contacto:</strong> Nombre, email, número de
              teléfono cuando completas formularios o nos contactas.
            </li>
            <li>
              <strong>Información de la empresa:</strong> Nombre de la empresa,
              industria, tamaño para personalizar nuestras soluciones.
            </li>
            <li>
              <strong>Datos de navegación:</strong> Dirección IP, tipo de
              navegador, páginas visitadas, tiempo de permanencia.
            </li>
            <li>
              <strong>Cookies y tecnologías similares:</strong> Para mejorar la
              experiencia del usuario y analizar el tráfico.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            2. Cómo Utilizamos tu Información
          </h2>
          <p className="mb-4">Utilizamos la información recopilada para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proporcionar y mejorar nuestros servicios de IA</li>
            <li>Responder a consultas y brindar soporte técnico</li>
            <li>Enviar información relevante sobre nuestros servicios</li>
            <li>Personalizar la experiencia del usuario</li>
            <li>Cumplir con obligaciones legales y contractuales</li>
            <li>Prevenir fraudes y garantizar la seguridad</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            3. Compartir Información
          </h2>
          <p className="mb-4">
            No vendemos, alquilamos ni compartimos tu información personal con
            terceros, excepto en los siguientes casos:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Proveedores de servicios:</strong> Empresas que nos ayudan
              a operar nuestro negocio (hosting, analytics, email marketing)
            </li>
            <li>
              <strong>Obligaciones legales:</strong> Cuando sea requerido por
              ley o autoridades competentes
            </li>
            <li>
              <strong>Protección de derechos:</strong> Para proteger nuestros
              derechos, propiedad o seguridad
            </li>
            <li>
              <strong>Consentimiento:</strong> Cuando hayas dado tu
              consentimiento explícito
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            4. Seguridad de los Datos
          </h2>
          <p className="mb-4">
            Implementamos medidas de seguridad técnicas y organizativas
            apropiadas para proteger tu información personal:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encriptación de datos en tránsito y en reposo</li>
            <li>Acceso restringido a información personal</li>
            <li>Monitoreo continuo de sistemas</li>
            <li>Copias de seguridad regulares</li>
            <li>Políticas internas de seguridad de datos</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Tus Derechos</h2>
          <p className="mb-4">
            Tienes los siguientes derechos respecto a tu información personal:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Acceso:</strong> Solicitar información sobre los datos que
              tenemos sobre ti
            </li>
            <li>
              <strong>Rectificación:</strong> Corregir datos inexactos o
              incompletos
            </li>
            <li>
              <strong>Eliminación:</strong> Solicitar la eliminación de tus
              datos personales
            </li>
            <li>
              <strong>Portabilidad:</strong> Recibir tus datos en formato
              estructurado
            </li>
            <li>
              <strong>Oposición:</strong> Oponerte al procesamiento de tus datos
            </li>
            <li>
              <strong>Limitación:</strong> Solicitar la limitación del
              procesamiento
            </li>
          </ul>
          <p className="mt-4">
            Para ejercer estos derechos, contacta con nosotros en:{" "}
            <a
              href="mailto:maximodipaparicio@gmail.com"
              className="text-primary hover:underline"
            >
              maximodipaparicio@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
          <p className="mb-4">
            Utilizamos cookies y tecnologías similares para mejorar tu
            experiencia. Puedes configurar tu navegador para rechazar cookies,
            aunque esto puede afectar la funcionalidad del sitio.
          </p>
          <p className="mb-4">Tipos de cookies que utilizamos:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Cookies esenciales:</strong> Necesarias para el
              funcionamiento del sitio
            </li>
            <li>
              <strong>Cookies analíticas:</strong> Para entender cómo usas el
              sitio
            </li>
            <li>
              <strong>Cookies de preferencias:</strong> Para recordar tus
              configuraciones
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Retención de Datos</h2>
          <p>
            Conservamos tu información personal solo durante el tiempo necesario
            para los fines descritos en esta política, o según lo requiera la
            ley. Los datos de contacto se conservan mientras mantengas una
            relación comercial con nosotros o hasta que solicites su
            eliminación.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            8. Transferencias Internacionales
          </h2>
          <p>
            Algunos de nuestros proveedores de servicios pueden estar ubicados
            fuera de tu país. En estos casos, nos aseguramos de que existan
            garantías adecuadas para proteger tu información personal de acuerdo
            con las leyes de protección de datos aplicables.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Menores de Edad</h2>
          <p>
            Nuestros servicios están dirigidos a empresas y profesionales. No
            recopilamos intencionalmente información personal de menores de 18
            años. Si descubrimos que hemos recopilado información de un menor,
            la eliminaremos de inmediato.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            10. Cambios en esta Política
          </h2>
          <p>
            Podemos actualizar esta política de privacidad ocasionalmente. Te
            notificaremos sobre cambios significativos publicando la nueva
            política en nuestro sitio web y actualizando la fecha de
            &quot;última actualización&quot;.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Contacto</h2>
          <p className="mb-4">
            Si tienes preguntas sobre esta política de privacidad o sobre cómo
            manejamos tu información personal, puedes contactarnos:
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
