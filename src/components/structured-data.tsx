export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Maximize IA",
    alternateName: "Maximize Inteligencia Artificial",
    url: "https://maximizeia.com",
    logo: {
      "@type": "ImageObject",
      url: "https://maximizeia.com/logo.png",
      width: 300,
      height: 100,
    },
    description:
      "Agencia especializada en implementación de soluciones de inteligencia artificial para empresas. Automatización de atención al cliente 24/7 con agentes de IA.",
    founder: {
      "@type": "Person",
      name: "Máximo Dip",
      jobTitle: "CEO & AI Solutions Specialist",
      url: "https://linkedin.com/in/maximodipaparicio",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
      addressRegion: "Tucumán",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+5493814057449",
      contactType: "customer service",
      availableLanguage: ["Spanish", "English"],
    },
    sameAs: [
      "https://linkedin.com/in/maximodipaparicio",
      "https://wa.me/5493814057449",
    ],
    serviceArea: {
      "@type": "Place",
      name: "América Latina",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Implementación de Soluciones de Inteligencia Artificial",
    description:
      "Automatización completa de atención al cliente con agentes de IA 24/7, CRM inteligente y respuestas humanizadas.",
    provider: {
      "@type": "Organization",
      name: "Maximize IA",
    },
    serviceType: "Artificial Intelligence Implementation",
    areaServed: {
      "@type": "Place",
      name: "América Latina",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de IA",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Agente de IA Autónomo",
            description: "Resuelve consultas y tareas sin intervención, 24/7",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Agente IA para Seguimientos",
            description:
              "Nutre leads y retiene clientes con mensajes oportunos",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Implementación On-Premise",
            description:
              "Despliegue en tus propios servidores para máxima seguridad",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Maximize IA",
    url: "https://maximizeia.com",
    description:
      "Soluciones de inteligencia artificial para empresas. Automatización de atención al cliente 24/7.",
    inLanguage: "es-ES",
    isPartOf: {
      "@type": "WebSite",
      url: "https://maximizeia.com",
    },
    about: {
      "@type": "Thing",
      name: "Inteligencia Artificial para Empresas",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://maximizeia.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto tiempo toma implementar una solución de IA en mi empresa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tiempo de implementación varía según la complejidad, pero típicamente entre 2-4 semanas para una solución básica de atención al cliente. Esto incluye el análisis inicial, configuración del agente, entrenamiento con datos específicos de tu negocio y pruebas antes del lanzamiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿La IA puede realmente reemplazar a mi equipo de atención al cliente?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La IA puede automatizar el 80-90% de consultas rutinarias, permitiendo que tu equipo se enfoque en casos complejos y ventas. No se trata de reemplazar completamente, sino de optimizar recursos y mejorar la experiencia del cliente con respuestas instantáneas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Mis datos están seguros con una solución de IA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutamente. Ofrecemos implementación on-premise para máxima seguridad, donde todos los datos permanecen en tus servidores. Para soluciones en la nube, utilizamos encriptación de extremo a extremo y cumplimos con estándares internacionales de seguridad.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://maximizeia.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Servicios",
        item: "https://maximizeia.com#features",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Proceso",
        item: "https://maximizeia.com#how",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "FAQ",
        item: "https://maximizeia.com#faq",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
