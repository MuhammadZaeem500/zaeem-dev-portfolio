# ProjectDetails

**File:** `src/components/ProjectDetails.tsx`\
**Prop:** `projectId: number`

## Purpose

Provides the detailed case-study content displayed inside the project
modal.

## Data structure

A local `projectDetails` record maps project ids 1--6 to: -
`implementations`: `{ title, desc }[]` - `stack`: `{ title, items[] }[]`

## Relationship

The numeric ids must remain synchronized with the project objects in
`Project.tsx`. A mismatch would show incorrect or missing details.

## Improvement direction

Move project metadata and details into one typed data source so cards
and detail views cannot drift apart. See \[\[13 - Decisions/ADR -
Centralize Portfolio Data\]\].
