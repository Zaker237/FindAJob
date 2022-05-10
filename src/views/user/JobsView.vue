<template>
  <Header/>
  <div class="jobs-body">
    <SideBar/>
    <div class="body-content">
      <h1>JOBS</h1>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";

export default {
  components: {Header, SideBar}
}
</script>

<style scoped>

</style>