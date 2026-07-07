---
enable: true # Control the visibility of this section across all pages where it is used
title: "Our Team Behind The Studio"

button:
  # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
  enable: true
  label: "View all members"
  url: "/team/"
  hoverEffect: "magnetic-text-flip" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
  # variant: "fill" # Optional: fill | fill-white | outline | text | circle; omitted to follow the section appearance
  # rel: "" # Optional
  # target: "" # Optional
  # class: "" # Optional
  icon: # Optional
    enable: true
    name: "ArrowUpRight"
    position: "right" # left | right

options:
  layout: "grid" # grid | carousel
  limit: 4 # false / number
  marquee: # Used when layout is "carousel"
    elementWidthAuto: false
    elementWidth: "20rem"
    elementWidthResponsive: "18rem"
    pauseOnHover: true
    reverse: "" # reverse / ""
    duration: "40s"
---
