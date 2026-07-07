---
enable: true # Control the visibility of this section across all pages where it is used
title: "Un projet en tête ?"
description: "Parfait ! Nous sommes ravis d'avoir de vos nouvelles, lançons-nous ensemble"
officeHours: "Heures d'ouverture : lun. - sam. : 8h00 - 22h00" # Optional; remove or set empty to hide this row.

# Check config.toml file for form action related settings
# this is also used in the footer of the personal portfolio homepage
formTitle: "Remplissez le formulaire de contact"
formDescription: "Dites-nous ce dont vous avez besoin et notre équipe vous répondra avec des étapes concrètes."

form:
  emailSubject: "Nouvelle soumission de formulaire depuis votre site web" # Customized email subject (applicable when anyone submit form, form submission may receive by email depend on provider)
  submitButton:
    # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
    enable: true
    label: "Envoyer le message"
    class: "w-full justify-center rounded-md"
    hoverEffect: "magnetic-text-flip" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
    # variant: "" # Optional: fill | outline | text | circle
    # rel: "" # Optional
    # target: "" # Optional

  # This note will show at the end of form
  # note: |
  #   Your data is safe with us. We respect your privacy and never share your information. <br /> Read our [Privacy Policy](/privacy-policy/).
  inputs:
    - label: "Votre nom"
      name: "Name"
      placeholder: "Votre nom"
      required: true
      halfWidth: true
    - label: "Adresse e-mail"
      name: "Email"
      placeholder: "Adresse e-mail"
      type: "email"
      required: true
      halfWidth: true
    - label: "Budget estimé"
      name: "Budget"
      placeholder: "Budget estimé"
      type: "number"
      halfWidth: true
    - label: "Date de début souhaitée"
      name: "Start Date"
      placeholder: "Date de début souhaitée"
      type: "date"
      halfWidth: true
    - label: "Service qui vous intéresse"
      name: "Service"
      placeholder: "Sélectionnez un service"
      required: true
      dropdown:
        type: "search"
        search:
          placeholder: "Rechercher un service"
        items:
          - label: "Développement web et mobile"
            value: "Développement web et mobile"
          - label: "Infrastructure cloud"
            value: "Infrastructure cloud"
          - label: "Audit de cybersécurité"
            value: "Audit de cybersécurité"
          - label: "Suivi et analyse des données"
            value: "Suivi et analyse des données"
          - label: "Automatisation des flux de travail"
            value: "Automatisation des flux de travail"
    - label: "Nouveau projet"
      name: "Project Type"
      value: "New project"
      type: "radio"
      group: "Project Type"
      groupLabel: "Type de projet"
      checked: true
      halfWidth: true
    - label: "Améliorer un système existant"
      name: "Project Type"
      value: "Improve existing system"
      type: "radio"
      group: "Project Type"
      halfWidth: true
    - label: "E-mail"
      name: "Preferred Contact"
      value: "Email"
      type: "checkbox"
      group: "Preferred Contact"
      groupLabel: "Mode de contact préféré"
      checked: true
      halfWidth: true
    - label: "Téléphone"
      name: "Preferred Contact"
      value: "Phone"
      type: "checkbox"
      group: "Preferred Contact"
      halfWidth: true
    - label: "Rédigez votre message"
      name: "Message"
      placeholder: "Rédigez votre message"
      tag: "textarea"
      rows: "5"
      required: true
    - label: "J'accepte d'être contacté au sujet de cette demande."
      name: "Consent"
      value: true
      type: "checkbox"
      required: true
    - note: success
      parentClass: "hidden text-sm message success"
      content: "Merci. Nous avons bien reçu votre demande et vous répondrons avec des étapes concrètes."
    - note: deprecated
      parentClass: "hidden text-sm message error"
      content: "Une erreur s'est produite. Veuillez réessayer ou nous contacter directement."
---
