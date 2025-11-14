import type { SEO } from "@/interfaces/common";

export function usePageSeo(seo: SEO) {
  if (!seo) return;

  useSeoMeta({
    title: seo.metaTitle,
    description: seo.metaDescription,
    ogTitle: seo.ogTitle,
    ogDescription: seo.ogDescription,
    ogImage: seo.ogImage,
    ogImageAlt: seo.ogImageAlt,
    author: seo.author,
    publisher: seo.publisher,
    robots: `${seo.noIndex ? "noindex" : "index"}, ${seo.noFollow ? "nofollow" : "follow"}`,
  });
  useHead({
    link: [
      ...(seo.canonicalUrl
        ? [{ rel: "canonical", href: seo.canonicalUrl }]
        : []),
    ],
  });
}
