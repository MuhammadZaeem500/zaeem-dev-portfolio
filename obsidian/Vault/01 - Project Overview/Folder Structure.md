# Folder Structure

## `src/app`

Uses the Next.js App Router. `layout.tsx` defines root HTML/body
behavior and metadata, `page.tsx` composes the homepage, `globals.css`
contains global CSS, `favicon.ico` supplies the app icon, and
`api/send-email/route.ts` defines a POST endpoint.

## `src/components`

Contains the page-level presentation sections. The current project keeps
all homepage components in one flat folder. This is reasonable at the
current size.

## `src/types.ts`

Central location for shared TypeScript interfaces: `Project`,
`Experience`, and `ProjectDetailsProps`.

## `src/global.d.ts`

Declares `*.css` modules so TypeScript accepts CSS side-effect imports
in this project setup.

## Naming observations

`Project.tsx` exports `ProjectsSection` and `Skill.tsx` exports
`SkillsSection`. For consistency, future cleanup could rename them to
`Projects.tsx` and `Skills.tsx`.

## macOS archive noise

The uploaded ZIP also contains `.DS_Store` and `__MACOSX` metadata. They
are not application files and should be excluded from Git/archives with
`.gitignore` entries such as `.DS_Store` and `__MACOSX/`.

See \[\[12 - Maintenance/Known Issues and Technical Debt\]\].
