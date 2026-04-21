<script setup lang="ts">
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const props = defineProps<{
  stagger?: boolean;
  childSelector?: string;
}>();

const el = ref<HTMLElement | null>(null);

onMounted(() => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
  if (!el.value) return;

  const target =
    props.stagger && props.childSelector
      ? el.value.querySelectorAll(props.childSelector)
      : el.value;

  if (props.stagger && (target as NodeList).length === 0) return;

  gsap.fromTo(
    target,
    { opacity: 0, scale: 0.4, y: 20 },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: props.stagger ? 0.15 : 0,
      scrollTrigger: {
        trigger: el.value,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    },
  );
});
</script>

<template>
  <div ref="el">
    <slot />
  </div>
</template>
