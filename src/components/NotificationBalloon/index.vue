<template>
  <div :key="index" class="flex items-start p-3 space-x-4 rounded-md shadow-md">
    <img class="rounded-full" src="https://placekitten.com/48/48" />

    <comment-notification v-bind="$attrs" v-if="variant === 'comment'" />
    <like-notification v-bind="$attrs" v-if="variant === 'like'" />

    <img v-if="thumb" class="rounded-md" :src="thumb" />
  </div>
</template>

<script>
import CommentNotification from "./CommentNotification";
import LikeNotification from "./LikeNotification";

export default {
  props: {
    variant: { type: Object, required: true },
    date: { type: String, required: true },
    thumb: { type: String }
  },
  components: { CommentNotification, LikeNotification }
};
</script>
