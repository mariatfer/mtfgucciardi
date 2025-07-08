import type { ContactForm } from "@/interfaces/contact";
import UiFormInputField from "@/components/ui/form/InputField.vue";
import UiFormTextareaField from "@/components/ui/form/TextareaField.vue";
export const contactForm: ContactForm = {
  title: "Write me",
  fields: [
    {
      id: "1",
      component: UiFormInputField,
      vModel: "name",
      label: "Name",
      placeholder: "Peter",
      ariaLabel: "Name",
      twoColumns: "contact-form__grid-item--two",
    },
    {
      id: "2",
      component: UiFormInputField,
      vModel: "lastName",
      label: "Last name",
      placeholder: "Miller",
      ariaLabel: "Last name",
      twoColumns: "contact-form__grid-item--three",
    },
    {
      id: "3",
      component: UiFormInputField,
      vModel: "email",
      label: "Email",
      placeholder: "you@email.com",
      ariaLabel: "Email",
      twoColumns: false,
    },
    {
      id: "4",
      component: UiFormTextareaField,
      vModel: "message",
      label: "Message",
      placeholder: "Write your message...",
      ariaLabel: "Message",
      twoColumns: false,
    },
  ],
};
