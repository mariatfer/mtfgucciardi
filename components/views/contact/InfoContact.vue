<script setup lang="ts">
import { infoContact } from "@/mocks/contact";
const { isResponsiveResolution } = useWindowsResize();
const textAlign = computed(() =>
  isResponsiveResolution.value ? "center" : "left"
);
</script>

<template>
  <section class="contact-info">
    <UiTheTitle
      :text-align="textAlign"
      color="var(--c-primary)"
      :shadow="false"
      :uppercase="true"
      :bolder="true"
      >{{ infoContact.title }}</UiTheTitle
    >
    <p
      v-for="description in infoContact.description"
      :key="description.id"
      class="contact-info__description"
    >
      {{ description.text }}
    </p>
    <span class="contact-info__email">
      <Icon :name="infoContact.email.icon" class="contact-info__icon" />
      {{ infoContact.email.text }}
    </span>
  </section>
</template>

<style lang="scss" scoped>
.contact-info {
  @include flex(column, flex-start, space-between, $gap: 1.5rem);
  margin: var(--s-margin-blocks) 0;
  padding: 0 var(--s-padding-lateral);
  @include responsive {
    @include flex(column, center, space-between, $gap: 1rem);
    text-align: center;
    margin: var(--s-margin-blocks-mobile) 0;
    padding: 0 var(--s-padding-lateral-mobile);
  }

  &__description {
    @include responsive {
      margin: 0 0 1.5rem 0;
    }
  }

  &__email {
    @include flex($gap: 1rem);
    font-style: italic;
  }

  &__icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
