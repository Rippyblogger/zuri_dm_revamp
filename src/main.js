import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ThreeDots from "@/components/ThreeDots.vue";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);

Vue.component("ThreeDots", ThreeDots);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
