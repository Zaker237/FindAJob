<template>
  <div id="login">
    <router-link to="/">
      <div class="back-home">
        <img src="../../assets/icons/arrow-up.svg" alt="back to home">
      </div>
    </router-link>
    <form class="container" @submit.prevent="Login">
      <h2>Connectez vous</h2>
      <div class="container-socials">
        <button class="button-google" @click.stop.prevent="LoginGoogle">
          <img src="../../assets/icons/google.svg" alt="google">
          <span>Google</span>
        </button>
      </div>
      <div class="container-error" v-if="isNetworkRequestFailed" >
        <span>Il semblerait que vous n' ayez pas acces a internet</span>
      </div>
      <div class="container-error" v-if="isNotUserExist">
        <span>Cet utilisateur n' existe pas !</span>
        <span>Veuillez creer un compte.</span>
      </div>
      <div class="container-error" v-if="isWrongPassword">
        <span>Mot de passe incorrect !</span>
      </div>
      <div class="container-error" v-if="isTooManyRequests">
        <span>Vous avez effectue' trop de requetes</span>
        <span>Veuillez patienter ....</span>
      </div>
      <div class="container-input">
        <label for="email">Adresse email</label>
        <input v-model="email" id="email" type="email" placeholder="Entrez votre adresse email" required>
      </div>
      <div class="container-input">
        <label for="password">Mot de passe</label>
        <input v-model="password" id="password" type="password" placeholder="Entrez votre mot de passe" required>
      </div>
      <h3 class="container-options">Pas encore un compte ?
        <router-link to="/register">Inscrivez vous</router-link>
      </h3>
      <button type="submit" class="container-button" v-if="!isLoading">
        Se connecter
      </button>
      <button class="container-button" v-else style="cursor: not-allowed;">
        Traitement ...
      </button>
    </form>
  </div>
</template>

<script>
import {getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect} from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      isNotUserExist: false,
      isWrongPassword: false,
      isTooManyRequests: false,
      isNetworkRequestFailed: false,
      auth: getAuth(),
      isLoading: false,
      provider: new GoogleAuthProvider()
    }
  },
  methods: {
    Login() {
      this.isLoading = true;
      this.isNotUserExist = false;
      this.isWrongPassword = false;
      this.isTooManyRequests = false;
      this.isNetworkRequestFailed = false;
      signInWithEmailAndPassword(this.auth, this.email, this.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);

            if (errorCode === "auth/user-not-found") {
              this.isNotUserExist = true;
              this.isLoading = false;
            }

            if (errorCode === "auth/wrong-password") {
              this.isWrongPassword = true;
              this.isLoading = false;
            }

            if (errorCode === "auth/too-many-requests") {
              this.isTooManyRequests = true;
              this.isLoading = false;
            }

            if (errorCode === "auth/network-request-failed"){
              this.isNetworkRequestFailed = true;
              this.isLoading = false;
            }

          });
    },
    LoginGoogle() {
      signInWithRedirect(this.auth, this.provider)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/settings.scss";

#login {
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

  &-error{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    padding: 5px 0;
    border: 2px solid red;
    border-radius: 5px;
    background: rgba(red, 0.05);
    span{
      font-size: 13px;
      font-weight: 500;
      color: red;
      text-align: center;
    }
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
    border-color: transparent;
    transition: .3s ease-in-out;

    span {
      font-weight: 600;
      margin-left: 10px;
    }

    &:hover {
      background: rgb($dark, 0.075);
      box-shadow: none;
    }
  }
}
</style>