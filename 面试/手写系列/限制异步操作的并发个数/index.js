const urls = [
    "www.baidu.com",
    "www.taobao.com",
    "www.tianmao.com",
    "www.jingdong.com",
];
function limitHttp(urls, limit) {
    const queue = [...urls];

    const promises = queue.splice(0, limit).map((url) => {
        return fetch(url);
    });

    Promise.race(promises).then(() => {});
}

function loadUrl(url) {
    return fetch(url);
}
