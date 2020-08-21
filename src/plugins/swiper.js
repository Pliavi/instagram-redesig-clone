import Vue from "vue";

import {
  Swiper as SwiperClass,
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay
} from "swiper/swiper.esm";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";
import "swiper/swiper-bundle.min.css";

SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay]);
Vue.use(getAwesomeSwiper(SwiperClass));

const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);

Vue.component("swiper", Swiper);
Vue.component("swiper-slide", SwiperSlide);
