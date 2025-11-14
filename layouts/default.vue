<script lang="ts" setup>
const overlay = ref<HTMLElement | null>(null);
provide("overlayRef", overlay);
const languageStore = useLanguageStore();
const { language } = storeToRefs(languageStore);
useHead({
  htmlAttrs: {
    lang: language,
  },
});
</script>

<template>
  <div
    class="layout"
    :class="$route.name === 'index' ? 'bg-index' : 'bg-default'"
  >
    <UiNavbarMainNavbar />
    <slot />
    <div ref="overlay" class="fade-overlay" />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  padding: 5rem 0 0 0;
}
.bg-index {
  background-color: var(--c-aquamarine);
}
.bg-default {
  background-color: var(--c-light-aquamarine);
}
.fade-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  pointer-events: none;
  z-index: 9999;
}
</style>
