---
# Default content for `src/layouts/components/ServicesSingle.astro`.
# The service sidebar list is generated from the services collection.
# `contact` feeds `src/layouts/components/widgets/ServicesSingleCta.astro`.
contact:
  icon: "Headset"
  title: "Don't hesitate to contact us"
  description: "At our IT solution company, we are committed to exceptional service and reliable support."
  button:
    # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options
    enable: true
    label: "Get in Touch"
    url: "/#contact"
    hoverEffect: "magnetic-text-flip"
    variant: "fill"
    rel: "" # Optional
    target: "" # Optional
    class: "rounded-md px-6 py-3.5 text-sm leading-6 font-semibold normal-case" # Optional
    icon: # Optional
      enable: false
      name: "ArrowUpRight"
      position: "right"
---
