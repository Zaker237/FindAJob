<template>
  <!-- <h1>{{ this.$route.params.id }}</h1> -->
  <Header />
  <div class="job-body">
    <SideBar />
    <div class="body-content">

    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
export default {
  components: { Header, SideBar },
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/settings.scss";
.job-body {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  background: $ligth;
}
.body-content {
  grid-area: 1 / 3 / 2 / 13;
  padding-top: 70px;
  margin-right: 10px;
}

@media screen and (max-width: 1100px) {
  .body-content {
    grid-area: 1 / 4 / 2 / 13;
  }
}

@media screen and (max-width: 700px) {
  .body-content {
    grid-area: 1 / 1 / 2 / 13;
    min-height: 100vh;
    margin: 0 5px 90px 5px;
  }
}
</style>
