"use client";

import { useTextCase } from "@/components/text-case-provider";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function TextCaseToggle() {
  const { isUppercase, toggleCase } = useTextCase();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // Remove focus after click to avoid visual focus state on mobile
    event.currentTarget.blur();
    toggleCase();
  };

  useEffect(() => {
    if (mounted) {
      if (isUppercase) {
        document.body.classList.add("uppercase-text");
      } else {
        document.body.classList.remove("uppercase-text");
      }
    }
  }, [isUppercase, mounted]);

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        aria-label="Cambiar caso de texto"
        disabled
      >
        <span className="text-xs font-bold">Aa</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Cambiar caso de texto"
      onClick={handleClick}
      title={isUppercase ? "Cambiar a minúsculas" : "Cambiar a mayúsculas"}
    >
      <span className={`text-xs font-bold ${isUppercase ? "uppercase" : ""}`}>
        Aa
      </span>
    </Button>
  );
}
