function operationFn(sb, a, b) {
    let res
    switch (sb) {
        case "===":
            res= a === b;
        case "!==":
            res= a !== b;
        case "<=":
            res= a <= b;
        case ">=":
            res=a >= b;
        case "!=":
            res=a != b;
        case "==":
            res=a == b;

    }
    return res
}

const r=operationFn('===',1,2)
console.log('r',r)
