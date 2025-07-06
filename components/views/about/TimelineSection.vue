<script setup lang="ts">
import { timelineSection } from "@/mocks/about";
</script>

<template>
  <section class="timeline-section">
    <UiTheTitle
      color="var(--c-primary)"
      :shadow="false"
      :uppercase="true"
      :bolder="true"
      >{{ timelineSection.title }}</UiTheTitle
    >
    <UiTheTimeline :items="timelineSection.items" />
  </section>
</template>

<style lang="scss" scoped>
.timeline-section {
  @include flex(column, flex-start, space-between, $gap: 3rem);
  align-self: start;
  padding: var(--s-margin-blocks) 0;
  @include responsive {
    @include flex(column, center, center, $gap: 1.5rem);
    padding: var(--s-margin-blocks-mobile);
  }
}
</style>
