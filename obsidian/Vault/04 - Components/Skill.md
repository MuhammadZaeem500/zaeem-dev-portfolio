# Skill

**File:** `src/components/Skill.tsx`\
**Export:** `SkillsSection`\
**Anchor:** `#skills`

## Categories

### Frontend

React.js, Next.js, MUI, TypeScript, Tailwind CSS, Redux, HTML, CSS.

### Backend

Node.js, Express, Nestjs.

### Databases

MongoDB, PostgreSQL, MySQL.

## Rendering

Skills are local data mapped into three responsive cards. Each
technology is displayed as a pill.

## Animation

A parent Framer Motion variant staggers child animations.

## UI observation

The bottom previous/next arrow controls are currently decorative `div`
elements and do not change skill content. Either implement carousel
behavior or remove them to avoid suggesting functionality that does not
exist.

## Naming

Consider renaming the file to `Skills.tsx` because the exported
component represents a collection.
