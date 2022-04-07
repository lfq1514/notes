class EventBus {
    constructor() {
        this.eventQueue = {
            name: [],
        };
    }

    emit(name, data) {
        if (this.eventQueue[name]) {
            this.eventQueue[name].forEach((event) => {
                event(data);
            });
        }
    }

    on(name, cb) {
        if (!this.eventQueue[name]) {
            this.eventQueue[name] = [];
        }
        this.eventQueue[name].push(cb);
    }
}

const eb = new EventBus();

eb.on("a", (msg) => {
    console.log(msg);
    console.log("bbbb");
});
eb.on("a", (msg) => {
    console.log(msg);
    console.log("aaaaa");
});
eb.emit("a", "heelo");
