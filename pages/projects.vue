<script setup lang="ts">
import { projects } from "@/mocks/projects";
const { isResponsiveResolution } = useWindowsResize();

const textAlign = computed(() =>
  isResponsiveResolution.value ? "center" : "left"
);
</script>

<template>
  <div class="projects">
    <UiTheTitle
      :text-align="textAlign"
      color="var(--c-primary)"
      :shadow="false"
      :uppercase="true"
      :bolder="true"
      >{{ projects.title }}</UiTheTitle
    >
    <UiScrollReveal
      v-for="card in projects.projectCards"
      :key="card.id"
      style="width: 100%"
    >
      <ViewsProjectsProjectCard :card="card" />
    </UiScrollReveal>
  </div>
</template>

<style lang="scss">
.projects {
  margin: var(--s-margin-blocks) 0;
  padding: 0 var(--s-padding-lateral);
 
  @include responsive {
    margin: var(--s-margin-blocks-mobile) 0;
    padding: 0 var(--s-padding-lateral-mobile);
  }
}
</style>
