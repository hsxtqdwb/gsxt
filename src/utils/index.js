export const getItem = (name) =>{
  try{
    return JSON.parse(window.sessionStorage.getItem(name))
  }catch(err){

    return window.sessionStorage.getItem(name)
  }
}
export const setItem = (name,value) =>{
  if(typeof value === 'object'){
    window.sessionStorage.setItem(name,JSON.stringify(value))
  }else{
    window.sessionStorage.setItem(name,value)
  }
}

export const hasClass = (node,name)=>{
 const c =  node.className
 const arr = c.split(' ')
 return arr.includes(name)
}
export const addClass = (node,name)=>{
  if(!hasClass(node,name)){
   const arr = node.className.split(' ')
   arr.push(name)
   node.className=arr.join(' ')
  }
 }

 export const removeClass = (node,name)=>{
  if(hasClass(node,name)){
    var rex = new RegExp(name)
    node.className = node.className.replace(rex,'')
  }
 }
 
 export const volidateFields = (params,obj)=>{
    if(typeof params==='object'&&params instanceof Array){
        return params.every(item=>{
          if(!item.name){
            obj.error(item.msg)
          }
          return item.name
        })
    }
 }
 
 export const format = (str) => {
    let arr = str.split(' ')
    let date =  arr[0].split('-')
    let newDate = ''
    let newTime = ''
    date.map((item,index)=>{
      switch(index){
        case 0:
          newDate +=item+'年'
          break;
        case 1:
          newDate +=item+'月'
          break;
        case 2:
          newDate +=item+'日'
          break;
      } 
    })
    if(arr[1]){
      let time = arr[1].split(':')
      
      time.map((value,key)=>{
        switch(key){
          case 0:
          newTime +=value+'时'
            break;
          case 1:
          newTime +=value+'分'
            break;
          case 2:
          newTime +=value+'秒'
            break;
        } 
      })
    }
    if(arr[1]){
      return {
        date:newDate,
        time:newTime
      }
    }else{
      return {
        date:newDate
      }
    }
 }