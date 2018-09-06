import Vue from 'vue'
import App from './App.vue'
import router from '@/packages/vue-router'
import store from '@/packages/vuex'
import '@/packages/vue-axios'

import '@/assets/scss/style.scss'

Vue.config.productionTip = false

new Vue({
  template: '<App/>',
  components: {
    App
  },
  router,
  store
}).$mount('#app')
