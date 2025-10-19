import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-[12px] px-5 py-2.5 text-sm font-medium transition-all duration-200 ease-out focus-ring disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[var(--color-primary)] text-white shadow-[var(--shadow-card)] hover:bg-[var(--color-primary-hover)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-[color:var(--color-border)] bg-[color:var(--color-card)] text-[color:var(--color-ink)] hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[var(--shadow-card)] hover:bg-secondary/80",
        ghost: "bg-transparent text-muted-foreground hover:bg-[color:var(--color-border)]/30 hover:text-[color:var(--color-ink)]",
        link: "text-[color:var(--color-primary)] underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-[44px] px-5 py-2.5",
        sm: "min-h-[40px] px-4 py-2 text-sm",
        lg: "min-h-[52px] px-6 py-3 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
