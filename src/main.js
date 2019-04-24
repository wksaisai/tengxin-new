// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./common/css/reset.css";
import "./common/js/flexble";
import "./assets/iconfont/iconfont.css";
import MintUI from 'mint-ui'
import VCharts from 'v-charts'
import 'mint-ui/lib/style.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import store from "./store"
import httpRequest from '@/utils/http' // api: https://github.com/axios/axios
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VCharts)
Vue.use(Antd)
Vue.prototype.$http = httpRequest; // ajax请求方法
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
