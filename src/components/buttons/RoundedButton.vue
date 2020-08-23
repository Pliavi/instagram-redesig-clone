<template>
  <component
    :is="tag"
    class="flex items-center content-center transition-colors rounded-full"
    :class="{
      'bg-pink-500 text-white': variant === 'primary',

      'bg-transparent text-gray-500': !variant && !isActive,
      'bg-transparent text-gray-700': !variant && isActive
    }"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "button"
    },
    variant: String,
    isActive: Boolean
  }
};
</script>
