<script setup lang="ts">
import { profileCard } from "@/mocks/about";
const { isResponsiveResolution } = useWindowsResize();
const textAlign = computed(() =>
  isResponsiveResolution.value ? "center" : "left"
);
</script>

<template>
  <section class="contact-info">
    <UiTheTitle
      :text-align="textAlign"
      color="var(--c-primary)"
      :shadow="false"
      :uppercase="true"
      :bolder="true"
      >Contact</UiTheTitle
    >
    <p v-for="description in profileCard.description" :key="description.id">
      {{ description.text }}
    </p>
  </section>
</template>

<style lang="scss" scoped>
.contact-info {
  @include flex(column, flex-start, space-between, $gap: 1.5rem);
  margin: var(--s-margin-blocks) 0;
  padding: 0 var(--s-padding-lateral);
  @include responsive {
    @include flex(column, center, space-between, $gap: 1rem);
    text-align: center;
    margin: var(--s-margin-blocks-mobile) 0;
    padding: 0 var(--s-padding-lateral-mobile);
  }
}
</style>
