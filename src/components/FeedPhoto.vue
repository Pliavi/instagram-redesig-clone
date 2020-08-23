<template>
  <div class="relative flex">
    <img
      class="absolute inset-x-0 bottom-0 object-cover w-10/12 mx-auto rounded-2xl photo-blur"
      :class="{
        'animate-pulse bg-gray-300': isLoading
      }"
      :src="src"
      draggable="false"
    />
    <img
      class="relative object-cover w-full rounded-2xl z-1"
      :src="src"
      draggable="false"
      :class="{
        'animate-pulse bg-gray-300': isLoading
      }"
      :style="{
        height: respectedRatioHeight
      }"
      @load="isLoading = false"
      ref="image"
    />
  </div>
</template>

<script>
export default {
  props: ["src"],
  data() {
    return {
      isLoading: true,
      imageWidth: 0
    };
  },
  computed: {
    respectedRatioHeight() {
      const respectedRatioHeight = this.imageWidth / 1.77777778;

      return `${respectedRatioHeight}px`;
    }
  },
  mounted() {
    this.imageWidth = this.$refs.image.offsetWidth;
  }
};
</script>

<style scoped>
.photo-blur {
  filter: blur(20px) saturate(3);
  opacity: 0.65;
}
</style>
