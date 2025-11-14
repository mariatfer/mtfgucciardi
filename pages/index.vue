<script setup lang="ts">
import type { Home } from "@/interfaces/locales/home";
const { data: homeLocales } = useLocales<Home>("home");
watchEffect(() => {
  if (homeLocales.value?.seo) {
    usePageSeo(homeLocales.value.seo);
  }
});
</script>

<template>
  <div v-if="homeLocales" class="home">
    <UiSEOTitle
      v-if="homeLocales?.seo"
      :meta-title="homeLocales.seo.metaTitle"
    />
    <section class="home__presentation">
      <UiTheTitle>{{ homeLocales.title }}</UiTheTitle>
      <p class="home__description">
        {{ homeLocales.description }}
      </p>
    </section>
    <section class="home__character">
      <img
        :src="homeLocales.image.url"
        :alt="homeLocales.image.alt"
        class="home__image"
      />
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
    margin: var(--s-margin) 0;
    padding: 0 var(--s-padding);
    max-width: 50%;
    @include responsive {
      max-width: unset;
      padding: 0 var(--s-padding-mobile);
    }
  }

  &__description {
    text-align: center;
    margin: 1rem 0 0 0;
    text-shadow: 0.25rem 0.1875rem 0.2rem rgba(0, 0, 0, 0.582);
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
    overflow: hidden;
  }
}
</style>
