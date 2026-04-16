import type { Icon, Image, SEO, TextItem } from "@/interfaces/common";
import type { TimelineItem } from "@nuxt/ui";

export interface ProfileCard {
  title: string;
  description: TextItem[];
  button: {
    text: string;
    icon: string;
    file: string;
  };
}

export interface SkillCategory {
  id: number
  title: string
  items: Icon[]
}

export interface SkillsSection {
  title: string
  image: Image
  skills: SkillCategory[]
}
export interface TimelineSection {
  title: string;
  items: TimelineItem[];
}

export interface AboutMe {
  profileCard: ProfileCard;
  skillsSection: SkillsSection;
  timelineSection: TimelineSection;
  seo: SEO;
}
