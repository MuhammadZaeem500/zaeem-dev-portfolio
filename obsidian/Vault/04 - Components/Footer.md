# Footer

**File:** `src/components/Footer.tsx`\
**Anchor:** `#footer`

## Content

Brand statement, quick links, social links, resume resource, case-study
link, dynamic copyright year and a fixed back-to-top icon.

## External destinations

GitHub, LinkedIn and Instagram are opened in new tabs. The resume is
`/CV.pdf`.

## Back to top

The ArrowUp icon is fixed at the lower-right corner. Its parent anchor
currently uses `href="#"`; using `#home` would make the destination
explicit.

## Known anchor issue

Footer uses `#aboutme`, while the About section uses `#aboutMe`.
Normalize this.

## Client directive

The file has `"use client"`; however, most of the component is static.
The dynamic year can also render on the server, so the client directive
may not be necessary unless another client-only reason is introduced.
