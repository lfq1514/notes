// window.addEventListener("error", (e) => {

// });
window.onerror = function (e) {
    console.log("eee", e);
};
function fn1() {
    eee;
    console.log("hello");
}
function fn2() {
    console.log("world");
}
let p = new Promise((_, reject) => {
    reject("我错了");
});
p.then();

window.addEventListener("unhandledrejection", (e) => {
    console.log("-----未捕获的错误------");
    console.log(e);
});
