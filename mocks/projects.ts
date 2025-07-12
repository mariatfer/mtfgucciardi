// import { ICONS } from "@/constants/icons";
import type { Projects, ProjectCard } from "@/interfaces/projects";
import AFRImg from "@/assets/img/afrimpresiones.png";
import VibeLiveImg from "@/assets/img/vibe-live.png";
import { ICONS } from "@/constants/icons";

export const cards: ProjectCard[] = [
  {
    id: 1,
    title: "AFR Design & Printing",
    image: {
      url: AFRImg,
      alt: "Mockup of an online store for personalized products",
    },
    description: [
      {
        id: 1,
        text: "AFR Impresiones is an e-commerce platform designed to provide an efficient experience for both customers and administrators.",
      },
      {
        id: 2,
        text: "The app allows users to register and manage their profile with updatable data such as name, email, phone, and address, ensuring a secure and personalized session.",
      },
      {
        id: 3,
        text: "The order process, although it doesn't include a payment gateway or a form to complete the purchase, allows orders to be stored in the database, which users can consult directly from their profile. This enables an organized and efficient tracking of completed purchases.",
      },
    ],
    technologies: {
      title: "Technologies used",
      icons: [
        {
          id: 1,
          name: ICONS.html,
        },
        {
          id: 2,
          name: ICONS.css,
        },
        {
          id: 3,
          name: ICONS.javascript,
        },
        {
          id: 4,
          name: ICONS.php,
        },
        {
          id: 5,
          name: ICONS.mysql,
        },
      ],
    },
    button: {
      text: "View project",
      link: "https://afrimpresiones.com/",
    },
  },
  {
    id: 2,
    title: "Vibe-Live",
    image: {
      url: VibeLiveImg,
      alt: "Mockup of a Twitch clone",
    },
    description: [
      {
        id: 1,
        text: "Vibe Live is a real-time streaming platform inspired by Twitch, created with Nuxt.js, Vue.js, and TypeScript. It uses the official Twitch API to authenticate users, display channel and stream data.",
      },
      {
        id: 2,
        text: "Users can enjoy a complete streaming experience with live broadcast viewing and real-time chat.",
      },
      {
        id: 3,
        text: "The project is deployed on Vercel and is optimized for both desktop and mobile devices.",
      },
    ],
    technologies: {
      title: "Technologies used",
      icons: [
        {
          id: 1,
          name: ICONS.nuxt,
        },
        {
          id: 2,
          name: ICONS.vue,
        },
        {
          id: 3,
          name: ICONS.typescript,
        },
        {
          id: 4,
          name: ICONS.sass,
        },
      ],
    },
    button: {
      text: "View project",
      link: "https://vibe-live.vercel.app/",
    },
  },
];

export const projects: Projects = {
  title: "Projects",
  projectCards: cards,
};
