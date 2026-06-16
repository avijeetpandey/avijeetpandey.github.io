import * as React from "react";

import { cn } from "@/lib/utils";
import { fieldClasses } from "@/lib/field";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn("min-h-36 rounded-[1.25rem]", fieldClasses, className)}
      {...props}
    />
  );
}

export { Textarea };
