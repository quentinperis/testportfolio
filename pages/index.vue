<template>
  <section class="banner text-center">
    <div class="content">
      <h1>Quentin</h1>
      <h2>Bienvenue dans mon Portfolio</h2>
    </div>
  </section>
  <!-- {/* End .banner */} -->

  <section class="demo dark">
    <div class="container">
      <div class="row">
        <div
          class="col-xs-12 col-sm-6 col-md-6"
          v-for="preview in previewDemo"
          :key="preview.id"
          data-aos="fade-up"
          data-aos-duration="1200"
          :data-aos-delay="preview.delayAnimation"
        >
          <div class="content text-center">
            <div class="bg_container">
              <nuxt-link
                :href="preview.routerPath"
                @click="() => handleDarkMode(preview.mode)"
              >
                <nuxt-img
                  :src="preview.img"
                  alt="demo"
                  class="img-responsive screenshot"
                />
              </nuxt-link>
            </div>
            <h2 class="demo-title">{{ preview.title }}</h2>
            <div class="anchor">
              <h6>
                <nuxt-link
                  class="btn"
                  :href="preview.routerPath"
                  @click="() => handleDarkMode(preview.mode)"
                >
                  view demo
                </nuxt-link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- {/* End .Demo */} -->

  <footer>
    <div class="go_purchase">
      <h6 data-aos="fade-up" data-aos-duration="1200">
        You are at the right step now
      </h6>
      <h3 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
        Purchase Tunis & Build Your
        <span class="theme-color">Vue NuxtJS 3</span> &amp;
        <span class="theme-color">Bootstrap 5 </span> Based Portfolio Template.
      </h3>
      <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
        <a
          class="button"
          href="https://fr.linkedin.com/in/quentin-peris"
          target="_blank"
          rel="noreferrer"
        >
          <span class="button-text"> Mon Linkedin</span>
          <span class="button-icon fa fa-arrow-right"></span>
        </a>
      </div>
    </div>
    <!-- {/* End go_purchase */} -->

    <div class="text-center footer_copyright">
      <h6>Tunis - Personal Portfolio Vue Nuxtjs Template</h6>
      <h5>
        &copy; {{ new Date().getFullYear() }} Designed with
        <span class="heart">&#10084;</span> by
        <a
          href="https://themeforest.net/user/ib-themes"
          target="_blank"
          rel="noreferrer"
        >
          ib-themes
        </a>
      </h5>
    </div>
  </footer>
  <!-- {/* End footer */} -->
</template>

<script setup>
import { handleDarkMode } from "~/utlis/modeToggle";

useSeoMeta({
  title: "preview ||  Tunis - Personal Portfolio Vue Nuxtjs Template",
});
const previewDemo = ref([
  {
    id: 1,
    img: "/assets/images/intro/dark.jpg",
    title: "Dark Demo Portfolio",
    routerPath: "/home",
    mode: "dark",
    delayAnimation: "0",
  },
  {
    id: 2,
    img: "/assets/images/intro/light.jpg",
    title: "Light Demo Portfolio",
    routerPath: "/home",
    mode: "light",
    delayAnimation: "50",
  },
]);
</script>

<style lang="scss" scoped></style>
