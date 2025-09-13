"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface TextCaseContextType {
  isUppercase: boolean;
  toggleCase: () => void;
}

const TextCaseContext = createContext<TextCaseContextType | undefined>(
  undefined
);

export function TextCaseProvider({ children }: { children: ReactNode }) {
  const [isUppercase, setIsUppercase] = useState(false);

  const toggleCase = () => {
    setIsUppercase((prev) => !prev);
  };

  return (
    <TextCaseContext.Provider value={{ isUppercase, toggleCase }}>
      {children}
    </TextCaseContext.Provider>
  );
}

export function useTextCase() {
  const context = useContext(TextCaseContext);
  if (context === undefined) {
    throw new Error("useTextCase must be used within a TextCaseProvider");
  }
  return context;
}
