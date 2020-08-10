import axios from 'axios'

axios.interceptors.request.use(
  config => {
    config.headers['content-type'] = 'application/json; charset=utf-8'
    // config.headers['accept-language'] = lConfig[getItemL('locale')] || 'zh-CN'
    // if (getItemS('USERINFO')) {
    //   let ufunToken = getItemS('USERINFO')
    //   let token = ufunToken['token_type'] + ' ' + ufunToken['access_token']
    //   config.headers.Authorization = token
    // }
    // config.data = {
    //   ...config.data,
    //   language:lConfig[getItemL('locale')] || 'zh-CN'
    // }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
axios.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    if (error.response) {
    //   if(error.response.status===401){
    //     window.location.href = '/sign/in'
    //   }
    }
    return Promise.reject(error) // 返回接口返回的错误信息
  })
  export default axios;
