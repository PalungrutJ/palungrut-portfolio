import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function GlassPanel({ children, className, ...rest }: GlassPanelProps) {
  return (
    <div className={cn('card rounded-panel', className)} {...rest}>
      {children}
    </div>
  );
}
