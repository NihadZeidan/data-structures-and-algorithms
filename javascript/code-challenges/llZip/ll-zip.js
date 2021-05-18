'use strict';

const LinkedList = require('../linkedList/linked-list.js');

function zipLists(listOne, listTwo) {

    let zippedList = new LinkedList;

    let currentValueFirstList = listOne.head;
    let currentValueSecondList = listTwo.head;

    while (currentValueFirstList || currentValueSecondList) {
        if (currentValueFirstList) {
            zippedList.insert(currentValueFirstList.value);
            currentValueFirstList = currentValueFirstList.next;
        }
        if (currentValueSecondList) {
            zippedList.insert(currentValueSecondList.value);
            currentValueSecondList = currentValueSecondList.next;
        }

    }

    return zippedList
}

module.exports = zipLists