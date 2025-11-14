<script setup lang="ts">
import type { AboutMe } from "@/interfaces/locales/about";
const { data: aboutLocales } = useLocales<AboutMe>("about-me");
watchEffect(() => {
  if (aboutLocales.value?.seo) {
    usePageSeo(aboutLocales.value.seo);
  }
});
</script>

<template>
  <div class="about">
    <UiSEOTitle
      v-if="aboutLocales?.seo"
      :meta-title="aboutLocales.seo.metaTitle"
    />
    <article class="about__profile">
      <ViewsAboutProfileCard
        v-if="aboutLocales?.profileCard"
        v-bind="aboutLocales.profileCard"
      />
    </article>
    <article class="about__skills">
      <ViewsAboutSkillsSection
        v-if="aboutLocales?.skillsSection"
        v-bind="aboutLocales.skillsSection"
      />
    </article>
    <article class="about__timeline">
      <ViewsAboutTimelineSection
        v-if="aboutLocales?.timelineSection"
        v-bind="aboutLocales.timelineSection"
      />
    </article>
  </div>
</template>

<style lang="scss" scoped>
.about {
  &__profile {
    margin: var(--s-margin) 0;
    padding: 0 var(--s-padding);
    @include responsive {
      margin: var(--s-margin-mobile) 0;
      padding: 0 var(--s-padding-mobile);
    }
  }
  &__timeline {
    margin: 0 0 var(--s-margin-mobile) 0;
    padding: 0 var(--s-padding);
    @include responsive {
      margin: 0 0 var(--s-margin-mobile) 0;
      padding: 0 var(--s-padding-mobile);
    }
  }
  &__skills {
    padding: 8rem var(--s-padding);
    box-shadow: 0 0 3rem #0000003a;
    @include background;
    @include responsive {
      padding: var(--s-margin-mobile) var(--s-padding-mobile);
    }
  }
}
</style>
