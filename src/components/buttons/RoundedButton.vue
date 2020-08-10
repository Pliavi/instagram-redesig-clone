<template>
  <div class="RoundedButton">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.RoundedButton {
  display: flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  margin: 20px;
  font-size: 2.5rem;
  transition: all 200ms ease;
  border-radius: 50%;

  &:active {
    background: var(--shadow-gray);
  }
}

.-primary {
  width: 58px;
  height: 58px;
  background-color: var(--background-primary);
  color: var(--color-white);
  box-shadow: 0 10px 20px var(--shadow-primary);

  &:active {
    background: var(--background-primary-light);
  }
}
</style>