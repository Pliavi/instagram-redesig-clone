<template>
  <div>
    <PostCard
      :photos="['https://placekitten.com/640/360','https://placekitten.com/640/360','https://placekitten.com/640/360']"
    />
    <PostCard :photos="['https://placekitten.com/640/360','https://placekitten.com/640/360']" />
    <PostCard :photos="['https://placekitten.com/640/360']" />
  </div>
</template>


<script>
import PostCard from "@/components/PostCard";

export default {
  name: "Home",
  components: { PostCard }
};
</script>
