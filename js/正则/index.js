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

let str='xxxxx-sssss·sdfasdfa-sadfasdf'
let reg=/^(\w)+(([-·])(\w)+)*/
const res=str.match(reg)

console.log('res',res)

// let reg=/[a-zA-Z]+[-·][a-zA-Z]+/