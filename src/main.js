import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from '@/api/http.js'
Vue.prototype.$http = axios
Vue.prototype.goback = function () {
  router.back()
}
let jwt = localStorage.getItem('_token')
if (jwt) {
  store.commit('global/setJwt',jwt)
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
