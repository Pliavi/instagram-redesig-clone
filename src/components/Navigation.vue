<template>
  <nav class="NavigationBar">
    <RoundedButton>
      <FeedIcon class="Icon"/>
    </RoundedButton>
    <RoundedButton>
      <SearchIcon class="Icon"/>
    </RoundedButton>
    <RoundedButton class="-primary">
      <PlusIcon class="Icon"/>
    </RoundedButton>
    <RoundedButton>
      <ChatIcon class="Icon"/>
    </RoundedButton>
    <RoundedButton>
      <ProfileIcon class="Icon"/>
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
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  position: fixed;
  bottom: 0;
  gap: var(--margin-sm);
  width: 100%;
  background-color: var(--background-wrapper);
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  box-shadow: 0 0 16px var(--shadow-gray);
}

.Icon {
  width: 42px;
  height: 42px;
}
</style>
