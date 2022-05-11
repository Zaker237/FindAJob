<template>
  <Header />
  <div class="dashboard-body">
    <SideBar/>
    <div class="body-content">
      <JobView />

    </div>
  </div>
</template>

<script>
import { getAuth } from "firebase/auth";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import JobView from "@/views/user/JobView";

export default {
  components: {JobView, Header, SideBar},
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
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  background: $white;
}
.body-content{
  grid-area: 1 / 3 / 2 / 13;
  background: $gray;
  padding-top: 70px;
}
</style>