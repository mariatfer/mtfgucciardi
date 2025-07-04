<script setup lang="ts">
const props = defineProps<{
  textAlign?: string;
  color?: string;
  shadow?: boolean;
  uppercase?: boolean;
  weight?: string;
}>();

const styles = computed(() => ({
  "--text-align": props.textAlign || "center",
  "--text-color": props.color || "var(--c-white)",
  "--text-transform": props.uppercase ? "uppercase" : "none",
  "--text-shadow": props.shadow
    ? "4px 3px 0.7rem rgba(0, 0, 0, 0.582)"
    : "none",
  "--text-weight": props.weight || "bold",
}));
</script>

<template>
  <header class="left-header" :style="styles">
    <h2 class="left-header__title">
      <slot />
    </h2>
  </header>
</template>

<style scoped lang="scss">
.left-header {
  &__title {
    text-align: var(--text-align);
    color: var(--text-color);
    text-transform: var(--text-transform);
    text-shadow: var(--text-shadow);
    font-family: var(--f-font-title);
    letter-spacing: 0.0625rem;
    font-weight: var(--text-weight);

    @include responsive() {
      padding: 0.5em 0;
    }
  }
}
</style>
