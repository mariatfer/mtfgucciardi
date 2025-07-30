import type { Image, Icon } from "@/interfaces/common";

export interface ProjectCard {
  id: number;
  title: string;
  image: Image;
  description: Array<{ id: number; text: string }>;
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
  projectCards: ProjectCard[];
}
