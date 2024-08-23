<template>
  <ul>
    <li v-for="experience in experienceContent" :key="experience.id">
      <div class="icon">
        <i class="fa fa-briefcase"></i>
      </div>
      <span class="time open-sans-font text-uppercase">{{
        experience.year
      }}</span>
      <h5 class="poppins-font text-uppercase">
        {{ experience.position }}
        <span class="place open-sans-font">{{ experience.compnayName }}</span>
      </h5>
      <p class="open-sans-font">{{ experience.details }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      experienceContent: [
        {
          id: 1,
          year: "   2018 - 2023",
          position: " Technician",
          compnayName: "CARSAT",
          details: `After 4 years in a permanent position, I decided to start a career change.`,
        },
        {
  id: 2,
  year: "2015 - 2017",
  position: "CEO",
  compnayName: "Boutique Magnifique",
  details: `From 2015 to 2017 in Chile, I was the CEO of a ready-to-wear boutique called Magnifique.`,
},
{
  id: 3,
  year: "2015",
  position: "Commercial Representative",
  compnayName: "IE COMEX",
  details: `In Chile, I worked as a Commercial Representative for SMEs seeking to export.`,
}
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
