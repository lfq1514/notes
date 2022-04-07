//debounce 防抖
function debounce(fn, wait) {
    let timer = null;
    return () => {
        timer && clearTimeout(timer);
        // timer = setTimeout(() => {
        //     fn();
        // }, wait);

        if (!timer) {
            fn();
        }

        timer = setTimeout(() => {
            timer = null;
        }, wait);
    };
}
function fn() {
    console.log("111");
}
document.onclick = debounce(fn, 1000);
