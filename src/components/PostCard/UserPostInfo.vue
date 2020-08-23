<template>
  <div class="flex items-center mb-2">
    <img class="w-10 h-10 mr-2 rounded-full" :src="user.photo" />
    <div>
      <div class="font-bold text-gray-800">{{ user.name }}</div>
      <div v-if="location" div class="text-gray-500">{{ location }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user", "location"]
};
</script>
