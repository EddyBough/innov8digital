import { cn } from "@/lib/utils";

interface CardProps {
  className?: string;
  children: React.ReactNode;
  gradient?: string;
}

export function Card({ className, children, gradient }: CardProps) {
  const gradientClasses: Record<string, string> = {
    blue: "bg-gradient-to-br from-blue-50 to-white",
    gray: "bg-gradient-to-br from-gray-50 to-white",
    orange: "bg-gradient-to-br from-orange-50 to-white",
  };

  return (
    <div
      className={cn(
        "p-6 rounded-xl shadow-lg relative overflow-hidden",
        gradient && gradientClasses[gradient],
        className
      )}
    >
      {children}
    </div>
  );
}
