<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project structure

Single-page portfolio. Keep it flat and obvious — no speculative folders.

```
app/
  _components/      # route-local composition: page sections + layout chrome + content-coupled widgets
  layout.tsx        # SEO metadata, fonts, smooth scroll, header/footer
  page.tsx          # home: composes the sections
  not-found.tsx
  globals.css       # design tokens + utilities
components/ui/      # generic, app-agnostic primitives (icons, link-button)
lib/content.ts      # single source of truth for all site copy/data
```

Where things go:
- New **page section** or **content-coupled widget** (reads `lib/content`, hits an API, uses a specific asset) → `app/_components/`. Import siblings relatively (`./x`).
- New **generic primitive** (zero app coupling, reusable across routes) → `components/ui/`.
- Any **copy, links, projects, skills, experience** → edit `lib/content.ts` only; never hardcode in components.
- Import across folders with the `@/` alias (root). Default to Server Components; add `"use client"` only on the leaf that needs interactivity.
