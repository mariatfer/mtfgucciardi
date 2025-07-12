<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const container = ref<HTMLElement | null>(null);

onMounted(() => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
  if (!container.value) return;

  const children = container.value.children;

  gsap.from(children, {
    x: -50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: container.value,
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });
});
</script>

<template>
  <div ref="container">
    <slot />
  </div>
</template>
