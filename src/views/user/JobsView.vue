<template>
  <Header />
  <div class="jobs-body">
    <SideBar/>
    <div class="body-content">
      <JobCard />
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import JobCard from "@/components/JobCard";

export default {
  components: {JobCard, Header, SideBar}
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/settings.scss";
.jobs-body{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  background: $white;
}
.body-content{
  grid-area: 1 / 3 / 2 / 13;
  background: $gray;
  padding-top: 70px;
}

@media screen and (max-width: 1100px) {
  .body-content{
    grid-area: 1 / 4 / 2 / 13;
  }
}

@media screen and (max-width: 700px) {
  .body-content{
    grid-area: 1 / 1 / 2 / 13;
    min-height: 100vh;
  }
}
</style>