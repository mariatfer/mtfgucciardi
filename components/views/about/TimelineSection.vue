<script setup lang="ts">
import type { TimelineSection } from "@/interfaces/locales/about";
defineProps<TimelineSection>();
const { isResponsiveResolution } = useWindowsResize();
const TIMELINE_CLASS = ".timeline-item";
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
    <UiScrollReveal :stagger="true" :child-selector="TIMELINE_CLASS">
      <UTimeline
        :orientation="isResponsiveResolution ? 'vertical' : 'horizontal'"
        :size="isResponsiveResolution ? 'lg' : 'xl'"
        :items="$props.items"
        :default-value="4"
        :ui="{ item: 'timeline-item' }"
      />
    </UiScrollReveal>
  </section>
</template>

<style lang="scss" scoped>
.timeline-section {
  @include flex(column, flex-start, space-between, $gap: 3rem);
  align-self: start;
  padding: var(--s-margin) 0;
  @include responsive {
    @include flex(column, $gap: 1.5rem);
    padding: var(--s-margin-mobile) 0;
  }
}
</style>
