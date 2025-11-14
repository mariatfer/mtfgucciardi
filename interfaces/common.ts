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
