<script setup lang="ts">
import type { SkillsSection } from "@/interfaces/locales/about";
defineProps<SkillsSection>();
</script>

<template>
  <section class="skills">
    <UiTheTitle
      color="var(--c-primary)"
      :shadow="false"
      :uppercase="true"
      :bolder="true"
      >{{ $props.title }}</UiTheTitle
    >
    <div class="skills__container">
      <img
        :src="$props.image.url"
        :alt="$props.image.alt"
        class="skills__image"
      />
      <article class="skills__grid">
        <UiAnimationsScrollReveal
          v-for="group in $props.skills"
          :key="group.id"
          class="skills__category"
        >
          <h3 class="skills__category-title">{{ group.title }}</h3>
          <UiAnimationsScrollReveal v-for="item in group.items" :key="item.id">
            <section class="skills__card">
              <icon :name="resolveIcon(item.name)" class="skills__icon" />
              <p class="skills__card-title">{{ item.title }}</p>
            </section>
          </UiAnimationsScrollReveal>
        </UiAnimationsScrollReveal>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  @include flex(row, center, space-around, $gap: 1rem);
  width: 100%;

  @include responsive(90rem) {
    @include flex(column, center, space-between, $gap: 1rem);
  }

  &__container {
    @include flex(column, center, space-between, $gap: 2rem);
  }

  &__image {
    width: 100%;
    max-width: 19.4375rem;
    height: auto;
    filter: drop-shadow(0 0.9375rem 0.5rem #00000062);
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    max-width: 100%;
    @include responsive(70rem) {
      grid-template-columns: repeat(2, 1fr);
    }

    @include responsive(40rem) {
      grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    }
  }

  &__category {
    display: grid;
    gap: 1rem;
    align-content: start;
  }

  &__category-title {
    font-family: var(--f-font-title);
    font-weight: bold;
    font-size: var(--s-font-h4);
    text-align: center;
  }

  &__card {
    @include flex();
    gap: 0.5rem;
    padding: 0.7rem;
    background-color: var(--c-aquamarine);
    border-radius: 1.25rem;
    box-shadow: 0 0.3125rem 0.5rem #0000007c;
    width: 100%;
    transition: var(--t-transition);
    user-select: none;

    &:hover {
      transform: translateY(-0.25rem);
      box-shadow: 0 0.625rem 1rem #0000007c;
      .skills__card-title,
      .skills__icon {
        color: var(--c-primary);
      }
    }
  }
  &__card-title {
    transition: var(--t-transition);
  }
  &__icon {
    width: 2rem;
    height: 2rem;
    transition: var(--t-transition);
  }
}
</style>
