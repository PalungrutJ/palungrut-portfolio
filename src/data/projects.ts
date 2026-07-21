import type { Project } from '@/types';

/**
 * Project case studies (bilingual EN / TH). Results are intentionally QUALITATIVE —
 * do not add numeric achievements until they are verified (see CONTENT_REQUIRED.md).
 * Use only anonymized screenshots and sample data.
 */
export const projects: Project[] = [
  {
    id: 'qc-inspection',
    name: {
      en: 'QC Specification & Inspection System',
      th: 'ระบบสเปกและการตรวจสอบคุณภาพ (QC)',
    },
    category: { en: 'Quality / Manufacturing', th: 'คุณภาพ / การผลิต' },
    problem: {
      en: 'QC product specifications and inspection records were scattered and hard to keep consistent, making routine and serious inspections slow and error-prone.',
      th: 'สเปกสินค้าและบันทึกการตรวจสอบ QC กระจัดกระจายและควบคุมให้ตรงกันได้ยาก ทำให้การตรวจแบบปกติและแบบเข้มข้นล่าช้าและเกิดข้อผิดพลาด',
    },
    responsibility: {
      en: 'Gathered requirements from QC staff, designed the data model, built the application, and maintained it in production.',
      th: 'เก็บความต้องการจากทีม QC ออกแบบโครงสร้างข้อมูล พัฒนาแอปพลิเคชัน และดูแลระบบในการใช้งานจริง',
    },
    solution: {
      en: 'A web system to manage QC product specifications and support both routine and serious inspection processes, with structured records and printable reports.',
      th: 'ระบบเว็บสำหรับจัดการสเปกสินค้า QC รองรับการตรวจสอบทั้งแบบปกติและแบบเข้มข้น พร้อมบันทึกที่เป็นระเบียบและรายงานที่พิมพ์ได้',
    },
    stack: ['PHP', 'SQL Server', 'JavaScript', 'Crystal Reports'],
    result: {
      en: 'Gave QC a single, consistent place to manage specifications and inspection records, reducing reliance on scattered files.',
      th: 'ทำให้ QC มีที่จัดการสเปกและบันทึกการตรวจสอบเพียงจุดเดียวที่สอดคล้องกัน ลดการพึ่งไฟล์ที่กระจัดกระจาย',
    },
    caseStudy: {
      problem: {
        en: 'Product QC specifications lived across spreadsheets and paper, so inspectors could not always be sure they were checking against the current standard. Serious-inspection cases were especially hard to trace.',
        th: 'สเปก QC ของสินค้าอยู่ทั้งในสเปรดชีตและกระดาษ ผู้ตรวจจึงไม่มั่นใจว่าตรวจตามมาตรฐานล่าสุดหรือไม่ โดยเฉพาะกรณีตรวจแบบเข้มข้นที่ตามรอยได้ยาก',
      },
      existingProcess: {
        en: 'Specifications were maintained manually and distributed by file. Inspection results were recorded on paper or ad-hoc sheets, then re-keyed for reporting.',
        th: 'สเปกถูกจัดการด้วยมือและส่งต่อเป็นไฟล์ ผลการตรวจถูกจดบนกระดาษหรือแผ่นชั่วคราว แล้วนำมาคีย์ซ้ำเพื่อทำรายงาน',
      },
      responsibility: {
        en: 'I owned the system end to end: requirement gathering with QC, database design on SQL Server, application development in PHP/JavaScript, report design in Crystal Reports, deployment and ongoing maintenance.',
        th: 'ผมดูแลระบบครบวงจร ตั้งแต่เก็บความต้องการกับ QC ออกแบบฐานข้อมูลบน SQL Server พัฒนาแอปด้วย PHP/JavaScript ออกแบบรายงานด้วย Crystal Reports ติดตั้งและดูแลต่อเนื่อง',
      },
      solution: {
        en: 'A centralized web application where specifications are versioned and inspections are recorded against the correct spec. Routine and serious inspection flows are handled explicitly, and Crystal Reports produce standardized printable documents.',
        th: 'เว็บแอปแบบรวมศูนย์ที่จัดเวอร์ชันของสเปกและบันทึกการตรวจให้ตรงกับสเปกที่ถูกต้อง แยกขั้นตอนการตรวจแบบปกติและแบบเข้มข้นชัดเจน และใช้ Crystal Reports สร้างเอกสารมาตรฐานที่พิมพ์ได้',
      },
      systemFlow: [
        { en: 'Maintain product specifications in a central catalog', th: 'จัดการสเปกสินค้าในแคตตาล็อกกลาง' },
        {
          en: 'Inspector selects product and inspection type (routine / serious)',
          th: 'ผู้ตรวจเลือกสินค้าและประเภทการตรวจ (ปกติ / เข้มข้น)',
        },
        {
          en: 'System records results against the current specification',
          th: 'ระบบบันทึกผลเทียบกับสเปกล่าสุด',
        },
        { en: 'Data validated and stored in SQL Server', th: 'ตรวจสอบและจัดเก็บข้อมูลใน SQL Server' },
        {
          en: 'Crystal Reports generate standardized inspection documents',
          th: 'Crystal Reports สร้างเอกสารการตรวจมาตรฐาน',
        },
      ],
      result: {
        en: 'QC works from one consistent source of truth for specifications, and inspection records became structured and reportable rather than scattered.',
        th: 'QC ทำงานจากแหล่งข้อมูลสเปกเดียวที่สอดคล้องกัน และบันทึกการตรวจกลายเป็นระเบียบและทำรายงานได้ แทนที่จะกระจัดกระจาย',
      },
      lessonsLearned: {
        en: 'Getting the specification model right with QC up front mattered more than any UI detail — the data structure is what made the reports trustworthy.',
        th: 'การออกแบบโครงสร้างสเปกร่วมกับ QC ตั้งแต่ต้นสำคัญกว่ารายละเอียดหน้าจอ เพราะโครงสร้างข้อมูลคือสิ่งที่ทำให้รายงานน่าเชื่อถือ',
      },
    },
  },
  {
    id: 'notebook-handover',
    name: {
      en: 'Notebook Handover & Return System',
      th: 'ระบบยืม-คืนโน้ตบุ๊ก',
    },
    category: { en: 'IT Asset Management', th: 'การจัดการทรัพย์สินไอที' },
    problem: {
      en: 'Handing notebooks to employees and getting them back relied on paper forms, so accountability and asset history were weak.',
      th: 'การส่งมอบและรับคืนโน้ตบุ๊กใช้แบบฟอร์มกระดาษ ทำให้ความรับผิดชอบและประวัติทรัพย์สินไม่ชัดเจน',
    },
    responsibility: {
      en: 'Designed and built the web application and its document/evidence workflow, and rolled it out for IT asset tracking.',
      th: 'ออกแบบและพัฒนาเว็บแอปพร้อมขั้นตอนเอกสารและหลักฐาน และนำไปใช้ติดตามทรัพย์สินไอที',
    },
    solution: {
      en: 'A web application that captures digital signatures and image evidence, produces printable handover documents, and tracks each asset through its lifecycle.',
      th: 'เว็บแอปที่เก็บลายเซ็นดิจิทัลและภาพหลักฐาน สร้างเอกสารส่งมอบที่พิมพ์ได้ และติดตามทรัพย์สินแต่ละชิ้นตลอดวงจรการใช้งาน',
    },
    stack: ['Web Application', 'Digital Signatures', 'Image Evidence', 'Asset Tracking'],
    result: {
      en: 'Created a clear, auditable record of who holds each notebook and the condition it was in at handover and return.',
      th: 'สร้างบันทึกที่ตรวจสอบได้ชัดเจนว่าใครถือโน้ตบุ๊กเครื่องไหนและสภาพเครื่องตอนส่งมอบและรับคืน',
    },
    caseStudy: {
      problem: {
        en: 'Notebook handovers were tracked on paper. When a device was returned damaged or not returned at all, there was little reliable evidence of its original condition or its current holder.',
        th: 'การส่งมอบโน้ตบุ๊กบันทึกบนกระดาษ เมื่อเครื่องถูกคืนในสภาพเสียหายหรือไม่ถูกคืน ก็แทบไม่มีหลักฐานที่เชื่อถือได้เรื่องสภาพเดิมหรือผู้ถือครองปัจจุบัน',
      },
      existingProcess: {
        en: 'A paper form was signed at handover and filed away. Condition was described in words, if at all, and finding the history of a specific device meant searching physical files.',
        th: 'มีการเซ็นแบบฟอร์มกระดาษตอนส่งมอบแล้วเก็บเข้าแฟ้ม สภาพเครื่องบรรยายเป็นคำพูด (ถ้ามี) และการหาประวัติเครื่องต้องค้นจากแฟ้มเอกสาร',
      },
      responsibility: {
        en: 'I designed the workflow and data model, built the web application including digital signature capture and photo evidence, generated printable documents, and deployed it for the IT team.',
        th: 'ผมออกแบบขั้นตอนและโครงสร้างข้อมูล พัฒนาเว็บแอปรวมถึงการเก็บลายเซ็นดิจิทัลและภาพหลักฐาน สร้างเอกสารที่พิมพ์ได้ และติดตั้งให้ทีมไอที',
      },
      solution: {
        en: 'Each handover and return captures a digital signature plus photo evidence of the device condition, generates a printable document, and updates the asset record so the full history of a device is available in one place.',
        th: 'ทุกการส่งมอบและรับคืนจะเก็บลายเซ็นดิจิทัลพร้อมภาพหลักฐานสภาพเครื่อง สร้างเอกสารที่พิมพ์ได้ และอัปเดตบันทึกทรัพย์สิน ทำให้ดูประวัติทั้งหมดของเครื่องได้ในที่เดียว',
      },
      systemFlow: [
        { en: 'Select employee and notebook asset', th: 'เลือกพนักงานและเครื่องโน้ตบุ๊ก' },
        {
          en: 'Capture condition photos and digital signature at handover',
          th: 'ถ่ายภาพสภาพเครื่องและเซ็นลายเซ็นดิจิทัลตอนส่งมอบ',
        },
        { en: 'Generate a printable handover document', th: 'สร้างเอกสารส่งมอบที่พิมพ์ได้' },
        {
          en: 'On return, capture condition photos and signature again',
          th: 'ตอนรับคืน ถ่ายภาพสภาพและเซ็นลายเซ็นอีกครั้ง',
        },
        {
          en: 'Asset history and current holder updated automatically',
          th: 'ประวัติทรัพย์สินและผู้ถือครองปัจจุบันอัปเดตอัตโนมัติ',
        },
      ],
      result: {
        en: 'IT gained an auditable trail for every device — clear accountability at handover and objective evidence of condition on return.',
        th: 'ทีมไอทีมีร่องรอยที่ตรวจสอบได้สำหรับทุกเครื่อง ทั้งความรับผิดชอบที่ชัดเจนตอนส่งมอบและหลักฐานสภาพที่เป็นกลางตอนรับคืน',
      },
      lessonsLearned: {
        en: 'Photo evidence plus a signature removed most disputes; making the printable document match the old paper form helped people trust and adopt the system.',
        th: 'ภาพหลักฐานพร้อมลายเซ็นช่วยลดข้อโต้แย้งได้มาก และการทำเอกสารที่พิมพ์ได้ให้เหมือนฟอร์มกระดาษเดิมช่วยให้ผู้ใช้ไว้ใจและยอมรับระบบ',
      },
    },
  },
  {
    id: 'qr-access',
    name: { en: 'Employee QR Access System', th: 'ระบบเข้าถึงด้วย QR ของพนักงาน' },
    category: { en: 'Access Control', th: 'การควบคุมการเข้าถึง' },
    problem: {
      en: 'Verifying employee access at certain points was manual and slow, with no quick pass/fail feedback.',
      th: 'การตรวจสอบสิทธิ์พนักงานที่บางจุดทำด้วยมือและช้า ไม่มีการแจ้งผ่าน/ไม่ผ่านที่รวดเร็ว',
    },
    responsibility: {
      en: 'Built the QR generation, employee authentication and scanner application, including the notification flow.',
      th: 'พัฒนาการสร้าง QR การยืนยันตัวตนพนักงาน และแอปสแกน รวมถึงขั้นตอนการแจ้งเตือน',
    },
    solution: {
      en: 'A system that generates per-employee QR codes, authenticates them at a scanner application, and returns an immediate pass/fail notification.',
      th: 'ระบบที่สร้าง QR เฉพาะของพนักงานแต่ละคน ยืนยันตัวตนที่แอปสแกน และแจ้งผลผ่าน/ไม่ผ่านทันที',
    },
    stack: ['QR Generation', 'Employee Authentication', 'Scanner App', 'Notifications'],
    result: {
      en: 'Made access checks fast and consistent, with instant, unambiguous feedback for the operator.',
      th: 'ทำให้การตรวจสอบสิทธิ์รวดเร็วและสม่ำเสมอ พร้อมผลลัพธ์ที่ชัดเจนทันทีสำหรับผู้ปฏิบัติงาน',
    },
    caseStudy: {
      problem: {
        en: 'Checking whether an employee was authorized at a given point was manual, inconsistent between operators, and slow at busy times.',
        th: 'การตรวจว่าพนักงานมีสิทธิ์ที่จุดนั้นหรือไม่ทำด้วยมือ ไม่สม่ำเสมอในแต่ละคน และช้าในช่วงที่คนเยอะ',
      },
      existingProcess: {
        en: 'Operators checked identity by hand against lists, which was slow and left room for inconsistency.',
        th: 'ผู้ปฏิบัติงานตรวจตัวตนด้วยมือโดยเทียบกับรายชื่อ ซึ่งช้าและเกิดความไม่สม่ำเสมอ',
      },
      responsibility: {
        en: 'I built QR code generation tied to employee records, the authentication logic, the scanner application, and the pass/fail notification flow, and hosted it on internal infrastructure.',
        th: 'ผมพัฒนาการสร้าง QR ที่ผูกกับข้อมูลพนักงาน ตรรกะการยืนยันตัวตน แอปสแกน และขั้นตอนแจ้งผ่าน/ไม่ผ่าน พร้อมโฮสต์บนโครงสร้างพื้นฐานภายใน',
      },
      solution: {
        en: 'Each employee has a QR code linked to their record. The scanner application reads the code, authenticates against the system, and immediately displays a pass or fail result to the operator.',
        th: 'พนักงานแต่ละคนมี QR ที่ผูกกับข้อมูลของตน แอปสแกนอ่านโค้ด ยืนยันกับระบบ และแสดงผลผ่านหรือไม่ผ่านให้ผู้ปฏิบัติงานทันที',
      },
      systemFlow: [
        { en: 'Generate a QR code linked to each employee', th: 'สร้าง QR ที่ผูกกับพนักงานแต่ละคน' },
        { en: 'Operator scans the employee QR at the access point', th: 'ผู้ปฏิบัติงานสแกน QR ของพนักงานที่จุดเข้าถึง' },
        { en: 'System authenticates the employee record', th: 'ระบบยืนยันข้อมูลพนักงาน' },
        {
          en: 'Immediate pass / fail notification shown to the operator',
          th: 'แสดงผลผ่าน/ไม่ผ่านให้ผู้ปฏิบัติงานทันที',
        },
        { en: 'Scan event logged for review', th: 'บันทึกเหตุการณ์การสแกนไว้ตรวจสอบ' },
      ],
      result: {
        en: 'Access checks became fast and consistent, with clear feedback that removed guesswork for operators.',
        th: 'การตรวจสอบสิทธิ์รวดเร็วและสม่ำเสมอ พร้อมผลลัพธ์ที่ชัดเจนซึ่งช่วยให้ผู้ปฏิบัติงานไม่ต้องคาดเดา',
      },
      lessonsLearned: {
        en: 'Designing an obvious, instant pass/fail signal was the difference between a tool operators trusted and one they worked around.',
        th: 'การออกแบบสัญญาณผ่าน/ไม่ผ่านที่ชัดเจนและทันทีคือสิ่งที่ทำให้ผู้ปฏิบัติงานไว้ใจเครื่องมือ แทนที่จะหลีกเลี่ยงมัน',
      },
    },
  },
  {
    id: 'face-attendance',
    name: {
      en: 'Face Recognition Attendance Prototype',
      th: 'ต้นแบบระบบลงเวลาด้วยการจดจำใบหน้า',
    },
    category: { en: 'Computer Vision (Prototype)', th: 'คอมพิวเตอร์วิทัศน์ (ต้นแบบ)' },
    problem: {
      en: 'Explore whether camera-based face recognition could support attendance without additional hardware tokens.',
      th: 'สำรวจว่าการจดจำใบหน้าด้วยกล้องจะช่วยงานลงเวลาได้หรือไม่ โดยไม่ต้องใช้อุปกรณ์โทเคนเพิ่ม',
    },
    responsibility: {
      en: 'Built the prototype: camera integration, face embedding pipeline and a scan-log dashboard.',
      th: 'พัฒนาต้นแบบ ทั้งการเชื่อมต่อกล้อง ไปป์ไลน์สร้าง face embedding และแดชบอร์ดบันทึกการสแกน',
    },
    solution: {
      en: 'A Python/OpenCV prototype using a Hikvision camera to compute face embeddings and log recognized scans to a dashboard for review.',
      th: 'ต้นแบบด้วย Python/OpenCV ใช้กล้อง Hikvision คำนวณ face embedding และบันทึกการสแกนที่จดจำได้ลงแดชบอร์ดเพื่อตรวจสอบ',
    },
    stack: ['Python', 'OpenCV', 'Hikvision Camera', 'Face Embeddings'],
    result: {
      en: 'Demonstrated a working end-to-end recognition-to-dashboard flow and clarified the practical constraints for a production version.',
      th: 'แสดงให้เห็นการทำงานครบวงจรตั้งแต่จดจำใบหน้าถึงแดชบอร์ด และทำให้เห็นข้อจำกัดจริงสำหรับเวอร์ชันใช้งานจริง',
    },
    caseStudy: {
      problem: {
        en: 'The team wanted to understand whether face recognition could support attendance capture using existing cameras, before investing in a full solution.',
        th: 'ทีมต้องการเข้าใจว่าการจดจำใบหน้าจะช่วยเก็บเวลาเข้างานด้วยกล้องที่มีอยู่ได้หรือไม่ ก่อนลงทุนในระบบเต็มรูปแบบ',
      },
      existingProcess: {
        en: 'Attendance was captured through existing methods; this prototype explored a camera-based alternative rather than replacing anything in production.',
        th: 'การลงเวลาใช้วิธีเดิมอยู่แล้ว ต้นแบบนี้เป็นการสำรวจทางเลือกด้วยกล้อง ไม่ได้แทนที่ระบบที่ใช้งานจริง',
      },
      responsibility: {
        en: 'I built the prototype end to end: integrating the Hikvision camera feed, generating face embeddings with Python/OpenCV, matching them, and presenting recognized scans on a dashboard.',
        th: 'ผมสร้างต้นแบบครบวงจร ทั้งเชื่อมต่อภาพจากกล้อง Hikvision สร้าง face embedding ด้วย Python/OpenCV จับคู่ และแสดงการสแกนที่จดจำได้บนแดชบอร์ด',
      },
      solution: {
        en: 'A prototype pipeline captures frames from the camera, computes face embeddings, matches against enrolled faces, and writes recognized scans to a log dashboard for review.',
        th: 'ไปป์ไลน์ต้นแบบดึงเฟรมจากกล้อง คำนวณ face embedding จับคู่กับใบหน้าที่ลงทะเบียนไว้ และบันทึกการสแกนที่จดจำได้ลงแดชบอร์ดเพื่อตรวจสอบ',
      },
      systemFlow: [
        { en: 'Capture frames from the Hikvision camera', th: 'ดึงเฟรมภาพจากกล้อง Hikvision' },
        { en: 'Detect faces and compute embeddings with OpenCV', th: 'ตรวจจับใบหน้าและคำนวณ embedding ด้วย OpenCV' },
        { en: 'Match embeddings against enrolled employees', th: 'จับคู่ embedding กับพนักงานที่ลงทะเบียน' },
        { en: 'Log recognized scans with timestamp', th: 'บันทึกการสแกนที่จดจำได้พร้อมเวลา' },
        { en: 'Review results on the scan-log dashboard', th: 'ตรวจสอบผลบนแดชบอร์ดบันทึกการสแกน' },
      ],
      result: {
        en: 'Proved the concept end to end and surfaced the real-world constraints — lighting, angles and enrollment quality — that a production system would need to handle.',
        th: 'พิสูจน์แนวคิดได้ครบวงจรและเผยข้อจำกัดในโลกจริง ทั้งแสง มุมกล้อง และคุณภาพการลงทะเบียน ที่ระบบใช้งานจริงต้องรับมือ',
      },
      lessonsLearned: {
        en: 'A prototype is most valuable for exposing operational constraints early; recognition accuracy in a factory environment depends heavily on enrollment and camera placement.',
        th: 'ต้นแบบมีค่าที่สุดตรงที่เผยข้อจำกัดการใช้งานได้เร็ว ความแม่นยำในการจดจำในโรงงานขึ้นกับการลงทะเบียนและตำแหน่งกล้องอย่างมาก',
      },
    },
  },
  {
    id: 'store-location',
    name: { en: 'Store Location Management System', th: 'ระบบจัดการตำแหน่งจัดเก็บสินค้า' },
    category: { en: 'Warehouse / Inventory', th: 'คลังสินค้า / สต็อก' },
    problem: {
      en: 'Finding where products were stored in the warehouse depended on staff knowledge, making stock hard to locate and audit.',
      th: 'การหาว่าสินค้าอยู่ตำแหน่งไหนในคลังต้องพึ่งความจำของพนักงาน ทำให้ค้นหาและตรวจนับสต็อกได้ยาก',
    },
    responsibility: {
      en: 'Built the web system, product image management and reporting/Excel export.',
      th: 'พัฒนาระบบเว็บ การจัดการรูปสินค้า และการทำรายงาน/ส่งออก Excel',
    },
    solution: {
      en: 'A PHP/SQL Server system that maps products to warehouse locations, manages product images, and produces reports with Excel export.',
      th: 'ระบบ PHP/SQL Server ที่จับคู่สินค้ากับตำแหน่งในคลัง จัดการรูปสินค้า และสร้างรายงานพร้อมส่งออก Excel',
    },
    stack: ['PHP', 'SQL Server', 'Product Images', 'Excel Export'],
    result: {
      en: 'Made warehouse locations explicit and searchable, so stock could be found and reported without relying on individual memory.',
      th: 'ทำให้ตำแหน่งในคลังชัดเจนและค้นหาได้ จึงหาและรายงานสต็อกได้โดยไม่ต้องพึ่งความจำของแต่ละคน',
    },
    caseStudy: {
      problem: {
        en: 'Product storage locations were largely held in staff memory. Locating stock or auditing the warehouse was slow and error-prone, especially with staff changes.',
        th: 'ตำแหน่งจัดเก็บสินค้าส่วนใหญ่อยู่ในความจำของพนักงาน การหาสต็อกหรือตรวจนับคลังจึงช้าและผิดพลาดง่าย โดยเฉพาะเมื่อมีการเปลี่ยนพนักงาน',
      },
      existingProcess: {
        en: 'Locations were informal or kept in scattered notes; finding an item often meant asking whoever knew the warehouse best.',
        th: 'ตำแหน่งไม่เป็นทางการหรือจดไว้กระจัดกระจาย การหาของมักต้องถามคนที่รู้จักคลังดีที่สุด',
      },
      responsibility: {
        en: 'I designed the data model, built the PHP/SQL Server application, added product image management, and implemented reporting with Excel export.',
        th: 'ผมออกแบบโครงสร้างข้อมูล พัฒนาแอป PHP/SQL Server เพิ่มการจัดการรูปสินค้า และทำระบบรายงานพร้อมส่งออก Excel',
      },
      solution: {
        en: 'A system that records the warehouse location of each product, stores product images for identification, and provides searchable views plus reports that export to Excel.',
        th: 'ระบบที่บันทึกตำแหน่งในคลังของสินค้าแต่ละรายการ เก็บรูปสินค้าเพื่อระบุตัว และมีมุมมองที่ค้นหาได้พร้อมรายงานที่ส่งออก Excel',
      },
      systemFlow: [
        { en: 'Register products with images and attributes', th: 'ลงทะเบียนสินค้าพร้อมรูปและคุณสมบัติ' },
        { en: 'Assign each product to a warehouse location', th: 'กำหนดตำแหน่งในคลังให้สินค้าแต่ละรายการ' },
        { en: 'Search or browse to find where an item is stored', th: 'ค้นหาหรือเรียกดูเพื่อหาว่าสินค้าอยู่ที่ไหน' },
        { en: 'Generate location and stock reports', th: 'สร้างรายงานตำแหน่งและสต็อก' },
        { en: 'Export reports to Excel for wider use', th: 'ส่งออกรายงานเป็น Excel เพื่อใช้งานต่อ' },
      ],
      result: {
        en: 'Warehouse locations became explicit and searchable, reducing dependence on individual memory and making audits and reporting straightforward.',
        th: 'ตำแหน่งในคลังชัดเจนและค้นหาได้ ลดการพึ่งความจำของแต่ละคน และทำให้การตรวจนับและรายงานง่ายขึ้น',
      },
      lessonsLearned: {
        en: 'Product images turned out to be as important as the location data for quick, confident identification on the floor.',
        th: 'รูปสินค้ากลับสำคัญพอ ๆ กับข้อมูลตำแหน่ง สำหรับการระบุตัวสินค้าหน้างานได้อย่างรวดเร็วและมั่นใจ',
      },
    },
  },
];

export const projectById = (id: string): Project | undefined =>
  projects.find((p) => p.id === id);
