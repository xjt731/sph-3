import requests from './request'
import mockRequest from './mockRequest'
export const reqCategoryList = () => {
    //axios发请求返回的是promise对象
    //用的是axios函数方式
    //没有返回值，返回的是undefined。有返回值，返回给别的函数调用
    return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}
//获取banner数据的接口函数
export const reqGetBannerList = () => {
    //axios发请求返回的是promise对象
    //用的是axios函数方式
    //没有返回值，返回的是undefined。有返回值，返回给别的函数调用
    return mockRequest({ url: '/banner', method: 'get' })
}

//获取floor数据的接口函数
export const reqGetFloorList = () => {
    //axios发请求返回的是promise对象
    //用的是axios函数方式
    //没有返回值，返回的是undefined。有返回值，返回给别的函数调用
    return mockRequest({ url: '/floor', method: 'get' })
}

//搜索产品的接口[真实的接口]
//URL:/api/list   method:post    参数：需要携带
//这个接口【携带参数：最多十个，十个属性可以传递，也可以不传递，但是至少给给服务器携带一个空对象】
export const reqSearchList = (data) => {
    //axios发请求返回的是promise对象
    //用的是axios函数方式
    //没有返回值，返回的是undefined。有返回值，返回给别的函数调用
    return requests({ url: '/list', method: 'post',data })
}

//获取产品详情的接口
///api/item/{skuId}  get
export const reqDetailList = (skuId)=>requests({url:`/item/${skuId}`,method:'get'});