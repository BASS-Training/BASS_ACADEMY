import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "gold" | "outlineLight";
  size?: "md" | "sm";
  onClick?: () => void;
};

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary:
    "border border-line bg-white text-foreground hover:border-primary/40 hover:text-primary",
  gold: "bg-accent-yellow text-foreground hover:bg-accent-gold",
  outlineLight:
    "border border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/5",
};

const sizeClasses: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-6 py-3.5 text-sm",
  sm: "px-5 py-3 text-sm",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  onClick,
}: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full font-semibold shadow-soft ${variantClasses[variant]} ${sizeClasses[size]}`}
    >
      {children}
    </Link>
  );
}
