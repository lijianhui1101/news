// 导入vue构造函数
import Vue from "vue";
// 导入app vue组件 （.vue 结尾的就是组件）
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
