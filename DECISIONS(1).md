# DECISIONS.md

## AcdyOn Technologies --- Frontend Challenge, Part 2

### 1. Why I chose this approach

I chose **Part 2 --- The Premium Home Page** because it gave me the
strongest opportunity to demonstrate how I think about product
experience, visual hierarchy, interaction design, and frontend
implementation as one system.

The challenge asks for a homepage that creates a strong first
impression, communicates a clear value proposition, shows the product
rather than only describing it, and feels like something a user would
genuinely want to engage with. I therefore did not approach this as a
collection of marketing sections. I treated the homepage as a product
surface whose job is to move a visitor from curiosity to understanding
and, ultimately, to action.

My central design idea is:

**Learn with context. Leave with capability.**

I used this idea to structure the experience around a simple
progression:

**Orient → Learn → Apply → Grow**

Instead of presenting AcdyOn as another platform with a long list of
courses, the page communicates a learning journey built around context,
practitioner guidance, practical work, and continued growth.

Visually, I chose an editorial system rather than a conventional SaaS
template. Large typography establishes hierarchy, generous whitespace
gives the content room to breathe, and the cream, deep teal, coral, and
lime palette creates a distinct identity without relying on excessive
decoration. I used restrained borders, structured grids, and small
motion cues to make the interface feel considered rather than
over-designed.

The most important product decision was to **show the product**. The
interactive learning-journey preview demonstrates what the experience
could feel like instead of simply claiming that AcdyOn provides a
structured learning experience. The preview is intentionally implemented
as a React/CSS interaction and is clearly treated as a concept. I did
not present it as a screenshot of a real production application.

I also deliberately avoided fabricated testimonials, user counts,
ratings, customer logos, awards, partnerships, or learner outcomes. The
challenge explicitly emphasizes honesty, so I considered it more
valuable to build credibility through clarity and product demonstration
than through invented social proof.

------------------------------------------------------------------------

### 2. Why this implementation instead of the obvious alternative

The obvious alternative would have been to build a conventional landing
page using a hero, feature cards, testimonials, statistics, logos, and a
generic dashboard screenshot.

I rejected that approach because it would optimize for the appearance of
a marketing page rather than demonstrating product thinking.

Instead, I built the page around a coherent narrative:

1.  **The hero establishes the problem and value proposition.**
2.  **The "Why AcdyOn" section explains the underlying point of view.**
3.  **The product experience section demonstrates how the learning
    journey works.**
4.  **The capability section explains what the learner leaves with.**
5.  **The final CTA turns that understanding into a next action.**

This allowed the visual design, content hierarchy, and interaction model
to reinforce the same idea instead of functioning as independent
sections.

I kept the implementation frontend-only because that is sufficient for
the selected challenge track. The email interaction demonstrates the
intended UI state without pretending to be connected to a CRM or
backend. This keeps the scope honest and allows the submission to focus
on the areas the challenge actually evaluates: UI craft, taste,
interaction quality, responsiveness, and ownership.

------------------------------------------------------------------------

### 3. Responsive and accessibility decisions

I treated **390px mobile and 1440px desktop** as explicit design targets
rather than relying on the desktop layout simply collapsing at smaller
widths.

On mobile, the layout changes its composition rather than merely
shrinking:

-   Navigation adapts to the available width.
-   Large editorial typography scales down while retaining hierarchy.
-   Multi-column content becomes a readable vertical flow.
-   Product previews remain usable without horizontal scrolling.
-   Buttons and interactive controls retain practical touch targets.
-   Spacing is reduced selectively instead of compressing every element
    equally.

I also included visible keyboard focus states and support for
`prefers-reduced-motion`. Motion is intentionally limited to
interactions that communicate state or reinforce the experience rather
than adding animation purely for decoration.

------------------------------------------------------------------------

### 4. One trade-off I made under the time limit

The main trade-off was choosing a **focused, illustrative product
experience instead of implementing a real backend, authentication flow,
course catalogue, or persistent user state**.

A production learning platform would obviously require those systems,
but implementing them would have moved effort away from the actual
frontend challenge. I decided that a smaller but polished interaction
was a stronger signal than a larger system with shallow implementation.

With a real week, I would extend the concept in three directions:

-   Conduct usability testing on the homepage and learning-journey
    interaction.
-   Connect the interest/application flow to a real backend with
    validation and appropriate privacy handling.
-   Expand the learning journey into a deeper prototype with real
    content states, progress persistence, and more realistic
    practitioner feedback flows.

I would also measure performance and accessibility with
production-oriented tooling and test the experience across a wider range
of devices and browsers.

------------------------------------------------------------------------

### 5. AI usage and what I personally verified

I used AI tools as an implementation and iteration assistant during the
project. I used them for tasks such as exploring implementation
approaches, refining copy, debugging issues, and iterating on parts of
the frontend.

I did **not** treat generated output as automatically correct.

I personally reviewed and changed the resulting implementation,
including:

-   Page structure and information hierarchy
-   Visual direction and section composition
-   Typography scale and spacing
-   Color usage and contrast
-   Responsive behavior
-   Interactive learning-journey states
-   Navigation and CTA behavior
-   Reduced-motion behavior
-   Content honesty and removal of unsupported claims
-   Project documentation and submission structure

I also verified that the implementation remains explainable as a
React/TypeScript/CSS frontend rather than relying on an opaque generated
solution.

If asked about any implementation decision in the follow-up, I should be
able to explain not only **what** the code does, but **why** I chose
that approach and what I would change under different constraints.

------------------------------------------------------------------------

### 6. What I optimized for

My priority order for this submission was:

**Clarity → Product demonstration → Visual craft → Interaction quality →
Responsiveness → Technical simplicity**

I intentionally did not optimize for the number of sections, number of
animations, or amount of code.

The goal was to produce a homepage that feels deliberate: every major
visual element should either communicate the product, establish
hierarchy, demonstrate the experience, or help the visitor take the next
step.

The final result is therefore a **candidate redesign concept** rather
than a claim about AcdyOn's existing production product. Where the
supplied AcdyOn material provided factual positioning or internship
information, I kept the content grounded in that material. Where a
product interface did not exist to show, I used an explicitly
illustrative concept rather than fabricating evidence.

### Final principle

**I wanted the page to demonstrate the same quality of thinking that the
page is asking the user to believe AcdyOn teaches: understand the
context, make a deliberate decision, build something useful, and be able
to explain why it works.**
