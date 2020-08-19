<template>
  <div id="app">
    <router-view />
    <NavigationBar />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";

export default {
  components: { NavigationBar }
};
</script>

<style lang="scss">
#app {
  margin-bottom: 72px; /* It's the navigation height */
  margin-top: 52px; /* It's the header height */
}
</style>
