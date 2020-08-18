import Vue from "vue";
import "./plugins/fontawesome";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

/* Styles */
import "normalize.css";
// add styles under
import "swiper/swiper-bundle.min.css";
// add styles above
import "./assets/variables.scss";
import "./assets/global.scss";

/* Plugins */
//#region Swiper
import {
  Swiper as SwiperClass,
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay
} from "swiper/swiper.esm";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";

SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay]);
Vue.use(getAwesomeSwiper(SwiperClass));
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);
//#endregion

Vue.config.productionTip = false;
new Vue({
  router,
  components: { Swiper, SwiperSlide },
  render: h => h(App)
}).$mount("#app");
