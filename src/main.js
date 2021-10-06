import Vue from 'vue'

import router from '@/router'
import http   from '@/http'
import store  from '@/store'

import App from '@/App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
