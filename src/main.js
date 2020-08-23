import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

/* Plugins */
import "./plugins/fontawesome";
import "./plugins/swiper";

/* Tailwind */
import "./assets/tailwind.css";
/* Custom styles */
import "./assets/global.css";

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
