# Testing Strategy

No test files are present in the uploaded `src` archive.

## Minimum manual regression suite

-   Navbar desktop links scroll to correct sections.
-   Mobile menu opens, closes, closes after selecting a link and closes
    on outside click.
-   Resume link resolves.
-   About image renders.
-   All six project images render.
-   Every View Project button opens the correct details.
-   Modal closes by X and backdrop.
-   Experience timeline renders on mobile and desktop.
-   Contact validation blocks empty required fields.
-   Contact success and failure feedback behave correctly.
-   Footer links work.

## Recommended automated layers

-   Unit tests for data/model helpers after data extraction.
-   React component tests for Navbar, Project modal and Contact form.
-   End-to-end smoke test for navigation, project modal and contact form
    mock.
-   Accessibility scan for homepage and modal.

## Build gate

A production build and TypeScript check should be required before
deployment.
