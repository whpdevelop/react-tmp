
import jwt from 'jsonwebtoken'

// export const userInfo = ()=>{
//     if(!getItemS('USERINFO')) return false;
//     let tokenInfo = getItemS('USERINFO')
//     let token = tokenInfo.access_token
//     token = jwt.decode(token)
//     return token;
// }
export const getItemL = (item) => {
    if(!item){
        return null
    }
    let result
    try {
        result = JSON.parse(localStorage.getItem(item))
    } catch(err) {
        result = localStorage.getItem(item)
    }
    return result
 }
 export const setItemL = (key,value) => {
    if(!value || !key){
        return null
    }
     let params = typeof value === 'object'? JSON.stringify(value):value
     return localStorage.setItem(key,params)
 }
 export const removeItemL = (key) => {
     localStorage.removeItem(key)
 }
 export const getItemS = (item) => {
    if(!item){
        return null
    }
    let result
    try {
        result = JSON.parse(sessionStorage.getItem(item))
    } catch(err) {
        result = sessionStorage.getItem(item)
    }
    return result
 }
 export const setItemS = (key,value) => {
    if(!value || !key){
        return null
    }
     let params = typeof value === 'object'? JSON.stringify(value):value
     return sessionStorage.setItem(key,params)
 }
 export const removeItemS = (key) => {
     sessionStorage.removeItem(key)
 }
export const serialize = function(obj) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
        str.push(p + "=" + obj[p]);
        }
    return str.join("&");
}

export const someDay = (some)=>{
    let weekOfday = parseInt(moment().format('d')) // 计算今天是这周第几天 周日为一周中的第一天
    switch(some){
        case 'now1':
            return moment().subtract(weekOfday-1, 'days').format('YYYY-MM-DD') // 本周周一日期
        case 'now7':
            return moment().add(7 - weekOfday, 'days').format('YYYY-MM-DD') // 本周周日日期
        case 'last1':
            return moment().subtract(weekOfday-1+7, 'days').format('YYYY-MM-DD') // 上周周一日期
        case 'last7':
            return moment().add(7 - weekOfday-7, 'days').format('YYYY-MM-DD') // 上周周日日期
        default:{
            return moment().format('YYYY-MM-DD')
        }
    }
}
export const timeStrFn = (time)=>{
    return time.split(' ')[0].split('-').join('')
}

  export function aLink(hash){
    let aEle = document.createElement('a')
    aEle.href = hash
    aEle.target = '_blank'
    aEle.click()
  }
  export function arrOUniqueFn(arr,u_key){
    let obj = {}
    return arr.reduce((prev,next)=>{
        if(!obj[next[u_key]]){
            obj[next[u_key]] = true
            prev.push(next)
        }
      return prev 
    },[])
  }
  export const vnd3 = (value) => {
    if(!(value - 0)){
        return 0
    } else {
        return (value + '').replace(/(\d)(?=(\d{3})+$)/g, "$1.")
    }
  }
  export const toFixed2 = (value,num=2,type) => {
    if(!(value - 0)){
        return 0
    } else {
        let val = (value-0).toFixed(num);
        if(val === '0.00') return '0.00'
        let reg = /(\d{1,3})(?=(\d{3})+(?:\.))/g;
        if(type){
            if(val.replace(reg, "$1,")>0){
                return '+' + val.replace(reg, "$1,")
            } else if(val.replace(reg, "$1,")<0) {
                return val.replace(reg, "$1,")
            }
        } else {
            return val.replace(reg, "$1,");
        }
    }
}

export const ceil2 = (value,type) => {
    if(!(value - 0)){
        return
    }else {
        let val = Math.ceil((value-0)*100)/100+'';
        let reg = /(\d{1,3})(?=(\d{3})+(?:\.))/g;
        if(type){
            if(val.replace(reg, "$1,")>0){
                return '+' + val.replace(reg, "$1,")
            } else if(val.replace(reg, "$1,")<0) {
                return val.replace(reg, "$1,")
            }
        } else {
            return val.replace(reg, "$1,");
        }
    }
}
export const ceil24 = (value,type) => {
    if(!(value - 0)){
        return 0
    }else {
        let val
        val = Math.floor((value-0)*10000)/10000+'';

        // if(value-0>=100){
        //     val = Math.floor((value-0)*100)/100+'';
        // }else{
        //     val = Math.floor((value-0)*10000)/10000+'';
        // }
        let reg = /(\d{1,3})(?=(\d{3})+(?:\.))/g;
        if(type){
            if(val.replace(reg, "$1,")>0){
                return '+' + val.replace(reg, "$1,")
            } else if(val.replace(reg, "$1,")<0) {
                return val.replace(reg, "$1,")
            }
        } else {
            return val.replace(reg, "$1,");
        }
    }
}
export const toPercentage = (value) => {
        if(!value) return '--';
        let str=Number(value)*100;
        str+="%";
        return str;
}

export const isNull = (value) => {
    if(!value){
        return '--'
    } else {
        return value
    }
}
export const utcToBj = (value) => {
    if(value === '--') return '--'
    if(!value) return null
    return moment(value).add(8,'hour').format('YYYY-MM-DD HH:mm')
}

export const hm = (value) => {
    return moment(value+'000' -0).format('h:mm')
}
export const fh = (value) => {
    return value>0?'+'+value:value
}

export const split0 = (value) => {
    if(!value) return '--'
    return value.split(' ')[0]
}

export const randomNum = (minNum,maxNum) => { 
    return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
} 

let handlePEObj = {
    p(param){
        if(!param) return ''
        return param.slice(0,3) + '*****' + param.slice(-3)
    },
    e(param){
        if(!param) return ''
        return param.slice(0,3) + '*****' + param.slice(param.indexOf('@'))
    }
}
export const handlePE = (type,value) => {
    return handlePEObj[type](value)
}

export const getUrlParams = (name) => { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); //定义正则表达式 
    var r = window.location.search.substr(1).match(reg);  
    if (r != null) return unescape(r[2]); 
  return null; 
}