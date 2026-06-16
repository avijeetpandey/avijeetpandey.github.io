import * as React from "react";

import { cn } from "@/lib/utils";
import { fieldClasses } from "@/lib/field";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn("flex h-12", fieldClasses, className)}
      {...props}
    />
  );
}

export { Input };
