<script setup lang="ts">
import { ICONS } from "@/constants/icons";

defineProps<{
  showModal: boolean;
}>();

defineEmits(["close"]);
</script>

<template>
  <Transition name="modal-slide" appear>
    <dialog v-if="showModal" class="modal">
      <button class="close-button" @click="$emit('close')">
        <icon :name="ICONS.close" />
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
  background-color: rgba(102, 48, 4, 0.9);

  color: var(--c-white);
  @include flex(column);
  z-index: 12;
}

.close-button {
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
    transform: scale(1.05);
  }

  @include responsive() {
    top: 1em;
    right: 1em;
  }
}
</style>
