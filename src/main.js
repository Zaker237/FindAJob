import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAlgyANTqqFark6TkJ5f9GtnsGl7PeZ3ng",
    authDomain: "findajob-f22d4.firebaseapp.com",
    projectId: "findajob-f22d4",
    storageBucket: "findajob-f22d4.appspot.com",
    messagingSenderId: "511888801631",
    appId: "1:511888801631:web:fd77919b257456664600ea"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
