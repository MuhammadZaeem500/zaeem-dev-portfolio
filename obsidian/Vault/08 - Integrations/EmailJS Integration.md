# EmailJS Integration

## Current client integration

`Contact.tsx` imports `emailjs` from `@emailjs/browser` and calls
`sendForm()` using public environment variables. The HTML form field
names must match the EmailJS template variables.

## Existing server route

`app/api/send-email/route.ts` also imports EmailJS and exposes a POST
route using non-public environment variable names.

## Duplication

There are currently two email designs, but only the direct client path
is wired into the visible Contact form.

## Recommended decision

Choose one:

### Option A --- client-direct

Keep `sendForm`, remove unused API route, validate EmailJS restrictions
and rate controls.

### Option B --- server-mediated

Submit the form to `/api/send-email`, validate input server-side, add
rate/abuse controls, and keep integration logic out of the browser. This
is the cleaner architecture if the contact feature becomes more
important.

## Failure behavior

Current UI catches EmailJS rejection and displays
`Oops! Something went wrong.`. Consider clearing old messages at
submission start and differentiating success/error state types.
