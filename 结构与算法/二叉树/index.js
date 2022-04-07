//二叉树的翻转

function bubble(arr) {
    arr = Array.prototype.concat(arr);

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            let temp = arr[j + 1];

            if (arr[j] > arr[j + 1]) {
                arr[j + 1] = arr[j];

                arr[j] = temp;
            }
        }
    }

    return arr;
}

function insert(arr) {
    arr = Array.prototype.concat(arr);

    let newArr = [arr[0]];
    arr.shift();

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if (newArr[j] > arr[i]) {
                newArr.splice(j, 0, arr[i]);
                break;
            }

            if (j === newArr.length - 1) {
                newArr.push(arr[i]);
                break;
            }
        }
    }

    return newArr;
}
