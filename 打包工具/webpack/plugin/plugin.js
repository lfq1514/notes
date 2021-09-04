
/**
 * plugin的本质是一个类，类里面有一个apply方法，apply的参数为compiler，
 * 在其上面会有一些hooks，不同的hooks对应不同的tapable实例。
 *
 * 编译器对象(compiler)就是webpack完整的配置环境。该对象一经webpack开始执行就创建
 */
class testPlugin {
    apply(compiler){
        compiler.hooks.emit.tap('emit',function(){
            console.log('emit')
        })



    }
}