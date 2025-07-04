<script setup lang="ts">
import { navbarLinks } from "@/mocks/navbar";
import { ICONS } from "@/constants/icons";
const { showModal, useOpenModal, useCloseModal } = useModal();
</script>

<template>
  <div class="navbar">
    <UiNavbarDesktop />
    <UiNavbarHamburger :active="showModal" @toggle="useOpenModal" />
    <ul class="navbar__social">
      <li>
        <NuxtLink
          target="_blank"
          href="https://www.linkedin.com/in/maria-teresa-fernandez-gucciardi"
          class="navbar__item"
          ><icon :name="ICONS.linkedin" class="navbar__icon"
        /></NuxtLink>
      </li>
      <li>
        <NuxtLink
          target="_blank"
          href="https://github.com/mariatfer"
          class="navbar__item"
          ><icon :name="ICONS.github" class="navbar__icon"
        /></NuxtLink>
      </li>
    </ul>
  </div>
  <UiTheModal
    :show-modal="showModal"
    background-color="var(--c-graphite)"
    @close="useCloseModal"
  >
    <ul class="hamburguer-links">
      <li v-for="link in navbarLinks" :key="link.id">
        <NuxtLink
          :to="link.link"
          class="hamburguer-links__item"
          @click="useCloseModal"
          >{{ link.text }}</NuxtLink
        >
      </li>
    </ul>
  </UiTheModal>
</template>

<style lang="scss" scoped>
.navbar {
  @include flex(row, center, space-between);
  padding: 1.5rem 3rem;
  background-color: var(--c-aquamarine);
  max-height: 5rem;
  &__social {
    @include flex(row, center, space-between, $gap: 1.5rem);
    @include responsive {
      gap: 0.7rem;
    }
  }

  &__icon {
    transition:
      color 0.3s ease,
      transform 0.3s ease-in-out;
    width: 2rem;
    height: 2rem;
    &:hover {
      color: var(--c-primary);
      transform: scale(1.05);
    }
  }
}

.hamburguer-links {
  @include flex(column, center, space-between, $gap: 2rem);

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
  }
}
</style>
