# Design System

## Visual language

Dark portfolio aesthetic with black and gray surfaces, white primary
text, gray supporting text, rounded cards, bordered pills and subtle
translucent overlays.

## Common surfaces

-   `bg-black`
-   `bg-gray-900`
-   `bg-[#111]`
-   `bg-[#1a1a1a]`

## Typography

Space Grotesk is loaded through Next.js Font. Headings use
bold/extrabold weights; supporting copy commonly uses gray text and
responsive sizes.

## Spacing

Sections commonly use `py-16`; Contact uses a larger vertical treatment.
Content is constrained with `max-w-*` utilities.

## Interaction

Hover inversion on outlined buttons, hover lightening on social
controls, smooth anchor scrolling and motion-driven entrances.

## Consistency opportunities

Extract repeated section badge/title/description patterns into a
reusable `SectionHeader` component if the site grows.
