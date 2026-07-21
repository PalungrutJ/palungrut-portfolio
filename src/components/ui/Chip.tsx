import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function Chip({
  children,
  className,
  tone = 'default',
}: {
  children: ReactNode;
  className?: string;
  tone?: 'default' | 'primary' | 'warn';
}) {
  const tones = {
    default: 'border-border bg-surface-2/70 text-muted',
    primary: 'border-transparent bg-[color:var(--primary-soft)] text-primary-strong',
    warn: 'border-transparent bg-[color:var(--secondary-soft)] text-secondary',
  } as const;
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
