import { useCallback } from "react";

/**
 * Returns a pointer-move handler that writes the cursor position (in %)
 * into CSS custom properties consumed by `.spotlight-card` / `.spotlight-border`.
 */
export function useSpotlight() {
  return useCallback((event: React.PointerEvent<HTMLElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    target.style.setProperty("--spotlight-x", `${x}%`);
    target.style.setProperty("--spotlight-y", `${y}%`);
  }, []);
}
