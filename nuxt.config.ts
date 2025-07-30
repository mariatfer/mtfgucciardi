// https://nuxt.com/docs/api/configuration/nuxt-config
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
  ],
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
});
