<template>
  <div id="app">
    <Sortedor />
  </div>
</template>

<script>
import Sortedor from './components/Sortedor.vue';

export default {
  name: 'App',
  components: { Sortedor },
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
