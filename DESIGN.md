<!-- SEED: re-run /impeccable document once there's real code to capture the actual tokens, components, and sidecar. -->
---
name: Ace Gabriel Pasiliao - Portfolio
description: Clean, light, content-first portfolio for a backend-strong full-stack software engineer.
colors:
  bg: "#ffffff"
  surface: "#f7f8f8"
  ink: "#2b2f31"
  muted: "#5c6469"
  accent: "#1f6f7a"
  accent-deep: "#185860"
  border: "#e6e8e9"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 600
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  mono:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontWeight: 400
---

# Design System: Ace Gabriel Pasiliao - Portfolio

## 1. Overview

**Creative North Star: "The Engineer's Workbench"**

A calm, white, content-first surface that reads like the workspace of an engineer who values clean architecture: deliberate, legible, nothing decorative for its own sake. The site is itself a work sample, so every choice favors precision and restraint over flourish. Warmth and personality come through generous spacing, confident typography, smooth motion, and a single trustworthy accent, never through loud color or theming. The reviewer should feel "competent, easy to work with" within seconds.

This system explicitly rejects the **generic dev-template portfolio** (dark mode, gradient blobs, neon, "Hi I'm X" hero), **over-animated / gimmicky** motion (cursor trails, parallax circus), **corporate / sterile SaaS** blandness, and **cluttered maximalism**. It is **light theme only**. Dark mode is out of scope by preference. References in spirit: the content-first craft of Brittany Chiang, Josh Comeau, and Lee Robinson, with the surface precision of Linear / Vercel.

**Key Characteristics:**
- Pure-white surface, near-black ink, one deep-teal accent used sparingly (~8%).
- Single well-tuned sans (Geist) carrying the whole hierarchy through weight + scale.
- Responsive motion: smooth scroll, hover feedback, gentle on-enter reveals. No choreography.
- WCAG AA baseline; reduced-motion honored everywhere.

## 2. Colors

A near-neutral light palette anchored by a single deep, engineered teal. Color is punctuation, not paint.

### Primary
- **Deep Teal** (`#1f6f7a` / `oklch(0.48 0.10 200)`): The one brand accent. Filled CTAs (white text), active nav, focus rings, hover states, small accent rules. Calm and trustworthy without the dev-cliché navy.
- **Teal Deep** (`#185860` / `oklch(0.43 0.11 205)`): Link text and accent text on white, where the lighter teal would fall short of 4.5:1. Hover/pressed state for primary fills.

### Neutral
- **Ink** (`#2b2f31` / `oklch(0.30 0.006 220)`): Body and heading text on white. Near-black with a whisper of cool to sit with the teal. Targets ≥7:1 on white.
- **Muted** (`#5c6469` / `oklch(0.50 0.008 220)`): Secondary text, metadata, captions. Holds ≥4.5:1 on white. Never lighter (no washed-out grey body text).
- **Surface** (`#f7f8f8` / `oklch(0.985 0.001 220)`): Section bands, cards, code blocks. A barely-there step off pure white for quiet layering.
- **Border** (`#e6e8e9` / `oklch(0.93 0.002 220)`): Hairline dividers, card outlines, input strokes. 1px only.
- **Background** (`#ffffff` / `oklch(1 0 0)`): The dominant surface. Pure white, no hidden warmth.

### Named Rules
**The One Accent Rule.** Deep teal appears on ≤10% of any screen. Its scarcity is what makes it read as confident rather than decorative. No second brand color.
**The Pure-White Rule.** The body background is literal `#ffffff`. Warmth/coolness lives in the accent and type, never tinted into the surface.

## 3. Typography

**Display Font:** Geist (with `ui-sans-serif, system-ui, sans-serif`)
**Body Font:** Geist (same family, lighter weights)
**Label/Mono Font:** Geist Mono, reserved for stack tags, metadata, metrics, and inline code (a quiet "engineer" signal)

**Character:** One modern, neutral grotesque doing all the work. Hierarchy is built from weight contrast (400 body vs 600 headings) and a clear scale, not from competing typefaces. Mono appears only as a deliberate technical accent.

