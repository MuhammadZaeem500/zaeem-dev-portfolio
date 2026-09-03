---
status: active
tags:
- portfolio
- moc
- dashboard
---

# Portfolio Dashboard

## Project

**Muhammad Zaeem Portfolio** is a single-page developer portfolio built
around the Next.js App Router. It presents a hero section, personal
introduction, skills, projects, work experience, contact form and
footer.

## Main navigation

-   \[\[01 - Project Overview/Project Overview\]\]
-   \[\[01 - Project Overview/Folder Structure\]\]
-   \[\[02 - Architecture/Application Architecture\]\]
-   \[\[02 - Architecture/Page Composition\]\]
-   \[\[04 - Components/Components MOC\]\]
-   \[\[05 - Features/Features MOC\]\]
-   \[\[09 - Projects/Projects MOC\]\]
-   \[\[10 - Development/Development Guide\]\]
-   \[\[12 - Maintenance/Known Issues and Technical Debt\]\]
-   \[\[14 - Roadmap/Improvement Roadmap\]\]

## Current page flow

`Navbar → HeroSection → About → SkillsSection → ProjectsSection → ExperienceTimeline → ContactSection → Footer`

The composition is defined in \[\[03 - Source Code/app - page.tsx\]\].

## Current source tree

``` text
src/
├── app/
│   ├── api/
│   │   └── send-email/
│   │       └── route.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── Project.tsx
│   ├── ProjectDetails.tsx
│   └── Skill.tsx
├── global.d.ts
└── types.ts
```

## Key technologies visible in source

Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Lucide React,
EmailJS and Next.js Image/Font APIs.

## Documentation status

-   [x] Architecture documented
-   [x] Components documented
-   [x] Projects documented
-   [x] Contact flow documented
-   [x] Types documented
-   [x] Known issues recorded
-   [ ] Root package/configuration files documented when available
-   [ ] Automated tests documented after they are added
