import Vue from "vue";
import "./plugins/fontawesome";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "normalize.css";
import "./assets/global.scss";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

Vue.use(VueAwesomeSwiper /* { default options with global component } */);

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
