<template>
  <router-link to="/Job/uid" custom v-slot="{ navigate }">
    <div class="job" @click="navigate">
      
      <button>Postuler</button>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "JobCard",
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/settings.scss";
.job{
  cursor: pointer;
  background: crimson;
}
</style>