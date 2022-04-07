/**
 * async await
 * 就是生成器的语法糖
 * 通过generator和co库实现
 */
//co库将传入的generator函数执行
function co(it) {
    return new Promise((resolve, reject) => {
        function step(data) {
            let { value, done } = it.next(data);
            if (!done) {
                Promise.resolve(value).then((data) => {
                    step(data);
                }, reject);
            } else {
                resolve(data);
            }
        }
        step();
    });
}

function* g() {
    let value1 = yield 1;
    let value2 = yield 2;
}
co(g()).then((data) => {
    console.log("ddd");
    console.log(data);
});
