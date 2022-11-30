//axios进行二次封装
import axios from 'axios';
import nprogress from 'nprogress';
//因为进度条样式咱们没有引入
import "nprogress/nprogress.css"


//创建axios实例[创建出来的实例即为axios，只不过可以配置一些东西]
let requests = axios.create({
    //可以给请求路径中添加一些参数 
    baseURL: "/api",
    //设置请求时间（5S）
    timeout: 5000
});

//请求拦截器:在发请求之前可以检测到，可以干一些事情
requests.interceptors.request.use((config) => {
    //检测到程序发请求，请求拦截器可以检测到，进度条开始动
    nprogress.start();
    //config，请求拦截器的一个配置对象
    return config;
});

//响应拦截器：服务器的数据已经返回了，可以干一些事情
requests.interceptors.response.use((res) => {
    //服务器数据返回进度条结束
    nprogress.done()
    //简化服务器返回的数据格式
    return res.data;
}, (error) => {
    //终止promise链
    return Promise.reject(error);
});


//对外暴露二次封装的axios
export default requests;