# Dependency Map

Dependencies visible from imports in the uploaded source:

## Framework/runtime

-   Next.js --- App Router, Image, Font, Request/Response
-   React --- component model, state, effects, refs
-   TypeScript --- interfaces and typed props/state

## UI/styling

-   Tailwind CSS --- utility styling
-   Framer Motion --- animations and AnimatePresence
-   Lucide React --- icons

## Integration

-   `@emailjs/browser` --- contact email submission

## Internal dependencies

``` text
app/page.tsx
 ├─ Navbar
 ├─ HeroSection
 ├─ About
 ├─ Skill
 ├─ Project ──> ProjectDetails
 ├─ Experience
 ├─ Contact
 └─ Footer

Project ──> @/types
ProjectDetails ──> @/types
Experience ──> @/types
```

Exact package versions cannot be determined because `package.json` was
not included in the uploaded archive.
