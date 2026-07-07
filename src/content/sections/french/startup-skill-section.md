---
enable: true
imagePosition: "left"

images:
  large: "/images/skill/skill-1.png"
  small: "/images/skill/skill-2.jpg"

title: |
  Nous proposons des solutions et technologies informatiques idéales
subtitle: |
  Notre équipe aide les startups à passer de l'idée au lancement grâce à des systèmes fiables, des priorités claires et un support technique concret.
description: |
  Nous planifions, concevons, développons et optimisons des produits numériques faciles à gérer pour les équipes et prêts pour leur croissance future.

# EXTRATYPE OPTIONS: "skills" | "list-x" | "list-y" | "stats" | "none"
extraType: "list-x"

# SHARED BUTTON CONFIGURATION (Applies to all section buttons)
buttons:
  - enable: false # Boolean: true | false
    label: "Découvrir nos services"
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
  - title: "Services de<br />compétences"
    icon: "Settings"
  - title: "Support urgent<br />pour les clients"
    icon: "Headphones"
---
