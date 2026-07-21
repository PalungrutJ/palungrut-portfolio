import {
  Database,
  Boxes,
  Network,
  MonitorSmartphone,
  Code2,
  FolderKanban,
  FileText,
} from 'lucide-react';
import type { Skill, SkillId } from '@/types';

/**
 * Skill nodes shown on the orbit and their content-panel data (bilingual EN / TH).
 * `angle` places each node around the portrait (0° = right, clockwise).
 */
export const skills: Skill[] = [
  {
    id: 'projects',
    label: { en: 'Projects', th: 'โปรเจกต์' },
    title: { en: 'Selected Projects', th: 'โปรเจกต์ที่คัดสรร' },
    icon: FolderKanban,
    tagline: {
      en: 'Real internal systems built end to end',
      th: 'ระบบภายในจริงที่สร้างครบวงจร',
    },
    summary: {
      en: 'Practical internal systems I designed, built and maintained to solve specific operational problems on the factory floor and in the back office.',
      th: 'ระบบภายในที่ใช้งานได้จริง ซึ่งผมออกแบบ สร้าง และดูแล เพื่อแก้ปัญหาการทำงานเฉพาะจุดทั้งในสายการผลิตและงานสำนักงาน',
    },
    capabilities: [
      { en: 'End-to-end internal web systems', th: 'ระบบเว็บภายในครบวงจร' },
      { en: 'From requirement gathering to deployment', th: 'ตั้งแต่เก็บความต้องการจนถึงติดตั้งใช้งาน' },
      { en: 'Reporting and data export', th: 'การทำรายงานและส่งออกข้อมูล' },
      { en: 'Ongoing maintenance and support', th: 'ดูแลและซัพพอร์ตต่อเนื่อง' },
    ],
    relatedProjectIds: ['qc-inspection', 'notebook-handover', 'qr-access'],
    evidence: {
      en: 'Five internal systems spanning QC, IT asset tracking, access control and reporting.',
      th: 'ห้าระบบภายในครอบคลุมงาน QC การติดตามทรัพย์สินไอที การควบคุมการเข้าถึง และการรายงาน',
    },
    accent: '#5b5fb0',
    angle: 0,
    featured: true,
    scrollTarget: 'projects',
  },
  {
    id: 'sql',
    label: { en: 'SQL & Data', th: 'SQL และข้อมูล' },
    title: { en: 'SQL & Data', th: 'SQL และข้อมูล' },
    icon: Database,
    tagline: {
      en: 'SQL Server, stored procedures & reporting',
      th: 'SQL Server, stored procedure และการทำรายงาน',
    },
    summary: {
      en: 'I work directly with SQL Server to model, validate and report on manufacturing and QC data — including integrating and cleaning up legacy databases.',
      th: 'ผมทำงานกับ SQL Server โดยตรง ทั้งออกแบบโครงสร้าง ตรวจสอบความถูกต้อง และทำรายงานข้อมูลการผลิตและ QC รวมถึงเชื่อมต่อและจัดระเบียบฐานข้อมูลระบบเดิม',
    },
    capabilities: [
      { en: 'SQL Server queries & stored procedures', th: 'เขียนคิวรีและ stored procedure บน SQL Server' },
      { en: 'Reporting queries for operations & QC', th: 'คิวรีสำหรับรายงานงานปฏิบัติการและ QC' },
      { en: 'Data validation & integrity checks', th: 'ตรวจสอบความถูกต้องและความสมบูรณ์ของข้อมูล' },
      { en: 'Legacy database integration', th: 'เชื่อมต่อฐานข้อมูลระบบเดิม' },
      { en: 'Manufacturing & QC data modelling', th: 'ออกแบบโครงสร้างข้อมูลการผลิตและ QC' },
    ],
    relatedProjectIds: ['qc-inspection', 'store-location'],
    evidence: {
      en: 'Built the data layer and reporting queries behind the QC inspection and store-location systems.',
      th: 'สร้างชั้นข้อมูลและคิวรีรายงานเบื้องหลังระบบตรวจสอบ QC และระบบจัดการตำแหน่งจัดเก็บ',
    },
    accent: '#3f74a6',
    angle: 51,
  },
  {
    id: 'erp',
    label: { en: 'ERP & Process', th: 'ERP และกระบวนการ' },
    title: { en: 'ERP & Process', th: 'ERP และกระบวนการ' },
    icon: Boxes,
    tagline: {
      en: 'Dynamics 365 support & go-live',
      th: 'ซัพพอร์ต Dynamics 365 และช่วง go-live',
    },
    summary: {
      en: 'I support Microsoft Dynamics 365 and the manufacturing processes around it — gathering user requirements, assisting go-live and resolving day-to-day user issues.',
      th: 'ผมดูแล Microsoft Dynamics 365 และกระบวนการผลิตที่เกี่ยวข้อง ทั้งเก็บความต้องการผู้ใช้ ช่วยช่วง go-live และแก้ปัญหาการใช้งานประจำวัน',
    },
    capabilities: [
      { en: 'Microsoft Dynamics 365 support', th: 'ซัพพอร์ต Microsoft Dynamics 365' },
      { en: 'ERP go-live support', th: 'สนับสนุนช่วง go-live ของ ERP' },
      { en: 'User requirement gathering', th: 'เก็บความต้องการของผู้ใช้' },
      { en: 'Manufacturing process understanding', th: 'เข้าใจกระบวนการผลิต' },
      { en: 'Inventory, production & QC workflows', th: 'ขั้นตอนงานคลัง การผลิต และ QC' },
      { en: 'User issue resolution', th: 'แก้ไขปัญหาการใช้งานของผู้ใช้' },
    ],
    relatedProjectIds: ['qc-inspection', 'store-location'],
    evidence: {
      en: 'Supported ERP go-live and connected shop-floor processes to the system.',
      th: 'สนับสนุนช่วง go-live ของ ERP และเชื่อมกระบวนการหน้างานเข้ากับระบบ',
    },
    accent: '#2f8a82',
    angle: 102,
  },
  {
    id: 'network',
    label: { en: 'Network', th: 'เครือข่าย' },
    title: { en: 'Network & Infrastructure', th: 'เครือข่ายและโครงสร้างพื้นฐาน' },
    icon: Network,
    tagline: {
      en: 'LAN, Wi-Fi, Windows Server & IIS',
      th: 'LAN, Wi-Fi, Windows Server และ IIS',
    },
    summary: {
      en: 'I keep connectivity and core infrastructure healthy — diagnosing LAN/Wi-Fi issues, managing Windows Server, IIS, firewalls, shared folders and access control.',
      th: 'ผมดูแลการเชื่อมต่อและโครงสร้างพื้นฐานหลักให้พร้อมใช้งาน ทั้งวิเคราะห์ปัญหา LAN/Wi-Fi ดูแล Windows Server, IIS, ไฟร์วอลล์ โฟลเดอร์ที่แชร์ และการควบคุมการเข้าถึง',
    },
    capabilities: [
      { en: 'LAN & Wi-Fi troubleshooting', th: 'แก้ปัญหา LAN และ Wi-Fi' },
      { en: 'Windows Server administration', th: 'ดูแล Windows Server' },
      { en: 'IIS hosting & deployment', th: 'โฮสต์และติดตั้งงานบน IIS' },
      { en: 'Firewall & access control', th: 'ไฟร์วอลล์และการควบคุมการเข้าถึง' },
      { en: 'Shared folders & permissions', th: 'โฟลเดอร์ที่แชร์และสิทธิ์การเข้าถึง' },
      { en: 'Connectivity diagnosis', th: 'วิเคราะห์ปัญหาการเชื่อมต่อ' },
    ],
    relatedProjectIds: ['qr-access'],
    evidence: {
      en: 'Deploy and host internal web systems on IIS/Windows Server infrastructure.',
      th: 'ติดตั้งและโฮสต์ระบบเว็บภายในบนโครงสร้าง IIS/Windows Server',
    },
    accent: '#5b8560',
    angle: 153,
  },
  {
    id: 'hardware',
    label: { en: 'Hardware', th: 'ฮาร์ดแวร์' },
    title: { en: 'Hardware & User Support', th: 'ฮาร์ดแวร์และการซัพพอร์ตผู้ใช้' },
    icon: MonitorSmartphone,
    tagline: {
      en: 'PCs, printers, scanners & handhelds',
      th: 'พีซี เครื่องพิมพ์ สแกนเนอร์ และเครื่องพกพา',
    },
    summary: {
      en: 'I support the physical IT that keeps people working — PCs, notebooks, printers, barcode scanners and handheld devices — with hands-on diagnosis and user assistance.',
      th: 'ผมดูแลฮาร์ดแวร์ไอทีที่ทำให้ทุกคนทำงานได้ ทั้งพีซี โน้ตบุ๊ก เครื่องพิมพ์ เครื่องสแกนบาร์โค้ด และอุปกรณ์พกพา พร้อมวิเคราะห์ปัญหาและช่วยเหลือผู้ใช้โดยตรง',
    },
    capabilities: [
      { en: 'PC & notebook support', th: 'ซัพพอร์ตพีซีและโน้ตบุ๊ก' },
      { en: 'Printer support', th: 'ดูแลเครื่องพิมพ์' },
      { en: 'Barcode scanner & handheld devices', th: 'เครื่องสแกนบาร์โค้ดและอุปกรณ์พกพา' },
      { en: 'Hardware diagnosis', th: 'วิเคราะห์ปัญหาฮาร์ดแวร์' },
      { en: 'IT asset support', th: 'ดูแลทรัพย์สินไอที' },
      { en: 'Direct user assistance', th: 'ช่วยเหลือผู้ใช้โดยตรง' },
    ],
    relatedProjectIds: ['notebook-handover', 'qr-access'],
    evidence: {
      en: 'Built a notebook handover/return system to track IT assets end to end.',
      th: 'สร้างระบบยืม-คืนโน้ตบุ๊กเพื่อติดตามทรัพย์สินไอทีครบวงจร',
    },
    accent: '#a3743f',
    angle: 204,
  },
  {
    id: 'software',
    label: { en: 'Software Dev', th: 'พัฒนาซอฟต์แวร์' },
    title: { en: 'Software Development', th: 'การพัฒนาซอฟต์แวร์' },
    icon: Code2,
    tagline: {
      en: 'PHP, C#, Python, JS & legacy VB6',
      th: 'PHP, C#, Python, JS และ VB6 ระบบเดิม',
    },
    summary: {
      en: 'I develop and modernise internal business software across a broad, pragmatic stack — from legacy VB6 to modern web and REST APIs — and deploy it on IIS.',
      th: 'ผมพัฒนาและปรับปรุงซอฟต์แวร์ธุรกิจภายในด้วยเทคโนโลยีที่หลากหลายและใช้ได้จริง ตั้งแต่ VB6 ระบบเดิมไปจนถึงเว็บสมัยใหม่และ REST API พร้อมติดตั้งบน IIS',
    },
    capabilities: [
      { en: 'PHP · C# · Python · JavaScript', th: 'PHP · C# · Python · JavaScript' },
      { en: 'Legacy VB6 maintenance', th: 'ดูแลระบบเดิม VB6' },
      { en: 'REST API development', th: 'พัฒนา REST API' },
      { en: 'IIS deployment', th: 'ติดตั้งใช้งานบน IIS' },
      { en: 'Legacy system modernization', th: 'ปรับปรุงระบบเดิมให้ทันสมัย' },
    ],
    relatedProjectIds: ['qc-inspection', 'face-attendance', 'store-location'],
    evidence: {
      en: 'Modernized legacy tools into maintainable web systems used across departments.',
      th: 'ปรับเครื่องมือระบบเดิมให้เป็นระบบเว็บที่ดูแลง่ายและใช้ข้ามหลายแผนก',
    },
    accent: '#8a5480',
    angle: 255,
  },
  {
    id: 'resume',
    label: { en: 'Resume', th: 'เรซูเม่' },
    title: { en: 'Resume', th: 'เรซูเม่' },
    icon: FileText,
    tagline: { en: 'Preview & download the PDF', th: 'ดูตัวอย่างและดาวน์โหลด PDF' },
    summary: {
      en: 'A one-page summary of experience, skills and education — available to preview inline or download as PDF.',
      th: 'สรุปหนึ่งหน้าเกี่ยวกับประสบการณ์ ทักษะ และการศึกษา ดูตัวอย่างในหน้าหรือดาวน์โหลดเป็น PDF ได้',
    },
    capabilities: [
      { en: 'Concise one-page overview', th: 'สรุปกระชับในหน้าเดียว' },
      { en: 'Experience & skills summary', th: 'สรุปประสบการณ์และทักษะ' },
      { en: 'Downloadable PDF', th: 'ดาวน์โหลดเป็น PDF ได้' },
    ],
    relatedProjectIds: [],
    evidence: { en: 'Kept current for job applications.', th: 'อัปเดตให้พร้อมสำหรับการสมัครงานเสมอ' },
    accent: '#5a6472',
    angle: 306,
    scrollTarget: 'resume',
  },
];

export const skillById = (id: SkillId): Skill | undefined => skills.find((s) => s.id === id);

export const defaultSkillId: SkillId = 'projects';
