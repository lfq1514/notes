// const m1=new Map([
//     ['name','张三'],
//     ['age','99'],
// ])
// console.log(m1)


// const ceo = { name: "Jamie", age: 40, reportsTo: null };
// const manager = { name: "Alice", age: 28, reportsTo: ceo };

// const people = [
//   ceo,
//   manager,
//   { name: "Bob", age: 30, reportsTo: manager },
//   { name: "Eve", age: 28, reportsTo: ceo },
//   ];

// const peopleByManager = Map.groupBy(people, (person) => person.reportsTo);

// console.log('peopleByManager',peopleByManager)
const re = /^\p{RGI_Emoji}$/v;

// 匹配仅包含 1 个代码点的表情符号：
const res=re.test('⚽'); // '\u26BD'
// → true ✅
console.log('res,',res)

// 匹配由多个代码点组成的表情符号：
re.test('👨🏾‍⚕️'); // '\u{1F468}\u{1F3FE}\u200D\u2695\uFE0F'
// → true ✅