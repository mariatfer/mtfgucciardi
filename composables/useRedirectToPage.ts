import pages from "@/config/i18n";

export function redirectToPage(page: string) {
  const { getLanguage } = useLanguageStore();
  const router = useRouter();

  if (pages.pages) {
    const urls = pages.pages[page] ?? {};
    for (const [key, value] of Object.entries(urls)) {
      if (getLanguage === key) {
        const baseRoute = key === "es" ? value : `/${key}${value}`;
        router.push(baseRoute);
        break;
      }
    }
  }
}
