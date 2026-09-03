# Development Guide

## Expected workflow

From the repository root, install dependencies and run the Next.js
development server using the package manager configured by the project.
The uploaded archive does not include `package.json`, so exact scripts
and versions should be read from the repository root before documenting
commands as authoritative.

Typical Next.js commands are commonly `npm run dev`, `npm run build`,
and `npm run lint`, but verify the actual scripts first.

## Before committing

-   Run the production build.
-   Run lint/type checks available in the project.
-   Test desktop and mobile navigation.
-   Open every project modal.
-   Submit the contact form in a safe test configuration.
-   Verify resume and image assets.
-   Check browser console for errors.

## Adding a component

1.  Create it in `src/components`.
2.  Add `"use client"` only if it needs state, effects, browser APIs or
    client-only libraries.
3.  Import it into the appropriate composition point.
4.  Keep section anchors synchronized with navigation.
5.  Document it in this vault.

## Adding a project

Until data is centralized, update both `Project.tsx` and
`ProjectDetails.tsx`, keep ids unique, add the image to `public/Images`,
and add/update the project note.
