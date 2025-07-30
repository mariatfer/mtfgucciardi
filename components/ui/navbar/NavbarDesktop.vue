<script setup lang="ts">
import { useRoute } from "vue-router";
import type { NavbarLink } from "@/interfaces/locales/navbar";
defineProps<{
  links: NavbarLink[];
}>();

const route = useRoute();

const isActive = (path: string) => {
  return route.path === path;
};
</script>

<template>
  <ul class="navbar-links">
    <li v-for="link in links" :key="link.id">
      <NuxtLink
        :to="link.link"
        :class="[
          'navbar-links__item',
          { 'navbar-links__item--active': isActive(link.link) },
        ]"
      >
        {{ link.text }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.navbar-links {
  @include flex(row, center, space-between, $gap: 3rem);
  @include responsive {
    display: none;
  }

  &__item {
    font-size: var(--s-font-h4);
    font-weight: 400;
    text-transform: uppercase;
    transition:
      color 0.3s ease,
      transform 0.3s ease-in-out;
    @include flex(row, center);
    @include responsive {
      font-size: var(--s-font-h4-mobile);
    }
    &:hover {
      color: var(--c-primary);
      transform: scale(1.05);
    }
    &--active {
      color: var(--c-primary);
    }
  }
}
</style>
