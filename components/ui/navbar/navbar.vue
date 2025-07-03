<script setup lang="ts"></script>

<template>
  <div class="navbar">
    <ul class="navbar__links">
      <li>
        <NuxtLink to="/" class="navbar__item">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about-me" class="navbar__item">About me</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact" class="navbar__item">Contact</NuxtLink>
      </li>
    </ul>
    <ul class="navbar__links navbar__links--social">
      <li>
        <NuxtLink
          target="_blank"
          href="https://www.linkedin.com/in/maria-teresa-fernandez-gucciardi"
          class="navbar__item"
          ><icon name="mdi:github" class="navbar__icon"
        /></NuxtLink>
      </li>
      <li>
        <NuxtLink
          target="_blank"
          href="https://github.com/mariatfer"
          class="navbar__item"
          ><icon name="mdi:linkedin" class="navbar__icon"
        /></NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  @include flex(row, center, space-between);
  padding: 1.5rem 3rem;
  background-color: var(--c-aquamarine);

  &__links {
    list-style: none;
    @include flex(row, center, space-between, $gap: 1.5rem);
    padding: 0;

    &--social {
      @include responsive {
        gap: 0.7rem;
      }
    }
  }

  &__item {
    font-size: var(--s-font-h4);
    transition: color 0.3s ease;
    @include flex(row, center);
    @include responsive {
      font-size: var(--s-font-h4-mobile);
    }
    &:hover {
      color: var(--c-primary);
      text-decoration: underline;
    }
  }

  &__icon {
    transition: color 0.3s ease;
    width: 2rem;
    height: 2rem;
    &:hover {
      color: var(--c-primary);
    }
  }
}
</style>
