<script setup lang="ts">
withDefaults(
  defineProps<{
    inputId: string;
    label: string;
    modelValue: string;
    type?: string;
    disabled?: boolean;
    ariaLabel?: string;
    autoComplete?: string;
    error?: string;
  }>(),
  {
    type: "text",
    disabled: false,
    ariaLabel: "",
    autoComplete: "off",
    error: "",
  }
);

const emit = defineEmits(["update:modelValue", "blur"]);
</script>

<template>
  <div class="animated-input">
    <div class="input-wrapper">
      <input
        :id="inputId"
        class="input-wrapper__field"
        :type="type"
        :value="modelValue"
        :autocomplete="autoComplete"
        :disabled="disabled"
        :aria-label="ariaLabel || label"
        :aria-invalid="!!error"
        placeholder=" "
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        @blur="$emit('blur')"
      />
      <label :for="inputId" class="input-wrapper__label">{{ label }}</label>
      <span class="input-wrapper__underline"></span>
    </div>
    <transition name="fade-slide">
      <p v-if="error" class="error">{{ error }}</p>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.animated-input {
  width: 100%;
  margin-bottom: 1.5rem;
  position: relative;
}

.input-wrapper {
  position: relative;
  width: 100%;

  &__field {
    width: 100%;
    border: none;
    border-bottom: 0.125rem solid #ccc;
    background: transparent;
    color: var(--c-light-graphite);
    padding: 0.8rem 0 0.5rem 0;
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
    opacity: 0;
    transition: transform 0.3s ease;
  }
}

.animated-input input:focus + .input-wrapper__label,
.animated-input input:not(:placeholder-shown) + .input-wrapper__label {
  top: -1.5rem;
  font-size: 0.9rem;
  color: var(--c-primary);
}

.animated-input input:focus ~ .input-wrapper__underline,
.animated-input input:not(:placeholder-shown) ~ .input-wrapper__underline {
  transform: scaleX(1);
  opacity: 1;
}

/* Error styles */
.error {
  color: var(--c-dark-red);
  font-size: 0.9rem;
  margin-top: 0.25rem;
  font-weight: 600;
}
.input-wrapper__field[aria-invalid="true"] + .input-wrapper__label {
  color: var(--c-dark-red);
}
.input-wrapper__field[aria-invalid="true"] {
  border-color: var(--c-dark-red);
}
</style>
