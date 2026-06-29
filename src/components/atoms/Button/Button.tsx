import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants, type ButtonSize, type ButtonVariant } from "./variants";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <a href={href} className={classes} download={href.endsWith(".pdf") ? true : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
