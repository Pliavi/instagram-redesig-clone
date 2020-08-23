<template>
  <div>
    <header-bar>
      <app-logo />
    </header-bar>

    <PostCard v-for="(post, index) in posts" :post-data="post" :key="index" />
  </div>
</template>

<script>
import PostCard from "@/components/PostCard";
import HeaderBar from "@/components/HeaderBar";
import AppLogo from "@/components/AppLogo";

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
  components: { PostCard, HeaderBar, AppLogo }
};
</script>
