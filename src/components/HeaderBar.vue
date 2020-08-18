<template>
  <div class="HeaderBar">
    <div class="HeaderBar__left"><slot name="left"></slot></div>
    <div class="HeaderBar__middle"><slot></slot></div>
    <div class="HeaderBar__right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.HeaderBar {
  display: flex;
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  height: 52px;
  background: white;
  z-index: 100;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 -1px 6px var(--shadow-gray);
  padding: 0.75rem;

  &__left,
  &__right,
  &__middle {
    display: flex;
    align-items: center;
    justify-items: center;
    &.-align-left{
      justify-items: flex-start;
    }
    &.-align-right{
      justify-items: flex-end;
    }
    &.-align-center{
      justify-items: center;
    }
  }

  &__left,
  &__right {
    flex: 0 1;
  }
  &__middle {
    flex: 1;
    margin: 0 var(--margin-md);
  }
  &__right {
    text-align: right;
  }
}
</style>
