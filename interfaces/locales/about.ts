import type { Image, SEO } from "@/interfaces/common";

export interface ProfileCard {
  title: string;
  description: Array<{ id: number; text: string }>;
  button: {
    text: string;
    icon: string;
    file: string;
  };
}

export interface SkillsSection {
  title: string;
  image: Image;
  skills: Array<{ id: number; text: string; icon: string }>;
}

export interface TimelineItem {
  id: number;
  date: string;
  title: string;
  description: string;
  icon: string;
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
