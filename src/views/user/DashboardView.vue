<template>
  <Header />
  <div class="dashboard-body">
    <SideBar/>
    <div class="body-content">
      <JobView />
    </div>
    <div class="body-options">

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
  grid-column-gap: 10px;
  grid-row-gap: 0px;
  background: $white;
}
.body-content{
  grid-area: 1 / 4 / 2 / 10;
  margin: 10px;
  padding: 10px;
  border: 2px solid #E5E4E1;
  border-radius: 10px;
  padding-top: 70px;
}
.body-options{
  grid-area: 1 / 10 / 2 / 13;
  margin: 10px;
  padding: 10px;
  border: 2px solid #E5E4E1;
  border-radius: 10px;
  padding-top: 70px;
}
</style>