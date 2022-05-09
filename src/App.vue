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
        if (!user) {
          router.replace("/login");
        } else if (route.path === "/login" || route.path === "/register") {
          router.replace("/");
        }
      });
    });
  }
}
</script>

<style lang="scss">
@import "assets/styles/settings";
</style>
