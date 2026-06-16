import { Toaster as Sonner, type ToasterProps } from "sonner";

import { useTheme } from "@/components/theme/theme-provider";

function Toaster(props: ToasterProps) {
  const { theme } = useTheme();

  return (
    <Sonner
      theme={theme}
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast:
            "!rounded-2xl !border !border-border !bg-popover/95 !text-popover-foreground !backdrop-blur-xl !shadow-xl",
          title: "!text-sm !font-semibold",
          description: "!text-xs !text-muted-foreground",
        },
      }}
      {...props}
    />
  );
}

export { Toaster };
