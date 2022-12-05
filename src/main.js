import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
Vue.config.productionTip = false
import TypeNav from '@/components/TypeNav'
Vue.component(TypeNav.name,TypeNav)
//引入相关的mock数据的文件【需要代码执行一次】
//获取mock数据
import '@/mock/mockServe'
import {reqGetBannerList} from '@/api';
let result = reqGetBannerList()
console.log(result);



	
new Vue({
  render: h => h(App),
  //引入路由
  router,
  store
}).$mount('#app')
