<template>
  <div
    class="col-6 col-md-3 mb-3 mb-sm-5"
    :key="skills.id"
    v-for="skills in skillsContent"
  >
    <div :class="`c100 ${skills.skillClass}`">
      <span>{{ skills.skillPercent }}%</span>
      <div class="slice">
        <div class="bar"></div>
        <div class="fill"></div>
      </div>
    </div>
    <h6 class="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
      {{ skills.skillName }}
    </h6>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillsContent: [
        { id: 1, skillClass: "p95", skillPercent: "95", skillName: "HTML" },
        {
          id: 2,
          skillClass: "p75",
          skillPercent: "75",
          skillName: "CSS",
        },
        { id: 3, skillClass: "p75", skillPercent: "75", skillName: "JAVASCRIPT" },
        { id: 4, skillClass: "p75", skillPercent: "75", skillName: "VUEJS3" },
        {
          id: 5,
          skillClass: "p95",
          skillPercent: "95",
          skillName: "FIGMA",
        },
        { id: 6, skillClass: "p75", skillPercent: "75", skillName: "NODEJS" },
        { id: 7, skillClass: "p75", skillPercent: "75", skillName: "MONGODB" },
        { id: 8, skillClass: "p75", skillPercent: "75", skillName: "GIT" },
        { id: 9, skillClass: "p65", skillPercent: "65", skillName: "WORDPPRESS" },
        { id: 10, skillClass: "p65", skillPercent: "65", skillName: "BOOSTRAP" },
        { id: 11, skillClass: "p75", skillPercent: "75", skillName: "NODEJS" },
        { id: 12, skillClass: "p55", skillPercent: "55", skillName: "SQL" },
        { id: 13, skillClass: "p55", skillPercent: "55", skillName: "MySQL" },
        { id: 14, skillClass: "p55", skillPercent: "55", skillName: "PHP" },
        { id: 15, skillClass: "p45", skillPercent: "45", skillName: "LARAVEL" },
        { id: 16, skillClass: "p25", skillPercent: "25", skillName: "REACT" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
