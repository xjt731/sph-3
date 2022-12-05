//引入mockjs模块 Mock大写（因为是个对象）
import Mock from 'mockjs'
//引入json数据
//webpack默认对外暴露：图片，json数据格式好
import banner from './banner.json'
import floor from './floor.json'
//通过Mock对象模拟出虚拟数据
//mock数据： 第一个请求地址 第二个请求数据
//参数:第一个参数  模块数据将来axios请求的地址   第二个参数:获取到的数据
//注意:项目当中发请求的接口
//第一种:真实服务器接口 http://39.98.123.211/api/list/xx 
//第二种:mock出来数据接口xxx/mock/banner
//路径当中出现/api 真实接口    /mock 模拟数据

Mock.mock("/mock/banner", { code: 200, data: banner })//轮播图数据
Mock.mock("/mock/floor", { code: 200, data: floor })//floor数据