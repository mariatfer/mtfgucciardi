<script setup lang="ts">
import type { TimelineItem } from "~/interfaces/locales/about";

defineProps<{
  items: TimelineItem[];
}>();
</script>

<template>
  <UiScrollReveal>
    <div class="timeline">
      <UiScrollReveal v-for="item in items" :key="item.id">
        <div class="timeline__item">
          <div class="timeline__icon">
            <i :class="item.icon" />
          </div>
          <div class="timeline__content">
            <p class="timeline__date">{{ item.date }}</p>
            <h3 class="timeline__title">{{ item.title }}</h3>
            <p class="timeline__description">{{ item.description }}</p>
          </div>
        </div>
      </UiScrollReveal>
    </div>
  </UiScrollReveal>
</template>

<style lang="scss" scoped>
.timeline {
  @include flex(row, flex-start, $gap: 2rem);
  padding: 1rem 0 0 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: -0.1875rem;
    height: 0.125rem;
    background-color: var(--c-light-graphite);
  }
  @include responsive {
    @include flex(column, flex-start, $gap: 2rem);
    padding: 0 0 0 1rem;
    &::before {
      top: 0;
      bottom: 0;
      left: -0.1875rem;
      height: unset;
      width: 0.125rem;
    }
  }

  &__item {
    @include flex(row, flex-start);
    position: relative;
    box-shadow: 0 .4375rem 1rem #00000062;
    padding: 1rem;
    border-radius: 0.5rem;

    &::before {
      content: "";
      position: absolute;
      top: -1.6rem;
      left: 50%;
      transform: translateX(-50%);
      width: 1rem;
      height: 1rem;
      background-color: var(--c-primary);
      border-radius: 50%;
    }
    @include responsive {
      max-width: 27.5rem;
      &::before {
        left: -1.6rem;
        top: 50%;
        transform: translatey(-50%);
      }
    }
  }

  &__icon {
    font-size: 1.5rem;
    color: var(--c-primary);
    margin-top: 0.2rem;
  }

  &__content {
    flex: 1;
  }

  &__date {
    font-size: 0.85rem;
    color: var(--c-light-graphite);
    margin-bottom: 0.25rem;
  }

  &__title {
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  &__description {
    font-size: 0.95rem;
    color: var(--c-light-graphite);
  }
}
</style>
