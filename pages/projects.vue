<script setup lang="ts">
import type { Projects } from "@/interfaces/locales/projects";
const { data } = useLocales<Projects>("projects");
const { isResponsiveResolution } = useWindowsResize();

const textAlign = computed(() =>
  isResponsiveResolution.value ? "center" : "left"
);
</script>

<template>
  <div class="projects">
    <UiTheTitle
      v-if="data?.title"
      :text-align="textAlign"
      color="var(--c-primary)"
      :shadow="false"
      :uppercase="true"
      :bolder="true"
      >{{ data.title }}</UiTheTitle
    >
    <div v-if="data?.projectCards" class="projects__cards-section">
      <UiScrollReveal
        v-for="card in data.projectCards"
        :key="card.id"
        style="width: 100%"
      >
        <ViewsProjectsProjectCard :card="card" />
      </UiScrollReveal>
    </div>
  </div>
</template>

<style lang="scss">
.projects {
  margin: var(--s-margin) 0;
  padding: 0 var(--s-padding);

  @include responsive {
    margin: var(--s-margin-mobile) 0;
    padding: 0 var(--s-padding-mobile);
  }

  &__cards-section {
    width: 100%;
    @include flex(column, $gap: 3rem);
  }
}
</style>
