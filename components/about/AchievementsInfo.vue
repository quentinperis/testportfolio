<template>
  <div class="row">
    <div
      class="col-6"
      v-for="achievement in achievementsContent"
      :key="achievement.id"
    >
      <div class="box-stats with-margin">
        <h3 class="poppins-font position-relative">
          {{ achievement.title }}
        </h3>
        <p class="open-sans-font m-0 position-relative text-uppercase">
          {{ achievement.subTitle1 }}
          <span class="d-block">{{ achievement.subTitle2 }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      achievementsContent: [
  { id: 1, title: "5", subTitle1: "years of", subTitle2: "experience in France" },
  { id: 2, title: "4", subTitle1: "years spent", subTitle2: "in South America" },
  { id: 3, title: "1", subTitle1: "year of", subTitle2: "career transition into web development" },
  { id: 4, title: "3", subTitle1: "languages spoken : ", subTitle2: "French, English, Spanish" },
]
    };
  },
};
</script>

<style lang="scss" scoped></style>
