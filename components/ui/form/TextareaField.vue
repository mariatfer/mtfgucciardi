<script setup lang="ts">
withDefaults(
  defineProps<{
    inputId: string;
    label: string;
    modelValue: string;
    disabled?: boolean;
    ariaLabel?: string;
    error?: string;
  }>(),
  {
    disabled: false,
    ariaLabel: "",
    error: "",
  }
);

const emit = defineEmits(["update:modelValue", "blur"]);
</script>

<template>
  <div class="animated-textarea">
    <div class="textarea-wrapper">
      <textarea
        :id="inputId"
        class="textarea-wrapper__field"
        :value="modelValue"
        :disabled="disabled"
        :aria-label="ariaLabel || label"
        :aria-invalid="!!error"
        placeholder=" "
        @input="
          emit(
            'update:modelValue',
            ($event.target as HTMLTextAreaElement).value
          )
        "
        @blur="$emit('blur')"
      />
      <label :for="inputId" class="textarea-wrapper__label">{{ label }}</label>
      <span class="textarea-wrapper__underline"></span>
    </div>
    <transition name="fade-slide">
      <p v-if="error" class="error">{{ error }}</p>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.animated-textarea {
  width: 100%;
  margin-bottom: 1.5rem;
  position: relative;
}

.textarea-wrapper {
  position: relative;
  width: 100%;

  &__field {
    width: 100%;
    border: none;
    border-bottom: 0.125rem solid #ccc;
    background: transparent;
    resize: vertical;
    color: var(--c-light-graphite);
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--c-primary);
    }
  }

  &__label {
    position: absolute;
    left: 0;
    top: 0.9rem;
    color: var(--c-light-graphite);
    font-size: 1rem;
    pointer-events: none;
    transition: all 0.2s ease;
  }

  &__underline {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0.125rem;
    width: 100%;
    transform: scaleX(0);
    transform-origin: left;
    background-color: var(--c-primary);
    transition: transform 0.3s ease;
  }
}

.animated-textarea textarea:focus + .textarea-wrapper__label,
.animated-textarea textarea:not(:placeholder-shown) + .textarea-wrapper__label {
  top: -1.5rem;
  font-size: 0.9rem;
  color: var(--c-primary);
}

.animated-textarea textarea:focus ~ .textarea-wrapper__underline,
.animated-textarea
  textarea:not(:placeholder-shown)
  ~ .textarea-wrapper__underline {
  transform: scaleX(1);
}

.error {
  color: var(--c-dark-red);
  font-size: 0.9rem;
  margin-top: 0.25rem;
  font-weight: 600;
}
.textarea-wrapper__field[aria-invalid="true"] + .textarea-wrapper__label {
  color: var(--c-dark-red);
}
.textarea-wrapper__field[aria-invalid="true"] {
  border-color: var(--c-dark-red);
}
</style>