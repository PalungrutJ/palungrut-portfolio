import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow flex items-center gap-2">
        <span className="inline-block h-px w-8 bg-primary/60" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="mt-3 text-[1.7rem] font-bold tracking-tight text-text sm:text-[2rem]">
        {title}
      </h2>
      {description && <p className="mt-4 text-[15px] leading-relaxed text-muted">{description}</p>}
    </div>
  );
}
