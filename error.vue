<template>
  <template v-if="props.error.statusCode == 404">
    <div class="error_page">
      <div
        class="hero bg-image"
        :style="{ backgroundImage: 'url(/assets/images/404.jpg)' }"
      >
        <div class="content">
          <h1>404!</h1>
          <p>The page you are looking for could not be found.</p>

          <div class="button">
            <nuxt-link to="/">BACK TO HOME</nuxt-link>
          </div>
          <!-- {/* End purchase_button */} -->
        </div>
      </div>
      <!-- {/* End .hero */} -->
    </div>
  </template>
  <template v-else>
    <div class="fs-22 mt-50 mb-50" style="min-height: calc(100vh - 200px)">
      An error found with {{ props.error.statusCode }} status code
    </div>
  </template>
</template>

<script setup>
const props = defineProps({
  error: Object,
});
useSeoMeta({
  title: ` ${
    props.error.statusCode == 404 ? "Page not found" : "An error found"
  }  ||  Tunis - Personal Portfolio Vue Nuxtjs Template.`,
  description: " Tunis - Personal Portfolio Vue Nuxtjs Template.",
});
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.min.css";
@import "./public/assets/scss/main.scss";
</style>
