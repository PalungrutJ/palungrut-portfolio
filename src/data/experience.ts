import type { TimelineItem, TimelineCategory, Localized } from '@/types';

const PLACEHOLDER_PERIOD: Localized = {
  en: 'PLACEHOLDER — verify dates',
  th: 'ตัวอย่าง — โปรดยืนยันช่วงเวลา',
};
const PLACEHOLDER_ORG: Localized = {
  en: 'PLACEHOLDER — company name',
  th: 'ตัวอย่าง — ชื่อบริษัท',
};

/**
 * Experience timeline (bilingual EN / TH). Company names, titles and dates are
 * PLACEHOLDERS — replace with verified information (see CONTENT_REQUIRED.md).
 * Items are ordered most-recent first.
 */
export const experience: TimelineItem[] = [
  {
    id: 'exp-erp',
    category: 'erp',
    title: {
      en: 'ERP (Dynamics 365) Go-Live Support',
      th: 'สนับสนุน Go-Live ของ ERP (Dynamics 365)',
    },
    period: PLACEHOLDER_PERIOD,
    organization: PLACEHOLDER_ORG,
    description: {
      en: 'Supported Microsoft Dynamics 365 go-live: gathered user requirements, helped connect manufacturing processes to the system, and resolved day-to-day user issues across inventory, production and QC workflows.',
      th: 'สนับสนุนช่วง go-live ของ Microsoft Dynamics 365 ทั้งเก็บความต้องการผู้ใช้ ช่วยเชื่อมกระบวนการผลิตเข้ากับระบบ และแก้ปัญหาการใช้งานประจำวันในงานคลัง การผลิต และ QC',
    },
    tags: ['Dynamics 365', 'Go-live', 'Requirements', 'User support'],
    placeholder: true,
  },
  {
    id: 'exp-dev',
    category: 'development',
    title: {
      en: 'Internal Systems Development (PHP & SQL Server)',
      th: 'พัฒนาระบบภายใน (PHP และ SQL Server)',
    },
    period: PLACEHOLDER_PERIOD,
    organization: PLACEHOLDER_ORG,
    description: {
      en: 'Designed and built internal web systems on PHP and SQL Server — including QC inspection, IT asset handover and warehouse location management — from requirement gathering through deployment and maintenance.',
      th: 'ออกแบบและสร้างระบบเว็บภายในด้วย PHP และ SQL Server ทั้งระบบตรวจสอบ QC ระบบยืม-คืนทรัพย์สินไอที และระบบจัดการตำแหน่งในคลัง ตั้งแต่เก็บความต้องการจนถึงติดตั้งและดูแล',
    },
    tags: ['PHP', 'SQL Server', 'JavaScript', 'IIS'],
    placeholder: true,
  },
  {
    id: 'exp-legacy',
    category: 'legacy',
    title: {
      en: 'Legacy VB6 & Crystal Reports Maintenance',
      th: 'ดูแลระบบเดิม VB6 และ Crystal Reports',
    },
    period: PLACEHOLDER_PERIOD,
    organization: PLACEHOLDER_ORG,
    description: {
      en: 'Maintained and gradually modernized legacy VB6 applications and Crystal Reports, keeping critical reporting running while migrating functionality toward maintainable web systems.',
      th: 'ดูแลและค่อย ๆ ปรับปรุงแอป VB6 และ Crystal Reports ระบบเดิม ให้รายงานสำคัญทำงานต่อเนื่อง พร้อมย้ายฟังก์ชันไปสู่ระบบเว็บที่ดูแลง่าย',
    },
    tags: ['VB6', 'Crystal Reports', 'Modernization'],
    placeholder: true,
  },
  {
    id: 'exp-infra',
    category: 'infrastructure',
    title: {
      en: 'Network & Infrastructure Responsibility',
      th: 'ดูแลเครือข่ายและโครงสร้างพื้นฐาน',
    },
    period: PLACEHOLDER_PERIOD,
    organization: PLACEHOLDER_ORG,
    description: {
      en: 'Responsible for LAN/Wi-Fi troubleshooting, Windows Server, IIS hosting, firewall and access control, and shared-folder permissions — keeping connectivity and internal services healthy.',
      th: 'รับผิดชอบการแก้ปัญหา LAN/Wi-Fi ดูแล Windows Server โฮสต์ IIS ไฟร์วอลล์และการควบคุมการเข้าถึง และสิทธิ์โฟลเดอร์ที่แชร์ เพื่อให้การเชื่อมต่อและบริการภายในพร้อมใช้งาน',
    },
    tags: ['Windows Server', 'IIS', 'LAN/Wi-Fi', 'Firewall'],
    placeholder: true,
  },
  {
    id: 'exp-support',
    category: 'support',
    title: { en: 'IT User & Hardware Support', th: 'สนับสนุนผู้ใช้และฮาร์ดแวร์ไอที' },
    period: PLACEHOLDER_PERIOD,
    organization: PLACEHOLDER_ORG,
    description: {
      en: 'Provided hands-on support for PCs, notebooks, printers, barcode scanners and handheld devices, including hardware diagnosis and IT asset support across the site.',
      th: 'ให้การสนับสนุนแบบลงมือจริงสำหรับพีซี โน้ตบุ๊ก เครื่องพิมพ์ เครื่องสแกนบาร์โค้ด และอุปกรณ์พกพา รวมถึงวิเคราะห์ฮาร์ดแวร์และดูแลทรัพย์สินไอทีทั่วทั้งไซต์',
    },
    tags: ['Helpdesk', 'Hardware', 'Printers', 'Scanners'],
    placeholder: true,
  },
  {
    id: 'exp-automation',
    category: 'automation',
    title: {
      en: 'Process Improvement & Internal Automation',
      th: 'ปรับปรุงกระบวนการและงานอัตโนมัติภายใน',
    },
    period: PLACEHOLDER_PERIOD,
    organization: PLACEHOLDER_ORG,
    description: {
      en: 'Identified manual, error-prone operational processes and replaced them with internal tools — such as QR-based access checks and reporting/export automation — to make daily work faster and more consistent.',
      th: 'ค้นหากระบวนการที่ทำด้วยมือและเกิดข้อผิดพลาดง่าย แล้วแทนที่ด้วยเครื่องมือภายใน เช่น การตรวจสิทธิ์ด้วย QR และงานรายงาน/ส่งออกอัตโนมัติ เพื่อให้งานประจำวันเร็วและสม่ำเสมอขึ้น',
    },
    tags: ['Automation', 'QR', 'Reporting'],
    placeholder: true,
  },
  {
    id: 'exp-experiment',
    category: 'experiment',
    title: {
      en: 'Computer Vision & QR System Experiments',
      th: 'การทดลองคอมพิวเตอร์วิทัศน์และระบบ QR',
    },
    period: PLACEHOLDER_PERIOD,
    organization: PLACEHOLDER_ORG,
    description: {
      en: 'Prototyped forward-looking ideas including a Python/OpenCV face-recognition attendance pipeline and QR-based systems, to evaluate their practical fit before any production investment.',
      th: 'สร้างต้นแบบไอเดียใหม่ ๆ รวมถึงไปป์ไลน์ลงเวลาด้วยการจดจำใบหน้าด้วย Python/OpenCV และระบบที่ใช้ QR เพื่อประเมินความเหมาะสมก่อนลงทุนใช้งานจริง',
    },
    tags: ['Python', 'OpenCV', 'QR', 'Prototype'],
    placeholder: true,
  },
];

export const categoryLabels: Record<TimelineCategory, Localized> = {
  support: { en: 'User Support', th: 'สนับสนุนผู้ใช้' },
  infrastructure: { en: 'Infrastructure', th: 'โครงสร้างพื้นฐาน' },
  legacy: { en: 'Legacy Maintenance', th: 'ดูแลระบบเดิม' },
  development: { en: 'Development', th: 'พัฒนาระบบ' },
  erp: { en: 'ERP', th: 'ERP' },
  automation: { en: 'Automation', th: 'งานอัตโนมัติ' },
  experiment: { en: 'Experiment', th: 'การทดลอง' },
};
