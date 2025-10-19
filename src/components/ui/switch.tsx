import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-11 w-20 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-[color:var(--color-border)]/80 transition-all duration-150 ease-out focus-ring data-[state=checked]:bg-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-60",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-8 w-8 rounded-full bg-[color:var(--color-card)] shadow-[var(--shadow-card)] transition-transform duration-150 ease-out data-[state=checked]:translate-x-9 data-[state=unchecked]:translate-x-1",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
