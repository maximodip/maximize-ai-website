import type { Metadata } from "next";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { TextCaseProvider } from "@/components/text-case-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Maximize IA — Agencia de IA",
    template: "Maximize IA",
  },
  description:
    "Diseñamos, automatizamos y desplegamos sistemas de IA que mueven los indicadores que importan.",
  openGraph: {
    title: "Maximize IA — Agencia de IA",
    description:
      "Diseñamos, automatizamos y desplegamos sistemas de IA que mueven los indicadores que importan.",
    type: "website",
    locale: "es_ES",
    url: "https://example.com",
  },
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
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
            <div id="home" className="scroll-mt-14" />
            <main className="container px-4 md:px-6">{children}</main>
          </TextCaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
