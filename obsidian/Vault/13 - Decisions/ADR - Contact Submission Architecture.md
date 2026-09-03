---
status: proposed
tags:
- adr
- email
- architecture
---

# ADR - Contact Submission Architecture

## Context

The UI calls EmailJS directly, while a Next.js POST route also exists.

## Proposed direction

Prefer one authoritative flow. For a more production-oriented portfolio,
submit to a server route so validation, rate limiting and provider logic
can be centralized.

## If server-mediated

`Contact → POST /api/send-email → validate → provider → response → UI feedback`

## If client-direct

Remove the unused API route and document that EmailJS public identifiers
are intentionally client-visible.

## Status

Decision required.
