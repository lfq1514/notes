/**
 * 
 * 策略模式的定义是：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。
 * 
 * js中我们有意无意的都在使用，讲一些逻辑封装起来，实现代码的可复用性，
 * 
 * 场景：把实现一个功能的多个多种方式，封装起来，
 */


//js中的策略模式
 var S = function( salary ){ 
    return salary * 4; 
   }; 
   var A = function( salary ){ 
    return salary * 3; 
   }; 
   var B = function( salary ){ 
    return salary * 2; 
   }; 
   var calculateBonus = function( func, salary ){ 
    return func( salary ); 
   }; 
   calculateBonus( S, 10000 ); // 输出：40000
