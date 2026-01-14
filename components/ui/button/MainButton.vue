<script setup lang="ts">
import { RouterLink } from "#vue-router";

interface Props {
  link?: string;
  padding?: string;
  to?: string;
  width?: number | string;
  target?: string;
  rel?: string;
  download?: string | boolean;
}

const props = defineProps<Props>();

const styles = computed(() => ({
  "--width": props.width || "auto",
}));

const ANCHOR = "a";
const BUTTON = "button";

const component = computed(() => {
  if (props.to) return RouterLink;
  if (props.link) return ANCHOR;
  return BUTTON;
});

const isAnchor = computed(() => {
  if (component.value !== ANCHOR) return null;
  return {
    target: props.target ?? "_blank",
    rel: props.rel ?? "noopener noreferrer",
  };
});
</script>

<template>
  <component
    :is="component"
    class="main-button"
    :style="styles"
    :active="false"
    :to="to"
    :href="component === ANCHOR ? link : undefined"
    :width="width"
    :download="props.download || null"
    v-bind="isAnchor"
  >
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.main-button {
  width: var(--width);
  color: var(--c-white);
  background-color: var(--c-medium-yellow);
  border-radius: 0.625rem;
  border: 2px dashed var(--c-medium-yellow);
  padding: 0.8rem;
  transition: var(--t-transition-button);
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  will-change: transform;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0 0.125rem 0.3125rem -0.0625rem,
    rgba(0, 0, 0, 0.3) 0 0.0625rem 0.1875rem -0.0625rem;

  @include flex(row, center, center, $gap: 0.5em);

  & span:last-child {
    display: none;
  }

  &:hover {
    transition: 0.4s;
    border: 2px dashed var(--c-medium-yellow);
    background-color: var(--c-dark-yellow);
  }
  &:disabled {
    position: relative;
    cursor: not-allowed;
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background-color: var(--c-white);
      opacity: 0.5;
    }
    &:hover {
      background-color: var(--bg-color);
    }
  }
  @include responsive() {
    font-size: var(--s-font-cta);
  }
}
</style>
