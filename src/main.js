import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
Vue.config.productionTip = false
import Pagination from '@/components/Pagination'
import TypeNav from '@/components/TypeNav'
Vue.component(Pagination.name,Pagination);
Vue.component(TypeNav.name, TypeNav)
//引入相关的mock数据的文件【需要代码执行一次】
//获取mock数据
import '@/mock/mockServe'
//引入swiper需要的样式
import 'swiper/css/swiper.css'
/* import {reqSearchList} from '@/api/index'
let result = reqSearchList()
console.log(result); */



new Vue({
  render: h => h(App),
  beforeCreate() {
    //配置全局事件总线
    Vue.prototype.$bus = this;
  },
  //引入路由
  router,
  store
}).$mount('#app')
