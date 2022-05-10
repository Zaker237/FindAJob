<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {onBeforeMount} from "vue";
import {useRoute, useRouter} from "vue-router";
import { getAuth } from "firebase/auth";

export default {
  name: "App",
  setup() {
    const route = useRoute();
    const router = useRouter();

    onBeforeMount(() => {
      getAuth().onAuthStateChanged(user => {
        if ((user) && (route.path === "/login" || route.path === "/register" || route.path === "/")) {
          router.replace("/dashboard");
        } else {
          router.replace("/login");
        }
      });
    });
  }
}
</script>

<style lang="scss">
@import "assets/styles/settings";
</style>
