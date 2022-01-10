// let r = /<(\w+)>(.*)<\/\1>/g;
// let s = "<div>123</div>";
// let n = s.match(r);

// let r1 = /<(\w+)>(.*)<\/\1>/g;
// let s1 = "<div>123</div>";
// let n1 = s.match(r);
// console.dir(RegExp.$2)

// let str='The cat scattered his food all over the room.'
// let r=str.match(/\bcat\b/)
// console.log('r',r)

let s1 = "深圳市/宝安区/前海大道";

let s2 = "宝安区前海大道嘉里中心";

let r1 = /(.+)\/\1\/\1/;

const res = s1.match(r1);
console.log("res", res);
