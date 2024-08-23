<template>
  <div class="row home-details-container align-items-center">
    <div
      class="col-lg-4 bg position-fixed d-none d-lg-block hero-img"
      :style="{ backgroundImage: 'url(' + heroContent.heroImage + ')' }"
    ></div>
    <div
      class="col-12 col-lg-8 offset-lg-4 home-details text-center text-lg-start"
    >
      <div>
        <nuxt-img
          :src="heroContent.heroMobileImage"
          class="img-fluid main-img-mobile d-sm-block d-lg-none"
          alt="hero man"
        />
        <h1 class="text-uppercase poppins-font">
          I'm {{ heroContent.heroTitleName }}.
          <span>{{ heroContent.heroDesignation }}</span>
        </h1>
        <p class="open-sans-font">{{ heroContent.heroDescriptions }}</p>
        <button
          class="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <span class="button-text">{{ heroContent.heroBtn }}</span>
          <span class="button-icon fa fa-arrow-right"></span>
        </button>
      </div>
    </div>
  </div>
  <!-- {/* End home-details-container */} -->

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
    >
      <div class="modal-content dark">
        <button class="close-modal" data-bs-dismiss="modal" aria-label="Close">
          <nuxt-img src="/assets/images/cancel.svg" alt="close image" />
        </button>
        <div class="modal-body">
          <div class="box_inner about">
            <div class="title-section text-left text-sm-center">
              <h1>ABOUT <span>ME</span></h1>
              <span class="title-bg">Resume</span>
            </div>
            <!-- {/* End title */} -->
            <IndexMain />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal -->
</template>

<script>
import IndexMain from "../about/IndexMain.vue";
export default {
  data() {
    return {
      heroContent: {
        heroImage: `/assets/images/hero/dark.jpg`,
        heroMobileImage: `/assets/images/hero/img-mobile.jpg`,
        heroTitleName: "quentin peris",
        heroDesignation: "développeur web",
        heroDescriptions: `Je suis développeur web full stack basé à Lille. J'adore créer des sites design et faciles d'utilisation. Je veux continuer d'apprendre sans cesse pour arriver à faire ce qu'il y a de mieux.`,
        heroBtn: "Mes informations",
      },
    };
  },
  components: { IndexMain },
};
</script>

<style lang="scss" scoped></style>
