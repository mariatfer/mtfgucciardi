import type { Image, Icon, SEO, TextItem, Button } from "@/interfaces/common";

export interface ProjectCard {
  id: number;
  title: string;
  image: Image;
  description: TextItem[];
  buttons: Button[];
  technologies: {
    title: string;
    icons: Icon[];
  };
}

export interface Projects {
  title: string;
  paragraph: string;
  projectCards: ProjectCard[];
  seo: SEO;
}
