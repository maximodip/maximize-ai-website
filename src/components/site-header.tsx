"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { TextCaseToggle } from "@/components/text-case-toggle";
import { useTextCase } from "@/components/text-case-provider";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [slimeStyle, setSlimeStyle] = useState<React.CSSProperties>({});
  const [mobileSlimeStyle, setMobileSlimeStyle] = useState<React.CSSProperties>(
    {}
  );
  const [isAnimatingToHome, setIsAnimatingToHome] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const { isUppercase } = useTextCase();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isMenuOpen]);

  // Track active section with intersection observer
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    // Reset active section when on homepage
    const checkHomePage = () => {
      if (window.location.pathname === "/" && window.location.hash === "") {
        setActiveSection("");
      }
    };

    // Check immediately
    checkHomePage();

    const observer = new IntersectionObserver(
      (entries) => {
        // Check scroll position first
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop <= 100) {
          // If we're at the top, clear any selection
          setActiveSection("");
          return;
        }

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Listen for route changes
    const handleRouteChange = () => {
      setTimeout(checkHomePage, 100); // Small delay to ensure DOM is ready
    };

    // Add scroll listener to clear selection when at top
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop <= 100) {
        // Clear selection when close to top
        setActiveSection("");
      }
    };

    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener("hashchange", handleRouteChange);
    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("hashchange", handleRouteChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update slime position when active section changes
  useEffect(() => {
    // When animating to home, use faster transitions for natural scroll sync
    const transitionSpeed = isAnimatingToHome
      ? "all 0.2s ease-out"
      : "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)";

    const updateSlimePosition = () => {
      // Desktop slime
      if (!navRef.current || !activeSection) {
        setSlimeStyle({ opacity: 0 });
      } else {
        const activeLink = navRef.current.querySelector(
          `[data-section="${activeSection}"]`
        ) as HTMLElement;
        if (!activeLink) {
          setSlimeStyle({ opacity: 0 });
        } else {
          const navRect = navRef.current.getBoundingClientRect();
          const linkRect = activeLink.getBoundingClientRect();

          setSlimeStyle({
            opacity: 1,
            left: linkRect.left - navRect.left,
            width: linkRect.width,
            height: linkRect.height,
            transform: "translateY(0)",
            transition: transitionSpeed,
          });
        }
      }

      // Mobile slime
      if (!mobileNavRef.current || !activeSection || !isMenuOpen) {
        setMobileSlimeStyle({ opacity: 0 });
      } else {
        const activeMobileLink = mobileNavRef.current.querySelector(
          `[data-section="${activeSection}"]`
        ) as HTMLElement;
        if (!activeMobileLink) {
          setMobileSlimeStyle({ opacity: 0 });
        } else {
          const mobileNavRect = mobileNavRef.current.getBoundingClientRect();
          const mobileLinkRect = activeMobileLink.getBoundingClientRect();

          setMobileSlimeStyle({
            opacity: 1,
            top: mobileLinkRect.top - mobileNavRect.top,
            width: mobileLinkRect.width,
            height: mobileLinkRect.height,
            right: 0,
            transform: "translateX(0)",
            transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)", // Slime-like easing
          });
        }
      }
    };

    // Update slime position immediately and on window resize
    updateSlimePosition();

    const handleResize = () => {
      setTimeout(updateSlimePosition, 100);
    };

    window.addEventListener("resize", handleResize);

    // Small delay to ensure DOM is ready for initial calculation
    const timer = setTimeout(updateSlimePosition, 50);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeSection, isMenuOpen, isUppercase, isAnimatingToHome]);

  // Helper function to get nav link classes (without background now)
  const getNavLinkClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return cn(
      "px-3 py-2 rounded-xl transition-all duration-300 ease-out relative z-10",
      isActive
        ? "text-foreground font-medium"
        : "text-muted-foreground hover:text-foreground"
    );
  };

  // Helper function for mobile nav link classes (without background now)
  const getMobileNavLinkClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return cn(
      "px-4 py-2 rounded-xl transition-all duration-300 ease-out w-full text-right relative z-10",
      isActive
        ? "text-foreground font-medium"
        : "text-muted-foreground hover:text-foreground"
    );
  };

  return (
    <header ref={menuRef} className="sticky top-4 z-50 w-full px-4">
      <div className="mx-auto max-w-7xl rounded-2xl border bg-background/80 backdrop-blur-md shadow-lg shadow-black/5 supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-6">
          <div className="flex flex-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold"
              onClick={async (e) => {
                e.preventDefault();

                // Set animation flag to let intersection observer handle slime movement
                setIsAnimatingToHome(true);

                // Scroll to top and let intersection observer move the slime naturally
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });

                // Clear animation flag after scroll completes
                setTimeout(() => {
                  setIsAnimatingToHome(false);
                }, 2000); // Give enough time for scroll to complete
              }}
            >
              <span>Maximize IA</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            ref={navRef}
            className="hidden items-center gap-2 text-sm md:flex relative"
          >
            {/* Slime background */}
            <div
              className="absolute top-0 bg-primary/80 rounded-xl pointer-events-none z-0"
              style={slimeStyle}
            />

            <Link
              href="/#features"
              className={getNavLinkClasses("features")}
              data-section="features"
            >
              Servicios
            </Link>
            <Link
              href="/#how"
              className={getNavLinkClasses("how")}
              data-section="how"
            >
              Proceso
            </Link>
            <Link
              href="/#faq"
              className={getNavLinkClasses("faq")}
              data-section="faq"
            >
              FAQ
            </Link>
            <Link
              href="/#about"
              className={getNavLinkClasses("about")}
              data-section="about"
            >
              Quién soy
            </Link>
          </nav>

          <div className="flex flex-1 items-center justify-end gap-3">
            <TextCaseToggle />
            <ThemeToggle />

            {/* Desktop Contact Button */}
            <Link
              href="/#book"
              className={cn(
                buttonVariants(),
                "hidden md:inline-flex h-10 px-6"
              )}
            >
              Contacto
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-out hover:scale-105 active:scale-95 md:hidden"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 transition-transform duration-200 rotate-90" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="animate-in slide-in-from-top-2 duration-200 mt-2 mx-4 md:hidden">
          <div className="rounded-2xl border bg-background/95 backdrop-blur-md shadow-lg shadow-black/5 supports-[backdrop-filter]:bg-background/80">
            <nav
              ref={mobileNavRef}
              className="flex flex-col items-end space-y-2 p-6 relative"
            >
              {/* Mobile Slime background */}
              <div
                className="absolute bg-primary/80 rounded-xl pointer-events-none z-0"
                style={mobileSlimeStyle}
              />

              <Link
                href="/#features"
                className={getMobileNavLinkClasses("features")}
                data-section="features"
                onClick={closeMenu}
              >
                Servicios
              </Link>
              <Link
                href="/#how"
                className={getMobileNavLinkClasses("how")}
                data-section="how"
                onClick={closeMenu}
              >
                Proceso
              </Link>
              <Link
                href="/#faq"
                className={getMobileNavLinkClasses("faq")}
                data-section="faq"
                onClick={closeMenu}
              >
                FAQ
              </Link>
              <Link
                href="/#about"
                className={getMobileNavLinkClasses("about")}
                data-section="about"
                onClick={closeMenu}
              >
                Quién soy
              </Link>
              <Link
                href="/#book"
                className={cn(
                  buttonVariants(),
                  "w-fit h-10 px-6 mt-2 relative z-10"
                )}
                onClick={closeMenu}
              >
                Contacto
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
