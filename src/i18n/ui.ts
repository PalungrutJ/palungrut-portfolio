import type { Localized } from '@/types';

/**
 * UI-chrome strings (labels, section headers, buttons) that are not part of the
 * portfolio content in src/data. Every value is bilingual (EN / TH).
 */
export const ui = {
  nav: {
    resume: { en: 'Resume', th: 'เรซูเม่' },
    openMenu: { en: 'Open menu', th: 'เปิดเมนู' },
    closeMenu: { en: 'Close menu', th: 'ปิดเมนู' },
    primary: { en: 'Primary', th: 'หลัก' },
    mobile: { en: 'Mobile', th: 'มือถือ' },
    language: { en: 'Language', th: 'ภาษา' },
  },
  hero: {
    exploreProjects: { en: 'Explore Projects', th: 'ดูโปรเจกต์' },
    viewResume: { en: 'View Resume', th: 'ดูเรซูเม่' },
    contactMe: { en: 'Contact Me', th: 'ติดต่อ' },
    selectGroup: {
      en: 'Select a system to explore',
      th: 'เลือกระบบที่ต้องการสำรวจ',
    },
  },
  panel: {
    activeSystem: { en: 'Active system', th: 'ระบบที่เลือก' },
    nowShowing: { en: 'Now showing', th: 'กำลังแสดง' },
    evidence: { en: 'Evidence:', th: 'หลักฐาน:' },
    relatedProjects: { en: 'Related projects', th: 'โปรเจกต์ที่เกี่ยวข้อง' },
  },
  summary: {
    eyebrow: { en: 'Professional Summary', th: 'สรุปโดยรวม' },
    title: { en: 'The person between the systems', th: 'คนที่เชื่อมทุกระบบเข้าด้วยกัน' },
    whatIConnect: { en: 'What I connect', th: 'สิ่งที่ผมเชื่อมโยง' },
    flow: {
      en: 'Investigate → understand → design → deploy → maintain.',
      th: 'วิเคราะห์ → เข้าใจระบบเดิม → ออกแบบ → ติดตั้ง → ดูแลต่อเนื่อง',
    },
    bridges: {
      users: { en: 'Users', th: 'ผู้ใช้งาน' },
      factory: { en: 'Factory Ops', th: 'งานในโรงงาน' },
      erp: { en: 'ERP & Data', th: 'ERP และข้อมูล' },
      infra: { en: 'Infrastructure', th: 'โครงสร้างพื้นฐาน' },
      dev: { en: 'Development', th: 'การพัฒนาระบบ' },
    },
  },
  projects: {
    eyebrow: { en: 'Selected Projects', th: 'โปรเจกต์ที่คัดสรร' },
    title: { en: 'Internal systems, built end to end', th: 'ระบบภายในที่สร้างครบวงจร' },
    description: {
      en: 'Each system started from a real operational problem. Open a case study for the full problem, solution, flow and outcome.',
      th: 'ทุกระบบเริ่มจากปัญหาการทำงานจริง เปิดกรณีศึกษาเพื่อดูปัญหา วิธีแก้ ขั้นตอน และผลลัพธ์ทั้งหมด',
    },
    viewCaseStudy: { en: 'View case study', th: 'ดูกรณีศึกษา' },
    openCaseStudyFor: { en: 'Open case study for', th: 'เปิดกรณีศึกษาของ' },
  },
  caseStudy: {
    problem: { en: 'Problem', th: 'ปัญหา' },
    existingProcess: { en: 'Existing Process', th: 'กระบวนการเดิม' },
    responsibility: { en: 'My Responsibility', th: 'หน้าที่ของผม' },
    solution: { en: 'Solution', th: 'วิธีแก้ปัญหา' },
    systemFlow: { en: 'System Flow', th: 'ขั้นตอนการทำงานของระบบ' },
    technologies: { en: 'Technologies', th: 'เทคโนโลยีที่ใช้' },
    result: { en: 'Result', th: 'ผลลัพธ์' },
    lessonsLearned: { en: 'Lessons Learned', th: 'บทเรียนที่ได้' },
    disclaimer: {
      en: 'Results are described qualitatively; screenshots and figures are anonymized and exclude any confidential company data.',
      th: 'ผลลัพธ์อธิบายเชิงคุณภาพ ภาพและตัวเลขทั้งหมดถูกปิดข้อมูลระบุตัวตน และไม่มีข้อมูลลับของบริษัท',
    },
  },
  experience: {
    eyebrow: { en: 'Experience Timeline', th: 'ไทม์ไลน์ประสบการณ์' },
    title: { en: 'Areas of responsibility', th: 'ขอบเขตความรับผิดชอบ' },
    description: {
      en: 'Categories of work across manufacturing IT. Company names, titles and dates are placeholders until verified.',
      th: 'หมวดหมู่งานด้านไอทีในโรงงาน ชื่อบริษัท ตำแหน่ง และช่วงเวลาเป็นข้อมูลตัวอย่างจนกว่าจะยืนยัน',
    },
    placeholder: { en: 'Placeholder', th: 'ตัวอย่าง' },
  },
  skills: {
    eyebrow: { en: 'Technical Skills', th: 'ทักษะเชิงเทคนิค' },
    title: { en: 'A pragmatic, cross-discipline stack', th: 'สแตกที่ใช้งานได้จริงและครอบคลุมหลายด้าน' },
    description: {
      en: 'Grouped by domain rather than rated with percentages — depth shows up in the projects and experience above.',
      th: 'จัดกลุ่มตามสายงานแทนการให้คะแนนเปอร์เซ็นต์ — ความลึกดูได้จากโปรเจกต์และประสบการณ์ด้านบน',
    },
  },
  process: {
    eyebrow: { en: 'Working Process', th: 'กระบวนการทำงาน' },
    title: {
      en: 'How I turn a floor problem into a running system',
      th: 'ผมเปลี่ยนปัญหาหน้างานให้เป็นระบบที่ใช้งานได้อย่างไร',
    },
  },
  resume: {
    eyebrow: { en: 'Resume', th: 'เรซูเม่' },
    title: { en: 'One page, ready to send', th: 'หนึ่งหน้า พร้อมส่งทันที' },
    heading: { en: 'Palungrut Jankong — Resume', th: 'Palungrut Jankong — เรซูเม่' },
    subheading: {
      en: 'PDF · updated for job applications',
      th: 'ไฟล์ PDF · อัปเดตสำหรับการสมัครงาน',
    },
    download: { en: 'Download PDF', th: 'ดาวน์โหลด PDF' },
    openTab: { en: 'Open in new tab', th: 'เปิดในแท็บใหม่' },
    preview: { en: 'Preview', th: 'ตัวอย่าง' },
    previewUnavailable: {
      en: 'Inline preview unavailable. Use “Open in new tab” to view the resume.',
      th: 'ไม่สามารถแสดงตัวอย่างในหน้าได้ กด “เปิดในแท็บใหม่” เพื่อดูเรซูเม่',
    },
    addHint: {
      en: 'Add your PDF at',
      th: 'วางไฟล์ PDF ไว้ที่',
    },
    highlights: [
      {
        en: 'IT support & internal system development in manufacturing',
        th: 'สนับสนุนไอทีและพัฒนาระบบภายในในภาคการผลิต',
      },
      {
        en: 'ERP (Dynamics 365) support and go-live experience',
        th: 'สนับสนุน ERP (Dynamics 365) และประสบการณ์ช่วง go-live',
      },
      {
        en: 'SQL Server data, reporting and legacy integration',
        th: 'ข้อมูล SQL Server การทำรายงาน และเชื่อมต่อระบบเดิม',
      },
      {
        en: 'Network, Windows Server and IIS infrastructure',
        th: 'เครือข่าย Windows Server และโครงสร้าง IIS',
      },
      {
        en: 'PHP · C# · Python · JavaScript · legacy VB6',
        th: 'PHP · C# · Python · JavaScript · VB6 (ระบบเดิม)',
      },
    ] as Localized[],
  },
  contact: {
    eyebrow: { en: 'Contact', th: 'ติดต่อ' },
    title: { en: "Let's talk about your operations", th: 'มาคุยเรื่องงานของคุณกัน' },
    body: {
      en: 'Open to IT support, internal systems and manufacturing IT roles. If you have a messy operational problem that sits between users, data and infrastructure, that’s exactly where I work best.',
      th: 'เปิดรับงานด้าน IT Support ระบบภายใน และไอทีในโรงงาน หากคุณมีปัญหาการทำงานที่ซับซ้อนซึ่งอยู่ระหว่างผู้ใช้ ข้อมูล และโครงสร้างพื้นฐาน นั่นคือจุดที่ผมถนัดที่สุด',
    },
    labels: {
      email: { en: 'Email', th: 'อีเมล' },
      phone: { en: 'Phone', th: 'โทรศัพท์' },
      github: { en: 'GitHub', th: 'GitHub' },
      linkedin: { en: 'LinkedIn', th: 'LinkedIn' },
      viewProfile: { en: 'View profile', th: 'ดูโปรไฟล์' },
    },
  },
  footer: {
    rights: {
      en: 'IT Support & Internal System Developer',
      th: 'IT Support และนักพัฒนาระบบภายใน',
    },
  },
  sticky: {
    resume: { en: 'Resume', th: 'เรซูเม่' },
    contact: { en: 'Contact', th: 'ติดต่อ' },
  },
  modal: {
    close: { en: 'Close dialog', th: 'ปิดหน้าต่าง' },
  },
  a11y: {
    skipToContent: { en: 'Skip to content', th: 'ข้ามไปยังเนื้อหา' },
  },
} as const;