# Contact

**File:** `src/components/Contact.tsx`\
**Anchor:** `#contact`

## Purpose

Provides contact information, social links and a message form.

## React state

-   `loading` controls button text.
-   `success` stores either success or error feedback.
-   `formRef` gives EmailJS access to the form element.

## Form fields

`user_name`, `user_email`, `subject`, `message`; all are required.

## Submission

`handleSubmit` prevents default submission, calls `emailjs.sendForm`,
resets the form after success and updates feedback text.

## Client environment variables

-   `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
-   `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
-   `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## Contact links

The component includes email, phone, Lahore location, GitHub and
LinkedIn UI.

## Security/architecture note

Because `NEXT_PUBLIC_` values are exposed to the browser by design,
treat them as public identifiers rather than secrets. Consider routing
submission through a server endpoint if you want centralized validation,
abuse controls and server-side integration logic.

See \[\[08 - Integrations/EmailJS Integration\]\].
