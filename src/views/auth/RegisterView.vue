<template>
  <div id="register">
    <router-link to="/">
      <div class="back-home">
        <img src="../../assets/icons/arrow-up.svg" alt="back to home">
      </div>
    </router-link>
    <form class="container" @submit.prevent="Register">
      <h2>Enregistrez vous</h2>
      <div class="container-socials">
        <button class="button-google" @click="RegisterGoogle">
          <img src="../../assets/icons/google.svg" alt="google">
          <span>Google</span>
        </button>
      </div>
      <div class="container-input">
        <label for="name">Votre nom</label>
        <input id="name" type="text" placeholder="Entrez votre nom" required>
      </div>
      <div class="container-input">
        <label for="email">Adresse email</label>
        <input v-model="email" id="email" type="email" placeholder="Entrez votre adresse email" required>
      </div>
      <div class="container-input">
        <label for="password">Mot de passe</label>
        <input v-model="password" id="password" type="password" placeholder="Entrez votre mot de passe" required>
      </div>
      <h3 class="container-options">Deja un compte ?
        <router-link to="/login">Connectez vous</router-link>
      </h3>

      <button type="submit" class="container-button">
        S' enregistrer
      </button>
    </form>
  </div>
</template>

<script>
import {getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      auth: getAuth(),
      provider: new GoogleAuthProvider()
    }
  },
  methods: {
    Register() {
      createUserWithEmailAndPassword(this.auth, this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            this.email = "";
            this.password = "";
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
          });
    },
    RegisterGoogle() {
      signInWithPopup(this.auth, this.provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(token, user);
          }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/settings.scss";

#register {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.back-home {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: rgba($dark, 0.05);
  border-radius: 50%;
  transform: rotate(-90deg);
}

.container {
  width: clamp(40%, 400px, 95%);

  h2 {
    font-size: 36px;
    font-weight: 700;
    color: #252F3F;
  }

  &-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;

    label {
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 5px;
    }

    input {
      width: 100%;
      border: 1px solid #E5E7EB;
      border-radius: 4px;
      padding: 10px;
      outline: none;

      &:focus {
        border-color: #bcbec3;
      }
    }
  }

  &-options {
    margin: 10px 0 15px 0;
    font-size: 14px;
    font-weight: 500;
    color: #252F3F;
    text-align: right;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $dark;
    border: 1px solid $dark;
    border-radius: 4px;
    padding: 10px;
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    color: $ligth;
    margin-top: 20px;
    cursor: pointer;
    transition: box-shadow 0.2s ease-in-out;

    &:hover {
      box-shadow: 2px 2px 10px #dfdfdf;
    }
  }

  .button-google {
    background: rgb($dark, 0.05);
    border-width: 2px;

    span {
      font-weight: 600;
      margin-left: 10px;
    }
  }
}
</style>