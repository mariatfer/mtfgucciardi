<template>
  <div :class="$route.name === 'index' ? 'bg-index' : 'bg-default'">
    <UiNavbarMainNavbar />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.bg-index {
  background-color: var(--c-aquamarine);
}
.bg-default {
  background-color: var(--c-light-aquamarine);
}
</style>
