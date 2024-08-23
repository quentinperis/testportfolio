<template>
  <ul class="about-list list-unstyled open-sans-font">
    <li v-for="personalInfo in personalInfoContent" :key="personalInfo.id">
      <span class="title">{{ personalInfo.meta }}: </span>
      <span
        class="value d-block d-sm-inline-block d-lg-block d-xl-inline-block"
      >
        {{ personalInfo.metaInfo }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      personalInfoContent: [
        { id: 1, meta: "first name", metaInfo: "Quentin" },
        { id: 2, meta: "last name", metaInfo: "Peris" },
        { id: 3, meta: "Age", metaInfo: "34 ans" },
        { id: 4, meta: "Nationality", metaInfo: "Français" },
        { id: 5, meta: "Freelance", metaInfo: "Disponible" },
        { id: 6, meta: "Address", metaInfo: "Lille" },
        { id: 7, meta: "phone", metaInfo: "+33675124151" },
        { id: 8, meta: "Email", metaInfo: "quentin.peris@icloud.com" },
        { id: 9, meta: "Skype", metaInfo: " quentin.peris" },
        { id: 10, meta: "langages", metaInfo: "French, English, Spanish" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
