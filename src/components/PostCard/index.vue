<template>
  <div class="px-2 py-4 overflow-hidden">
    <user-post-info :user="postData.user" :location="postData.location" />

    <photo-gallery :photos="postData.photos" />

    <action-box
      :class="postData.photos.length === 1 ? 'mt-4' : 'mt-2'"
      :counters="postData.counters"
      :user="postData.user"
      :caption="postData.caption"
    />
  </div>
</template>

<script>
import PhotoGallery from "./PhotoGallery";
import UserPostInfo from "./UserPostInfo";
import ActionBox from "./ActionBox";

export default {
  props: ["post-data"],
  components: { UserPostInfo, ActionBox, PhotoGallery }
};
</script>
