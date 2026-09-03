# Accessibility

## Existing positives

-   Project and About images have `alt` text.
-   Form inputs use semantic input types and `required`.
-   External links generally use `rel="noopener noreferrer"`.
-   Buttons are actual button elements in major interactions.

## Improvements

-   Add accessible labels to icon-only social links.
-   Add an accessible name and expanded state to the mobile menu button.
-   Implement keyboard focus trapping and Escape closing for the project
    modal.
-   Add `role="dialog"`, `aria-modal="true"`, and a labelled heading to
    the modal.
-   Decorative skill arrows should not appear interactive until
    implemented.
-   Consider form `<label>` elements instead of placeholders alone.
-   Respect `prefers-reduced-motion` for users who reduce animation.
-   Verify text/background contrast for gray copy.

Track these in \[\[14 - Roadmap/Improvement Roadmap\]\].
