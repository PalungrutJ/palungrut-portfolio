import type { LucideIcon } from 'lucide-react';

/** Supported UI languages. */
export type Lang = 'en' | 'th';

/** A string available in every supported language. */
export type Localized = Record<Lang, string>;

/** IDs double as URL hash fragments, e.g. #sql, #erp. */
export type SkillId =
  | 'sql'
  | 'erp'
  | 'network'
  | 'hardware'
  | 'software'
  | 'projects'
  | 'resume'
  | 'contact';

export interface Skill {
  id: SkillId;
  /** Short label shown on the orbit node. */
  label: Localized;
  /** Longer title shown in the content panel. */
  title: Localized;
  icon: LucideIcon;
  /** One-line preview used in the hover tooltip. */
  tagline: Localized;
  /** Short professional explanation (2–3 sentences). */
  summary: Localized;
  /** Key capabilities / bullet list. */
  capabilities: Localized[];
  /** IDs of related projects (see projects.ts). */
  relatedProjectIds: string[];
  /** Qualitative evidence or achievement line. */
  evidence: Localized;
  /** Soft pastel accent (#rrggbb) — unique per node, cohesive across the set. */
  accent: string;
  /** Position on the orbit, in degrees (0 = right, clockwise). */
  angle: number;
  /** Marks the emphasized default node. */
  featured?: boolean;
  /** Non-skill nodes (projects, resume) scroll instead of opening a panel. */
  scrollTarget?: string;
}

export interface Profile {
  /** Proper name — identical across languages. */
  name: string;
  role: Localized;
  tagline: Localized;
  location: Localized;
  highlights: Localized[];
  /** Short technical chips — kept as-is (technical terms). */
  chips: string[];
  portraitSrc: string;
  portraitAlt: Localized;
  avatarModel?: string;
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  resumeUrl: string;
  summary: Localized[];
}

export interface CaseStudy {
  problem: Localized;
  existingProcess: Localized;
  responsibility: Localized;
  solution: Localized;
  systemFlow: Localized[];
  result: Localized;
  lessonsLearned: Localized;
}

export interface Project {
  id: string;
  name: Localized;
  category: Localized;
  problem: Localized;
  responsibility: Localized;
  solution: Localized;
  /** Technology names — kept as-is. */
  stack: string[];
  result: Localized;
  caseStudy: CaseStudy;
  /** Optional anonymized screenshot path. */
  image?: string;
}

export type TimelineCategory =
  | 'support'
  | 'infrastructure'
  | 'legacy'
  | 'development'
  | 'erp'
  | 'automation'
  | 'experiment';

export interface TimelineItem {
  id: string;
  category: TimelineCategory;
  title: Localized;
  /** Human-readable period. Use a PLACEHOLDER label until verified. */
  period: Localized;
  organization: Localized;
  description: Localized;
  /** Short technical tags — kept as-is. */
  tags: string[];
  /** True when dates/company are unverified placeholders. */
  placeholder?: boolean;
}

export interface ProcessStep {
  id: string;
  title: Localized;
  description: Localized;
  icon: LucideIcon;
}

export interface SkillGroup {
  id: string;
  label: Localized;
  icon: LucideIcon;
  /** Technology names — kept as-is. */
  items: string[];
}