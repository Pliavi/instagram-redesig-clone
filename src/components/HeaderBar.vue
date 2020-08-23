<template>
  <div
    class="fixed top-0 z-30 flex items-center justify-center w-full h-12 py-3 bg-white shadow"
  >
    <div class="flex items-center justify-center w-12 h-12">
      <slot name="left"></slot>
    </div>
    <div class="flex-grow">
      <slot></slot>
    </div>
    <div class="flex items-center justify-center w-12 h-12">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>
