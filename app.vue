<template>
  <NuxtLayout>
    <UiPageTransition>
      <NuxtPage :key="$route.fullPath" />
    </UiPageTransition>
  </NuxtLayout>
  <UiCursorParticles />
</template>
