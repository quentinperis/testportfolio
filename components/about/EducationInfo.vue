<template>
  <ul>
    <li v-for="education in educationContent" :key="education.id">
      <div class="icon">
        <i class="fa fa-briefcase"></i>
      </div>
      <span class="time open-sans-font text-uppercase">{{
        education.year
      }}</span>
      <h5 class="poppins-font text-uppercase">
        {{ education.degree }}
        <span class="place open-sans-font">{{ education.institute }}</span>
      </h5>
      <p class="open-sans-font">{{ education.details }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      educationContent: [
        {
          id: 1,
          year: "2024 - 2026",
          degree: "CONCEPTEUR DEVELOPPEUR APPLICATION",
          institute: "2I ACADEMY",
          details: ` Seeking a Contrat de Professionnalisation starting at the end of September 2024.`,
        },
        {
          id: 2,
          year: "2023 - 2024",
          degree: "DWWM - Développeur Web et Web Mobile",
          institute: "M2I FORMATION",
          details: `Graduated in July 2024, I am currently in a CDA booster training program.`,
        },
        {
          id: 3,
          year: "2016",
          degree: "MASTER DEGREE",
          institute: "ISCID-CO",
          details: `Master's degree in International Business, with 4 years spent in South America.`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
