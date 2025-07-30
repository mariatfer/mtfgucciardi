<script setup lang="ts">
import type { TimelineSection } from "~/interfaces/locales/about";
defineProps<TimelineSection>();
</script>

<template>
  <section class="timeline-section">
    <UiTheTitle
      color="var(--c-primary)"
      :shadow="false"
      :uppercase="true"
      :bolder="true"
      >{{ $props.title }}</UiTheTitle
    >
    <UiTheTimeline :items="$props.items" />
  </section>
</template>

<style lang="scss" scoped>
.timeline-section {
  @include flex(column, flex-start, space-between, $gap: 3rem);
  align-self: start;
  padding: var(--s-margin) 0;
  @include responsive {
    @include flex(column, center, center, $gap: 1.5rem);
    padding: var(--s-margin-mobile) 0;
  }
}
</style>
