import type { Home } from "@/interfaces/home";
import characterImg from "@/assets/img/character.svg";

export const home: Home = {
  title: "Hi. I'm María",
  description:
    "I'm a Frontend Developer passionate about crafting performant, accessible, and visually engaging web interfaces with modern technologies.",
  image: {
    url: characterImg as string,
    alt: "Character Illustration",
  },
};
