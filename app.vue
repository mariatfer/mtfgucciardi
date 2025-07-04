<template>
  <div>
    <NuxtLayout>
      <Transition name="fade-pages" mode="default" appear>
        <NuxtPage :key="$route.path" />
      </Transition>
    </NuxtLayout>
  </div>
</template>
