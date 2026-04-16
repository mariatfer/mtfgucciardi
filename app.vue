<template>
  <NuxtLayout>
    <UiPageTransition>
      <UApp>
        <NuxtPage :key="$route.fullPath" />
      </UApp>
    </UiPageTransition>
  </NuxtLayout>
  <UiCursorParticles />
</template>
