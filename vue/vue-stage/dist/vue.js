(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Vue = factory());
})(this, (function () { 'use strict';

    function isFunction(v) {
      return typeof v === 'function';
    }
    function isObject(v) {
      return typeof v === 'object' && v !== null;
    }

    class Observer {
      //将对象中的所有属性进行劫持
      constructor(data) {
        this.walk(data);
      }

      walk(data) {
        Object.keys(data).forEach(key => {
          //将对象的所有属性定义为响应式数据
          defineReactive(data, key, data[key]);
        });
      }

    }

    function observe(data) {
      if (!isObject(data)) {
        throw new Error('data must be an object');
      }

      new Observer(data);
    }
    /**
     * vue2 会对所有的数据，进行响应式处理
     */

    function defineReactive(data, key, value) {
      //如果data数据是多层结构，递推处理
      observe(value);
      Object.defineProperty(data, key, {
        get(value) {
          return value;
        },

        set(newValue) {
          //如果用户设置了一个新对象，这个心对象也要进行响应式处理
          observe(newValue);
          value = newValue;
        }

      });
    }

    function initState(vm) {
      //获取到选项
      const opts = vm.$options; //数据的初始化优先级：props-->data-->computed-->watch

      if (opts.props) ;

      if (opts.data) {
        initData(vm);
      }

      if (opts.computed) {
        initComputed();
      }

      if (opts.watch) {
        initWatch();
      }
    }

    function initData(vm) {
      //拿到数据，进行数据劫持
      let data = vm.$options.data; //data可能是函数，也可能是对象

      if (isFunction(data)) {
        //取函数的返回至，作为data数据
        data = data.call(vm);

        if (!isObject(data)) {
          throw Error('function must return an object');
        }
      } else if (isObject(data)) ; else {
        throw new Error('data needs  a function or object');
      } //将data同时挂在vm的_data属性上


      vm._data = data; //data校验成功之后，就要开始观测数据了

      observe(data);
    }

    function initMixin(Vue) {
      Vue.prototype._init = function (options) {
        const vm = this; //把用户的数据映射到vm实例上。

        vm.$options = options; //对用户的数据进行初始化

        initState(vm);
      };
    }

    function Vue(options) {
      this._init(options);
    } //拓展原型


    initMixin(Vue);

    return Vue;

}));
//# sourceMappingURL=vue.js.map
