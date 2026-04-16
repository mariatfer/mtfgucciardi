import type { Image, Icon, SEO, TextItem } from "@/interfaces/common";

export interface ProjectCard {
  id: number;
  title: string;
  image: Image;
  description: TextItem[];
  button: {
    text: string;
    link: string;
  };
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
