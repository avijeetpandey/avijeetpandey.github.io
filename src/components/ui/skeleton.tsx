import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("animate-pulse rounded-2xl bg-foreground/[0.06] shimmer", className)}
      {...props}
    />
  );
}

export { Skeleton };
