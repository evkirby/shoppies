<template>
  <div id="firebaseui-auth-container"></div>
</template>

<script lang="ts">
  import { Vue } from "vue-class-component";
  import * as firebaseui from 'firebaseui';
  import 'firebaseui/dist/firebaseui.css';
  import firebase from 'firebase/app';

  export default class CreateAccount extends Vue {

    mounted() {
      this.createAccount();
    }

    createAccount() {
      var ui = new firebaseui.auth.AuthUI(firebase.auth())
 
      ui.start('#firebaseui-auth-container', {
        signInOptions: [
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Other config options...
      });
    }
  }
</script>

<style lang="scss">
  #firebaseui-auth-container {
    top: 100px;
  }
</style>

