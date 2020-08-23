<template>
  <div>
    <div class="flex px-2 mb-4">
      <div class="mr-4" @click="toggleLike">
        <font-awesome-icon
          class="mr-2"
          :class="{ 'text-red-600 like-ping': isLiked }"
          size="lg"
          :icon="[isLiked ? 'fas' : 'far', 'heart']"
        />
        <span>{{ `${isLiked ? counters.likes + 1 : counters.likes}` }}</span>
      </div>

      <div class="mr-4">
        <font-awesome-icon class="mr-2" size="lg" :icon="['far', 'comment']" />
        <span>{{ counters.comments }}</span>
      </div>

      <div class="mr-4">
        <font-awesome-icon
          class="mr-2"
          size="lg"
          :icon="['far', 'share-square']"
        />
        <span>{{ counters.shares }}</span>
      </div>

      <div class="ml-auto" @click="toggleBookmark">
        <font-awesome-icon
          class="mr-2"
          size="lg"
          :icon="[isBookmarked ? 'fas' : 'far', 'bookmark']"
        />
      </div>
    </div>

    <v-clamp
      v-if="caption"
      autoresize
      :max-lines="2"
      class="px-2 whitespace-pre-wrap"
      ellipsis=""
    >
      <template v-slot:before>
        <a :href="user" class="font-bold">{{ user.name }}</a>
      </template>
      {{ caption }}
      <template v-slot:after="{ toggle, clamped }">
        <span v-if="clamped">
          ...
          <span class="font-bold" @click="toggle">Ver mais</span>
        </span>
      </template>
    </v-clamp>
  </div>
</template>

<script>
import VClamp from "vue-clamp";

export default {
  props: {
    counters: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    },
    caption: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      isLiked: false,
      isBookmarked: false
    };
  },
  methods: {
    toggleLike() {
      this.isLiked = !this.isLiked;
      this.$emit("liked");
    },
    toggleBookmark() {
      this.isBookmarked = !this.isBookmarked;
    }
  },
  components: { VClamp }
};
</script>

<style scoped>
.like-ping {
  animation: like-ping 200ms cubic-bezier(0, 0, 0.2, 1);
  animation-iteration-count: 2;
  animation-direction: alternate;
}

@keyframes like-ping {
  0% {
    transform: scale(1) translateY(-5%);
    opacity: 1;
  }
  75%,
  100% {
    transform: scale(1.1) translateY(0);
  }
}
</style>