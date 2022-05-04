<template>
  <div id="register">
    <div class="container">
      <h2>Enregistrez vous</h2>
      <div class="container-input">
        <label for="name">Votre nom</label>
        <input id="name" type="text" placeholder="Entrez votre nom">
      </div>
      <div class="container-input">
        <label for="email">Adresse email</label>
        <input id="email" type="email" placeholder="Entrez votre adresse email">
      </div>
      <div class="container-input">
        <label for="password">Mot de passe</label>
        <input id="password" type="password" placeholder="Entrez votre mot de passe">
      </div>
      <h3 class="container-options">Deja un compte ? <router-link to="/login">Connectez vous</router-link></h3>
      <router-link to="/">
        <button class="container-button">
          S' enregistrer
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView"
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/settings.scss";

#register{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
}
</style>