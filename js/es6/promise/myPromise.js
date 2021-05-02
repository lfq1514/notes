const PENDING = 'PENDING'
const RESOLVED = 'RESOLVED'
const REJECTED = 'REJECTED'

const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('sss')
    },1000)
}).then(()=>{}).then()

function resolvePromise(promise2, x, resolve, reject) {
    /**
     * 问题1;promise和x不能是同一个对象引用
     * 判断x的值和promise2是不是同一个,如果是同一个,直接抛出错误(规范规定)
     */
    if (promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }

    if (typeof x === 'object' && x !== null || typeof x === 'function') {
        let called;//内部测试的时候,会失败和成功都调用
        try {
            let then = x.then
            //这里x有then方法,先认定x就是一个promise实例
            if (typeof then === 'function') {
                then.call(x, y => {
                    //执行x的then方法,将成功的结果,向下传递
                    // resolve(y)
                    if (called) {
                        return
                    }
                    called = true
                    resolvePromise(promise2, y, resolve, reject)
                }, r => {
                    //将失败的结果向下传递
                    if (called) {
                        return
                    }
                    called = true
                    reject(r)
                })

            } else {
                resolve(x)
            }
        } catch (e) {
            if (called) {
                return
            }
            called = true
            reject(e)
        }
    } else {
        //基本类型,直接返回
        resolve(x)
    }
}
class Promise {
    constructor(executor) {
        this.status = PENDING

        this.data = undefined
        this.reason = undefined

        this.resolveCallbacks = []
        this.rejectCallbacks = []

        let resolve = (data) => {
            if (this.status === PENDING) {
                this.status = RESOLVED
                this.data = data
                this.resolveCallbacks.forEach((cb) => cb())
            }
        }

        let reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED
                this.reason = reason
                this.rejectCallbacks.forEach((cb) => cb())
            }
        }
        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }

    then(onfulfilled, onrejected) {
        onfulfilled = typeof onfulfilled === 'function' ? onfulfilled : val => val
        onrejected = typeof onrejected === 'function' ? onrejected : err => { throw err }
        let promise2 = new Promise((resolve, reject) => {
            //根据状态确定执行成功还是失败
            if (this.status === RESOLVED) {
                setTimeout(() => {
                    try {
                        let x = onfulfilled(this.data)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }
            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onrejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)

                    } catch (e) {
                        reject(e)
                    }

                }, 0)
            }
            if (this.status === PENDING) {
                this.resolveCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onfulfilled(this.data)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }

                    }, 0)
                })
                this.rejectCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onrejected(this.reason)
                            resolvePromise(promise2, x, resolve, reject)

                        } catch (e) {
                            reject(e)
                        }

                    }, 0)
                })
            }
        })

        return promise2

    }

}

//-----测试
/**
 * 安装promises-aplus-tests插件来执行检测
 * 执行命令 "promises-aplus-tests  xxx.js"
 *
 */
Promise.defer = Promise.deferred = function () {
    let dfd = {}
    dfd.promise = new Promise((resolve, reject) => {
        dfd.resolve = resolve
        dfd.reject = reject

    })
    return dfd
}
module.exports = Promise