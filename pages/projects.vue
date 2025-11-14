<script setup lang="ts">
import type { Projects } from "@/interfaces/locales/projects";
const { data: projectsLocales } = useLocales<Projects>("projects");
const { isResponsiveResolution } = useWindowsResize();

const textAlign = computed(() =>
  isResponsiveResolution.value ? "center" : "left"
);
watchEffect(() => {
  if (projectsLocales.value?.seo) {
    usePageSeo(projectsLocales.value.seo);
  }
});
</script>

<template>
  <div class="projects">
    <UiSEOTitle
      v-if="projectsLocales?.seo"
      :meta-title="projectsLocales.seo.metaTitle"
    />
    <UiTheTitle
      v-if="projectsLocales?.title"
      :text-align="textAlign"
      color="var(--c-primary)"
      :shadow="false"
      :uppercase="true"
      :bolder="true"
      class="projects__title"
      >{{ projectsLocales.title }}</UiTheTitle
    >
    <p v-if="projectsLocales?.paragraph" class="projects__paragraph">
      {{ projectsLocales.paragraph }}
    </p>
    <div v-if="projectsLocales?.projectCards" class="projects__cards-section">
      <UiScrollReveal
        v-for="card in projectsLocales.projectCards"
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
  padding: 0 0 var(--s-padding) 0;
  @include responsive {
    padding: 0 0 var(--s-padding-mobile) 0;
  }
  &__title {
    margin: var(--s-margin) 0 0 0;
    padding: 0 var(--s-padding);

    @include responsive {
      margin: var(--s-margin-mobile) 0 0 0;
      padding: 0 var(--s-padding-mobile);
    }
  }
  &__paragraph {
    margin: 1.5rem 0 0 0;
    padding: 0 var(--s-padding);

    @include responsive {
      margin: 1rem 0 0 0;
      padding: 0 var(--s-padding-mobile);
      text-align: center;
    }
  }

  &__cards-section {
    width: 100%;
    @include flex(column, $gap: 3rem);
  }
}
</style>
