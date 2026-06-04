export interface Image {
  url?: string;
  alt: string;
}

export interface Icon {
  id: number;
  name: string;
  href?: string;
  title?: string;
}

export interface TextItem {
  id: number;
  text: string;
}

export interface MainButton {
  link?: string;
  padding?: string;
  to?: string;
  width?: number | string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  secondary?: boolean;
}

export interface SEO {
  metaTitle: string;
  metaDescription: string;
  noIndex: boolean;
  noFollow: boolean;
  ogTitle: string;
  ogDescription: string;
  author: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogUrl?: string;
  publisher?: string;
  canonicalUrl?: string;
}

export interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
}

export interface Button {
  id?: number;
  text: string;
  icon?: string;
  file?: string;
  link?: string;
  secondary?: boolean;
}
