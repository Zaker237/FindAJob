<template>
  <div v-if="isOpen" class="container-alert">
    <div class="card">
      <span>Votre profile a bien ete mis a jour :)</span>
      <button @click="closeModal">Compris !</button>
    </div>
  </div>
  <Header/>
  <div class="dashboard-body">
    <SideBar/>
    <div class="body-content">
      <div class="content-header">
        <button @click="showModal">
          <span>Terminer le profil</span>
          <span>Editer le profil</span>
        </button>
        <button @click="updateProfileFunc">Mettre a jour</button>
      </div>
      <JobCard />
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import {getAuth, updateProfile} from "firebase/auth";
import SideBar from "@/components/SideBar";
import Header from "@/components/Header";
import JobCard from "@/components/JobCard";

export default {
  components: {JobCard, Header, SideBar},
  setup() {
    const isOpen = ref(false);
    const auth = getAuth();
    const currentUser = getAuth().currentUser;
    const isEmailVerified = ref(currentUser.emailVerified);
    const displayName = ref(currentUser.displayName);
    const photoURL = ref(currentUser.photoURL);

    const closeModal = () => {
      isOpen.value = false;
    }
    const updateProfileFunc = () => {
      updateProfile(currentUser, {
        displayName: "L",
        photoURL: "https://lndev.me/img/csharp.png"
      })
          .then(() => {
            isOpen.value = true;
          }).catch((error) => {
        console.log("Error updating profile: ", error);
      });
    }

    return {isOpen, auth, isEmailVerified, displayName, photoURL, closeModal, updateProfileFunc};
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/settings.scss";

.dashboard-body {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  background: $white;
}

.body-content {
  grid-area: 1 / 3 / 2 / 13;
  background: $white;
  padding-top: 70px;
  margin-right: 10px;
}

.content-header {
  width: 100%;
  height: 100px;
  border: 1px solid #E5E4E1;
  border-radius: 10px;

  button {
    padding: 10px;
    background: $success;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    span {
      color: $white;
      font-weight: 600;
    }
  }
}

@media screen and (max-width: 1100px) {
  .body-content {
    grid-area: 1 / 4 / 2 / 13;
  }
}

@media screen and (max-width: 700px) {
  .body-content {
    margin-right: 0;
    padding: 65px 5px 85px 5px;
    grid-area: 1 / 1 / 2 / 13;
    min-height: 100vh;
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
  z-index: 3;

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
      background: $success;
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