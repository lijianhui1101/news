// 导入vue构造函数
import Vue from "vue";
// 导入app vue组件 （.vue 结尾的就是组件）
import App from "./App.vue";
import router from "./router";

// 项目上线提示
// 这里新增一行测试
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
