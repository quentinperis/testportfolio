<template>
  <div
    class="demo-sticker"
    :style="`${
      previewPage
        ? 'opacity:0;visibility:hidden'
        : 'opacity:1;visibility:visible'
    }`"
    title="Swich Light"
  >
    <a
      style="cursor: pointer"
      @click="
        () => {
          handleDarkMode();
        }
      "
    >
      <i id="sun" class="fa fa-lightbulb-o" aria-hidden="true"></i>
      <i id="moon" class="fa fa-moon-o text-white" aria-hidden="true"></i>
    </a>
  </div>
  <slot></slot>
</template>

<script setup>
import { getMode } from "../utlis/modeToggle";
import { handleDarkMode } from "~/utlis/modeToggle";

const previewPage = ref(useRoute().path == "/");
watch(
  () => useRoute().path,
  () => {
    if (useRoute().path == "/") {
      previewPage.value = true;
    } else {
      previewPage.value = false;
    }
  }
);
const route = useRoute();

const pathName = route.path;

onMounted(() => {
  getMode();
  // Check if the window object is defined
  if (typeof window !== "undefined") {
    // Import the script only on the client side
    import("bootstrap/dist/js/bootstrap.esm").then((module) => {
      // Module is imported, you can access any exported functionality if
    });
  }
});
</script>

<style lang="scss">
@import "bootstrap/dist/css/bootstrap.min.css";
@import "../public/assets/scss/main.scss";
</style>
