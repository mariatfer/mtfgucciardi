import type { FormData } from "@/interfaces/forms";
import type { SEO, TextItem } from "@/interfaces/common";

export interface InfoContact {
  title: string;
  description: TextItem[];
  email: {
    icon: string;
    text: string;
  };
}

export interface FormField {
  id: string;
  component: string;
  vModel: keyof FormData;
  label: string;
  placeholder: string;
  ariaLabel: string;
  twoColumns: string | boolean;
}

export interface ContactForm {
  title: string;
  fields: FormField[];
  button: string;
}

export interface Contact {
  infoContact: InfoContact;
  contactForm: ContactForm;
  seo: SEO;
}
