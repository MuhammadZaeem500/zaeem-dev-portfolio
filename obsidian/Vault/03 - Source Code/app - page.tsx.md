# `src/app/page.tsx`

## Responsibility

The portfolio homepage and composition root.

## Imports

`HeroSection`, `Navbar`, `About`, `SkillsSection`, `ProjectsSection`,
`ContactSection`, `Footer`, and `ExperienceTimeline`.

## Behavior

Renders every major section in a single `div` with `overflow-x-hidden`.
There is no page-level state or data fetching.

## Why this is good

The page remains easy to read because individual sections own their own
presentation.

## Future direction

If the site gains multiple pages, shared navigation/footer can move into
the root layout while route-specific content stays in individual pages.
