<template>
  <div class="job">
    <div class="job-img">
      <img src="" alt="">
    </div>
    <div class="job-title">
      <h3>{{ job.title }}</h3>
    </div>
    <button>Postuler</button>
  </div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      job: {
        title: "FrontEnd Developer",
        description: "This post is about a frontend developer with minimum 2 years of experience.",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fjob&psig=AOvVaw0Yow_0KslRx41sR8d6GP_s&ust=1652320942643000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMDp2Kut1vcCFQAAAAAdAAAAABAD",
        date: "11 - 05 -2022",
        status: "CDI",
        salary: 500000,
      }
    }
  },
}
</script>

<style scoped>

</style>