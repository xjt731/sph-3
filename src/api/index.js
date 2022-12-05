import requests from './request'
import mockRequest from './mockRequest'
export const reqCategoryList = ()=>{
    //axios发请求返回的是promise对象
    //用的是axios函数方式
        //没有返回值，返回的是undefined。有返回值，返回给别的函数调用
    return requests({url:'/product/getBaseCategoryList',method:'get'})
}

export const reqGetBannerList = ()=>{
    //axios发请求返回的是promise对象
    //用的是axios函数方式
        //没有返回值，返回的是undefined。有返回值，返回给别的函数调用
    return mockRequest({url:'/banner',method:'get'})
}