/**
 * 代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问。
 * 核心思想是，将核心的逻辑，与一些可以解构的逻辑，通过代码的方式结合，也便于日后解耦
 * 
 * js中常见的代理 ： 
 * 虚拟代理
 * 把一些开销很大的对象，延迟到真正需要它的时候才去创建
 * 
 * 缓存代理
 * 把结果缓存，减少计算开销
 */

//案例1，，通过代理缓存计算结果

function mult() {
    return [...arguments].reduce((a, b) => a * b);
}

//代理实现缓存
const proxyMult = (() => {
    const cache = {};

    return (...arg) => {
        const p = [...arg].join(",");

        if (cache[p]) {
            return cache[p];
        }

        return (cache[p] = mult(...arg));
    };
})();
