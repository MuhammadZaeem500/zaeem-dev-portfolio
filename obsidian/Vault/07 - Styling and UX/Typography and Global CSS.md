# Typography and Global CSS

## Font loading

`layout.tsx` uses Next.js `Space_Grotesk`, weights 300, 400, 500, 600
and 700. `globals.css` separately imports Space Grotesk from Google
Fonts, which is unnecessary duplication.

## Body

Global CSS sets background/foreground variables and an Arial/Helvetica
fallback stack. The Next.js-generated font class on body has stronger
class specificity than the `body` element selector, so Space Grotesk
should still apply, but keeping one clear font strategy is better.

## Scrolling

Smooth scrolling is globally enabled. Scrollbars are intentionally thin
and use an indigo/blue gradient in WebKit with a matching Firefox color
declaration.

## Dark mode

Root variables respond to `prefers-color-scheme`, but most sections
explicitly use dark Tailwind classes, so the application is effectively
dark-first.
