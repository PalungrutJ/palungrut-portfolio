import { Search, Network, PencilRuler, Rocket, Wrench } from 'lucide-react';
import type { ProcessStep, SkillGroup } from '@/types';
import { Database, Boxes, MonitorSmartphone, Code2 } from 'lucide-react';

/** "Working Process" section — how the owner approaches operational problems. */
export const processSteps: ProcessStep[] = [
  {
    id: 'investigate',
    title: { en: 'Investigate the real problem', th: 'วิเคราะห์ปัญหาที่แท้จริง' },
    description: {
      en: 'Talk to users on the floor and in the office to understand what is actually going wrong, not just the reported symptom.',
      th: 'พูดคุยกับผู้ใช้ทั้งหน้างานและในสำนักงาน เพื่อเข้าใจปัญหาที่เกิดขึ้นจริง ไม่ใช่แค่อาการที่ถูกรายงาน',
    },
    icon: Search,
  },
  {
    id: 'understand',
    title: { en: 'Understand the existing systems', th: 'เข้าใจระบบที่มีอยู่เดิม' },
    description: {
      en: 'Map how the current (often legacy) systems, data and processes fit together before changing anything.',
      th: 'ทำความเข้าใจว่าระบบเดิม ข้อมูล และกระบวนการที่มีอยู่ (ซึ่งมักเป็นระบบเก่า) เชื่อมกันอย่างไรก่อนจะเปลี่ยนแปลงสิ่งใด',
    },
    icon: Network,
  },
  {
    id: 'design',
    title: { en: 'Design a practical solution', th: 'ออกแบบวิธีแก้ที่ใช้ได้จริง' },
    description: {
      en: 'Shape a solution that fits how the factory really works — maintainable, understandable and realistic to run.',
      th: 'ออกแบบวิธีแก้ที่เข้ากับการทำงานจริงของโรงงาน ดูแลง่าย เข้าใจง่าย และใช้งานได้จริง',
    },
    icon: PencilRuler,
  },
  {
    id: 'deploy',
    title: { en: 'Support the deployment', th: 'สนับสนุนการติดตั้งใช้งาน' },
    description: {
      en: 'Roll out the system with the people who will use it, host it on internal infrastructure and support go-live.',
      th: 'นำระบบไปใช้ร่วมกับผู้ใช้จริง โฮสต์บนโครงสร้างพื้นฐานภายใน และสนับสนุนช่วง go-live',
    },
    icon: Rocket,
  },
  {
    id: 'maintain',
    title: { en: 'Maintain what people rely on', th: 'ดูแลระบบที่ผู้ใช้พึ่งพา' },
    description: {
      en: 'Keep the system healthy and evolving once it becomes part of daily operations.',
      th: 'ดูแลให้ระบบทำงานได้ดีและพัฒนาต่อเนื่องเมื่อกลายเป็นส่วนหนึ่งของงานประจำวัน',
    },
    icon: Wrench,
  },
];

/** Compact technical-skills groupings for the Skills section. */
export const skillGroups: SkillGroup[] = [
  {
    id: 'data',
    label: { en: 'SQL & Data', th: 'SQL และข้อมูล' },
    icon: Database,
    items: [
      'SQL Server',
      'Stored procedures',
      'Reporting queries',
      'Data validation',
      'Legacy DB integration',
    ],
  },
  {
    id: 'erp',
    label: { en: 'ERP & Process', th: 'ERP และกระบวนการ' },
    icon: Boxes,
    items: [
      'Microsoft Dynamics 365',
      'ERP go-live support',
      'Requirement gathering',
      'Inventory / production / QC',
    ],
  },
  {
    id: 'infra',
    label: { en: 'Network & Infrastructure', th: 'เครือข่ายและโครงสร้างพื้นฐาน' },
    icon: Network,
    items: [
      'LAN / Wi-Fi',
      'Windows Server',
      'IIS',
      'Firewall & access control',
      'Shared folders & permissions',
    ],
  },
  {
    id: 'hardware',
    label: { en: 'Hardware & Support', th: 'ฮาร์ดแวร์และการซัพพอร์ต' },
    icon: MonitorSmartphone,
    items: [
      'PC & notebook support',
      'Printers',
      'Barcode scanners & handhelds',
      'Hardware diagnosis',
      'IT asset support',
    ],
  },
  {
    id: 'dev',
    label: { en: 'Software Development', th: 'การพัฒนาซอฟต์แวร์' },
    icon: Code2,
    items: ['PHP', 'C#', 'Python', 'JavaScript', 'VB6 (legacy)', 'REST APIs', 'IIS deployment'],
  },
];
