<template>
  <div class="Photo">
    <img class="Photo__image -blured" :src="src" />
    <img class="Photo__image" :src="src" />
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
  &__image {
    border-radius: var(--radius-md);
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__image.-blured {
    position: absolute;
    z-index: -1;
    height: 50%;
    width: calc(100% - var(--padding-md) * 2);
    left: var(--padding-md);
    bottom: var(--padding-md);
    filter: blur(var(--padding-md));
    opacity: .75;
  }
}
</style>