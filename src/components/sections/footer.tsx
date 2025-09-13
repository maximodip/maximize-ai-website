import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-8 text-sm text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="text-center">
            © {new Date().getFullYear()} Maximize IA — Todos los derechos
            reservados.
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Política de Privacidad
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Términos de Servicio
            </Link>
            <Link
              href="/legal"
              className="hover:text-foreground transition-colors"
            >
              Aviso Legal
            </Link>
            <a
              href="mailto:maximodipaparicio@gmail.com?subject=Consulta%20Legal%20-%20Maximize%20IA"
              className="hover:text-foreground transition-colors"
            >
              Contacto Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
