"use client";

import { useTextCase } from "@/components/text-case-provider";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const TextCaseToggle = () => {
  const { isUppercase, toggleCase } = useTextCase();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    toggleCase();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleCase();
    }
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
      onKeyDown={handleKeyDown}
      title={isUppercase ? "Cambiar a minúsculas" : "Cambiar a mayúsculas"}
    >
      <span className={`text-xs font-bold ${isUppercase ? "uppercase" : ""}`}>
        Aa
      </span>
    </Button>
  );
};
