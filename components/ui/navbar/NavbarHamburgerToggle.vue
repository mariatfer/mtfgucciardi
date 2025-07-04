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
    background: none;
    border: none;
    cursor: pointer;
    @include flex(column, nowrap, 0.3em);
    height: 1.5em;
    width: 1.5em;
    position: relative;
    margin: 0 1em 0.3em 0;
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }

  &:hover {
    scale: 1.1;
    .button-mobile--line {
      background-color: var(--c-primary);
    }
  }

  &--line {
    height: 1em;
    width: 1.5em;
    margin: 0.3em 0 0 0;
    background-color: var(--c-primary);
    border-radius: 0.125em;
    transform-origin: center;
    transition: all 0.3s ease;
  }
}
.button-toggle--active {
  margin: 0 1em 0 0;

  .button-mobile--line:nth-child(1) {
    transform: rotate(45deg) translate(0, 0.93em);
    margin: 0 0 0 0.6em;
    height: 0.2em;
  }

  .button-mobile--line:nth-child(2) {
    opacity: 0;
  }

  .button-mobile--line:nth-child(3) {
    transform: rotate(-45deg) translate(0, -0.93em);
    margin: 0 0 0 0.6em;
    height: 0.2em;
  }
}
</style>
