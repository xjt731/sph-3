复习:重点
1:swiper|lodash|moment插件工作的时候经常使用----【API：有时间翻看一下】
2:$nextTick,组件实例的方法。
在下次DOM更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。



(1)合并参数*****
为什么需要合并参数（query|params）:因为这些参数，对于search是有用的，因为search通过这些参数
向服务器发请求，需要把这些参数携带给服务器，服务器就会返回相应的用户的搜索的数据，search就可以进行展示。

1.1:开发的三级联动业务，当你点击a标签的时候，会进行路由的跳转，将产品的名字与id传递给search模块----（query）
if(this.$route.params){
           //query参数
           location.query = query;
           //params
           location.params=this.$route.params
           //如有有params参数也需要携带给search模块
           this.$router.push(location)
}
1.2:点击搜索按钮的时候，用户输入进来的关键字，点击按钮的时候会通过params参数传递给search模块-----（params）
 if (this.$route.query) {
         //本身点击搜索按钮，当年只是携带params，如果路径当中存在query参数，是需要把query参数页携带给search
         let location = { name: "search", params: { keyword: keyWord } };
         location.query = this.$route.query;
         this.$router.push(location);
} else {
         let location = { name: "search", params: { keyword: keyWord } };
         this.$router.push(location);
}

1.3路由跳转（home->search）,两个地方，三级联动（typeNav）、Header组件（搜索按钮）







(2)完成search静态组件
项目节点:学习的并不是基础的语法，'套路'
再次提醒：组件通信很重要-----【七种组件通信：务必要会】
接下来开发search搜索模块：注意在老师给你们的文件夹中有search静态组件，复制过来即可。
2.1书写静态页面【布局、样式】
2.2拆分组件
2.3获取服务器数据展示数据
2.4玩业务

//是搜索模块需要携带给接口的参数
{
  "category1Id": "61",//一级分类的id
  "category2Id": "61",//二级分类的id
  "category3Id": "61",//三级分类的id
  "categoryName": "手机",//产品的名字
  "keyword": "小米",//关键字
  "order": "1:desc",//排序
  "pageNo": 1,//当前第几页
  "pageSize": 10,//每一页需要展示多少条数据
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],//平台属性的选择参数
  "trademark": "4:小米"//品牌参数
}

注意：搜索的接口，需要传递参数，至少是一个空对象（KV没有，但是至少给服务器一个对象）

getSearchList(){
  this.$store.dispatch('getSearchList',{})
}

(3)获取search模块数据 
(4)展示商品列表数据

(5)根据用户的搜索条件展示不同的数据。

根据前台传递参数决定的 根据不同条件，展示不同的数据。----->取决于后台返回的数据

1:发请求，获取搜索模块的数据
2:根据用户搜索的条件携带参数给服务器，展示用户搜索的内容

//监听路由的变化
   watch: {
     //组件实例身上是有$route这个属性的【包含：路由信息】
     //只要路由发生变化，立即在向服务器发请求
     $route() {
       //清除上一次发请求的id
       this.searchParams.category1Id = undefined;
       this.searchParams.category2Id = undefined;
       this.searchParams.category3Id = undefined;
       //先收集最新的搜索条件（再次整理参数），在想服务器发请求
       Object.assign(this.searchParams, this.$route.query, this.$route.params);
       //再次发请求
       this.getSearchList();
     }
   }

开发遇见问题:用户条件可以发生多次变化，但是咱们的请求，只是会发一次【mounted中书写的】

请求的性能优化: 发一个请求，需要向服务器携带参数：带100个参数 带1参数 【消耗宽带】 对于给服务器携带的参数：如果数值为undefind，向服务器发请求的时候，参数步携带给服务器的

(6)面包屑的业务完成 
1.注册自定义事件
beforeCreate() {
    //配置全局事件总线
    Vue.prototype.$bus = this;
},

mounted() {
    //监听自定义事件
    this.$bus.$on("changeKeyword", () => {
      //关键字置空
      this.keyword = "";
    });
}

2.触发自定义方法
<!-- 用户搜索关键字的按钮 -->
 	          <li class="with-x" v-show="searchParams.keyword">{{searchParams.keyword}}<i @click="clearKeyword">×</i></li>

    clearKeyword() {
      //清除关键字的数据
      this.searchParams.keyword = "";
      //路由跳转自己跳自己
      if (this.$route.query) {
        this.$router.push({ name: "search", query: this.$route.query });
      }
      //通知兄弟组件，把关键字清除----全局事件总线$bus
      //通知
      this.$bus.$emit("changeKeyword");
    }





























3)获取search模块数据





4)展示商品列表数据





5)获取用户搜索数据并进行展示




6)关键字业务完成


