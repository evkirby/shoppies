<template>
  <div class="container">
    <img id="logo" alt="Shoppies logo" src="./assets/shoppies_logo.png" />
    <div class="maintitle">Shoppies</div>
    <div id="nav">
      <router-link to="/">SIGN IN</router-link> |
      <router-link to="/createaccount">CREATE ACCOUNT</router-link>
    </div>
  </div>
  <router-view />
</template>


<style lang="scss">
#html,
body {
  background-color: #0f151b;
}

.container {
  overflow-y: hidden;
}

.maintitle {
  margin-top: 15px;
  padding-left: 100px;
  font-size: 40px;
  text-align: left;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c5cfda;
}

#logo {
  width: 60px;
  height: 60px;
  position: absolute;
  left: 30px;
  top: 20px;
  float: left;
}

#nav {
  position:absolute;
  text-align: right;
  padding: 30px;
  padding-top: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
