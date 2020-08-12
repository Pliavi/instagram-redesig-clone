<template>
  <div class="HeaderBar">
    <img class="HeaderBar__logo" src="@/assets/logo.png" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.HeaderBar {
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  background: white;
  z-index: 100;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 -1px 6px var(--shadow-gray);
  padding: 0.75rem 0 0.5rem;
  &__logo {
    height: 32px;
  }
}
</style>
