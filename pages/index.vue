<script setup lang="ts">
import { home } from "@/mocks/home";
</script>

<template>
  <div class="home">
    <section class="home__presentation">
      <UiTheTitle>{{ home.title }}</UiTheTitle>
      <p class="home__description">
        {{ home.description }}
      </p>
    </section>
    <section class="home__character">
      <img :src="home.image" alt="" class="home__image" />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home {
  @include flex(row, center, space-around);
  background-color: var(--c-aquamarine);
  width: 100%;
  height: calc(100vh - 5rem);
  @include responsive {
    @include flex(column, center, space-around);
    height: 100%;
  }
  &__presentation {
    margin: var(--s-margin-blocks) 0;
    padding: 0 var(--s-padding-lateral);
    max-width: 50%;
    @include responsive {
      max-width: unset;
      padding: 0 var(--s-padding-lateral-mobile);
    }
  }

  &__description {
    text-align: center;
    margin: 1rem 0 0 0;
    text-shadow: 4px 3px 0.2rem rgba(0, 0, 0, 0.582);
    @include responsive {
      margin: 0;
    }
  }

  &__character {
    @include flex(column, flex-end, flex-end);
    height: 100%;
    min-height: fit-content;
    overflow: hidden;
  }

  &__image {
    filter: drop-shadow(0 0 0.5rem var(--c-black));
    max-height: 40rem;
  }
}
</style>
