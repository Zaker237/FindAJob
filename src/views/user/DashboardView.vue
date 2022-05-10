<template>
  <h1>Hello {{name}}</h1>
  <button @click="Logout">Deconnexion</button>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  data() {
    return {
      auth: getAuth(),
    }
  },
  methods: {
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

<style scoped>

</style>