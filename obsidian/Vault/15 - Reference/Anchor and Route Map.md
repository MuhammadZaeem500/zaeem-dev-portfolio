# Anchor and Route Map

## Page route

`/` → `src/app/page.tsx`

## API route

`POST /api/send-email` → `src/app/api/send-email/route.ts`

## Hash anchors

-   `/\#home` → HeroSection
-   `/\#aboutMe` → About
-   `/\#skills` → Skills
-   `/\#projects` → Projects
-   `/\#experience` → Experience
-   `/\#contact` → Contact
-   `/\#footer` → Footer

## Static assets referenced

-   `/CV.pdf`
-   `/Images/Zaeem.jpg`
-   project images under `/Images/`

## Known mismatch

Footer currently uses `#aboutme`, not `#aboutMe`.
