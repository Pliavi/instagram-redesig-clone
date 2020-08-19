<template>
  <div>
    <div v-if="pageLoading" class="Loading">
      <img src="@/assets/logo.png" />
    </div>
    <div v-show="!pageLoading">
      <HeaderBar>
        <img class="HeaderBar__logo" src="@/assets/logo.png" />
      </HeaderBar>

      <PostCard
        :metadata="defaultMetadata"
        :photos="[
          'https://picsum.photos/640/360',
          'https://picsum.photos/641/361',
          'https://picsum.photos/642/362'
        ]"
      />
      <PostCard
        :metadata="defaultMetadata"
        :photos="[
          'https://picsum.photos/643/363',
          'https://picsum.photos/644/364'
        ]"
      />
      <PostCard
        :metadata="defaultMetadata"
        :photos="['https://picsum.photos/645/365']"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Loading {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.HeaderBar {
  &__logo {
    margin: auto;
  }
}
</style>

<script>
import PostCard from "@/components/PostCard";
import HeaderBar from "@/components/HeaderBar";

export default {
  name: "Home",
  data() {
    return {
      pageLoading: true,
      defaultMetadata: {
        user: "pliavi",
        location: "Caraguatatuba",
        counters: {
          likes: Math.floor(Math.random() * 999),
          comments: Math.floor(Math.random() * 999),
          shares: Math.floor(Math.random() * 999)
        }
      }
    };
  },
  beforeMount() {
    if (document.readyState == "complete") {
      this.pageLoading = false;
      return;
    }

    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.pageLoading = false;
      }
    };
  },
  components: { PostCard, HeaderBar }
};
</script>
