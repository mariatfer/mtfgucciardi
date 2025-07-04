<script setup lang="ts"></script>

<template>
  <div class="about">
    <article class="about__container">
      <section>
        <ViewsAboutProfileCard />
      </section>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.about {
  margin: var(--s-margin-blocks) 0;
  padding: 0 var(--s-padding-lateral);
  @include responsive {
    margin: var(--s-margin-blocks-mobile) 0;
    padding: 0 var(--s-padding-lateral-mobile);
  }

  &__container {
    @include flex(row, center, space-between);
    gap: 2rem;
    @include responsive {
      @include flex(column, center, space-between);
      gap: 1rem;
    }
  }
}
</style>
