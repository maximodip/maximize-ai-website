"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { TextCaseToggle } from "@/components/text-case-toggle";
import { useTextCase } from "@/components/text-case-provider";

// Constants
const SCROLL_TOP_THRESHOLD = 100;
const INTERSECTION_ROOT_MARGIN = "-20% 0px -60% 0px";
const INTERSECTION_THRESHOLD = 0.1;
const RESIZE_DEBOUNCE_DELAY = 100;
const ROUTE_CHANGE_DELAY = 100;
const ANIMATION_COMPLETE_DELAY = 2000;
const SLIME_POSITION_DELAY = 50;
const SLIME_TRANSITION_FAST = "all 0.2s ease-out";
const SLIME_TRANSITION_BOUNCE = "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)";

export const SiteHeader = () => {
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

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleCloseMenu = () => setIsMenuOpen(false);

  const handleMenuKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggleMenu();
    }
  };

  const handleLogoClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    setIsAnimatingToHome(true);

    // Check if we're not on the home page
    if (window.location.pathname !== "/") {
      // Navigate to home page first
      window.location.href = "/";
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setIsAnimatingToHome(false);
    }, ANIMATION_COMPLETE_DELAY);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    handleCloseMenu();

    // Check if we're not on the home page
    if (window.location.pathname !== "/") {
      // Navigate to home page with the hash
      window.location.href = `/#${sectionId}`;
      return;
    }

    // If we're on the home page, scroll to the section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
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

        if (scrollTop <= SCROLL_TOP_THRESHOLD) {
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
        rootMargin: INTERSECTION_ROOT_MARGIN,
        threshold: INTERSECTION_THRESHOLD,
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Listen for route changes
    const handleRouteChange = () => {
      setTimeout(checkHomePage, ROUTE_CHANGE_DELAY);
    };

    // Add debounced scroll listener to clear selection when at top
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop <= SCROLL_TOP_THRESHOLD) {
          setActiveSection("");
        }
      }, 50); // Debounce scroll events
    };

    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener("hashchange", handleRouteChange);
    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(scrollTimeout);
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
      ? SLIME_TRANSITION_FAST
      : SLIME_TRANSITION_BOUNCE;

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

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateSlimePosition, RESIZE_DEBOUNCE_DELAY);
    };

    window.addEventListener("resize", handleResize);

    // Small delay to ensure DOM is ready for initial calculation
    const timer = setTimeout(updateSlimePosition, SLIME_POSITION_DELAY);

    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeSection, isMenuOpen, isUppercase, isAnimatingToHome]);

  // Helper function to get nav link classes
  const getNavLinkClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return cn(
      "px-3 py-2 rounded-xl transition-all duration-300 ease-out relative z-10",
      isActive
        ? "text-primary-foreground font-medium"
        : "text-muted-foreground hover:text-foreground"
    );
  };

  // Helper function for mobile nav link classes
  const getMobileNavLinkClasses = (sectionId: string) => {
    const isActive = activeSection === sectionId;
    return cn(
      "px-4 py-2 rounded-xl transition-all duration-300 ease-out w-full text-right relative z-10",
      isActive
        ? "text-primary-foreground font-medium"
        : "text-muted-foreground hover:text-foreground"
    );
  };

  return (
    <header ref={menuRef} className="sticky top-4 z-50 w-full px-4">
      <div className="mx-auto max-w-7xl rounded-2xl border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-6">
          <div className="flex flex-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold"
              onClick={handleLogoClick}
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
              onClick={(e) => handleNavClick(e, "features")}
            >
              Servicios
            </Link>
            <Link
              href="/#how"
              className={getNavLinkClasses("how")}
              data-section="how"
              onClick={(e) => handleNavClick(e, "how")}
            >
              Proceso
            </Link>
            <Link
              href="/#faq"
              className={getNavLinkClasses("faq")}
              data-section="faq"
              onClick={(e) => handleNavClick(e, "faq")}
            >
              Preguntas frecuentes
            </Link>
            <Link
              href="/#about"
              className={getNavLinkClasses("about")}
              data-section="about"
              onClick={(e) => handleNavClick(e, "about")}
            >
              Quién soy
            </Link>
          </nav>

          <div className="flex flex-1 items-center justify-end gap-3">
            <TextCaseToggle />
            <ThemeToggle />

            {/* Desktop Contact Button */}
            <Link
              href="https://api.whatsapp.com/send?phone=5493816708372&text=Hola%20Máximo%20quiero%20implementar%20una%20infraestructura%20de%20IA%20en%20mi%20negocio"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants(),
                "hidden md:inline-flex h-10 px-6"
              )}
            >
              Contacto
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={handleToggleMenu}
              onKeyDown={handleMenuKeyDown}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-out md:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — Full-screen overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background animate-in fade-in duration-200"
            onClick={handleCloseMenu}
          />

          {/* Close button */}
          <button
            onClick={handleCloseMenu}
            className="absolute top-6 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-input bg-background text-foreground transition-all duration-300 hover:bg-accent"
            aria-label="Cerrar menú"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Nav links */}
          <div className="relative z-10 flex h-full items-center justify-center">
            <nav
              ref={mobileNavRef}
              className="flex flex-col items-center gap-6"
            >
              {([
                { href: "/#features", section: "features", label: "Servicios" },
                { href: "/#how", section: "how", label: "Proceso" },
                { href: "/#faq", section: "faq", label: "Preguntas frecuentes" },
                { href: "/#about", section: "about", label: "Quién soy" },
              ] as const).map((item, i) => (
                <Link
                  key={item.section}
                  href={item.href}
                  data-section={item.section}
                  onClick={(e) => handleNavClick(e, item.section)}
                  className={cn(
                    "text-2xl font-medium tracking-tight transition-all duration-300 animate-in fade-in slide-in-from-bottom-2",
                    activeSection === item.section
                      ? "text-primary"
                      : "text-foreground/60 hover:text-foreground"
                  )}
                  style={{ animationDelay: `${i * 50}ms`, animationFillMode: "both" }}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-6 animate-in fade-in slide-in-from-bottom-2" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
                <a
                  href="https://api.whatsapp.com/send?phone=5493816708372&text=Hola%20Máximo%20quiero%20implementar%20una%20infraestructura%20de%20IA%20en%20mi%20negocio"
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants(),
                    "h-11 px-8 text-base"
                  )}
                  onClick={handleCloseMenu}
                >
                  Contacto
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
