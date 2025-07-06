import { ICONS } from "@/constants/icons";
import type {
  ProfileCard,
  SkillsSection,
  TimelineSection,
} from "@/interfaces/about";
import skillsImg from "@/assets/img/skills.svg";

export const profileCard: ProfileCard = {
  title: "About Me",
  description: [
    {
      id: 1,
      text: "I'm María, a Full Stack Developer with a passion for crafting dynamic and efficient web applications.",
    },
    {
      id: 2,
      text: "I specialize in both front-end and back-end development, ensuring a seamless user experience. I thrive on solving complex problems and continuously learning new technologies. I believe in the power of collaboration and am always eager to contribute to innovative projects.",
    },
  ],
  button: { text: "Download CV", icon: ICONS.download },
};

export const skillsSection: SkillsSection = {
  title: "Skills",
  image: skillsImg as string,
  skills: [
    { id: 1, text: "JavaScript", icon: ICONS.javascript },
    { id: 2, text: "TypeScript", icon: ICONS.typescript },
    { id: 3, text: "Vue.js", icon: ICONS.vue },
    { id: 4, text: "Nuxt.js", icon: ICONS.nuxt },
    { id: 5, text: "HTML5", icon: ICONS.html },
    { id: 6, text: "CSS3", icon: ICONS.css },
    { id: 7, text: "SASS", icon: ICONS.sass },
    { id: 8, text: "Git", icon: ICONS.git },
  ],
};

export const timelineSection: TimelineSection = {
  title: "Timeline",
  items: [
    {
      id: 1,
      date: "Mar 15, 2025",
      title: "Project Kickoff",
      description: "Kicked off the project with team alignment.",
      icon: "i-lucide-rocket",
    },
    {
      id: 2,
      date: "Mar 22 2025",
      title: "Design Phase",
      description: "User research and design workshops.",
      icon: "i-lucide-palette",
    },
    {
      id: 3,
      date: "Mar 29 2025",
      title: "Development Sprint",
      description: "Frontend and backend development.",
      icon: "i-lucide-code",
    },
    {
      id: 4,
      date: "Apr 5 2025",
      title: "Testing & Deployment",
      description: "QA testing and performance optimization.",
      icon: "i-lucide-check-circle",
    },
  ],
};
