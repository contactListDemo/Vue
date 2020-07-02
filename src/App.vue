<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Contact List</router-link> |
      <router-link to="/create-Contact">Create Contact</router-link>
    </div>
    <router-view/>
    <div class="message" v-if="showActionMsg"><p :style="{background:colorCode}">{{btnActionMSg}}</p></div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  mounted(){
    this.$store.dispatch('loadAllContactData')
  },

  computed:{
    ...mapState(['showActionMsg','btnActionMSg','colorCode'])
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
a{
    color:#000
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.message{
  width: 100%;
  position: fixed;
  bottom: 0;
}

.message p{
    max-width: 500px;
    margin: 0 auto;
    color: #fff;
    padding: 2rem 0;
}
</style>
