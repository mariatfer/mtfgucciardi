import type { Home } from "@/interfaces/home";
import characterImg from "@/assets/img/character.svg";

export const home: Home = {
  title: "Hi. I'm María",
  description:
    "I'm a Full Stack Developer, crafting dynamic and efficient web applications, optimizing both front-end and back-end experiences.",
  image: {
    url: characterImg as string,
    alt: "Character Illustration",
  },
};
