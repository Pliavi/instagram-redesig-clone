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
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  transition: all 200ms ease;
  border-radius: var(--radius-full);
  padding: var(--padding-md);

  &:active {
    background: var(--shadow-gray);
  }
}

.-primary {
  background-color: var(--background-primary);
  color: var(--color-white);
  box-shadow: 0 5px 20px var(--shadow-primary);

  &:active {
    background: var(--background-primary-light);
  }
}
</style>
