/**
 * 防抖函数
 *一个事件频繁的触发(如window的scroll,resize/mousedown,mousemove/keyup,keydown),会很影响性能
 *原理:事件多次触发,只会在指定时间内触发一次,如果再次触发,则重新计时
 */

function debounce(fn, wait, immediate) {
    let timer;

    return () => {
        const arg = arguments;
        const that = this;
        timer && clearTimeout(timer);

        if (immediate) {
            //第一次要立即执行，时间到了也要执行

            if (!timer) {
                fn.apply(this, arg);
            }
            timer = setTimeout(() => {
                timer = null;
            }, wait);
        } else {
            timer = setTimeout(() => {
                fn.apply(this, arg);
            }, wait);
        }
    };
}
