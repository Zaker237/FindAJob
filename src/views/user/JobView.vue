<template>
  <h1>{{ this.$route.params.id }}</h1>
  <Header />
  <div class="jobs-body">
    <SideBar />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
export default {
  components: { Header, SideBar },
};
</script>

<style scoped></style>
