<template>
  <div>
    <HeaderBar>
      <div class="HeaderBar__logo">SomePhotos</div>
    </HeaderBar>

    <PostCard v-for="(post, index) in posts" :postData="post" :key="index" />
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
    font-family: "Satisfy", cursive;
    font-size: 1.65rem;
    margin: 0 auto;
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
      posts: []
    };
  },
  beforeMount() {
    fetch("/data/posts.json")
      .then(res => res.json())
      .then(posts => (this.posts = posts));
  },
  components: { PostCard, HeaderBar }
};
</script>
