import { z } from "astro/zod";

export const sharedButton = z
  .object({
    enable: z.boolean().optional(),
    tag: z.enum(["a", "button"]).optional(),
    url: z.string().optional(),
    label: z.string(),
    class: z.string().optional(),
    rel: z.string().optional(),
    icon: z
      .object({
        enable: z.boolean(),
        name: z.string(),
        position: z.enum(["left", "right"]).optional(),
      })
      .optional(),
    target: z.string().optional(),
    hoverEffect: z
      .enum(["text-flip", "creative-fill", "magnetic", "magnetic-text-flip"])
      .optional(),
    variant: z
      .enum(["fill", "fill-white", "outline", "text", "circle"])
      .optional(),
  })
  .catchall(z.any());

export const sharedButtonTag = sharedButton.refine(
  (data) => data.tag !== "a" || !!data.url,
  {
    message: "`url` is required when `tag` is 'a'",
    path: ["url"],
  },
);

export const sharedContactItem = z.object({
  title: z.string(),
  icon: z.string(),
  description: z.string(),
  button: sharedButton.optional(),
});

export const ImagePositionEnum = z.enum(["left", "right"]);
export const AppearanceEnum = z.enum(["dark", "light"]);
export const button = sharedButton || sharedButtonTag;

export const sharedMarquee = z.object({
  elementWidth: z.string().optional(),
  elementWidthAuto: z.boolean().optional(),
  elementWidthResponsive: z.string().optional(),
  pauseOnHover: z.boolean().optional(),
  reverse: z.enum(["reverse", ""]).optional(),
  duration: z.string().optional(),
  fullWidth: z.boolean().optional(),
});

export const inputFieldSchema = z.object({
  label: z.string().optional(),
  placeholder: z.string().optional(),
  required: z.boolean().optional(),
  halfWidth: z.boolean().optional(),
  defaultValue: z.string().optional(),
  name: z.string().optional(),
  selected: z.boolean().optional(),
  value: z.boolean().optional(),
  checked: z.boolean().optional(),
  type: z
    .enum([
      "text",
      "email",
      "tel",
      "url",
      "number",
      "date",
      "radio",
      "checkbox",
    ])
    .optional(),
  id: z.string().optional(),
  tag: z.literal("textarea").optional(),
  rows: z.string().optional(),
  group: z.string().optional(),
  groupLabel: z.string().optional(),
  items: z
    .array(
      z.object({
        label: z.string(),
        name: z.string().optional(),
        id: z.string().optional(),
        value: z.string().optional(),
        required: z.boolean().optional(),
        groupLabel: z.string().optional(),
        group: z.string().optional(),
        type: z.enum(["radio", "checkbox"]).optional(),
        halfWidth: z.boolean().optional(),
        defaultValue: z.string().optional(),
        checked: z.boolean().optional(),
      }),
    )
    .optional(),
  dropdown: z
    .object({
      type: z.enum(["select", "search"]).optional(),
      search: z
        .object({
          placeholder: z.string().optional(),
        })
        .optional(),
      items: z.array(
        z.object({
          label: z.string(),
          selected: z.boolean().optional(),
          value: z.string(),
        }),
      ),
    })
    .optional(),
  content: z.string().optional(),
  note: z.enum(["info", "warning", "success", "deprecated", "hint"]).optional(),
  parentClass: z.string().optional(),
});

// ================================================================================
// SECTIONS SCHEMA
// ================================================================================

export const teamSectionSchema = z
  .object({
    enable: z.boolean().default(false), // Control visibility of this section
    title: z.string().optional(),
    button: button.optional(),
    limit: z.union([z.number(), z.literal(false)]).optional(), // Max number of members to show
    options: z
      .object({
        layout: z.enum(["grid", "carousel"]).default("grid"),
        limit: z.union([z.number(), z.literal(false)]).optional(),
        marquee: sharedMarquee.optional(),
      })
      .optional(),
  })
  .optional();

export const contactFormSchema = z.object({
  action: z.string().optional(),
  emailSubject: z.string().optional(),
  note: z.string().optional(),
  submitButton: sharedButton.optional(),
  inputs: z.array(inputFieldSchema),
});

