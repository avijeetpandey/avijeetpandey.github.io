import { Toaster as Sonner, type ToasterProps } from "sonner";

function Toaster(props: ToasterProps) {
  return (
    <Sonner
      theme="dark"
      richColors
      closeButton
      toastOptions={{
        classNames: {
          toast: "!rounded-3xl !border !border-white/10 !bg-[#0d1018]/90 !backdrop-blur-xl",
          title: "!text-sm !font-semibold",
          description: "!text-xs !text-slate-300",
        },
      }}
      {...props}
    />
  );
}

export { Toaster };
