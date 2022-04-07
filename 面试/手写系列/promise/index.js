PENDING = "PENDING";
RESOLVE = "RESOLVE";
REJECT = "REJECT";

function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        throw new Error("循环引用报错");
    }

    if ((typeof x === "object" && x !== null) || typeof x === "function") {
        let then = x.then;

        if (typeof then === "function") {
            const y = then.call(
                x,
                () => {},
                () => {}
            );
            resolvePromise();
        }
    }
}

class _Promise {
    constructor(executor) {
        this.value = undefined;
        this.reason = undefined;

        this.status = PENDING;
        this.resolveCallback = [];
        this.rejectCallback = [];

        let resolve = (value) => {
            if (this.state === PENDING) {
                this.value = value;
                this.status = RESOLVE;
                this.resolveCallback.forEach((cb) => {
                    cb();
                });
            }
        };

        let reject = (reason) => {
            if (this.state === PENDING) {
                this.reason = reason;
                this.status = REJECT;
                this.rejectCallback.forEach((cb) => {
                    cb();
                });
            }
        };

        executor(resolve, reject);
    }

    then(onfulfilled, onrejected) {
        onfulfilled =
            typeof onfulfilled === "function" ? onfulfilled : (val) => val;
        onrejected =
            typeof onrejected === "function"
                ? onrejected
                : (reason) => {
                      throw reason;
                  };

        let promise2 = new _Promise((resolve, reject) => {
            if (this.state === PENDING) {
                this.resolveCallback.push(() => {
                    try {
                        let x = onfulfilled();
                    } catch (e) {
                        throw new Error(e);
                    }
                });
                this.rejectCallback.push(() => {
                    try {
                        let x = onrejected();
                    } catch (e) {
                        throw new Error(e);
                    }
                });
            }
            if (this.state === RESOLVE) {
                try {
                    let x = onfulfilled();
                } catch (e) {
                    throw new Error(e);
                }
            }
            if (this.state === REJECT) {
                try {
                    let x = onrejected();
                } catch (e) {
                    throw new Error(e);
                }
            }
        });

        return promise2;
    }
}

Promise.all = function (...args) {
    if (!Array.isArray(args)) {
        throw new Error("参数必须是一个数组");
    }
    return new Promise((resolve, reject) => {
        if (args.length === 0) {
            resolve([]);
        }
        let data = [];

        let index;
        args.forEach((p) => {
            Promise.resolve(p).then(
                (d) => {
                    data.push(d);
                    if (index++ === args.length) {
                        return resolve(data);
                    }
                },
                (r) => {
                    return reject(r);
                }
            );
        });
    });
};

let p1 = Promise.resolve("111");
let p2 = Promise.resolve("222");
let p3 = Promise.resolve("11");

Promise.all([1]).then(
    (data) => {
        console.log("data", data);
    },
    (err) => {
        console.log("err", err);
    }
);
