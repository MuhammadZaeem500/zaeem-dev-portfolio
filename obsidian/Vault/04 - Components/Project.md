# Project

**File:** `src/components/Project.tsx`\
**Export:** `ProjectsSection`\
**Anchor:** `#projects`

## Purpose

Displays six featured projects and opens a detailed modal for a selected
project.

## State

`selectedProject: Project | null`

## Card behavior

Cards alternate image/text direction on large screens. Each card shows
image, technology pills, description and a `View Project` button.

## Modal behavior

`AnimatePresence` conditionally mounts the modal. Clicking the backdrop
or close icon clears `selectedProject`; clicking the modal body stops
propagation. The modal renders the selected image and passes
`selectedProject.id` into `ProjectDetails`.

## Projects

\[\[09 - Projects/Wolves Art\]\] · \[\[09 - Projects/Lit Collective\]\]
· \[\[09 - Projects/Ethan Suero\]\] · \[\[09 - Projects/Horizon\]\] ·
\[\[09 - Projects/Dr Wafa Clinics\]\] · \[\[09 - Projects/HRM\]\]

## Type observation

The local project objects also contain `tech`, but the shared `Project`
interface does not define `tech`. The state accepts the narrower
interface because the selected object contains the required fields; for
stronger modeling, add `tech: string[]` and make `details` a boolean
instead of a string.
