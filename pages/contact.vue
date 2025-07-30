<script setup lang="ts">
import type { Contact } from "@/interfaces/locales/contacts";
const { data } = useLocales<Contact>("contact");
</script>

<template>
  <div class="contact">
    <ViewsContactInfoContact
      v-if="data?.infoContact"
      v-bind="data.infoContact"
    />
    <ViewsContactForm
      v-if="data?.contactForm"
      class="contact__form"
      v-bind="data.contactForm"
    />
  </div>
</template>

<style lang="scss">
.contact {
  @include flex(column, flex-start, flex-start, $gap: 1.5rem);
  @include responsive {
    @include flex(column, $gap: 1.5rem);
  }
}
</style>
