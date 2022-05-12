<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {onBeforeMount} from "vue";
import { useRouter, useRoute} from "vue-router";
import { getAuth, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";

export default {
  name: "App",
  setup() {
    const route = useRoute();
    const router = useRouter();

    onBeforeMount(() => {
      getAuth().onAuthStateChanged(user => {
        if (user) {
          const credentials = EmailAuthProvider.credential(
              "leonel.ngoya@yahoo.com",
              "qwerty"
          )
          reauthenticateWithCredential(user,credentials)
            .then(() => {
              console.log('User is now authenticated');
            })
            .catch(() => {
              console.log('User is not authenticated')
              router.push("/login");
            });
          if (route.path === "/" || route.path === "/login" || route.path === "/register") {
            router.push("/dashboard");
          }
          console.log("CONNECTED");
          if ((user.emailVerified === false ) && (route.path === "/jobs")) {
            router.push("/dashboard")
            console.log('User is not verified')
          }
        } else {
          if (route.path !== "/" && route.path !== "/login" && route.path !== "/register") {
            router.push("/");
          }
          console.log("DECONNECTED");
        }
      });
    });
  }
}
</script>

<style lang="scss">
@import "assets/styles/settings";
</style>
