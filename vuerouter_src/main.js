import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './router'
Vue.use(vueRouter)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
