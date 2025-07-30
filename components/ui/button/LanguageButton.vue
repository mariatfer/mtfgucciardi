<script setup lang="ts">
import { useLanguageStore } from "@/stores/language";
import { storeToRefs } from "pinia";
import { gsap } from "gsap";
import { useI18n } from "vue-i18n"; // 👈 Aquí importas la función

const languageStore = useLanguageStore();
const { currentLanguageInfo, isReady } = storeToRefs(languageStore);
const isFading = ref(false);

const overlay = inject<Ref<HTMLElement | null>>("overlayRef");

const { setLocale } = useI18n();

const handleLanguageChange = () => {
  if (!overlay?.value) return;
  isFading.value = true;

  gsap.to(overlay.value, {
    opacity: 1,
    duration: 0.4,
    onComplete: () => {
      languageStore.toggleLanguage();
      setLocale(languageStore.currentLanguageInfo!.value);
      gsap.to(overlay.value, {
        opacity: 0,
        duration: 0.4,
        onComplete: () => {
          isFading.value = false;
        },
      });
    },
  });
};
</script>

<template>
  <button
    v-if="isReady && currentLanguageInfo"
    :class="['language-button', { fading: isFading }]"
    :title="currentLanguageInfo.name"
    @click="handleLanguageChange"
  >
    <icon :name="currentLanguageInfo.icon" class="language-button__icon" />
  </button>
</template>

<style lang="scss" scoped>
.language-button {
  @include flex;
  border-radius: 2.5rem;
  font-size: 0.875rem;
  background: transparent;
  cursor: pointer;
  opacity: 1;
  border: 0.1563rem solid var(--c-white);
  transition:
    transform 0.3s ease-in-out,
    border-color 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    border-color: var(--c-primary);
  }
  &.fading {
    opacity: 0.5;
  }
  &__icon {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
