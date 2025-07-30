import { useLanguageStore } from "@/stores/language";
import { storeToRefs } from "pinia";
import type { PAGES } from "@/constants/pages";
import type { COMMON_COMPONENTS } from "@/constants/commonComponents";

type PageType = (typeof PAGES)[number];
type CommonComponentType = (typeof COMMON_COMPONENTS)[number];

type TranslationsType = PageType | CommonComponentType;

const LOCALES_BASE_PATH = "locales";

/**
 * Loads localized data for a page or common component based on the current language from the store.
 *
 * @template T - The expected type of the JSON data.
 * @param translations - The name of the JSON file to load (without extension).
 * @returns An object containing the typed data.
 */
export function useLocales<T>(translations: TranslationsType) {
  const data = ref<T | null>(null);
  const { language } = storeToRefs(useLanguageStore());
  const localeCode = language.value;

  const loadLocale = async (lang: string) => {
    try {
      const localeModule = await import(
        `@/${LOCALES_BASE_PATH}/${lang}/${translations}.json`
      );
      data.value = localeModule.default as T;
    } catch {
      data.value = null;
    }
  };

  loadLocale(localeCode);

  watch(language, (newLang) => {
    loadLocale(newLang);
  });

  return { data };
}
