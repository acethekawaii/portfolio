<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes. APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project structure

Multi-page portfolio. Keep it flat and obvious. No speculative folders.

```
app/
  _components/           # shared route-local sections, layout chrome, content-coupled widgets
  work/
    page.tsx             # all projects
    attendify/
      page.tsx           # flagship case study
  about/
    page.tsx             # person, art, story
  experience/
    page.tsx             # work history, certs, education, awards
  layout.tsx             # SEO metadata, fonts, smooth scroll, header/footer
  page.tsx               # home: 30-second pitch
  not-found.tsx
  globals.css            # design tokens + utilities
components/ui/           # generic, app-agnostic primitives (icons, link-button)
```

Where things go:
- New **route page** or **route-owned copy** -> the route folder that renders it.
- New **page section** or **content-coupled widget** shared by routes -> `app/_components/`. Import siblings relatively (`./x`).
- New **generic primitive** with zero app coupling and reusable across routes -> `components/ui/`.
- Any **copy, links, projects, skills, experience** is hardcoded in the component or route that renders it. No central content file. Static site; duplicating an email/link across 2-3 components is fine (grep finds them).
- Import across folders with the `@/` alias (root). Default to Server Components; add `"use client"` only on the leaf that needs interactivity.
