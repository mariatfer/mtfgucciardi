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
      text: "I'm a Frontend Developer based in Madrid with a passion for creating intuitive and visually engaging digital experiences. My work focuses on transforming ideas into clean, responsive, and accessible user interfaces that make an impact. From design systems to performance optimization, I enjoy paying attention to every detail that shapes how people interact with technology.",
    },
    {
      id: 2,
      text: "Driven by curiosity and a commitment to continuous learning, I love exploring new tools and frameworks to stay at the forefront of frontend development. Whether collaborating with teams or working independently, I value clear communication, thoughtful design, and building products that are both beautiful and effective.",
    },
  ],
  button: { text: "Download CV", icon: ICONS.download },
};

export const skillsSection: SkillsSection = {
  title: "Skills",
  image: {
    url: skillsImg as string,
    alt: "Skills Illustration",
  },
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
      date: "2021 - 2023",
      title: "Academic Foundation",
      description:
        "I completed high school with a focus on technology, where I discovered my passion for development and programming.",
      icon: "i-lucide-rocket",
    },
    {
      id: 2,
      date: "2023 - 2025",
      title: "Web Development (FP DAW)",
      description:
        "I completed a vocational program in Web Application Development, gaining solid knowledge in programming, databases, and web design.",
      icon: "i-lucide-palette",
    },
    {
      id: 3,
      date: "Mar 21, 2025 - Jun 9, 2025",
      title: "Internship",
      description:
        "I spent 3 months at Alebat Education, contributing to real-world projects and strengthening my skills in a professional environment.",
      icon: "i-lucide-code",
    },
    {
      id: 4,
      date: "Today",
      title: "Personal Projects",
      description:
        "I'm currently working on personal projects to continue learning, explore new technologies, and build a strong portfolio.",
      icon: "i-lucide-check-circle",
    },
  ],
};
