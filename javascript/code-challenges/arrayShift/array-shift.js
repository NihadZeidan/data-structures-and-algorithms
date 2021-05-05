'use strict';

module.exports = function insertShiftArray(arr, value) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])

        if ((Math.round(arr.length / 2) - 1) == i) {
            newArr.push(value);
        }
    }
    return newArr
}