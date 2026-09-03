---
status: proposed
tags:
- adr
- architecture
---

# ADR - Centralize Portfolio Data

## Context

Project cards and project details are stored in separate components and
linked by numeric ids. Skills and experience are also embedded in
rendering components.

## Decision proposed

Create typed data modules under `src/data/` and make components consume
them.

## Target

``` text
src/data/projects.ts
src/data/skills.ts
src/data/experience.ts
```

## Benefits

One source of truth, easier content edits, stronger types, easier
testing, smaller components and lower risk of project-id mismatch.

## Trade-off

Adds a small amount of file structure to a currently simple portfolio.

## Status

Proposed; not implemented in the uploaded source.
