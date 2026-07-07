---
enable: true
imagePosition: "left"

images:
  large: "/images/skill/skill-1.png"
  small: "/images/skill/skill-2.jpg"

title: |
  We provide perfect IT solutions & technology
subtitle: |
  Our team helps startups move from idea to launch with reliable systems, clear priorities, and practical technical support.
description: |
  We plan, design, build, and optimize digital products that are easy for teams to manage and ready for future growth.

# EXTRATYPE OPTIONS: "skills" | "list-x" | "list-y" | "stats" | "none"
extraType: "list-x"

# SHARED BUTTON CONFIGURATION (Applies to all section buttons)
buttons:
  - enable: false # Boolean: true | false
    label: "Explore Our Services"
    url: "/services/"
    tag: "a" # Enum: a | button
    variant: "fill" # Enum: fill | fill-white | outline | text | circle
    hoverEffect: "magnetic-text-flip" # Enum: text-flip | creative-fill | magnetic | magnetic-text-flip
    icon: # Object
      enable: true
      name: "ArrowUpRight" # String: Lucide Icon Name - https://lucide.de v/icons/?search=
      position: "right" # Enum: left | right (Note: text variant is always right)
    rel: "noopener"
    target: "_blank" # String: _blank | _self
    class: "" # String: Additional button Tailwind classes

listItems:
  - title: "Provide Skills<br />Services"
    icon: "Settings"
  - title: "Urgent Support<br />For Clients"
    icon: "Headphones"
---
