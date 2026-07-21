import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'lg' | 'md' | 'sm';

const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 ease-smooth focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap active:translate-y-px';

const sizes: Record<Size, string> = {
  lg: 'px-6 py-3 text-[15px]',
  md: 'px-5 py-2.5 text-sm',
  sm: 'px-3.5 py-2 text-xs',
};

const variants: Record<Variant, string> = {
  // Charcoal primary: high-contrast, tactile, premium — accents stay reserved for highlights.
  primary: 'bg-text text-background hover:opacity-90 shadow-soft font-semibold',
  secondary:
    'bg-surface text-text border border-border shadow-soft hover:border-[color:var(--primary-strong)]/40 hover:-translate-y-px',
  ghost: 'text-muted hover:text-text hover:bg-surface-2/70',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', className, children, ...rest },
  ref,
) {
  return (
    <button ref={ref} className={cn(base, sizes[size], variants[variant], className)} {...rest}>
      {children}
    </button>
  );
});

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: LinkProps) {
  return (
    <a className={cn(base, sizes[size], variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}
