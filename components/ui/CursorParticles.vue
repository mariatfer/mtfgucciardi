<script setup lang="ts">
import { useCursorParticles } from "@/composables/useCursorParticles";

const canvas = ref<HTMLCanvasElement | null>(null);

useCursorParticles(canvas);
</script>

<template>
  <canvas ref="canvas" class="cursor-canvas" />
</template>

<style lang="scss" scoped>
.cursor-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
}
</style>
