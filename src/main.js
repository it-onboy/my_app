import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import http from './http'
import path from './http/path'
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.prototype.$http = http
Vue.prototype.$path = path
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
