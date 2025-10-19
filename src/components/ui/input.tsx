import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full min-h-[44px] rounded-[12px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-4 py-2 text-base text-[color:var(--color-ink)] shadow-sm transition-all duration-150 ease-out placeholder:text-muted-foreground focus-ring focus-visible:shadow-[var(--shadow-card)] disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
