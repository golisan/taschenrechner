<template>
  <div id="app">
    <Rechner></Rechner>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
<script>
import Rechner from "./views/Rechner";
export default {
  components: { Rechner }
};
</script>
