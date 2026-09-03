# Deployment Guide

The project content repeatedly references Vercel, and the code is
structured as a standard Next.js application.

## Deployment requirements

-   Root repository contains valid Next.js package/config files.
-   Production build succeeds.
-   Public assets exist.
-   Required EmailJS environment variables are configured.
-   Deployment uses the correct Node/runtime versions required by the
    root project.

## Post-deploy checks

-   Homepage loads without console errors.
-   Favicon and metadata appear.
-   All section anchors work.
-   Images and CV return 200 responses.
-   Project modals work.
-   Contact submission works from the production domain.
-   Mobile layout is checked on a real device.

Because root deployment configuration was not included in `src(2).zip`,
this note intentionally avoids claiming exact Vercel settings.
