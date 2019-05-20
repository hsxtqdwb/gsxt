import axios from 'axios';
const request = (url,type,option,config) =>{
    let defaultConfig = {
        
    }
    let newConfig =   Object.assign(defaultConfig,config)
    return new Promise((resolve,reject) => {
        switch (type) {
            case 'GET':
                if(option){
                    const len = Object.keys(option).length-1
                    url = Object.keys(option).reduce((current,item,index)=>{
                        return index!==len?`${current}${item}=${decodeURIComponent(option[item])}&`:`${current}${item}=${decodeURIComponent(option[item])}`
                    },`${url}&`)
                }
               break;
            case "POST":
            axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            newConfig = Object.assign(defaultConfig,{data:option,method:"POST"})
        }
        console.log(newConfig)
        axios(url,newConfig).then(res=>{
            resolve(res.data)
        }).catch(e=>reject(e))
    })
}

class Http  {
    get(url,option){
        return new Promise((resolve,reject) => {
            request(url,'GET',option).then(res=>resolve(res))
        })
    }
    post(url,option){
        return new Promise((resolve,reject) => {
            request(url,"POST",option).then(res=>resolve(res))
        })
    }
}

export default Http

