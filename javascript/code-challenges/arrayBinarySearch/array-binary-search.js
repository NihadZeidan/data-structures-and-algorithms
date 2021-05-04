'use strict';

module.exports = function binarySearch(arr, target) {
    let startAt = 0;
    let endAt = arr.length - 1;

    while (startAt <= endAt) {

        let middle = startAt + Math.floor((endAt - startAt) / 2)

        if (target === arr[middle]) {
            let value = arr[middle];
            return arr.indexOf(value)
        }

        if (target > arr[middle]) {
            startAt = middle + 1;
        } else {
            endAt = middle - 1;
        }

    }

    return -1

}