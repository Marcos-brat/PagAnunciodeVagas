<template>
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
  font-family: Georgia, 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
