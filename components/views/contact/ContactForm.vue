<script setup lang="ts">
import { ref } from "vue";
import type { FormData, FormErrors } from "@/interfaces/forms";
import { validateForm, validateField } from "@/utils/validator";
import type { ContactForm } from "~/interfaces/locales/contacts";
defineProps<ContactForm>();

const formData = reactive<FormData>({
  name: "",
  lastName: "",
  email: "",
  message: "",
});

const errors = ref<FormErrors>({});
const success = ref(false);
const submissionError = ref<string | null>(null);

const validateFieldOnBlur = (field: keyof FormData, value: string) => {
  const errorMsg = validateField(field, value);
  if (errorMsg) {
    errors.value[field] = errorMsg;
  } else {
    Reflect.deleteProperty(errors.value, field);
  }
};

type SendResponse =
  | { status: true; data: unknown }
  | { status: false; error: string };

const sendMessage = async () => {
  success.value = false;
  errors.value = {};
  submissionError.value = null;

  const validationErrors = validateForm(formData);
  if (Object.keys(validationErrors).length > 0) {
    errors.value = validationErrors;
    return;
  }

  try {
    const res = await $fetch<SendResponse>("/api/send", {
      method: "POST",
      body: {
        email: formData.email,
        message: formData.message,
      },
    });

    if (res.status) {
      success.value = true;
      Object.keys(formData).forEach((key) => {
        formData[key as keyof FormData] = "";
      });
    } else {
      submissionError.value = res.error || "Error desconocido.";
    }
  } catch (err) {
    submissionError.value = "Error al enviar el mensaje.";
    console.error(err);
  }
};
</script>

<template>
  <form class="contact-form" @submit.prevent="sendMessage">
    <UiTheTitle
      text-align="center"
      color="var(--c-primary)"
      style="font-style: italic"
      class="contact-form__grid-item"
      >{{ $props.title }}</UiTheTitle
    >
    <UiScrollReveal
      v-for="field in $props.fields"
      :key="field.id"
      :class="['contact-form__grid-item', field.twoColumns || '']"
    >
      <component
        :is="resolveComponent(field.component)"
        v-model="formData[field.vModel]"
        :input-id="field.id"
        :label="field.label"
        :placeholder="field.placeholder"
        :aria-label="field.ariaLabel"
        :error="errors[field.vModel]"
        @blur="validateFieldOnBlur(field.vModel, formData[field.vModel])"
      />
    </UiScrollReveal>
    <UiScrollReveal class="contact-form__grid-item--button">
      <UiMainButton width="100%">{{ $props.button }}</UiMainButton>
    </UiScrollReveal>
  </form>
</template>

<style lang="scss">
.contact-form {
  padding: var(--s-padding);
  margin: 0 0 var(--s-margin) 0;
  @include background;
  box-shadow: 0 0 3rem #0000003a;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem 1.5rem;
  align-self: center;
  width: 50%;
  @include responsive() {
    padding: 6rem var(--s-padding-mobile) 9rem
      var(--s-padding-mobile);
    width: 100%;
    margin: 0;
    align-self: initial;
    border-radius: 0;
  }
  &__grid-item {
    grid-column: 1 / -1;
    &--two {
      grid-column: span 2;
      @include responsive(80rem) {
        grid-column: 1 / -1;
      }
    }
    &--three {
      grid-column: span 3;
      @include responsive(80rem) {
        grid-column: 1 / -1;
      }
    }
    &--button {
      grid-column: 1 / -1;
    }
    &--policy {
      grid-column: 3 / -1;
      @include responsive(80rem) {
        grid-column: 1 / -1;
      }
    }
  }
}
</style>
