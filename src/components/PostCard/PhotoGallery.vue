<template>
  <feed-photo v-if="photos.length === 1" :src="photos[0]" />
  <swiper
    v-else
    class="overflow-visible my-swiper"
    ref="mySwiper"
    :options="swiperOptions"
  >
    <swiper-slide v-for="(photo, index) in photos" :key="index">
      <feed-photo :src="photo" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>

    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
import FeedPhoto from "@/components/FeedPhoto";

export default {
  props: {
    photos: { type: Array, required: true }
  },
  data() {
    return {
      swiperOptions: {
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  components: { FeedPhoto }
};
</script>

<style scoped>
.my-swiper {
  --swiper-pagination-color: theme("colors.pink.500");
  --swiper-navigation-color: theme("colors.white");
}
.my-swiper .swiper-pagination {
  position: relative;
  bottom: 0;
}
.my-swiper .swiper-button-next:not(.swiper-button-disabled),
.my-swiper .swiper-button-prev:not(.swiper-button-disabled) {
  opacity: 0.85;
}
</style>
