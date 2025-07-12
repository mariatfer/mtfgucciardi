import type { InfoContact, ContactForm } from "@/interfaces/contact";
import UiFormInputField from "@/components/ui/form/InputField.vue";
import UiFormTextareaField from "@/components/ui/form/TextareaField.vue";
import { ICONS } from "@/constants/icons";

export const infoContact: InfoContact = {
  title: "Contact",
  description: [
    {
      id: 1,
      text: "Thanks for visiting my portfolio! Whether you're here out of curiosity, looking for someone to collaborate with, or just exploring, I appreciate you taking the time to learn about my work and journey as a web developer.",
    },
    {
      id: 2,
      text: "I'm currently focused on building personal frontend projects and improving my skills in technologies like HTML, CSS, JavaScript, and modern frameworks. I enjoy turning ideas into responsive, accessible, and visually appealing web experiences.",
    },
    {
      id: 3,
      text: "I'm actively looking for opportunities to continue learning—whether that's through internships, junior roles, mentorships, or any project that allows me to grow as a developer. I'm also open to collaborating with others or contributing to meaningful initiatives.",
    },
    {
      id: 4,
      text: "If you'd like to connect, feel free to reach out through the form below or by email. I'll do my best to reply as soon as I can. I'm always happy to chat, exchange ideas, or explore new opportunities!",
    },
  ],
  email: {
    icon: ICONS.gmail,
    text: "mt.fgucciardi@gmail.com",
  },
};

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
  button: "Send",
};
