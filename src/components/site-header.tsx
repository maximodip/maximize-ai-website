"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/60 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1">
          <Link href="#home" className="flex items-center gap-2 font-semibold">
            <span>Maximize AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="#features"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Servicios
          </Link>
          <Link
            href="#how"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Proceso
          </Link>
          <Link
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Quién soy
          </Link>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <ThemeToggle />

          {/* Desktop Contact Button */}
          <Link
            href="#book"
            className={cn(buttonVariants(), "hidden md:inline-flex")}
          >
            Contacto
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors duration-200 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="animate-in slide-in-from-top-2 duration-200 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
          <nav className="container flex flex-col space-y-4 py-4">
            <Link
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              onClick={closeMenu}
            >
              Servicios
            </Link>
            <Link
              href="#how"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              onClick={closeMenu}
            >
              Proceso
            </Link>
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              onClick={closeMenu}
            >
              Quién soy
            </Link>
            <Link
              href="#book"
              className={cn(buttonVariants(), "w-fit")}
              onClick={closeMenu}
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
