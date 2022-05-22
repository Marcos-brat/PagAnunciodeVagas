<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <jobPanel/>
</template>

<script>
import jobPanel from './components/jobPanel.vue'

export default {
  name: 'App',
  components: {
    jobPanel,
  }
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
</style>
