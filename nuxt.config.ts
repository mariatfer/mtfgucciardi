import i18nConfig from "./config/i18n";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  runtimeConfig: {
    RESEND_API_KEY: process.env.RESEND_API_KEY || "",
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
  ],
  ssr: false,
  app: {
    head: {
      script: [
        ...(process.env.NODE_ENV === "production"
          ? [{ src: "/_vercel/insights/script.js", defer: true }]
          : []),
      ],
    },
  },
  css: [
    "@/assets/styles/fonts.css",
    "@/assets/styles/vueTransitions.css",
    "@/assets/styles/variables.css",
    "@/assets/styles/reset.scss",
    "@/assets/styles/main.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "assets/styles/mixin.scss" as *;',
        },
      },
    },
    optimizeDeps: {
      include: [
        "@vue/devtools-core",
        "@vue/devtools-kit",
        "gsap",
        "gsap/ScrollTrigger",
        "gsap/SplitText",
      ],
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
