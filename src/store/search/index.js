//search模块的小仓库
import {reqSearchList} from '@/api'
//四大核心属性
//state：仓库数据的来源
const state = {
 searchList:{}
};
//mutations:唯一可以改变state数据地方
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList=searchList
    }
};
//actions:可以处理dispatch派发action地方，这里可以书写你的业务逻辑：for、if、异步语句等等
const actions = {
    //获取搜索页面的数据
   async getSearchList({commit},data){
      let result = await reqSearchList(data)
      if(result.code ==200){
          commit("GETSEARCHLIST",result.data)
      }
   } 
   
};
//getters：计算属性
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}