### Hierarchy
- **Display** (600, `clamp(2.5rem, 6vw, 4rem)`, lh 1.05, tracking -0.02em): Hero name / page titles. `text-wrap: balance`. Ceiling stays well under 6rem.
- **Headline** (600, `clamp(1.5rem, 3vw, 2rem)`, lh 1.15): Section headings.
- **Title** (500, `1.125rem`, lh 1.3): Project titles, card headings.
- **Body** (400, `1rem-1.0625rem`, lh 1.6): Prose. Capped at 65-75ch. `text-wrap: pretty` on long copy.
- **Label / Mono** (400-500, `0.8125rem`, tracking 0.01em): Stack tags, metrics, metadata. Sentence or natural case. No all-caps sentences.

### Named Rules
**The One Family Rule.** Geist (+ Geist Mono for technical accents) is the entire system. No third typeface. Contrast comes from weight and scale, not new fonts.
**No Eyebrow Rule.** No tiny tracked all-caps kicker above every section. Hierarchy is carried by the heading itself.

## 4. Elevation

Flat by default. Depth comes from tonal layering (white ↔ `surface`) and hairline borders, not drop shadows. Motion and a single soft shadow handle interactive lift only.

### Shadow Vocabulary
- **Lift** (`box-shadow: 0 1px 2px rgba(20,30,35,0.04), 0 8px 24px rgba(20,30,35,0.06)`): Appears only on hover/active for interactive cards and the resume CTA. Never at rest.

### Named Rules
**The Flat-At-Rest Rule.** Surfaces are flat until the user touches them. Shadow is a response to state (hover, focus), never ambient decoration.

## 5. Components

*(Seed: no components built yet. These are the intended primitives synthesized from the tokens; the next scan-mode `document` run will capture the real implementations.)*

### Buttons
- **Shape:** Gently rounded (8px radius), comfortable hit area (h ~44px).
- **Primary:** Deep-teal fill, white text, `padding: 12px 20px`. Verb + object labels ("View work", "Download resume").
- **Hover / Focus:** Darken to Teal Deep + `Lift` shadow + ~1px rise. Visible focus ring (2px teal, offset).
- **Secondary / Ghost:** Transparent with 1px border (`border`), ink text; border → ink on hover.

### Cards / Containers
- **Corner Style:** 12px radius.
- **Background:** White, or `surface` for quiet grouping.
- **Shadow Strategy:** Flat at rest; `Lift` on hover for linked project cards.
- **Border:** 1px `border` hairline.
- **Internal Padding:** 20-28px.

### Inputs / Fields
- **Style:** White fill, 1px `border`, 8px radius.
- **Focus:** Border → teal + 2px teal focus ring. Placeholder text meets 4.5:1 (uses `muted`, not light grey).

### Navigation
- **Style:** Sticky top bar, white, 1px bottom hairline on scroll. Logo/name left, routes (Work · About · Resume) right.
- **States:** Active route in ink/teal; hover underline or teal. Mobile: compact menu, full keyboard access.

## 6. Do's and Don'ts

### Do:
- **Do** keep the body background literal `#ffffff` and let deep teal + Geist carry the personality.
- **Do** hold all body/secondary text at ≥4.5:1 (ink `#2b2f31`, muted `#5c6469`); large/heading text ≥3:1.
- **Do** use white text on the teal fill (saturated mid-tone → Helmholtz-Kohlrausch); use Teal Deep for teal text on white.
- **Do** keep motion responsive: smooth scroll, hover feedback, gentle on-enter reveals that enhance already-visible content. Honor `prefers-reduced-motion` with a crossfade/instant fallback.
- **Do** use Geist Mono only for technical accents (tags, metrics, code).
- **Do** lead with shipped proof (Attendify v2's real numbers) over adjectives.

### Don't:
- **Don't** ship the **generic dev-template portfolio**: dark mode, gradient blobs, neon, "Hi I'm X" hero.
- **Don't** add **dark mode**. Light theme only, by preference.
- **Don't** go **over-animated / gimmicky**: no cursor trails, no parallax circus, no motion for its own sake.
- **Don't** read **corporate / sterile SaaS** or drift into **cluttered maximalism**. Restraint and whitespace are the point.
- **Don't** use a tiny tracked all-caps eyebrow above every section, gradient text, side-stripe borders, or glassmorphism.
- **Don't** tint the white surface "to feel warm", and never let the kawaii handle become a cute/playful visual identity.
