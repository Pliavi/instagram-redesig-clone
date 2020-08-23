<template>
  <div id="app" class="mt-12 mb-16">
    <router-view />
    <navigation-bar />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar";

export default {
  components: { NavigationBar }
};
</script>
