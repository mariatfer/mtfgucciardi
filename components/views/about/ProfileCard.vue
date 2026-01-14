<script setup lang="ts">
import type { ProfileCard } from "~/interfaces/locales/about";
defineProps<ProfileCard>();

const { isResponsiveResolution } = useWindowsResize();

const textAlign = computed(() =>
  isResponsiveResolution.value ? "center" : "left"
);
const width = computed(() =>
  isResponsiveResolution.value ? "80%" : "fit-content"
);
</script>

<template>
  <section class="profile-card">
    <UiTheTitle
      :text-align="textAlign"
      color="var(--c-primary)"
      :shadow="false"
      :uppercase="true"
      :bolder="true"
      >{{ $props.title }}</UiTheTitle
    >
    <article class="profile-card__content">
      <p v-for="description in $props.description" :key="description.id">
        {{ description.text }}
      </p>
    </article>
    <UiButtonMainButton
      :link="$props.button.file"
      :width="width"
      download="Maria_Teresa_Fernandez_CV_2026"
      >{{ $props.button.text }}<icon :name="resolveIcon($props.button.icon)"
    /></UiButtonMainButton>
  </section>
</template>

<style lang="scss" scoped>
.profile-card {
  @include flex(column, flex-start, space-between, $gap: 1.5rem);
  @include responsive {
    @include flex(column, center, space-between, $gap: 1rem);
    text-align: center;
  }

  &__content {
    @include flex(column, flex-start, space-between, $gap: 1rem);
  }
}
</style>
