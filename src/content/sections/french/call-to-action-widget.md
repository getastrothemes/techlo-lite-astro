---
# Default content for `src/layouts/components/ServicesSingle.astro`.
# The service sidebar list is generated from the services collection.
# `contact` feeds `src/layouts/components/widgets/ServicesSingleCta.astro`.
contact:
  icon: "Headset"
  title: "N'hésitez pas à nous contacter"
  description: "Dans notre entreprise de solutions informatiques, nous nous engageons à offrir un service exceptionnel et un support fiable."
  button:
    # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options
    enable: true
    label: "Entrer en contact"
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
