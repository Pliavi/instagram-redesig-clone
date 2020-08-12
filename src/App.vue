<template>
  <div id="app">
    <HeaderBar />
    <router-view />
    <NavigationBar />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";
import HeaderBar from "./components/HeaderBar";

export default {
  components: { HeaderBar, NavigationBar }
};
</script>

<style lang="scss">
#app {
  margin-bottom: 72px; /* It's the navigation height */
  margin-top: 52px; /* It's the header height */
}
</style>