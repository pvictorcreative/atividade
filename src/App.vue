<template>
  <div id="app">
    <RandomierComponents />
  </div>
</template>

<script>
import RandomierComponents from './components/RandomierComponents.vue';

export default {
  name: 'App',
  components: { RandomierComponents },
};
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
