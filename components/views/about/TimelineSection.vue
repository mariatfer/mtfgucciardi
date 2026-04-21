<script setup lang="ts">
import type { TimelineSection } from "@/interfaces/locales/about";
defineProps<TimelineSection>();
const { isTabletResolution, isMobileResolution } = useWindowsResize();
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
    <UiAnimationsScrollReveal :stagger="true" :child-selector="TIMELINE_CLASS">
      <UTimeline
        :orientation="
          isTabletResolution || isMobileResolution ? 'vertical' : 'horizontal'
        "
        :size="isMobileResolution ? 'lg' : 'xl'"
        :items="$props.items"
        :default-value="4"
        :ui="{ item: 'timeline-item' }"
      />
    </UiAnimationsScrollReveal>
  </section>
</template>

<style lang="scss" scoped>
.timeline-section {
  @include flex(column, flex-start, space-between, $gap: 3rem);
  align-self: start;
  @include responsive {
    @include flex(column, $gap: 1.5rem);
  }
}
</style>
