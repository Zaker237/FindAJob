<template>
  <Header />
  <div class="dashboard-body">
    <SideBar/>
    <div class="body-content">
      <h1>DASHBOARD</h1>
    </div>
    <div class="body-options">

    </div>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";

export default {
  components: {Header, SideBar},
  data() {
    return {
      auth: getAuth(),
      currentUser : getAuth().currentUser,
      isEmailVerified : getAuth().currentUser.emailVerified,
      displayName : getAuth().currentUser.displayName,
      photoURL : getAuth().currentUser.photoURL,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/settings.scss";
.dashboard-body{
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;
}
.body-content{
  grid-area: 1 / 3 / 2 / 10;
  background: crimson;
}
.body-options{
  grid-area: 1 / 10 / 2 / 13;
  background: cadetblue;
}
</style>