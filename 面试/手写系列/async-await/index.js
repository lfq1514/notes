//async 是基于co和generetor

function* fn() {
    yield 2;

    yield 888;
}

function co(it) {
    return new Promise((reject, resolve) => {
        function step() {
            const { value, done } = it.next();

            if (done) {
                resolve(value);
            } else {
                step(it);
            }
        }

        step();
    });
}

co(fn()).then((value) => {
    console.log("value", value);
});
