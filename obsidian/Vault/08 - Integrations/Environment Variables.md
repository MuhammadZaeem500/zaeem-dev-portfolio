# Environment Variables

## Client path used by Contact

``` env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

## Server API route expects

``` env
EMAILJS_SERVICE_ID=
EMAILJS_TEMPLATE_ID=
EMAILJS_PUBLIC_KEY=
```

## Rules

-   Do not commit `.env.local`.
-   `NEXT_PUBLIC_*` values are bundled for browser use and are not
    secret.
-   Configure the required variables in the deployment platform.
-   Keep `.env.example` with names only, never real credentials.

Because the uploaded archive does not include root
environment/configuration files, their current presence cannot be
verified.
