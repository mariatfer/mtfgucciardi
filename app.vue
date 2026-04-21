<template>
  <NuxtLayout>
    <UiAnimationsPageTransition>
      <UApp>
        <NuxtPage :key="$route.fullPath" />
      </UApp>
    </UiAnimationsPageTransition>
  </NuxtLayout>
  <UiAnimationsCursorParticles />
</template>
