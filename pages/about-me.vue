<script setup lang="ts"></script>

<template>
  <div class="about">
    <article class="about__profile">
      <ViewsAboutProfileCard />
    </article>
    <article class="about__skills">
      <ViewsAboutSkillsSection />
    </article>
    <article class="about__timeline">
      <ViewsAboutTimelineSection />
    </article>
  </div>
</template>

<style lang="scss" scoped>
.about {
  &__profile {
    margin: var(--s-margin-blocks) 0;
    padding: 0 var(--s-padding-lateral);
    @include responsive {
      margin: var(--s-margin-blocks-mobile) 0;
      padding: 0 var(--s-padding-lateral-mobile);
    }
  }
  &__timeline {
    margin: 0 0 var(--s-margin-blocks-mobile) 0;
    padding: 0 var(--s-padding-lateral);
    @include responsive {
      margin: 0 0 var(--s-margin-blocks-mobile) 0;
      padding: 0 var(--s-padding-lateral-mobile);
    }
  }
  &__skills {
    padding: 8rem var(--s-padding-lateral);
    box-shadow: 0 0 3rem #0000003a;
    @include background;
    @include responsive {
      padding: var(--s-margin-blocks-mobile) var(--s-padding-lateral-mobile);
    }
  }
}
</style>
