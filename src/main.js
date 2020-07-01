import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import ELementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ELementUI)

import "./assets/font_1877446_fy3at52dw4c/iconfont.css"
import "./public/global.css"

import VueTouch from 'vue-touch'

Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.pan = {
  direction:'horizo​​ntal'
}
VueTouch.config.swipe = {
     threshold: 50 //手指左右滑动距离

}

//引入公用组件
import topHeader from "./components/top_header"
import cerousel from "./components/carousel.vue"
import productList from "./components/productList.vue"
import news from "./components/news.vue"
import foot from "./components/foot.vue"
import serveCenter from "./components/serveCenter.vue"
Vue.component('cerousel',cerousel)
Vue.component('topHeader',topHeader)
Vue.component('product-list',productList)
Vue.component('news',news)
Vue.component('foot',foot)
Vue.component('serveCenter',serveCenter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
