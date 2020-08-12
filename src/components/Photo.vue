<template>
  <div class="Photo">
    <img class="Photo__image -blured" :src="src" draggable="false" />
    <img class="Photo__image" :src="src" draggable="false" />
  </div>
</template>

<script>
export default {
  name: "Photo",
  props: ["src"]
};
</script>

<style lang="scss" scoped>
.Photo {
  position: relative;
  width: 100%;
  height: 100%;

  &__image {
    border-radius: var(--radius-md);
    width: 100%;
    height: 100%;
    max-height: 90vh;
    object-fit: cover;
  }

  &__image.-blured {
    position: absolute;
    z-index: -1;
    width: calc(100% - var(--padding-md) * 2);
    left: var(--padding-md);
    bottom: 0;
    filter: blur(20px) saturate(3);
    opacity: 0.65;
  }
}
</style>
