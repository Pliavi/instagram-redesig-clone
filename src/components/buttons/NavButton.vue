<template>
  <router-link :to="to" v-slot="{ href, navigate, isExactActive }">
    <rounded-button
      tag="a"
      v-bind="$attrs"
      :variant="variant"
      :href="href"
      :is-active="isExactActive"
      @click="navigate"
    >
      <slot />
    </rounded-button>
  </router-link>
</template>

<script>
import RoundedButton from "./RoundedButton";
export default {
  props: {
    to: { type: String, require: true },
    variant: { type: String }
  },
  components: { RoundedButton }
};
</script>
