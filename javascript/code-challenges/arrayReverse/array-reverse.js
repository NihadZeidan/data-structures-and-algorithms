'use strict';
let arr = [1, 2, 3, 4, 5, 6];


function reverseArray(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }
    return newArr
}

reverseArray(arr);