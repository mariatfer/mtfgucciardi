<script setup lang="ts">
import type { Footer } from "@/interfaces/locales/footer";
const { data: footerLocales } = useLocales<Footer>("footer");
console.log(footerLocales);
</script>
<template>
  <span v-if="footerLocales" class="copyright">
    {{ footerLocales.copyright }}
  </span>
</template>

<style lang="scss" scoped>
.copyright {
  width: 100%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  text-align: center;
  padding: 1rem 0;
  font-size: var(--s-font-small);
  color: var(--c-light-graphite);
}
</style>
