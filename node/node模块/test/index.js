// const fs=require('fs')

// setTimeout(()=>{
//     console.log('setTimeout')
// },0)
// process.nextTick(()=>{
//     console.log('nextTick')
// })

// setImmediate(()=>{
//     console.log('setImmediate')
// })
// fs.readFile('./test.json',()=>{
//     console.log('readFile')
// })


process.nextTick(()=>{
    console.log('1');
    setTimeout(()=>{
        console.log('2')
    },0);
    setImmediate(()=>{
        console.log('3')
    });
  });
  
  setTimeout(()=>{
    console.log('4');
    process.nextTick(()=>{
        console.log('5');
        setImmediate(()=>{
            console.log('7');
        });
    })
  },0);
