export const StructuredData = () => {
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
      "Infraestructura completa de inteligencia artificial para empresas. Agentes de atención al cliente 24/7, RAG con documentación empresarial, e-commerce inteligente y automatizaciones personalizadas.",
    founder: {
      "@type": "Person",
      name: "Máximo Dip Aparicio",
      jobTitle: "Founder & AI Infrastructure Specialist",
      url: "https://linkedin.com/in/maximodipaparicio",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
      addressRegion: "Tucumán",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+5493816708372",
      contactType: "customer service",
      availableLanguage: ["Spanish", "English"],
    },
    sameAs: [
      "https://linkedin.com/in/maximodipaparicio",
      "https://wa.me/5493816708372",
    ],
    serviceArea: {
      "@type": "Place",
      name: "América Latina",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Infraestructura de Inteligencia Artificial para Empresas",
    description:
      "Infraestructura completa y modular de IA con agentes de atención al cliente 24/7, RAG para información empresarial, e-commerce inteligente y automatizaciones personalizadas.",
    provider: {
      "@type": "Organization",
      name: "Maximize IA",
    },
    serviceType: "Artificial Intelligence Infrastructure",
    areaServed: {
      "@type": "Place",
      name: "América Latina",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Infraestructura de IA",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Agente de atención al cliente",
            description:
              "Atención 24/7 con seguimientos automáticos cada 6 y 23 horas. WhatsApp, Instagram y Facebook.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Agente RAG con información empresarial",
            description:
              "Acceso y procesamiento de hasta 1000 hojas de documentación empresarial para respuestas precisas.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Agente e-commerce inteligente",
            description:
              "Gestión hasta 50.000 productos con información detallada y recomendaciones personalizadas.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automatizaciones personalizadas",
            description:
              "Notificaciones por email, filtrado de leads, workflows personalizados según las necesidades del negocio.",
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
      "Infraestructura de inteligencia artificial para empresas. Agentes 24/7, RAG, e-commerce y automatizaciones personalizadas.",
    inLanguage: "es-ES",
    isPartOf: {
      "@type": "WebSite",
      url: "https://maximizeia.com",
    },
    about: {
      "@type": "Thing",
      name: "Infraestructura de Inteligencia Artificial para Empresas",
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
        name: "Política de Privacidad",
        item: "https://maximizeia.com/privacy",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Términos de Servicio",
        item: "https://maximizeia.com/terms",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Aviso Legal",
        item: "https://maximizeia.com/legal",
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
};
