<script setup lang="ts"></script>

<template>
  <div class="about">
    <article class="about__container">
      <ViewsAboutProfileCard />
      <ViewsAboutSkillsSection />
    </article>
  </div>
</template>

<style lang="scss" scoped>
.about {
  padding: 0 var(--s-padding-lateral);
  @include responsive {
    padding: 0 var(--s-padding-lateral-mobile);
  }

  &__container {
    @include flex(row, flex-start, space-between);
    gap: 2rem;
    @include responsive {
      @include flex(column, center, space-between);
      gap: 1rem;
    }
  }
}
</style>
