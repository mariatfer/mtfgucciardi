<script setup lang="ts">
import { onMounted, ref } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const el = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!el.value) return;

  gsap.fromTo(
    el.value,
    {
      opacity: 0,
      scale: 0.4,
      y: 20,
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el.value,
        start: "top 85%",
        toggleActions: "play none none none",
        markers: true,
      },
    }
  );
});
</script>

<template>
  <div ref="el">
    <slot />
  </div>
</template>
