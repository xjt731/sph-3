import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
Vue.config.productionTip = false
import {reqCategoryList} from '@/api';
reqCategoryList()
new Vue({
  render: h => h(App),
  //引入路由
  router,
  store
}).$mount('#app')
