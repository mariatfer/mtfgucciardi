<script setup lang="ts">
const props = defineProps<{
  textAlign?: string
}>()

const styles = computed(() => ({
  '--text-align': props.textAlign || 'center',
}))
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
    font-family: var(--f-font-title);
    letter-spacing: .0625rem;
    font-weight: bold;
    text-shadow: 4px 3px 0.7rem rgba(0, 0, 0, 0.582);
    @include responsive() {
      padding: 0.5em 0;
    }
  }
}
</style>
