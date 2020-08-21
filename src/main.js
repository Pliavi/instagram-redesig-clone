import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

/* Styles */
import "normalize.css";
import "./assets/variables.scss";
import "./assets/global.scss";

/* Plugins */
import "./plugins/fontawesome";
import "./plugins/swiper";

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
