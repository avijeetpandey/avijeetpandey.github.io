/**
 * Shared field styling for inputs and textareas.
 * Light mode: clean white field with a soft inner shadow.
 * Dark mode: subtle dark field whose bottom accent border expands from
 * left to full width on focus.
 */
export const fieldClasses =
  "w-full rounded-xl border border-border bg-input/70 px-4 py-3 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted-foreground " +
  "shadow-[inset_0_1px_3px_rgba(15,23,42,0.06)] " +
  "bg-no-repeat [background-image:linear-gradient(hsl(var(--primary)),hsl(var(--primary)))] [background-size:0%_2px] [background-position:left_bottom] " +
  "focus:[background-size:100%_2px] focus:border-primary/40 focus-visible:ring-4 focus-visible:ring-primary/10 " +
  "dark:bg-foreground/[0.03] dark:shadow-none";
