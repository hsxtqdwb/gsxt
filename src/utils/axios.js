import axios from 'axios';
const request = (url,type,option,config) =>{
    let defaultConfig = {
        
    }
    Object.assign(defaultConfig,config)
    return new Promise((resolve,reject) => {
        switch (type) {
            case 'GET':
            const len = Object.keys(option).length-1
            url = Object.keys(option).reduce((current,item,index)=>{
                   return index!==len?`${current}${item}=${decodeURIComponent(option[item])}&`:`${current}${item}=${decodeURIComponent(option[item])}`
<<<<<<< HEAD
               },`${url}?`)
=======
               },`${url}&`)
>>>>>>> 5e17b472d31423823e98dfbe0bc96a4c7efb6a35
            case "POST":
            Object.assign(defaultConfig,{data:option})
        }
        axios(url,defaultConfig).then(res=>{
<<<<<<< HEAD
            resolve(res)
=======
            resolve(res.data)
>>>>>>> 5e17b472d31423823e98dfbe0bc96a4c7efb6a35
        }).catch(e=>reject(e))
    })
}

class Http  {
<<<<<<< HEAD
=======
    constructor(){

    }
>>>>>>> 5e17b472d31423823e98dfbe0bc96a4c7efb6a35
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

