import i18nConfig from "./config/i18n";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  runtimeConfig: {
    RESEND_API_KEY: process.env.RESEND_API_KEY || "",
  },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
  ],
  ssr: false,
  css: [
    "@/assets/styles/fonts.css",
    "@/assets/styles/vueTransitions.css",
    "@/assets/styles/variables.css",
    "@/assets/styles/reset.scss",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "assets/styles/mixin.scss" as *;',
        },
      },
    },
  },
  plugins: ["@/plugins/init-language.client.ts"],
  i18n: {
    ...i18nConfig,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      fallbackLocale: "es",
    },
  },
});
