import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover-muted hover-muted-foreground focus-visible-none focus-visible-2 focus-visible-ring focus-visible-offset-2 disabled-events-none disabled-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
  {
    variants"bg-transparent",
        outline"border border-input bg-transparent hover-accent hover-accent-foreground",
      },
      size"h-10 px-3",
        sm"h-9 px-2.5",
        lg"h-11 px-5",
      },
    },
    defaultVariants"default",
      size"default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
