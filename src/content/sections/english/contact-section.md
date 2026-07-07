---
enable: true # Control the visibility of this section across all pages where it is used
title: "Have Any Project on Your Mind?"
description: "Great! We're excited to hear from you and let's start something"
officeHours: "Office Hours: Mon - Sat: 8:00 AM - 10:00 PM" # Optional; remove or set empty to hide this row.

# Check config.toml file for form action related settings
# this is also used in the footer of the personal portfolio homepage
formTitle: "Fill The Contact Form"
formDescription: "Tell us what you need and our team will reply with useful next steps."

form:
  emailSubject: "New form submission from your website" # Customized email subject (applicable when anyone submit form, form submission may receive by email depend on provider)
  submitButton:
    # Refer to the `sharedButton` schema in `src/sections.schema.ts` for all available configuration options (e.g., enable, label, url, hoverEffect, variant, icon, tag, rel, class, target, etc.)
    enable: true
    label: "Send Message"
    class: "w-full justify-center rounded-md"
    hoverEffect: "magnetic-text-flip" # Optional: text-flip | creative-fill | magnetic | magnetic-text-flip
    # variant: "" # Optional: fill | outline | text | circle
    # rel: "" # Optional
    # target: "" # Optional

  # This note will show at the end of form
  # note: |
  #   Your data is safe with us. We respect your privacy and never share your information. <br /> Read our [Privacy Policy](/privacy-policy/).
  inputs:
    - label: "Your name"
      name: "Name"
      placeholder: "Your name"
      required: true
      halfWidth: true
    - label: "Email address"
      name: "Email"
      placeholder: "Email address"
      type: "email"
      required: true
      halfWidth: true
    - label: "Estimated budget"
      name: "Budget"
      placeholder: "Estimated budget"
      type: "number"
      halfWidth: true
    - label: "Preferred start date"
      name: "Start Date"
      placeholder: "Preferred start date"
      type: "date"
      halfWidth: true
    - label: "Service interest"
      name: "Service"
      placeholder: "Select a service"
      required: true
      dropdown:
        type: "search"
        search:
          placeholder: "Search service"
        items:
          - label: "Web & Mobile App Development"
            value: "Web & Mobile App Development"
          - label: "Cloud Infrastructure"
            value: "Cloud Infrastructure"
          - label: "Cybersecurity Review"
            value: "Cybersecurity Review"
          - label: "Data Tracking & Analytics"
            value: "Data Tracking & Analytics"
          - label: "Automation Workflow"
            value: "Automation Workflow"
    - label: "New project"
      name: "Project Type"
      value: "New project"
      type: "radio"
      group: "Project Type"
      groupLabel: "Project type"
      checked: true
      halfWidth: true
    - label: "Improve existing system"
      name: "Project Type"
      value: "Improve existing system"
      type: "radio"
      group: "Project Type"
      halfWidth: true
    - label: "Email"
      name: "Preferred Contact"
      value: "Email"
      type: "checkbox"
      group: "Preferred Contact"
      groupLabel: "Preferred contact method"
      checked: true
      halfWidth: true
    - label: "Phone"
      name: "Preferred Contact"
      value: "Phone"
      type: "checkbox"
      group: "Preferred Contact"
      halfWidth: true
    - label: "Write your message"
      name: "Message"
      placeholder: "Write your message"
      tag: "textarea"
      rows: "5"
      required: true
    - label: "I agree to be contacted about this request."
      name: "Consent"
      value: true
      type: "checkbox"
      required: true
    - note: success
      parentClass: "hidden text-sm message success"
      content: "Thank you. We received your request and will reply with useful next steps."
    - note: deprecated
      parentClass: "hidden text-sm message error"
      content: "Something went wrong. Please try again or contact us directly."
---
