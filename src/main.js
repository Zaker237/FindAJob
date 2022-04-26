import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import * as firebase from "firebase";

Vue.config.productionTip = false;

// const firebaseConfig = {
//   apiKey: "your-firebase-api-Key",
//   authDomain: "your-firebase-auth-domain",
//   projectId: "your-firebase-id",
//   storageBucket: "your-firebase-storage-bucket",
//   messagingSenderId: "your-firebase-sender-id",
//   appId: "your-firebase-app-id"
// }
//
// firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
