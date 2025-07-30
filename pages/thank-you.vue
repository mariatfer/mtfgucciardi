<script setup lang="ts">
import type { ThankYou } from "@/interfaces/locales/thank-you";

const { data } = useLocales<ThankYou>("thank-you");
const { isResponsiveResolution } = useWindowsResize();

const textAlign = computed(() =>
  isResponsiveResolution.value ? "center" : "left"
);
</script>

<template>
  <div class="thank-you">
    <UiTheTitle
      v-if="data?.title"
      :text-align="textAlign"
      color="var(--c-primary)"
      :shadow="false"
      :uppercase="true"
      :bolder="true"
      >{{ data.title }}</UiTheTitle
    >
    <section v-if="data" class="thank-you__message">
      <h4>{{ data.subtitle }}</h4>
      <div class="line" />
      <p v-for="paragraph in data.paragraphs" :key="paragraph.id">
        <template v-for="part in paragraph.parts" :key="part">
          <span v-if="typeof part === 'string'">{{ part }}</span>
          <NuxtLink
            v-else-if="part.type === 'email'"
            :href="'mailto:' + part.value"
            class="thank-you__email"
          >
            {{ part.value }}
          </NuxtLink>
        </template>
      </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.thank-you {
  margin: var(--s-margin) 0;
  padding: 0 var(--s-padding);
  @include responsive {
    margin: var(--s-margin-mobile) 0;
    padding: 0 var(--s-padding-mobile);
  }
  &__message {
    @include flex(column, $gap: 1.5rem);
    @include background;
    margin: 2rem auto var(--s-margin) auto;
    padding: var(--s-padding);
    max-width: 62.5rem;
    box-shadow: 0 0 3rem #0000003a;
    text-align: center;

    @include responsive {
      margin: 1rem 0 0 0;
      padding: 4rem var(--s-padding-mobile);
    }
  }
  &__email {
    font-weight: 600;
    text-shadow: 0 0 0.6rem rgba(59, 59, 59, 0.096);
    background: linear-gradient(
      to right,
      #ff8724 20%,
      #ffd000 30%,
      #ffa600 70%,
      #ff8d21 80%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 500% auto;
    animation: textShine 5s ease-in-out infinite alternate;
    &:hover {
      background-size: 200% auto;
      animation: scanLight 2.5s linear infinite;
      text-shadow:
        0 0 1rem #ff730069,
        0 0 1.5rem #ffa6004f;
    }
  }
}

@keyframes textShine {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

@keyframes scanLight {
  0% {
    background-position: -150% 0;
  }
  100% {
    background-position: 150% 0;
  }
}
.line {
  width: 100%;
  height: 0.1875rem;
  background-color: var(--c-primary);
}
</style>
