import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`card-glass rounded-[var(--radius-panel)] border border-line/80 shadow-soft ${className}`}
      {...props}
    />
  );
}
