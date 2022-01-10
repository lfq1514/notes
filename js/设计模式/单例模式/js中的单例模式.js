

/**
 * 
 * 单例模式的核心思想，即将要实现的一段逻辑，1）全局唯一，2）不重复创建
 * 
 * 场景1
 * 我们要创建一个全局的唯一的弹窗，根据单例的核心思想，我们可以把逻辑拆出来，1)创建的逻辑，2)以及实现不重复生成的逻辑
 
 */


function createModal(){
    const modal=document.createElement('div')
    modal.innerHTML='<div>这是全局唯一弹窗</div>'
    document.appendChild(modal)

    return true
}


function getSingle(fn){
    let flag
    return ()=>{
        flag||(flag=fn())
    }

}



