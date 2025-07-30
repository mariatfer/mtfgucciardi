import { LANGUAGE } from "@/constants/language";
import type { LanguageCode } from "@/types/language";
import { useLanguageStore, isValidLanguage } from "@/stores/language";

export default defineNuxtPlugin(() => {
  const languageStore = useLanguageStore();
  const stored = localStorage.getItem(LANGUAGE);
  if (stored && isValidLanguage(stored)) {
    languageStore.setLanguage(stored as LanguageCode);
  }
  languageStore.isReady = true;
});
