<script setup lang="ts">
import { profileCard } from "@/mocks/about";
import skillsImg from "@/assets/img/skills.svg";
const { isResponsiveResolution } = useWindowsResize();

const textAlign = computed(() =>
  isResponsiveResolution.value ? "center" : "left"
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
      width="100%"
      download="Fernandez_Maria_Teresa_CV"
      ><icon :name="profileCard.button.icon" />{{
        profileCard.button.text
      }}</UiMainButton
    >
  </section>
</template>

<style lang="scss" scoped>
.profile-card {
  @include flex(column, initial, space-between, $gap: 1.5rem);
  margin: var(--s-margin-blocks) 0;
  @include responsive {
    margin: var(--s-margin-blocks-mobile) 0;
    text-align: center;
  }

  &__content {
    @include flex(column, flex-start, space-between, $gap: 1rem);
  }
}
</style>
