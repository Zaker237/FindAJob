<template>
  <div v-if="isOpen" class="container-alert">
    <div class="card">
      <span>Un mail a ete envoye a <span>{{ email }}</span> veuillez l' ouvrir et activer compte. <br> Ensuite reactualiser la page.</span>
      <button @click="closeModal">Compris !</button>
    </div>
  </div>
  <p v-if="!isEmailVerified" class="verify-email">
    <span @click="verifyEmail">Veuillez verifier votre email pour activer votre compte.</span>
  </p>
  <header class="header" id="header">
    <div class="header__center">
      <div class="header-logo">
        <h2>Find A Job<span>.</span></h2>
      </div>
      <div class="header-options">
        <button>
          <span>Creer une offre</span>
          <img src="../assets/icons/add.svg" alt="add">
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import {ref} from 'vue';
import {getAuth, sendEmailVerification} from "firebase/auth";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  setup() {
    const isOpen = ref(false)
    const auth = getAuth()
    const currentUser = getAuth().currentUser
    const isEmailVerified = ref(currentUser.emailVerified)
    const email = ref(currentUser.email)

    const closeModal = () => {
      isOpen.value = false;
    }
    const verifyEmail = () => {
      sendEmailVerification(this.auth.currentUser)
          .then(() => {
            isOpen.value = true;
          });
    }

    return {
      isEmailVerified,
      isOpen,
      auth,
      currentUser,
      email,
      closeModal,
      verifyEmail
    }
  },
}
</script>

<style lang="scss" scoped>

@import "../assets/styles/settings.scss";

.verify-email {
  display: flex;
  justify-content: center;
  align-items: center;
  background: crimson;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 4;

  span {
    color: $white;
    text-decoration: underline;
    text-align: center;
    padding: 5px 0;
    font-weight: 500;
    cursor: pointer;
    font-size: 15px;
    font-style: italic;
  }
}

#header {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #E5E4E1;
  background: $white;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 3;
}

.header {
  padding: 5px 0;

  &__center {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-logo {
    h2 {
      color: #0D0D54;
      font-weight: 700;

      span {
        color: $purple;
        font-weight: 700;
      }
    }
  }

  &-options {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      cursor: pointer;
      background: $primary;
      border: none;
      border-radius: 30px;
      padding: 12px;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 20px;
        margin-left: 5px;
        display: none;
      }

      span {
        color: $white;
        font-weight: 600;
        font-size: 14px;
      }
    }

    .options-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      border: 2px solid $dark;
      margin-left: 30px;
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