<script setup lang="ts">
import type { AboutMe } from "@/interfaces/locales/about";
const { data } = useLocales<AboutMe>("about-me");
</script>

<template>
  <div class="about">
    <article class="about__profile">
      <ViewsAboutProfileCard
        v-if="data?.profileCard"
        v-bind="data.profileCard"
      />
    </article>
    <article class="about__skills">
      <ViewsAboutSkillsSection
        v-if="data?.skillsSection"
        v-bind="data.skillsSection"
      />
    </article>
    <article class="about__timeline">
      <ViewsAboutTimelineSection
        v-if="data?.timelineSection"
        v-bind="data.timelineSection"
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
