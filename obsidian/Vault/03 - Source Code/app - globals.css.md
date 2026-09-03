# `src/app/globals.css`

## Current responsibilities

-   Imports Tailwind CSS.
-   Imports Space Grotesk from Google Fonts via CSS.
-   Defines background/foreground CSS variables.
-   Provides dark-mode variable values through `prefers-color-scheme`.
-   Defines body defaults.
-   Enables smooth anchor scrolling.
-   Customizes WebKit and Firefox scrollbars.

## Important observation

Space Grotesk is already loaded through `next/font/google` in
`layout.tsx`, so the CSS Google Fonts import is redundant. Prefer
`next/font` only to avoid duplicate font-loading strategies.

## Theme

The visible components mostly set their own black/gray backgrounds and
white/gray text through Tailwind utility classes, so the root color
variables currently have limited influence.
