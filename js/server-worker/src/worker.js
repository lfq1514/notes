self.addEventListener("install", async (e) => {
    console.log("install", e);
    // const cache = await caches.open("cache-lfq");
    // await cache.addAll(["./img", "./js"]);
});
self.addEventListener("activate", (e) => {
    console.log("activate", e);
});
self.addEventListener("fetch", (e) => {
    console.log("fetch", e);
    const req = e.request;
    e.respondWith(networkFirst(req));
});

// 网络优先
async function networkFirst(req) {
    try {
        // 优先网络读取最新的资源
        // const fresh = await fetch(req);
        // console.log("fresh", fresh);
        // return fresh;
        throw new Error("忘了");
    } catch (e) {
        // 去缓存中读取
        const cache = await caches.open("cache-lfq");
        console.log("cache---", cache);
        const cached = await cache.match(req);
        return cached;
    }
}
