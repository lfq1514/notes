// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("resolve3");
//         console.log("timer1");
//     }, 0);
//     resolve("resovle1");
//     resolve("resolve2");
// })
//     .then((res) => {
//         console.log(res);
//         setTimeout(() => {
//             console.log(p1);
//         }, 1000);
//     })
//     .finally((res) => {
//         console.log("finally", res);
//     });

//resolve1
//finally undefined
//timer1
//promise<resolve>

// const async1 = async () => {
//     console.log("async1");
//     setTimeout(() => {
//         console.log("timer1");
//     }, 2000);
//     await new Promise((resolve) => {
//         // console.log("promise1");
//         resolve("promise1");
//     });
//     console.log("async1 end");
//     return "async1 success";
// };
// console.log("script start");
// async1().then((res) => console.log(res));
// console.log("script end");

const first = () =>
    new Promise((resolve, reject) => {
        console.log(3);
        let p = new Promise((resolve, reject) => {
            console.log(7);
            setTimeout(() => {
                console.log(5);
                resolve(6);
                console.log(p);
            }, 0);
            resolve(1);
        });
        resolve(2);
        p.then((arg) => {
            console.log(arg);
        });
    });
first().then((arg) => {
    console.log(arg);
});
console.log(4);

//3
//7
//4
//1
//2
//5
//promise<fullfiled>
