let arr = [1, 2, 3];
const res=arr.find((item) => {
    console.log(item);
    return item >= 2;
});
console.log('res',res)
