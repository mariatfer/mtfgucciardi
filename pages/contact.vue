<script setup lang="ts">
import type { Contact } from "@/interfaces/locales/contacts";
const { data: contactLocales } = useLocales<Contact>("contact");
watchEffect(() => {
  if (contactLocales.value?.seo) {
    usePageSeo(contactLocales.value.seo);
  }
});
</script>

<template>
  <div class="contact">
    <UiSEOTitle
      v-if="contactLocales?.seo"
      :meta-title="contactLocales.seo.metaTitle"
    />
    <ViewsContactInfoContact
      v-if="contactLocales?.infoContact"
      v-bind="contactLocales.infoContact"
    />
    <ViewsContactForm
      v-if="contactLocales?.contactForm"
      class="contact__form"
      v-bind="contactLocales.contactForm"
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
