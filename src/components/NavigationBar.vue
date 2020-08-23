<template>
  <nav
    class="fixed bottom-0 z-30 grid w-full h-12 grid-cols-5 bg-white shadow-top-md rounded-t-xl navigation-bar"
  >
    <nav-button to="/">
      <font-awesome-icon class="Icon" size="lg" icon="home"></font-awesome-icon>
    </nav-button>
    <nav-button to="/#search">
      <font-awesome-icon
        class="Icon"
        size="lg"
        icon="search"
      ></font-awesome-icon>
    </nav-button>
    <nav-button
      to="/#upload"
      variant="primary"
      class="flex items-center justify-center w-12 h-12 mb-3 -mt-3 shadow-lg-primary"
    >
      <font-awesome-icon
        class="PrimaryIcon"
        size="lg"
        icon="plus"
      ></font-awesome-icon>
    </nav-button>
    <nav-button to="/notifications">
      <font-awesome-icon
        class="Icon"
        size="lg"
        icon="heart"
      ></font-awesome-icon>
    </nav-button>
    <nav-button to="/#user">
      <font-awesome-icon class="Icon" size="lg" icon="user"></font-awesome-icon>
    </nav-button>
  </nav>
</template>

<script>
import NavButton from "./buttons/NavButton";

export default {
  name: "NavigationBar",
  components: {
    NavButton
  }
};
</script>

<style>
.navigation-bar {
  justify-items: center;
}

.shadow-lg-primary {
  box-shadow: 0 8px 15px -3px #e91e63aa, 0 4px 6px -2px #e91e6388;
}
</style>
