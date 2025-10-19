import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-[12px] border border-[color:var(--color-border)] bg-[color:var(--color-card)] px-4 py-3 text-base text-[color:var(--color-ink)] shadow-sm transition-all duration-150 ease-out placeholder:text-muted-foreground focus-ring focus-visible:shadow-[var(--shadow-card)] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
