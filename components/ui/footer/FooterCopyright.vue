<script setup lang="ts">
import type { Footer } from "@/interfaces/locales/footer";
const { data: footerLocales } = useLocales<Footer>("footer");

const route = useRoute();
const isHome = computed(() => String(route.name || "").startsWith("index"));
</script>
<template>
  <span v-if="footerLocales" class="copyright"
    ><div v-if="!isHome" class="copyright__line" />
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
  padding: 1rem var(--s-padding);
  font-size: var(--s-font-small);
  color: var(--c-light-graphite);
  @include responsive {
    padding: 1rem var(--s-padding-mobile);
  }

  &__line {
    width: 100%;
    height: 0.0625rem;
    background-color: var(--c-light-graphite);
    margin: 0 0 1rem 0;
  }
}
</style>
