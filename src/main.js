import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
Vue.config.productionTip = false
import {reqCategoryList} from '@/api';
reqCategoryList()
new Vue({
  render: h => h(App),
  //引入路由
  router
}).$mount('#app')
