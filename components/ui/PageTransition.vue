<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import gsap from "gsap";

const route = useRoute();
const wrapper = ref<HTMLElement | null>(null);

const animateIn = () => {
  if (wrapper.value) {
    // gsap.fromTo(
    //   wrapper.value,
    //   {
    //     opacity: 0,
    //     scale: 0.98,
    //     filter: "brightness(0.6)",
    //   },
    //   {
    //     opacity: 1,
    //     scale: 1,
    //     filter: "brightness(1)",
    //     duration: 0.6,
    //     ease: "power2.out",
    //   }
    // );

    gsap.fromTo(
      wrapper.value,
      {
        opacity: 0,
        scale: 0.98,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  }
};

watch(
  () => route.fullPath,
  () => {
    animateIn();
  }
);

onMounted(() => {
  animateIn();
});
</script>

<template>
  <div ref="wrapper" style="will-change: opacity, transform, filter">
    <slot />
  </div>
</template>
