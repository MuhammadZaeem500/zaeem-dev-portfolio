---
tags:
- maintenance
- technical-debt
---

# Known Issues and Technical Debt

## High priority

-   Contact has two competing email architectures: direct client EmailJS
    and an unused server API route. Choose one.
-   Project card data and project detail data are split across two files
    and synchronized only by numeric id.
-   Project modal lacks full dialog accessibility/focus management.

## Medium priority

-   Footer `#aboutme` does not match About's `#aboutMe` casing.
-   `Project.details` is modeled as a string and compared with `"true"`;
    use a boolean.
-   `Project` interface does not model the `tech` array used by project
    cards.
-   Skill previous/next controls look interactive but have no behavior.
-   Metadata description is weak for SEO.
-   Duplicate Space Grotesk loading exists through both `next/font` and
    CSS `@import`.

## Low priority / cleanup

-   Rename `Project.tsx` → `Projects.tsx` and `Skill.tsx` → `Skills.tsx`
    for semantic consistency.
-   Consider removing unnecessary `"use client"` from Footer.
-   Consider replacing footer `href="#"` with `#home`.
-   Add labels/aria-labels to icon-only links and form fields.
-   Exclude `.DS_Store` and `__MACOSX` from source archives.
-   Consider moving static data into `src/data`.

## Content maintenance

Experience dates, skill claims, project counts, resume file and project
descriptions should be reviewed periodically so the site remains
accurate.
