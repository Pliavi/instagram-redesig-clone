<template>
  <nav class="NavigationBar">
    <RoundedButton>
      <font-awesome-icon class="Icon -active" icon="home"></font-awesome-icon>
    </RoundedButton>
    <RoundedButton>
      <font-awesome-icon class="Icon" icon="search"></font-awesome-icon>
    </RoundedButton>
    <RoundedButton class="Button -primary">
      <font-awesome-icon class="PrimaryIcon" icon="plus"></font-awesome-icon>
    </RoundedButton>
    <RoundedButton>
      <font-awesome-icon class="Icon" icon="heart"></font-awesome-icon>
    </RoundedButton>
    <RoundedButton>
      <font-awesome-icon class="Icon" icon="user"></font-awesome-icon>
    </RoundedButton>
  </nav>
</template>

<script>
import RoundedButton from "./buttons/RoundedButton";

export default {
  name: "NavigationBar",
  components: {
    RoundedButton
  }
};
</script>

<style lang="scss" scoped>
.NavigationBar {
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(5, 1fr);
  gap: var(--gap-sm);
  padding: 0 var(--padding-sm);
  place-items: center;
  position: fixed;
  z-index: 100;
  bottom: 0;
  width: 100%;
  background-color: var(--background-wrapper);
  border-radius: var(--radius-md) var(--radius-md) 0 0;
  box-shadow: 0 0 32px var(--shadow-gray);
}

.Button.-primary {
  position: relative;
  bottom: 0.75rem;
}

.Icon {
  width: 1.5rem;
  height: 1.5rem;
  color: gray;
  &.-active {
    color: unset;
  }
}
.PrimaryIcon {
  width: 2rem;
  height: 2rem;
}
</style>
