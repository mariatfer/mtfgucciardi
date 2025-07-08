<script setup lang="ts"></script>

<template>
  <div class="contact">
    <ViewsContactInfoContact />
    <ViewsContactForm class="contact__form" />
  </div>
</template>

<style lang="scss">
.contact {
  @include flex(column, flex-start, flex-start, $gap: 1.5rem);
  @include responsive {
    @include flex(column, $gap: 1.5rem);
  }
}
</style>
