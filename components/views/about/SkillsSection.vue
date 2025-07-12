<script setup lang="ts">
import { skillsSection } from "@/mocks/about";
</script>

<template>
  <section class="skills">
    <UiTheTitle
      color="var(--c-primary)"
      :shadow="false"
      :uppercase="true"
      :bolder="true"
      >{{ skillsSection.title }}</UiTheTitle
    >
    <div class="skills__container">
      <img
        :src="skillsSection.image.url"
        :alt="skillsSection.image.alt"
        class="skills__image"
      />
      <article class="skills-grid">
        <UiScrollReveal v-for="skill in skillsSection.skills" :key="skill.id">
          <section class="skills-grid__card">
            <icon :name="skill.icon" class="skills-grid__icon" />
            <h4 class="skills-grid__title">{{ skill.text }}</h4>
          </section>
        </UiScrollReveal>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  @include flex(row, center, space-around, $gap: 1rem);
  width: 100%;

  @include responsive() {
    @include flex(column, center, space-between, $gap: 1rem);
  }

  &__container {
    @include flex(column, center, space-between, $gap: 1rem);
    max-width: 100%;
  }
  &__image {
    width: 100%;
    max-width: 19.4375rem;
    height: auto;
    filter: drop-shadow(0 15px 0.5rem #00000062);
  }
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  max-width: 100%;

  @include responsive() {
    grid-template-columns: repeat(2, 1fr);
  }

  @include responsive(25rem) {
    grid-template-columns: 1fr;
  }

  &__card {
    @include flex(column, flex-start);
    gap: 0.5rem;
    padding: 1rem;
    background-color: var(--c-ligth-aquamarine);
    border-radius: 0.5rem;
    box-shadow: 0 7px 0.5rem #00000062;
    width: 100%;
  }

  &__title {
    font-family: var(--f-font-regular);
    font-size: var(--s-font-h4);
    font-weight: 500;
    color: var(--c-primary);
  }

  &__icon {
    width: 2rem;
    height: 2rem;
    color: var(--c-secondary);
  }
}
</style>
