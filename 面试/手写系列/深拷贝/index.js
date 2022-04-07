function deep(data) {
    if (typeof data !== "object") {
        return data;
    }
    if (data === null) {
        return data;
    }

    let copy = new data.constructor();
    Object.keys(data).forEach((key) => {
        copy[key] = deep(data[key]);
    });

    return copy;
}

// const res = deep([1, 34, 4, { name: 111 }]);
// console.log("res", res);

function deep2(data) {
    if ((typeof data !== "object") | (typeof data === null)) {
        return data;
    }
    let copy = new data.constructor();

    Object.entries(data).forEach(([key, value]) => {
        copy[key] = deep2(value);
    });

    return copy;
}

const res = deep2([1, 34, 4, { name: 111 }]);
console.log("res", res);

// Object.entries(arr);
