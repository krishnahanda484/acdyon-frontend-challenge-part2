# AcdyOn Technologies — Frontend Challenge

## Part 2: Premium Homepage

Candidate submission for the **AcdyOn Technologies Frontend Challenge — Part 2: The Premium Home Page**.

This project presents a responsive homepage concept for AcdyOn, positioned as an outcome-driven learning ecosystem focused on practitioner-led learning, real-world practice, and building practical capabilities.

> **Important:** This is a candidate redesign concept, not an official AcdyOn production website.

---

## Overview

The goal of this redesign was to create a homepage that communicates AcdyOn's value within the first few seconds while demonstrating the product rather than relying only on marketing claims.

The experience is built around the idea:

**Learn with context. Leave with capability.**

The page combines an editorial visual system with an interactive learning-journey preview to show how a visitor could move from orientation and learning toward practical application and continued growth.

---

## What Is Included

- Premium, editorial-style homepage built with **React, TypeScript, and CSS**
- Responsive layouts designed for mobile, tablet, and large desktop viewports
- Warm cream, deep teal, coral, and lime visual system
- Clear hero section with a focused value proposition and primary call to action
- Interactive **Orient → Learn → Apply → Grow** learning journey
- Illustrative product/workspace preview demonstrating the learning experience
- Capability-focused sections covering:
  - Practical capability
  - Strategic thinking
  - AI and technology fluency
  - Continuous growth
- Internship-focused call-to-action section
- Responsive navigation
- Keyboard-visible focus states
- `prefers-reduced-motion` support
- Honest product copy without fabricated social proof
- Official AcdyOn logo asset at:
  `artifacts/acdyon-homepage/public/acdyon-logo.webp`

---

## Design Approach

The homepage follows an editorial product-marketing approach rather than a conventional SaaS template.

The visual language uses:

- Strong typographic hierarchy
- Large editorial headlines
- Restrained color accents
- Generous whitespace
- Thin borders and structured grids
- Subtle motion and interaction
- Product UI previews instead of generic stock imagery

The intention is to make the page feel like a finished product experience rather than a collection of independently designed sections.

---

## Product Demonstration

The homepage includes an interactive learning-journey preview with four phases:

1. **Orient** — understand the context and identify what matters
2. **Learn** — build a useful mental model with practitioner guidance
3. **Apply** — turn concepts into practical work
4. **Grow** — reflect, iterate, and carry the capability forward

The preview is intentionally illustrative and clearly presented as a concept. It does not claim to represent a live AcdyOn internal product, course catalogue, learner data, or production dashboard.

---

## Honesty & Content

This submission intentionally avoids fabricated:

- Testimonials
- Customer logos
- User counts
- Ratings
- Awards
- Partnerships
- Learner outcomes
- Performance metrics

Where the page references AcdyOn's positioning or internship information, the content is based on the supplied challenge/reference material.

The product preview is an illustrative React/CSS interaction rather than a fabricated screenshot of an existing production system.

---

## Technology

- **React**
- **TypeScript**
- **Vite**
- **CSS**
- **pnpm**

The homepage is implemented as a frontend-only experience for the scope of this challenge.

No backend, database, authentication system, or external API is required to run the homepage.

---

## Project Structure

```text
.
├── artifacts/
│   └── acdyon-homepage/
│       ├── public/
│       │   └── acdyon-logo.webp
│       ├── src/
│       │   ├── App.tsx
│       │   └── index.css
│       ├── DECISIONS.md
│       └── ...
├── attached_assets/
├── lib/
├── scripts/
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── tsconfig.json
└── README.md
