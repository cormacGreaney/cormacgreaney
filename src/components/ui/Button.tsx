import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<"a"> & {
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-foreground text-background hover:bg-zinc-200 focus-visible:ring-white/50",
  secondary:
    "glass text-foreground hover:border-white/20 focus-visible:ring-white/30",
  ghost:
    "text-muted hover:text-foreground focus-visible:ring-white/20",
};

export function Button({
  className,
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
