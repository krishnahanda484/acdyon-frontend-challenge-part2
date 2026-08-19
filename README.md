# AcdyOn Technologies — Part 2 homepage concept

Candidate submission for the AcdyOn Technologies frontend challenge, Part 2: a premium homepage for a learning ecosystem.

The homepage lives in `artifacts/acdyon-homepage`. See that folder’s `README.md` and `DECISIONS.md` for the full concept note.

## What is included

- Editorial, product-first homepage built with React, TypeScript, and CSS
- Warm cream, deep teal, coral, and lime visual system
- Responsive layouts for mobile through large desktop viewports
- One meaningful interaction: the Orient / Learn / Apply / Grow journey selector
- Illustrative learning-workspace preview, clearly labelled as a concept
- Practical AI and technology learning copy grounded in the supplied brief
- Visible keyboard focus states and reduced-motion support
- Official AcdyOn logo asset in `artifacts/acdyon-homepage/public/acdyon-logo.webp`

This is a candidate redesign concept, not an official AcdyOn production site. It contains no fabricated testimonials, metrics, ratings, partnerships, awards, or learner outcomes.

## Run locally

Requires [pnpm](https://pnpm.io/) and Node.js 22+. From the repository root:

```bash
pnpm install
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/acdyon-homepage run dev
```

Then open http://localhost:5173/

`PORT` and `BASE_PATH` are required by the existing Vite config.

To create a production build:

```bash
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/acdyon-homepage run build
```

The homepage is a frontend-only concept. Its links are in-page anchors and its product preview uses illustrative content rather than a live course catalogue or backend.
