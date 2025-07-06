<script setup lang="ts">
import { profileCard } from "@/mocks/about";
import skillsImg from "@/assets/img/skills.svg";
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
      >{{ profileCard.title }}</UiTheTitle
    >
    <article class="profile-card__content">
      <p v-for="description in profileCard.description" :key="description.id">
        {{ description.text }}
      </p>
    </article>
    <UiMainButton
      :link="skillsImg"
      :width="width"
      download="Fernandez_Maria_Teresa_CV"
      >{{ profileCard.button.text }}<icon :name="profileCard.button.icon"
    /></UiMainButton>
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
