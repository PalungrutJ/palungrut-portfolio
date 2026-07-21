import type { Profile } from '@/types';

/**
 * Central identity & contact data (bilingual EN / TH).
 * Replace the PLACEHOLDER values (see CONTENT_REQUIRED.md) before publishing.
 */
export const profile: Profile = {
  name: 'PALUNGRUT JANKONG',
  role: {
    en: 'IT Support & Internal System Developer',
    th: 'IT Support และนักพัฒนาระบบภายใน',
  },
  tagline: {
    en: 'I bridge factory operations, infrastructure, ERP data and software into practical systems that people can actually use.',
    th: 'ผมเชื่อมงานในโรงงาน โครงสร้างพื้นฐาน ข้อมูล ERP และซอฟต์แวร์ ให้กลายเป็นระบบที่ใช้งานได้จริง',
  },
  location: { en: 'Chonburi, Thailand', th: 'ชลบุรี ประเทศไทย' },
  highlights: [{ en: 'Manufacturing IT Experience', th: 'ประสบการณ์ไอทีสายการผลิต' }],
  chips: ['ERP', 'SQL', 'Network', 'Internal Systems'],

  // Replace with a transparent head-and-shoulders portrait (see CONTENT_REQUIRED.md).
  portraitSrc: '/images/profile-placeholder.svg',
  portraitAlt: {
    en: 'Portrait of Palungrut Jankong, IT Support & Internal System Developer',
    th: 'ภาพของ Palungrut Jankong ตำแหน่ง IT Support และนักพัฒนาระบบภายใน',
  },
  // Optional: drop a GLB here to enable the 3D avatar path.
  avatarModel: '/models/profile-avatar.glb',

  // PLACEHOLDER contact details — replace with real, public-facing values.
  email: 'palungrut.example@email.com',
  phone: undefined, // add only if you want it public
  github: 'https://github.com/your-handle',
  linkedin: 'https://www.linkedin.com/in/your-handle',
  resumeUrl: '/resume/palungrut-jankong-resume.pdf',

  summary: [
    {
      en: 'I am not only a helpdesk technician and not only a programmer. I work in the space between users, factory operations, ERP data, network infrastructure and internal software — where operational problems actually live.',
      th: 'ผมไม่ได้เป็นแค่ช่างเฮลป์เดสก์ และไม่ได้เป็นแค่โปรแกรมเมอร์ แต่ทำงานอยู่ระหว่างผู้ใช้ งานในโรงงาน ข้อมูล ERP โครงสร้างเครือข่าย และซอฟต์แวร์ภายใน ซึ่งเป็นจุดที่ปัญหาการทำงานจริงเกิดขึ้น',
    },
    {
      en: 'My strength is investigating a real operational problem, understanding the existing (often legacy) systems around it, designing a practical solution, supporting its deployment, and continuing to maintain it once people rely on it every day.',
      th: 'จุดแข็งของผมคือการวิเคราะห์ปัญหาการทำงานจริง เข้าใจระบบเดิม (ซึ่งมักเป็นระบบเก่า) ที่อยู่รอบ ๆ ออกแบบวิธีแก้ที่ใช้ได้จริง ช่วยติดตั้งใช้งาน และดูแลระบบต่อเนื่องเมื่อผู้ใช้ต้องพึ่งพาทุกวัน',
    },
    {
      en: 'I stay close to the shop floor and to the people using the systems, so what I build fits the way the factory really works — not just how it looks on paper.',
      th: 'ผมทำงานใกล้ชิดกับหน้างานและผู้ใช้ระบบ สิ่งที่สร้างขึ้นจึงเข้ากับวิธีทำงานจริงของโรงงาน ไม่ใช่แค่ดูดีบนกระดาษ',
    },
  ],
};
