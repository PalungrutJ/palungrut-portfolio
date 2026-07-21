# Content Required — Replace Placeholders Before Publishing

Everything below is currently a **placeholder** in `src/data/*`. Replace with verified real
information. Nothing confidential should ever be committed (see SECURITY section).

## 1. Identity & contact — `src/data/profile.ts`
- [ ] Professional portrait → `public/images/profile-placeholder.webp` (transparent PNG/WEBP, head + shoulders, ~1200×1500).
- [ ] Optional 3D avatar → `public/models/profile-avatar.glb`.
- [ ] Email (public-facing address).
- [ ] Telephone (only if you want it public).
- [ ] GitHub URL.
- [ ] LinkedIn URL.
- [ ] Resume PDF → `public/resume/palungrut-jankong-resume.pdf`.
- [ ] Age / date of birth (resume section only — currently omitted).

## 2. Employment history — `src/data/experience.ts`
Currently marked `PLACEHOLDER`. Provide for each role:
- [ ] Company name (or "Manufacturing company — name withheld").
- [ ] Job title.
- [ ] Start / end dates (verified).
- [ ] Real responsibilities and outcomes.

## 3. Project results — `src/data/projects.ts`
Each case study uses **qualitative** results only. Replace with verified facts:
- [ ] Real business problem details (anonymized).
- [ ] Verified quantitative results (time saved, error reduction, users) — **only if you can back them up.**
- [ ] Anonymized screenshots → `public/images/projects/`.
- [ ] Confirm every technology listed is accurate.

## 4. Skills evidence — `src/data/skills.ts`
- [ ] Confirm each capability bullet is accurate.
- [ ] Replace generic "evidence" lines with concrete, non-confidential examples.

## 5. Thai translations
The site ships bilingual (EN / TH). The Thai copy in `src/data/*` and `src/i18n/ui.ts` is a
first pass generated for you.
- [ ] Have a native Thai speaker review tone and terminology (especially job-application wording).
- [ ] Confirm technical terms you prefer to keep in English (kept as-is now: ERP, SQL Server, IIS…).
- [ ] Personal name is kept in Latin script in both languages — change if you want Thai script.

## 6. Do NOT publish (security & privacy)
- Internal IP addresses, server names, or paths.
- Usernames, passwords, API keys, connection strings.
- Production database names / confidential SQL.
- Private company documents or confidential screenshots.
- Employee personal data.
- Proprietary source code.

Use anonymized screenshots and sample data only. When in doubt, leave it out.