export const servicesSectionSchema = z
  .object({
    enable: z.boolean().default(false).optional(),
    title: z.string().optional(),
    button: button.optional(),
    options: z
      .object({
        layout: z.enum(["grid", "carousel", "accordion"]),
        appearance: z.string().optional(),
        iconPlacement: z.enum(["top", "right"]).optional(),
        column: z.number().optional(),
        sectionVerticalSpace: z.boolean().optional().default(true),
        limit: z.union([z.number(), z.literal(false)]),
        marquee: sharedMarquee.optional(),
      })
      .partial()
      .optional(),
  })
  .optional();

export const contactSectionSchema = z
  .object({
    enable: z.boolean().default(false),
    title: z.string(),
    description: z.string(),
    officeHours: z.string().optional(),
    formTitle: z.string().optional(),
    formDescription: z.string().optional(),
    image: z.string().optional(),
    imagePosition: ImagePositionEnum,
    contactInformation: z.array(sharedContactItem),
    form: contactFormSchema,
  })
  .optional();

export const contactSectionTwoSchema = z
  .object({
    enable: z.boolean().default(false).optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    officeHours: z.string().optional(),
    info: z
      .array(
        z.object({
          title: z.string(),
          icon: z.string(),
          description: z.string(),
        }),
      )
      .optional(),
    form: contactFormSchema
      .partial()
      .extend({
        title: z.string().optional(),
        description: z.string().optional(),
        submitLabel: z.string().optional(),
      })
      .optional(),
  })
  .optional();

export const ctaSectionSchema = z
  .object({
    enable: z.boolean().default(false).optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    button: button.optional(),
    options: z
      .object({
        appearance: z.enum(["dark", "light", "accent"]),
        centeredContent: z.boolean(),
      })
      .partial()
      .optional(),
  })
  .optional();

export const bannerAgencySectionSchema = z
  .object({
    enable: z.boolean().default(false).optional(),
    subtitle: z.string().optional(),
    title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    mapImage: z.string().optional(),
    gradientBackgroundImage: z.string().optional(),
    buttons: z.array(sharedButton).optional(),
  })
  .optional();

export const testimonialSectionSchema = z
  .object({
    enable: z.boolean().default(false).optional(), // Control the visibility of this section
    title: z.string().optional(),
    image: z.string().optional(),
    imagePosition: ImagePositionEnum.optional(),
    options: z
      .object({
        background: z.boolean().optional(),
        layout: z.enum(["carousel", "grid"]).optional(),
        marquee: sharedMarquee.optional(),
      })
      .optional(),
    list: z
      .array(
        z.object({
          enable: z.boolean().default(false).optional(),
          content: z.string(),
          customer: z.object({
            name: z.string(),
            role: z.string(),
          }),
        }),
      )
      .optional(),
  })
  .optional();

export const workingProcessSectionSchema = z
  .object({
    enable: z.boolean().default(false).optional(),
    title: z.string().optional(),
    list: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          image: z.string(),
        }),
      )
      .optional(),
  })
  .optional();

export const animatedNumber = z.object({
  type: z.string().optional(),
  value: z.union([z.number(), z.string()]).optional(),
  prependValue: z.string().optional(),
  appendValue: z.string().optional(),
});

export const multipurposeSectionSchema = z
  .object({
    enable: z.boolean().default(true).optional(),
    imagePosition: z.enum(["left", "right"]).default("left"),
    images: z.object({
      large: z.string(),
      small: z.string(),
    }),
    title: z.string().optional(),
    subtitle: z.string().optional(), // The 20px text after title
    description: z.string().optional(),
    buttons: z.array(sharedButton).optional(),
    extraType: z
      .enum(["skills", "list-x", "list-y", "list-inline", "stats", "none"])
      .default("none"),
    skills: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(), // e.g., "86"
        }),
      )
      .optional(),
    listItems: z
      .array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
          icon: z.string().optional(),
        }),
      )
      .optional(),
    stats: z
      .array(
        z.object({
          value: z.string(),
          prependValue: z.string().optional(),
          appendValue: z.string().optional(),
          label: z.string(),
        }),
      )
      .optional(),
  })
  .optional();

export const sectionsSchema = {
  servicesSection: servicesSectionSchema,
  ctaSection: ctaSectionSchema,
  contactSection: contactSectionSchema,
  contactSectionTwo: contactSectionTwoSchema,
  teamSection: teamSectionSchema,
  testimonialSection: testimonialSectionSchema,
  bannerAgencySection: bannerAgencySectionSchema,
  workingProcessSection: workingProcessSectionSchema,
  multipurposeSection: multipurposeSectionSchema,
};
