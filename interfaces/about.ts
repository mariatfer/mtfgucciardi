export interface ProfileCard {
  title: string;
  description: Array<{ id: string; text: string }>;
  button: {
    text: string;
    icon: string;
  };
}

export interface SkillsSection {
  title: string;
  image: string;
  skills: Array<{ id: string; text: string; icon: string }>;
}
