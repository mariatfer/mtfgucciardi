<script setup lang="ts">
import { RouterLink } from "#vue-router";

interface Props {
  bgColor?: string;
  bgHover?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  hoverColor?: string;
  link?: string;
  padding?: string;
  to?: string;
  width?: number | string;
  height?: number | string;
  border?: string;
  borderRadius?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
}

const props = defineProps<Props>();

const styles = computed(() => ({
  "--padding": props.padding || "0 1rem",
  "--width": props.width || "auto",
  "--font-family": props.fontFamily || "Fira Sans",
  "--font-size": props.fontSize || "1rem",
  "--color": props.color || "var(--c-static-black)",
  "--hover-color": props.hoverColor || "var(--c-white)",
  "--bg-color": props.bgColor || "var(--c-dark-yellow)",
  "--bg-hover": props.bgHover || "transparent",
  "--height": props.height ? `${props.height}` : "3em",
  "--border-radius": props.borderRadius || "0.25em",
  "--border":
    props.border === undefined
      ? `0.125em solid var(--c-primary)`
      : props.border !== "none"
        ? `0.125em solid ${props.border}`
        : props.border,
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
  color: var(--color);
  font-family: var(--font-family);
  font-size: var(--font-size);
  background-color: var(--bg-color);
  border-radius: var(--border-radius);
  border: var(--border);
  padding: var(--padding);
  transition: var(--t-transition-button);
  height: var(--height);
  letter-spacing: 0.0893rem;
  text-transform: uppercase;
  cursor: pointer;
  @include flex(row, center, center, $gap: 0.5em);
  &:hover {
    animation: pulse 0.5s infinite alternate;
    letter-spacing: 0.15rem;
    background: linear-gradient(
      130deg,
      var(--c-medium-yellow),
      var(--c-dark-yellow)
    );
    color: #fff;
  }
  @keyframes pulse {
    to {
      transform: scale(1.03);
    }
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
    height: var(--height);
  }
}
</style>
