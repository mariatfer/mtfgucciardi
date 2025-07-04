<script setup lang="ts">
import { skillsSection } from "@/mocks/about";
</script>

<template>
  <section class="skills">
    <UiTheTitle color="var(--c-primary)" :shadow="false">{{
      skillsSection.title
    }}</UiTheTitle>
    <img :src="skillsSection.image" alt="" class="skills__image" />
    <article class="skills-grid">
      <section
        v-for="skill in skillsSection.skills"
        :key="skill.id"
        class="skills-grid__card"
      >
        <icon :name="skill.icon" class="skills-grid__icon" />
        <h4 class="skills-grid__title">{{ skill.text }}</h4>
      </section>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  margin: var(--s-margin-blocks) 0;
  @include flex(column, center, space-between);
  width: 100%;
  max-width: 35%;

  @include responsive {
    margin: var(--s-margin-blocks-mobile) 0;
    max-width: unset;
  }

  &__image {
    width: 100%;
    max-width: 19.4375rem;
    height: auto;
  }
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 100%;
  
  @include responsive {
    grid-template-columns: repeat(4, 1fr);
  }
  @include responsive(51.875em) {
    grid-template-columns: repeat(2, 1fr);
  }

  &__card {
    @include flex(column, flex-start);
    gap: 0.5rem;
    padding: 1rem;
    background-color: var(--c-aquamarine);
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
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
