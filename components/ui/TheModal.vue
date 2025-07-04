<script setup lang="ts">
const props = defineProps<{
  showModal: boolean;
  backgroundColor?: string;
}>();

defineEmits(["close"]);

const styles = computed(() => ({
  "--background-color": props.backgroundColor ?? "var(--c-black)",
}));
</script>

<template>
  <Transition name="modal-slide" appear>
    <dialog v-if="showModal" :style="styles" class="modal">
      <button class="close-button" @click="$emit('close')">
        <icon name="ix:close" />
      </button>
      <slot />
    </dialog>
  </Transition>
</template>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0em;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 0.9);

  color: var(--c-white);
  @include flex(column);
  z-index: 12;
}

.close-button {
  color: var(--c-static-white);
  position: absolute;
  z-index: 2;
  top: 2em;
  right: 2em;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  transition:
    color 0.3s ease-in-out,
    transform 0.3s ease-in-out,
    scale 0.3s ease-in-out;

  &:focus,
  &:hover {
    color: var(--c-primary);
    scale: 1.2;
    transform: rotate(-90deg);
    transform-origin: center;
  }
  
  @include responsive() {
    top: 1em;
    right: 1em;
  }
}
</style>
