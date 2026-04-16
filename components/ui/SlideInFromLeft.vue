<script lang="ts" setup>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const container = ref<HTMLElement | null>(null);

async function waitForImages(el: HTMLElement) {
  const images = [...el.querySelectorAll("img")];

  await Promise.allSettled(
    images.map((img) =>
      img.complete
        ? Promise.resolve()
        : new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          }),
    ),
  );

  await new Promise(requestAnimationFrame);
}

onMounted(async () => {
  if (typeof window === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  await nextTick();
  if (!container.value) return;

  await document.fonts.ready;
  await waitForImages(container.value);

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

  ScrollTrigger.refresh();
});
</script>

<template>
  <div ref="container">
    <slot />
  </div>
</template>
