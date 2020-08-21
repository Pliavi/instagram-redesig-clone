import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

/* Styles */
import "./assets/tailwind.css";

/* Plugins */
import "./plugins/fontawesome";
import "./plugins/swiper";

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
