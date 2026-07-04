import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

export function GlassCard({
  children,
  className,
  as: Component = "div",
}: GlassCardProps) {
  return (
    <Component
      className={cn(
        "glass rounded-2xl p-6 transition-colors duration-300 hover:border-white/15 sm:p-8",
        className,
      )}
    >
      {children}
    </Component>
  );
}
