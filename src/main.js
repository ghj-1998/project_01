import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

//使用Vue-Router
Vue.use(VueRouter);
//使用ElementUI
Vue.use(ElementUI);

Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount("#app");

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
