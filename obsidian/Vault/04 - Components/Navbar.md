# Navbar

**File:** `src/components/Navbar.tsx`\
**Type:** Client Component

## Purpose

Fixed top navigation for desktop and mobile.

## State and refs

-   `isMenuOpen` controls mobile menu visibility.
-   `menuRef` points to the mobile menu.
-   `menuButtonRef` points to the hamburger button.

## Effect

A `mousedown` document listener closes the mobile menu when a click
occurs outside both the menu and menu button. Cleanup removes the
listener on unmount.

## Navigation items

Home, About, Skills, Projects, Experience and Contact. Each is a
same-page hash link.

## Resume

Desktop and mobile variants link to `/CV.pdf` and request a download
named `Muhammad Zaeem Resume.pdf`.

## Responsive behavior

Desktop links/resume are shown at `lg` and above. A hamburger/close
control and stacked menu are used below `lg`.

## Dependencies

React `useState`, `useEffect`, `useRef`.

## Possible improvements

Add `aria-label`, `aria-expanded`, `aria-controls`, Escape-key handling
and focus management for stronger accessibility.
