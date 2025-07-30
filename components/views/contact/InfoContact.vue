<script setup lang="ts">
import type { InfoContact } from "~/interfaces/locales/contacts";
defineProps<InfoContact>();
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
      >{{ $props.title }}</UiTheTitle
    >
    <p
      v-for="description in $props.description"
      :key="description.id"
      class="contact-info__description"
    >
      {{ description.text }}
    </p>
    <span class="contact-info__email">
      <Icon :name="resolveIcon($props.email.icon)" class="contact-info__icon" />
      {{ $props.email.text }}
    </span>
  </section>
</template>

<style lang="scss" scoped>
.contact-info {
  @include flex(column, flex-start, space-between, $gap: 1.5rem);
  margin: var(--s-margin) 0;
  padding: 0 var(--s-padding);
  @include responsive {
    @include flex(column, center, space-between, $gap: 1rem);
    text-align: center;
    margin: var(--s-margin-mobile) 0;
    padding: 0 var(--s-padding-mobile);
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
