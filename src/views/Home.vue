<template>
  <div>
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
</template>

<script>
import PostCard from "@/components/PostCard";

export default {
  name: "Home",
  data() {
    return {
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
  components: { PostCard }
};
</script>
