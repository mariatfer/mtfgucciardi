import type { SEO } from "../common";

type ParagraphPart =
  | string
  | {
      type: "email";
      value: string;
    };

export interface Paragraph {
  id: number;
  parts: ParagraphPart[];
}

export interface ThankYou {
  title: string;
  subtitle: string;
  paragraphs: Paragraph[];
  seo: SEO;
}
