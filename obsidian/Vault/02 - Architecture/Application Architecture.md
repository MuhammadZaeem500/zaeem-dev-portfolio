---
tags:
- architecture
- nextjs
---

# Application Architecture

## Architectural style

The current application is a **single-page portfolio composed from
section components** inside a Next.js App Router page.

## Rendering model

`src/app/page.tsx` itself does not declare `"use client"`, so it can
remain a Server Component. Most interactive/animated child sections are
Client Components because they use React state/effects or Framer Motion.

### Client components

-   Navbar --- state, effect and refs
-   HeroSection --- Framer Motion
-   About --- Framer Motion
-   Skill --- Framer Motion
-   Project --- state, Framer Motion and modal interaction
-   ProjectDetails --- Framer Motion
-   Experience --- Framer Motion
-   Contact --- state, refs, EmailJS and Framer Motion
-   Footer --- explicitly client-side, though most of its UI is static

## Data placement

Project, experience and skills data are currently declared inside their
rendering components. Shared interface definitions are in
`src/types.ts`.

## Interaction architecture

-   Navigation uses hash anchors.
-   Project details use local state and a modal.
-   Contact submission currently calls EmailJS directly from the
    browser.
-   A server-side `/api/send-email` POST route also exists, creating two
    possible email paths.

## Asset model

Images are referenced from `/Images/...`, and the resume from `/CV.pdf`,
implying these files live under the root `public/` directory.

## Improvement direction

As content grows, move static data into `src/data/` and keep components
focused on rendering. Consider one authoritative email flow rather than
both client EmailJS and an API route.

See \[\[02 - Architecture/Data Flow\]\] and \[\[08 -
Integrations/EmailJS Integration\]\].
