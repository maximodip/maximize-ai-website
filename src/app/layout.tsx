import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { TextCaseProvider } from "@/components/text-case-provider";
import { StructuredData } from "@/components/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "Maximize IA - Automatización con IA para Empresas | Agentes Inteligentes 24/7",
    template: "%s | Maximize IA",
  },
  description:
    "Implementamos soluciones de inteligencia artificial que automatizan la atención al cliente 24/7. Agentes de IA, CRM inteligente y respuestas humanizadas que aumentan ventas y reducen costos operativos.",
  manifest: "/site.webmanifest",
  keywords: [
    "inteligencia artificial empresas",
    "automatización atención cliente",
    "agentes IA 24/7",
    "chatbots empresariales",
    "CRM inteligente",
    "implementación IA",
    "soluciones IA empresas",
    "automatización WhatsApp",
    "respuestas automáticas IA",
    "reducir costos atención cliente",
    "aumentar ventas IA",
    "transformación digital IA",
  ],
  authors: [
    { name: "Máximo Dip", url: "https://linkedin.com/in/maximodipaparicio" },
  ],
  creator: "Máximo Dip",
  publisher: "Maximize IA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://maximizeia.com",
    title:
      "Maximize IA - Automatización con IA para Empresas | Agentes Inteligentes 24/7",
    description:
      "Implementamos soluciones de inteligencia artificial que automatizan la atención al cliente 24/7. Agentes de IA, CRM inteligente y respuestas humanizadas que aumentan ventas y reducen costos operativos.",
    siteName: "Maximize IA",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maximize IA - Soluciones de Inteligencia Artificial para Empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maximize IA - Automatización con IA para Empresas",
    description:
      "Implementamos soluciones de IA que automatizan la atención al cliente 24/7. Aumenta ventas y reduce costos con agentes inteligentes.",
    creator: "@maximodip",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code-here",
    yandex: "yandex-verification-code-here",
    yahoo: "yahoo-site-verification-code-here",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  alternates: {
    canonical: "https://maximizeia.com",
    languages: {
      "es-ES": "https://maximizeia.com",
      "es-MX": "https://maximizeia.com/mx",
      "es-CO": "https://maximizeia.com/co",
      "es-AR": "https://maximizeia.com/ar",
    },
  },
  category: "technology",
  classification: "Business Services",
  metadataBase: new URL("https://maximizeia.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <TextCaseProvider>
            <div className="fixed inset-0 -z-10 gradient-blur" aria-hidden />
            <SiteHeader />
            <div id="home" className="scroll-mt-24" />
            <main className="container px-4 md:px-6">{children}</main>
          </TextCaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
