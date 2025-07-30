import type { Image } from "@/interfaces/common";

export interface ImageWithKey extends Image {
  key?: string;
}

export interface Home {
  title: string;
  description: string;
  image: ImageWithKey;
}
