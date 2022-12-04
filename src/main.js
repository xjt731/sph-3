import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
Vue.config.productionTip = false
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)
new Vue({
  render: h => h(App),
  //引入路由
  router,
  store
}).$mount('#app')
