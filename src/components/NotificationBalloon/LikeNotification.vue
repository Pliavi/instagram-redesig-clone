<template>
  <div class="flex flex-col self-stretch flex-grow">
    <div v-html="notificationWhoLikedLegend(liked_by)" />

    <div class="mt-auto text-sm text-gray-500">
      {{ date }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    liked_by: { type: String, required: true },
    date: { type: String, required: true }
  },
  methods: {
    notificationWhoLikedLegend(likedBy) {
      if (likedBy.length > 2) {
        const [firstWhoLiked, secondWhoLiked] = likedBy;

        return `<span class="font-bold">${firstWhoLiked}</span>, <span class="font-bold">${secondWhoLiked}</span> e outras pessoas curtiram sua publicação`;
      }

      if (likedBy.length === 2) {
        const [firstWhoLiked, secondWhoLiked] = likedBy;

        return `<span class="font-bold">${firstWhoLiked}</span> e <span class="font-bold">${secondWhoLiked}</span> curtiram sua publicação`;
      }

      const [whoLiked] = likedBy;

      return `<span class="font-bold">${whoLiked}</span> curtiu sua publicação`;
    }
  }
};
</script>
