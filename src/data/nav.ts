import type { Localized } from '@/types';

export interface NavItem {
  id: string;
  label: Localized;
}

export const navItems: NavItem[] = [
  { id: 'top', label: { en: 'Home', th: 'หน้าแรก' } },
  { id: 'projects', label: { en: 'Projects', th: 'โปรเจกต์' } },
  { id: 'experience', label: { en: 'Experience', th: 'ประสบการณ์' } },
  { id: 'skills', label: { en: 'Skills', th: 'ทักษะ' } },
  { id: 'resume', label: { en: 'Resume', th: 'เรซูเม่' } },
  { id: 'contact', label: { en: 'Contact', th: 'ติดต่อ' } },
];
