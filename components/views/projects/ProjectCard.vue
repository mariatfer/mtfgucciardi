<script setup lang="ts">
import type { ProjectCard } from "@/interfaces/projects";

defineProps<{
  card: ProjectCard;
}>();
</script>

<template>
  <article class="project-card">
    <NuxtLink :to="card.button.link" target="_blank" class="container">
      <div class="tablet">
        <div class="tablet__screen">
          <img
            :src="card.image.url"
            width="1600"
            height="1000"
            :alt="card.image.alt"
            class="tablet__image"
          />
        </div>
        <div class="tablet__shadow"></div>
      </div>
    </NuxtLink>
    <h3 class="project-card__title">{{ card.title }}</h3>
    <p
      v-for="paragraph in card.description"
      :key="paragraph.id"
      class="project-card__description"
    >
      {{ paragraph.text }}
    </p>
    <h4 class="project-card__subtitle">{{ card.technologies.title }}</h4>
    <UiSlideInFromLeft class="project-card__technologies">
      <Icon
        v-for="icono in card.technologies.icons"
        :key="icono.id"
        :name="icono.name"
        class="project-card__icons"
      />
    </UiSlideInFromLeft>

    <UiMainButton :link="card.button.link">{{ card.button.text }}</UiMainButton>
  </article>
</template>

<style lang="scss">
.project-card {
  @include flex(column, flex-start, flex-start, $gap: 1rem);
  min-width: 100%;
  padding: 3rem;
  margin: 2rem 0;
  border-radius: 0.4375rem;
  @include background;
  box-shadow: 0 0 3rem #0000003a;

  @include responsive {
    padding: 2rem 1rem;
  }

  &__title {
    margin: 3rem 0 0 0;
    font-weight: bold;
  }

  &__description {
    text-shadow: 4px 3px 0.6rem rgba(0, 0, 0, 0.582);
  }

  &__subtitle {
    margin: 1rem 0 0 0;
    font-weight: bold;
  }

  &__technologies {
    @include flex($gap: 0.4rem);
    margin: 0 0 1rem 0;
  }

  &__icons {
    width: 2rem;
    height: 2rem;
    color: var(--c-primary);
  }
}

.container {
  align-self: center;
  cursor: pointer;
}

.tablet {
  position: relative;
  margin: auto;
  max-width: 40rem;
  @include responsive {
    max-width: 21rem;
  }

  &__screen {
    position: relative;
    z-index: 1;
    padding: 3%;
    border-radius: 2rem;
    background: #ecf1f7;
    background-image: linear-gradient(to bottom, #333, #111);
    box-shadow: 0 0.1rem 0 #cfcfcf;
    border: 2px solid #ccc;
    @include responsive {
      padding: 4%;
    }
  }

  &__image {
    border-radius: 10px;
    display: block;
    max-width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    background: #000;
    object-fit: fill;
  }

  &__shadow {
    position: absolute;
    right: -10%;
    bottom: -1rem;
    left: -10%;
    z-index: 0;
    height: 2rem;
    background: radial-gradient(ellipse closest-side, #000, transparent);
    opacity: 0.5;
  }
}
</style>
