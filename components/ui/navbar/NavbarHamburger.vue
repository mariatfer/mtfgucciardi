<script lang="ts" setup>
defineProps<{ active: boolean }>();
const emit = defineEmits(["toggle"]);
</script>

<template>
  <div
    class="button-mobile"
    :class="{ 'button-toggle--active': active }"
    @click="emit('toggle')"
  >
    <div class="button-mobile--line" />
    <div class="button-mobile--line" />
    <div class="button-mobile--line" />
  </div>
</template>

<style lang="scss" scoped>
.button-mobile {
  display: none;
  @include responsive() {
    @include flex(column);
    border: 0;
    width: 1.7em;
    height: 1.5em;
    z-index: 11;
    cursor: pointer;
    gap: 0.4em;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.05);
    .button-mobile--line {
      background-color: var(--c-primary);
    }
  }

  &--line {
    height: 0.3em;
    width: 1.7em;
    border-radius: 0.125em;
    background-color: var(--c-white);
    transition: all 0.3s ease;
    transform-origin: center;
  }
}
</style>
