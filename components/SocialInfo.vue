<template>
  <ul class="social list-unstyled pt-1 mb-5">
    <li v-for="social in SocialShare" :key="social.id">
      <a :href="social.link" target="_blank" rel="noreferrer">
        <i :class="social.iconName"></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      SocialShare: [
        {
          id: 1,
          iconName: "fa fa-linkedin",
          link: "https://www.linkedin.com/in/quentin-peris//",
        },
        { id: 2, iconName: "fa fa-github", link: "https://github.com/quentinperis" },
        // {
        //   id: 3,
        //   iconName: "fa fa-youtube",
        //   link: "https://www.youtube.com/",
        // },
        // { id: 4, iconName: "fa fa-dribbble", link: "https://dribbble.com/" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
