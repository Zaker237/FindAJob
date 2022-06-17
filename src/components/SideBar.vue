<template>
  <div v-if="isOpen" class="container-alert">
    <div class="card">
      <span>Vous ne pouvez pas voir les offres d' emplois car vous n' avez pas activer votre compte !</span>
      <button @click="closeModal">Compris !</button>
    </div>
  </div>
  <div class="sidebar" id="sidebar">
    <div class="sidebar__container">
      <div class="content">
        <router-link to="/jobs" v-if="isEmailVerified === true" custom
                     v-slot="{ navigate, isActive, isExactActive }">
          <li @click="navigate" @keypress.enter="navigate" role="link"
              :class="[isActive && 'active', isExactActive && 'exactActive']">
            <img src="../assets/icons/offres.svg" alt="jobs">
            <span>Offres</span>
          </li>
        </router-link>
        <li v-if="isEmailVerified === false" @click="openModal">
          <img src="../assets/icons/offres.svg" alt="jobs">
          <span>Offres</span>
        </li>

        <router-link to="/dashboard" custom
                     v-slot="{ navigate, isActive, isExactActive }">
          <li @click="navigate" @keypress.enter="navigate" role="link"
              :class="[isActive && 'active', isExactActive && 'exactActive']">
            <img src="../assets/icons/dashboard.svg" alt="dashboard">
            <span>Dashboard</span>
          </li>
        </router-link>
      </div>
      <div class="content">
        <li id="content-profile" class="content-profile">
          <img :src="photoURL !== null ? photoURL : noPhotoUrl" alt="profile image">
          <div>
            <h3>{{ email }}</h3>
            <span>{{ displayName !== null ? displayName : '' }}</span>
          </div>
        </li>
        <li id="content-logout" class="content-logout" @click="Logout">
          <span>Deconnexion</span>
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import {getAuth, signOut} from "firebase/auth";

export default {
  name: "SideBar",
  setup() {
    const isOpen = ref(false)
    const auth = getAuth()
    const currentUser = auth.currentUser
    const isEmailVerified = ref(currentUser.emailVerified)
    const photoURL = ref(currentUser.photoURL)
    const email = ref(currentUser.email)
    const displayName = ref(currentUser.displayName)
    const noPhotoUrl = 'https://cinbiose.uqam.ca/wp-content/uploads/sites/24/blank-profile-picture-g91ef0370b_1280.png'

    const openModal = () => {
      isOpen.value = true;
    }
    const closeModal = () => {
    isOpen.value = false;
    }
    const Logout = () => {
      signOut(auth)
          .then(() => {
            alert('SUCCESS')
          }).catch((error) => {
        console.log(error);
      });
    }

    return{
      isOpen,
      auth,
      currentUser,
      isEmailVerified,
      photoURL,
      email,
      displayName,
      noPhotoUrl,
      openModal,
      closeModal,
      Logout
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/settings.scss";

.sidebar {
  grid-area: 1 / 1 / 2 / 3;
  background: $white;

  padding-top: 70px;

  position: sticky;
  top: 0;
  height: 100vh;

  border-right: 1px solid #E5E4E1;
}

.sidebar__container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  .content {
    width: 100%;

    li {
      cursor: pointer;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 10px;
      margin: 10px 0;

      img {
        width: 30px
      }

      span {
        font-weight: 500;
        margin-left: 10px;
        color: #4F5B67;
      }

      &:hover {
        background: #F7F7FB;
      }

      &.exactActive {
        position: relative;
        background: #F7F7FB;

        &::before {
          content: '';
          position: absolute;
          background: $primary;
          width: 3px;
          height: 100%;
          right: 0;
        }
      }
    }

    #content-profile {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      border: 1px solid #E5E4E1;
      border-left: none;
      border-right: none;
      padding: 10px;

      img {
        border-radius: 50%;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        margin-left: 5px;

        h3 {
          font-size: 12px;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          overflow-wrap: anywhere;
        }

        span {
          font-size: 11px;
          overflow-wrap: anywhere;
          margin-left: 0;
        }
      }
    }

    #content-logout {
      background: #f4f7f6;

      img {
        width: 30px;
      }

      span {
        color: #4F5B67;
      }
    }

  }

}

@media screen and (max-width: 1100px) {
  .sidebar {
    grid-area: 1 / 1 / 2 / 4;
  }
}

@media screen and (max-width: 700px) {
  .sidebar {
    position: fixed;
    bottom: 0;
    margin: 0;
    top: initial;
    padding: 5px;
    width: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border: 1px solid #E5E4E1;
    height: auto;

    &__container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        li {
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin: 5px;
          border-radius: 10px;

          span {
            font-size: 10px;
            text-align: center;
            margin: 0;
            font-family: 'Inter', sans-serif;
          }

          &.exactActive {
            &::before {
              bottom: 0;
              width: 100%;
              height: 3px;
            }
          }
        }

        #content-profile {
          align-items: center;
          border: initial;
          background: initial;
          margin: 0;
          padding: 5px;

          div {
            margin-left: 0;

            h3 {
              display: none;
            }

            span {

              font-weight: 500;
              text-align: center;
            }
          }

          &::before {
            background: initial;
          }
        }
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