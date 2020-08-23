<template>
  <div class="flex flex-col self-stretch flex-grow">
    <div class="text-lg font-bold">
      {{ commented_by }}
    </div>

    <div class="text-gray-600">
      Comentou no seu post
    </div>

    <v-clamp autoresize :max-lines="2" class="my-2"> "{{ comment }}" </v-clamp>

    <div class="text-sm text-gray-500">
      {{ date }}
    </div>
  </div>
</template>

<script>
import VClamp from "vue-clamp";

export default {
  props: {
    commented_by: {
      type: String,
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  components: { VClamp }
};
</script>
