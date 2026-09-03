# Data Flow

## Homepage

The root page contains no business state. It composes independent
sections.

## Project flow

`ProjectsSection` owns the `projects` array and `selectedProject` state.

``` text
projects[] → render project cards
click View Project → setSelectedProject(project)
selectedProject → modal
selectedProject.id → ProjectDetails
close/background click → setSelectedProject(null)
```

`ProjectDetails` uses the numeric project id to select implementation
and technology-stack content from an internal lookup object.

## Contact flow

Current active UI path:

``` text
form inputs → formRef → EmailJS sendForm() → success/error state → UI message
```

There is also a server route:

``` text
POST /api/send-email → parse JSON → emailjs.send() → JSON response
```

The Contact component does not currently call that API route.

## Experience and skills

These are local constant arrays mapped directly to UI cards/timeline
entries.

See \[\[08 - Integrations/EmailJS Integration\]\] and \[\[06 - Data and
Types/TypeScript Models\]\].
