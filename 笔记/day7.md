项目第七天:
1:获取到search模块的数据
2：对于商品的展示
3:对于关键字、三级联动的面包屑展示业务

学会套路最重要:
套路1:路由自己跳自己----修改路由
套路2：watch监听路由的变化发请求


切记：自己写项目的时候，切记进行单元测试---【完成一个功能：要验证是否OK】
      在你写项目的时候，锻炼自己解决bug问题--【别遇见红色就怕】



1)品牌与平台属性的数据进行动态展示
tradeMark---品牌
举例子:理解平台属性 【用户购买一个手机】
颜色【平台属性】:红色、白色、紫色【平台属性值】
价格【平台属性】：1299,6999,899【平台属性值】
操作系统【平台属性】：window、linux【平台属性值】
//看见页面结构，大概能知道数据结构什么样子的
尺寸: 中、短
材料：塑料、涤纶
[
    {attrId:1,attrName:尺寸,attrValueList:['中','短']},
    {attrId:2,attrName:材料,attrValueList:['塑料','涤纶']},
]


2)完成品牌  与  平台属性的业务
2.1刚刚我们只是把服务器的数据动态展示，但是需要注意，对于品牌|平台属性、用户可以点击的【小米、苹果】|平台属性
2.2我们还是需要收集用户选择的数据，把用户选择的数据信息，给服务器传递获取，获取相应的数据进行展示
checkTradeMark(trademark) {
      //console.log(trademark);
      //点击品牌按钮，可以获取到用户选择品牌信息
      //问题1:请求在哪里发?
      //父组件search发请求展示商品请求，因为需要给服务器携带的参数（10个参数），在父组件发请求
      //需要将子组件searchSelector的数据给父组件传递过去
      //问题2：自定义事件的灵活使用
      //第一个参数：自定义事件名称，第二个参数trademark对象数据
      this.$emit("getTradeMarkInfo", trademark);
}

 <SearchSelector @getTradeMarkInfo='getTradeMarkInfo'/>

//获取searchSelector组件给search组件传递的品牌数据
    getTradeMarkInfo(trademark){
      let data = `${trademark.tmId}:${trademark.tmName}`
      this.searchParams.trademark=data
      this.getSearchList()
    }
    
2.3组件通信-----（工作使用频率非常高、面试的时候经常出现）
父子:props、插槽、ref
子父：自定义事件
万能：vuex、$bus、pubsub

经典面试题:数组去重[1,2,2,3,4,2];


平台属性携带参数格式:
props	 Array	 N	  商品属性的数组: ["属性ID:属性值:属性名"]   示例: ["2:6.0～6.24英寸:屏幕尺寸"]

props:['属性的ID:属性值:属性名']






3)完成排序业务
num1:在基础课程当中曾经写过排序业务。

num2:综合与价格按钮，点击谁，谁的背景颜色变为红色。（类名：active）
谁有类这件事情，区分开综合与价格
:class="{ active : isComprehensive}" 

num3：将来点击综合||价格，还是需要给服务器发请求
【价格升序：把这个信息给服务器传递过去，服务器接收到信息，数据库自动把排序这件事情做了，把排序做好的数据返回给你，你展示即可】




order:服务器需要字段，代表的是排序方式
order这个字段需要的是字符串（可以传递也可以不传递）
1:代表综合
2:代表价格
3:asc代表升序
4:desc代表降序
告诉服务器排序方式有几种情况?
"1:asc" "1:desc"  "2:asc"  "2:desc"


num4:综合与价格箭头

4.1箭头用什么去做【可以选用阿里图标库】  https://www.iconfont.cn/ 

4.2对于综合|价格旁边的箭头【动态显示：时而又，时而没有】，带有类名active，拥有箭头
:class="{'icon-long-arrow-down':isDesc,'icon-long-arrow-up':isAsc}"


4.3:根据1、2区分谁有类名（背景）、谁有箭头
    根据asc|desc区分它用哪一个箭头【上、下】

changeOrder(flag){
  let originFlag = this.searchParams.order.split(':')[0]
  let originSort = this.searchParams.order.split(':')[1]
   //创建一个新的排序方式
   let newOrder = ''
   //判断：用户点击的是带背景颜色按钮(谁有背景颜色点击的就是谁)
   if(originFlag==flag){
    newOrder =`${originFlag}:${originSort=='desc'asc':'desc'}`
 }else{
   //判断：点击的是不带背景颜色的按钮
      newOrder = `${flag}:desc`
   }
   //重新整理参数
   this.searchParams.order=newOrder
 this.getSearchList();

}



5)分页功能。
第三方插件:elementUI实现超级简单
但是咱们需要自己封装。也属于前台项目当中比较重要的一部分。