'use strict';

//  FREE PALESTINE !!!!!!

module.exports = function palindrome(linked) {
    let arr = []
    let current = linked.head;


    if (current) {

        while (current !== null) {
            arr.push(current.value)
            current = current.next
        }

        let joinOrg = arr.join("");


        let reversedArr = arr.reverse();
        let joinReversed = reversedArr.join("");


        if (joinOrg === joinReversed) {
            return true;
        } else {
            return false;
        }

    } else {
        return undefined
    }

}