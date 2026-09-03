# Page Composition

`src/app/page.tsx` imports and renders the homepage sections in this
order:

``` text
HomePage
└── div.overflow-x-hidden
    ├── Navbar
    ├── HeroSection
    ├── About
    ├── SkillsSection
    ├── ProjectsSection
    ├── ExperienceTimeline
    ├── ContactSection
    └── Footer
```

## Section anchors

-   `#home` --- HeroSection
-   `#aboutMe` --- About
-   `#skills` --- Skill
-   `#projects` --- Project
-   `#experience` --- Experience
-   `#contact` --- Contact
-   `#footer` --- Footer

The navbar uses these anchors. Note that Footer currently links to
`#aboutme` while the section id is `#aboutMe`; normalize the casing to
avoid inconsistent behavior.

See \[\[04 - Components/Navbar\]\] and \[\[12 - Maintenance/Known Issues
and Technical Debt\]\].
