import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary via-primary to-blue-600 text-primary-foreground shadow-lg shadow-primary/25 hover:scale-[1.015] active:scale-[0.985] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:via-transparent before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-700 before:ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
        secondary:
          "bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground shadow-md hover:scale-[1.015] active:scale-[0.985] transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground hover:border-accent shadow-sm hover:scale-[1.015] active:scale-[0.985] transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
        ghost:
          "hover:bg-accent hover:text-accent-foreground hover:scale-[1.015] active:scale-[0.985] transition-all duration-350 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
