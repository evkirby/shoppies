import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Dialog from "primevue/dialog";
import PrimeVue from "primevue/config";
import firebase from 'firebase/app';
require('firebase/analytics');

const firebaseConfig = {
  apiKey: "AIzaSyAdJZBviWmZd4dU6OBnco-zfLwP2068Vw0",
  authDomain: "shoppies-awards.firebaseapp.com",
  projectId: "shoppies-awards",
  storageBucket: "shoppies-awards.appspot.com",
  messagingSenderId: "174294969680",
  appId: "1:174294969680:web:531acf4419c82bdac55055",
  measurementId: "G-0FQWT6DZ40"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

createApp(App)
  .use(router, store, PrimeVue)
  .component("Dialog", Dialog)
  .mount("#app");
