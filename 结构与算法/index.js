//给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

function getNoRepeatStrLength(s) {
    let b = s.split("");

    b.slice(0, length);

    let setData = new Set(b);
    if (setData.length === b.length) {
        return s.length;
    } else {
        b.slice(0, b.length - 1);

        b.slice(1, b.length);
    }
}

var isPalindrome = function (x) {
    let isTrue = true;

    while (x.length > 1) {
        const post = Array.prototype.pop.call(x);
        const pre = Array.prototype.shift.call(x);

        if (post !== pre) {
            isTrue = false;
            return false;
        }
    }
    return isTrue;
};
