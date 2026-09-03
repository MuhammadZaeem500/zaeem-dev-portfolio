# TypeScript Models

## `Project`

``` ts
interface Project {
  id: number;
  title: string;
  image: string;
  details?: string;
  description?: string;
}
```

Used by `ProjectsSection` state. Recommended future model: make
`description` required, add `tech: string[]`, and change `details` from
string (`"true"`) to boolean.

## `Experience`

``` ts
interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  technologies: string[];
}
```

Used directly to type the Experience data array.

## `ProjectDetailsProps`

``` ts
interface ProjectDetailsProps {
  projectId: number;
}
```

Used by ProjectDetails.

## `global.d.ts`

`declare module "*.css";` provides a global declaration for CSS imports.
