<template>
  <component
    :is="tag"
    v-bind="$attrs"
    class="RoundedButton"
    active-class="-active"
    exact-active-class="-exact-active"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "button"
    }
  }
};
</script>

<style lang="scss" scoped>
.RoundedButton {
  display: flex;
  box-sizing: border-box;
  border: 0;
  background: transparent;
  align-items: center;
  justify-content: center;
  font-size: 100%;
  transition: all 200ms ease;
  border-radius: var(--radius-full);
  padding: var(--padding-md);
  color: var(--text-light);

  &:active {
    background: var(--shadow-gray);
    color: var(--text-color);
  }
}

.RoundedButton.-exact-active ::v-deep > * {
  color: var(--text-color);
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
