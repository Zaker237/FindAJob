<template>
  <div v-if="isOpen" class="container-alert">
    <div class="card">
      <span>Vous ne pouvez pas voir les offres d' emplois car vous n' avez pas activer votre compte !</span>
      <button @click="closeModal">Compris !</button>
    </div>
  </div>
  <div class="sidebar" id="sidebar">
    <div class="sidebar__container">
      <router-link to="/jobs" v-if="isEmailVerified === true">
        <li>
          <img src="../assets/icons/offres.svg" alt="jobs">
          <span>Offres</span>
        </li>
      </router-link>
      <a href="#"  v-if="isEmailVerified === false" @click="openModal">
        <li>
          <img src="../assets/icons/offres.svg" alt="jobs">
          <span>Offres</span>
        </li>
      </a>
      <router-link to="/dashboard">
        <li>
          <img src="../assets/icons/dashboard.svg" alt="dashboard">
          <span>Dashboard</span>
        </li>
      </router-link>
      <a href="#" @click="Logout">
        <li class="logout">
          <img src="../assets/icons/logout.svg" alt="logout">
          <span>Deconnexion</span>
        </li>
      </a>
    </div>
  </div>
</template>

<script>
import {getAuth, signOut} from "firebase/auth";

export default {
  name: "SideBar",
  data() {
    return {
      isOpen: false,
      auth: getAuth(),
      isEmailVerified: getAuth().currentUser.emailVerified,
    };
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
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

.sidebar {
  grid-area: 1 / 1 / 2 / 4;
  background: $white;
  margin: 10px;
  padding: 10px;
  border: 2px solid #E5E4E1;
  border-radius: 10px;

  position: sticky;
  height: 300px;
}

.sidebar__container {
  display: flex;
  flex-direction: column;
  height: 100%;

  a{
    width: 100%;
  }

  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    background: rgba($dark, 0.05);

    img {
      width: 30px
    }

    span {
      font-weight: 500;
      margin-left: 10px;
    }
  }

  .logout{
    background: rgba(crimson, 0.1);
    margin-top: 60px;
  }
}



@media screen and (max-width: 930px) {
  .sidebar {
    position: fixed;
    bottom: 0;
    margin: 0;
    padding: 5px;
    width: 100%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: none;
    height: auto;

    &__container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      a{
        margin: 0 5px;
      }
      li {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        span {
          font-size: 12px;
          text-align: center;
          margin: 0;
        }
      }
      .logout{
        margin: 0;
      }
    }
  }
}

.container-alert {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);

  .card {
    width: clamp(40%, 400px, 95%);
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: $white;

    span {
      color: $dark;
      text-align: left;
      padding: 5px;
      font-weight: 500;

      span {
        font-weight: 600;
        text-decoration: underline;
        padding: 0;
      }
    }

    button {
      background: crimson;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      padding: 10px;
      color: $white;
      font-weight: 500;
      align-self: flex-end;
    }
  }
}
</style>