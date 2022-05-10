<template>
  <div class="sidebar" id="sidebar">
    <div class="sidebar__container">
      <div class="sidebar-top">
        <router-link to="/jobs" v-if="isEmailVerified === true">
          <li>
            <img src="../assets/icons/offres.svg" alt="jobs">
            <span>Offres</span>
          </li>
        </router-link>
          <li v-if="isEmailVerified === false">
            <img src="../assets/icons/offres.svg" alt="jobs">
            <span>Offres</span>
          </li>
        <router-link to="/dashboard">
          <li>
            <img src="../assets/icons/dashboard.svg" alt="dashboard">
            <span>Dashboard</span>
          </li>
        </router-link>
      </div>
      <div class="sidebar-bottom">
        <button @click="Logout">Deconnexion</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  name: "SideBar",
  data() {
    return {
      auth: getAuth(),
      isEmailVerified : getAuth().currentUser.emailVerified,
    };
  },
  methods:{
    Logout() {
      signOut(this.auth)
          .then(() => {
            alert('SUCCESS')
          }).catch((error) => {
        console.log(error);
      });
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/settings.scss";

.sidebar{
  grid-area: 1 / 1 / 2 / 3;
  height: 100vh;
  background: $white;
  border-right: 2px solid rgba($dark, 0.05);
}
</style>