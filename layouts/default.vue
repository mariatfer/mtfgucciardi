<template>
  <div
    class="layout"
    :class="$route.name === 'index' ? 'bg-index' : 'bg-default'"
  >
    <UiNavbarMainNavbar />
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  padding: 5rem 0 0 0;
}
.bg-index {
  background-color: var(--c-aquamarine);
}
.bg-default {
  background-color: var(--c-light-aquamarine);
}
</style>
