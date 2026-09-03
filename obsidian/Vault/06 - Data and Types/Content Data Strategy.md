# Content Data Strategy

## Current state

Skills, projects, project details and experiences are embedded inside
component files.

## Advantages now

Simple, no extra abstraction, easy for a small portfolio.

## Scaling problem

Project card data and ProjectDetails data live separately and are
connected only by numeric ids. Editing a project can require changes in
multiple files.

## Recommended target

``` text
src/
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   └── skills.ts
├── types/
│   └── index.ts
└── components/
```

Create one rich `Project` model containing card content, technologies,
implementation details and stack. Then both the card and modal read the
same object.

See \[\[13 - Decisions/ADR - Centralize Portfolio Data\]\].
