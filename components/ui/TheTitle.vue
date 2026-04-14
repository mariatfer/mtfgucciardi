<script setup lang="ts">
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
const props = defineProps<{
  textAlign?: string;
  color?: string;
  shadow?: boolean;
  uppercase?: boolean;
  weight?: string;
  animate?: boolean;
}>();

const styles = computed(() => ({
  "--text-align": props.textAlign || "center",
  "--text-color": props.color || "var(--c-white)",
  "--text-transform": props.uppercase ? "uppercase" : "none",
  "--text-shadow": props.shadow
    ? "4px 3px 0.7rem rgba(0, 0, 0, 0.582)"
    : "none",
  "--text-weight": props.weight || "bold",
}));

gsap.registerPlugin(SplitText);

const title = ref<HTMLElement | null>(null)

const isMounted = ref(false);
onMounted(() => (isMounted.value = true));

watchEffect(async () => {
  if (!props.animate) return;
  if (!isMounted.value) return;

  await nextTick();

  const el = title.value;
  if (!el) return;

  await document.fonts.ready;

  SplitText.create(el, {
    type: "words, chars",
    autoSplit: true,
    mask: "lines",
    onSplit(self) {
      gsap.from(self.words, {
        y: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(self.chars, {
        opacity: 0,
        y: 10,
        stagger: 0.03,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.2,
      });
    },
  });
});
</script>

<template>
  <header class="header" :style="styles">
    <h2 ref="title" class="header__title">
      <slot />
    </h2>
  </header>
</template>

<style scoped lang="scss">
.header {
  &__title {
    text-align: var(--text-align);
    color: var(--text-color);
    text-transform: var(--text-transform);
    text-shadow: var(--text-shadow);
    font-family: var(--f-font-title);
    letter-spacing: 0.0625rem;
    font-weight: var(--text-weight);

    @include responsive() {
      padding: 0.5em 0;
    }
  }
}
</style>
