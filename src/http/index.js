import axios from 'axios'
import { Toast } from 'vant';

let instance = axios.create({
    timeout: 5000,
    baseURL: 'http://api.web1024.cn',
    params: {
        key: '8tk528'
    }
})

//请求拦截
instance.interceptors.request.use(config=>{
    Toast.loading({
        message: '客官稍等',
        forbidClick: true,
    });
    return config
},err=>{
    Toast.clear()
    return Promise.reject(err);
})

//响应拦截
instance.interceptors.response.use(res=>{
    Toast.clear()
    return res
},err=>{
    Toast.clear()
    return Promise.reject(err);
})

/**
 * 请求的方法
 * @param {*} config 请求的配置信息，config.method请求方法，config.params请求参数，config.url请求路由地址
 */
async function http({method = 'get',url,params}){
    let result ;
    if(method === 'get' || method === 'delete'){
        await instance[method](url,{
            params
        }).then(res=>{
            result = res.data
        }).catch(err=>{
            result = err
        })
    }else if(method === 'post' || method === 'put' || method === 'patch'){
        await instance[method](url,params).then(res=>{
            result = res.data
        }).catch(err=>{
            result = err
        })
    }
    return result
}

export default http