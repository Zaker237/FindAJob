<template>
  <p v-if="!emailVerified">
    <span @click="verifyEmail">Veuillez verifier votre email pour activer votre compte.</span>
  </p>
  <h1>{{currentUser.email}}</h1>
  <h1>{{displayName}}</h1>
  <h1>{{photoURL}}</h1>
  <button @click="Logout">Deconnexion</button>
</template>

<script>
import { getAuth, signOut, sendEmailVerification } from "firebase/auth";

export default {
  data() {
    return {
      auth: getAuth(),
      currentUser : getAuth().currentUser,
      emailVerified : getAuth().currentUser.emailVerified,
      displayName : getAuth().currentUser.displayName,
      photoURL : getAuth().currentUser.photoURL,
    }
  },
  methods: {
    verifyEmail() {
      sendEmailVerification(this.currentUser)
          .then(() => {
            alert('Email verification sent!');
          });
    },
    Logout() {
      signOut(this.auth)
          .then(() => {
            alert('SUCCESS')
          }).catch((error) => {
            console.log(error);
      });
    },
  },
  // imported 'deleteUser'
  // mounted() {
  //   if (!this.emailVerified) {
  //     setTimeout(() => {
  //       deleteUser(this.currentUser).then(() => {
  //         console.log('User deleted!');
  //       }).catch((error) => {
  //         console.log(error);
  //       });
  //       this.Logout();
  //     }, 1000 * 60 * 60 * 24);
  //   }
  // }
}
</script>

<style scoped>

</style>