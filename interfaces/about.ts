export interface ProfileCard {
  title: string;
  description: Array<{ id: number; text: string }>;
  button: {
    text: string;
    icon: string;
  };
}

export interface SkillsSection {
  title: string;
  image: string;
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
