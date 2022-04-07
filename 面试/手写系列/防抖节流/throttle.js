//节流
function throttle(fn, wait) {
    let timer = null;
    return () => {
        if (timer) {
            return;
        }

        timer = setTimeout(() => {
            fn();
            timer = null;
            clearTimeout(timer);
        }, wait);
    };
}

function fn() {
    console.log("2222");
}

document.onclick = throttle(fn, 1000);
