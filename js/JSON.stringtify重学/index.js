let signInfo = [
    {
        fieldId: 539,
        value: undefined,
    },
    {
        fieldId: 540,
        value: undefined,
    },
    {
        fieldId: 546,
        value: undefined,
    },
];
let obj={name:'zs'}

let a = JSON.stringify(obj, (key, value) => {
    console.log("key", key);

    if (key === "value") {
    }
    return value;
});
// console.log('a',a)
