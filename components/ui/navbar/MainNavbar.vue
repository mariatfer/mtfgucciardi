<script setup lang="ts">
import type { Navbar } from "@/interfaces/locales/navbar";

const { data } = useLocales<Navbar>("navbar");
const { showModal, useOpenModal, useCloseModal } = useModal();
</script>

<template>
  <div class="navbar">
    <UiNavbarDesktop v-if="data?.links" :links="data.links" />
    <UiNavbarHamburger :active="showModal" @toggle="useOpenModal" />
    <ul class="navbar__social">
      <UiButtonLanguageButton />
      <li v-for="icon in data?.icons" :key="icon.id">
        <NuxtLink
          target="_blank"
          :href="icon.href"
          class="navbar__item"
          :title="icon.title"
          ><icon :name="resolveIcon(icon.name)" class="navbar__icon"
        /></NuxtLink>
      </li>
    </ul>
  </div>
  <UiTheModal
    :show-modal="showModal"
    background-color="var(--c-graphite)"
    @close="useCloseModal"
  >
    <ul v-if="data?.links" class="hamburguer-links">
      <li v-for="link in data.links" :key="link.id">
        <NuxtLinkLocale
          :to="link.link"
          class="hamburguer-links__item"
          @click="useCloseModal"
          >{{ link.text }}
        </NuxtLinkLocale>
      </li>
    </ul>
  </UiTheModal>
</template>

<style lang="scss" scoped>
.navbar {
  @include flex(row, center, space-between);
  padding: 1.5rem var(--s-padding);
  background-color: var(--c-aquamarine);
  max-height: 5rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  @include responsive {
    padding: var(--s-padding-mobile);
  }
  &__social {
    @include flex(row, center, space-between, $gap: 1.5rem);
    @include responsive {
      gap: 0.7rem;
    }
  }

  &__item {
    @include flex;
    cursor: pointer;
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
