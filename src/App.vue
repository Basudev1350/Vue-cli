<template>
  <div id="app">
   <router-link to="/" class="aa">Home</router-link>
     <router-link to="/About" class="aa">About</router-link>
    <router-link to="/Service" class="aa">Service</router-link>
      <router-view></router-view>
  </div>
</template>
<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
export default {
  name: 'App',
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.aa {
    margin-left: 25px;
}
</style>
