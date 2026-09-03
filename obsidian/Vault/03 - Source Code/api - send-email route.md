# `src/app/api/send-email/route.ts`

## Endpoint

`POST /api/send-email`

## Input

Expected JSON fields: - `user_name` - `user_email` - `subject` -
`message`

## Process

1.  Parse request JSON.
2.  Call `emailjs.send()`.
3.  Read `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, and
    `EMAILJS_PUBLIC_KEY` from server environment variables.
4.  Return `{ success: true }` on success.
5.  Log an error and return HTTP 500 with
    `{ success: false, error: "Email failed" }` on failure.

## Architectural note

The current Contact component does not use this route; it calls EmailJS
directly in the browser with `NEXT_PUBLIC_...` variables. Decide whether
the contact form should be client-direct or server-mediated, then remove
the unused path.

See \[\[08 - Integrations/EmailJS Integration\]\] and \[\[08 -
Integrations/Environment Variables\]\].
