<template>
  <nav class="NavigationBar">
    <RoundedButton>
      <FeedIcon class="Icon" />
    </RoundedButton>
    <RoundedButton>
      <SearchIcon class="Icon" />
    </RoundedButton>
    <RoundedButton class="-primary">
      <PlusIcon class="PrimaryIcon" />
    </RoundedButton>
    <RoundedButton>
      <ChatIcon class="Icon" />
    </RoundedButton>
    <RoundedButton>
      <ProfileIcon class="Icon" />
    </RoundedButton>
  </nav>
</template>

<script>
import { FeedIcon, SearchIcon, PlusIcon, ChatIcon, ProfileIcon } from "./icons";
import RoundedButton from "./buttons/RoundedButton";

export default {
  name: "NavigationBar",
  components: {
    FeedIcon,
    SearchIcon,
    PlusIcon,
    ChatIcon,
    ProfileIcon,
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
  padding: var(--padding-md);
  place-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--background-wrapper);
  border-radius: var(--radius-md) var(--radius-md) 0 0;
  box-shadow: 0 0 32px var(--shadow-gray);
}

.Icon {
  width: 1.5rem;
  height: 1.5rem;
}
.PrimaryIcon {
  width: 2.25rem;
  height: 2.25rem;
}
</style>
