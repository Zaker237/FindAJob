import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlgyANTqqFark6TkJ5f9GtnsGl7PeZ3ng",
  authDomain: "findajob-f22d4.firebaseapp.com",
  databaseURL:
    "https://findajob-f22d4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "findajob-f22d4",
  storageBucket: "findajob-f22d4.appspot.com",
  messagingSenderId: "511888801631",
  appId: "1:511888801631:web:fd77919b257456664600ea",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// init firestore service
const db = getFirestore();
export default db;

createApp(App).use(store).use(router).mount("#app");
