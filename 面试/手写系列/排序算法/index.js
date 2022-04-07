//冒泡排序
function bubble(arr) {
    arr = JSON.parse(JSON.stringify(arr));

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            let temp = arr[j];

            if (arr[j + 1] < arr[j]) {
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}
//插入排序
function insertSort(arr) {
    // arr = JSON.parse(JSON.stringify(arr));

    let currentArr = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < currentArr.length; j++) {
            if (arr[i] < currentArr[j]) {
                currentArr.splice(j, 0, arr[i]);
                break;
            }

            if (j === currentArr.length - 1) {
                currentArr.push(arr[i]);
                break;
            }
        }
    }

    return currentArr;
}

let res = insertSort([3, 2, 1]);

// console.log("res", res);

//快速排序
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let m_index = Math.floor(arr.length / 2);

    let m_value = arr[m_index];

    arr.splice(m_index, 1);

    let l_arr = [];
    let r_arr = [];

    for (let i = 0; i < arr.length; i++) {
        arr[i] < m_value ? l_arr.push(arr[i]) : r_arr.push(arr[i]);
    }

    return quickSort(l_arr).concat(m_value, quickSort(r_arr));
}

let r = quickSort([2, 1, 3]);
console.log("res", r);
