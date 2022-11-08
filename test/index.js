 function loadScript() {
    const p1 = new Promise((resolve, reject) => {
        reject(1);
    });

    const p2 = new Promise((resolve, reject) => {
        resolve(2);
    });
    return  Promise.all([p1, p2]);
    // return  p1
}

async function getResult() {
    try{
        const res = await loadScript();
        console.log('res',res)
    }catch(e){
        console.log('e',e)

    }
    
    // console.log("res", res);
}

getResult()


