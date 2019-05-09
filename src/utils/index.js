export const getItem = (name) =>{
  return window.sessionStorage.getItem(name)
}
export const setItem = (name,value) =>{
  window.sessionStorage.setItem(name,value)
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