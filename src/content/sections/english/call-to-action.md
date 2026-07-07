---
# Default content for `src/layouts/components/sections/CallToAction.astro`; page frontmatter can override these values.
enable: true # Control the visibility of this section across all pages where it is used
title: "Let’s work together"
description: |
  Tell us what you want to improve, and we will help shape the right technical plan, team, and delivery path.

button:
  # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
  enable: true
  label: "Let’s Start a Project"
  url: "/#contact"
  hoverEffect: "magnetic-text-flip" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
  variant: "fill" # Optional: fill | fill-white | outline | text | circle
  # rel: "" # Optional
  # target: "" # Optional
  # class: "" # Optional
  # icon: # Optional
  #   enable: true
  #   name: "ArrowUpRight"
  #   position: "right" # left | right

options:
  appearance: "dark" # Options: "dark" | "light" | "accent"
  centeredContent: true # true | false - dark appearance is centered to match the default CTA design
---
