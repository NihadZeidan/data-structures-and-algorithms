'use strict';

const LinkedList = require('../javascript/code-challenges/linkedList/linked-list.js');

const zipLists = require("../javascript/code-challenges/llZip/ll-zip.js")


describe('TESTING LINKEDLIST', () => {
    it('Can successfully instantiate an empty linked list', () => {
        let ll = new LinkedList;
        expect(ll.head).toBeNull();
    });

    it('Can properly insert into the linked list', () => {
        let ll = new LinkedList;
        ll.insert('Nihad');

        expect(ll.head.value).toEqual('Nihad');
        expect(ll.head.next).toBeNull();
    });

    it('The head property will properly point to the first node in the linked list', () => {
        let ll = new LinkedList;
        ll.insert('Nihad');
        ll.insert('Zeidan');
        expect(ll.findPosition(ll.head.value)).toEqual(1);
    });

    it('Can properly insert multiple nodes into the linked list', () => {
        let ll = new LinkedList;
        ll.insert('Nihad');
        ll.insert('Zeidan');
        expect(ll.head.next.value).toEqual('Zeidan');
    });

    it('Will return true when finding a value within the linked list that exists', () => {
        let ll = new LinkedList;
        ll.insert('Nihad');
        expect(ll.includes('Nihad')).toBeTruthy();
    });

    it('Will return false when searching for a value in the linked list that does not exist', () => {
        let ll = new LinkedList;
        ll.insert('Nihad');
        expect(ll.includes('NoOne')).toBeFalsy();
    });

    it('Can properly return a collection of all the values that exist in the linked list', () => {
        let ll = new LinkedList;
        ll.insert('Nihad');
        ll.insert('Zeidan');
        ll.insert('77');
        expect(ll.toString()).toEqual('{Nihad}->{Zeidan}->{77}->Null');
    });

    it("Can successfully add a node to the end of the linked list", () => {
        let ll = new LinkedList;
        ll.insert(5);
        ll.insert(4);
        ll.insert(3);

        ll.append("X");

        console.log(ll);

        expect(ll.head.next.next.next.value).toEqual("X");
    });

    it("Can successfully add multiple nodes to the end of a linked list", () => {
        let ll = new LinkedList;
        ll.insert(5);
        ll.insert(4);
        ll.insert(3);

        ll.append("X");
        ll.append("Y")

        expect(ll.head.next.next.next.value).toEqual("X");
        expect(ll.head.next.next.next.next.value).toEqual("Y");
    });

    it("Can successfully insert a node before a node located in the middle of a linked list", () => {
        let ll = new LinkedList;
        ll.insert(5);
        ll.insert(4);
        ll.insert(3);
        ll.insert(2);
        ll.insert(1);

        ll.insertBefore(3, "BeforeMiddle");

        expect(ll.head.next.next.value).toEqual("BeforeMiddle");
        expect(ll.toString()).toEqual('{5}->{4}->{BeforeMiddle}->{3}->{2}->{1}->Null')
    });

    it('Can successfully insert a node before the first node of a linked list', () => {
        let ll = new LinkedList;
        ll.insert(5);
        ll.insert(4);
        ll.insert(3);

        ll.insertBefore(5, "beforeTheFirst");

        expect(ll.head.value).toEqual("beforeTheFirst");
        expect(ll.toString()).toEqual('{beforeTheFirst}->{5}->{4}->{3}->Null');
    });

    it("Can successfully insert after a node in the middle of the linked list", () => {
        let ll = new LinkedList;
        ll.insert(5);
        ll.insert(4);
        ll.insert(3);
        ll.insert(2);
        ll.insert(1);

        ll.insertAfter(3, "AfterMiddle");

        expect(ll.head.next.next.next.value).toEqual("AfterMiddle");
        expect(ll.toString()).toEqual('{5}->{4}->{3}->{AfterMiddle}->{2}->{1}->Null')
    });

    it('Can successfully insert a node after the last node of the linked list', () => {
        let ll = new LinkedList;
        ll.insert(5);
        ll.insert(4);
        ll.insert(3);

        ll.insertAfter(3, "AfterTheLast");

        expect(ll.head.next.next.next.value).toEqual('AfterTheLast');
    });


    it('Where k is greater than the length of the linked list', () => {
        let ll = new LinkedList;
        ll.insert(5);
        ll.insert(4);
        ll.insert(3);

        let test = ll.findFromEnd(4);
        expect(test).not.toBeDefined();
    });

    it('Where k and the length of the list are the same', () => {
        let ll = new LinkedList;
        ll.insert(5);
        ll.insert(4);
        ll.insert(3);

        let test = ll.findFromEnd(3);
        expect(test).not.toBeDefined();
    });

    it('Where k is not a positive integer', () => {
        let ll = new LinkedList;
        ll.insert(5);
        ll.insert(4);
        ll.insert(3);

        let test = ll.findFromEnd(-1);
        expect(test).toEqual(3);
    });


    it('Where the linked list is of a size 1', () => {
        let ll = new LinkedList;
        ll.insert(5);


        let test = ll.findFromEnd(0);
        expect(test).toEqual(5);
    });

    it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
        let ll = new LinkedList;
        ll.insert(5);
        ll.insert(4);
        ll.insert(3);
        ll.insert(2);
        ll.insert(1);

        let test = ll.findFromEnd(2);
        let test2 = ll.findFromEnd(3)
        let test3 = ll.findFromEnd(1)

        expect(test).toEqual(3);
        expect(test2).toEqual(4);
        expect(test3).toEqual(2);
    });

    it('Edge Cases for findFromEnd method', () => {
        let ll = new LinkedList;
        ll.insert(5);
        ll.insert(4);
        ll.insert(3);
        ll.insert(2);
        ll.insert(1);

        let test = ll.findFromEnd("x");
        let test2 = ll.findFromEnd([5, 9]);
        let test3 = ll.findFromEnd({ user: "user" });


        expect(test).not.toBeDefined();
        expect(test2).not.toBeDefined();
        expect(test3).not.toBeDefined();
    });

    it('Happy Scenario for ZIP LL function when two linked lists equal in length', () => {
        let firstLL = new LinkedList;
        firstLL.insert(1);
        firstLL.insert(2);
        firstLL.insert(3);
        firstLL.insert(4);
        firstLL.insert(5);


        let secondLL = new LinkedList;
        secondLL.insert("A");
        secondLL.insert("B");
        secondLL.insert("C");
        secondLL.insert("D");
        secondLL.insert("E");


        let test = zipLists(firstLL, secondLL);


        expect(test.head.value).toEqual(1);
        expect(test.head.next.value).toEqual("A");
        expect(test.includes("E")).toBeTruthy();
        expect(test.includes("C")).toBeTruthy();
        expect(test.includes(3)).toBeTruthy();
        expect(test.includes(5)).toBeTruthy();
        expect(test.toString()).toEqual(`{1}->{A}->{2}->{B}->{3}->{C}->{4}->{D}->{5}->{E}->Null`);



    });

    it("Test ZIP LL when the first LL is less than the second", () => {

        let firstLLSecond = new LinkedList;
        firstLLSecond.insert(1);
        firstLLSecond.insert(2);

        let secondLLSecond = new LinkedList;
        secondLLSecond.insert("A");
        secondLLSecond.insert("B");
        secondLLSecond.insert("C");


        let testFirstIsLess = zipLists(firstLLSecond, secondLLSecond);

        expect(testFirstIsLess.head.value).toEqual(1);
        expect(testFirstIsLess.head.next.value).toEqual("A");
        expect(testFirstIsLess.includes("E")).toBeFalsy();
        expect(testFirstIsLess.includes("C")).toBeTruthy();
        expect(testFirstIsLess.includes(2)).toBeTruthy();
        expect(testFirstIsLess.includes(5)).toBeFalsy();
        expect(testFirstIsLess.toString()).toEqual(`{1}->{A}->{2}->{B}->{C}->Null`);

    });

    it("Test ZIP LL when the second LL is less than the firs", () => {

        let firstLLThird = new LinkedList;
        firstLLThird.insert(1);
        firstLLThird.insert(2);
        firstLLThird.insert(3);
        firstLLThird.insert(4);

        let secondLLThird = new LinkedList;
        secondLLThird.insert("A");
        secondLLThird.insert("B");



        let testSecondIsLess = zipLists(firstLLThird, secondLLThird);

        expect(testSecondIsLess.head.value).toEqual(1);
        expect(testSecondIsLess.head.next.value).toEqual("A");
        expect(testSecondIsLess.includes("E")).toBeFalsy();
        expect(testSecondIsLess.includes("C")).toBeFalsy();
        expect(testSecondIsLess.includes(2)).toBeTruthy();
        expect(testSecondIsLess.includes(5)).toBeFalsy();
        expect(testSecondIsLess.toString()).toEqual(`{1}->{A}->{2}->{B}->{3}->{4}->Null`);


    });

    it("EDGE CASES FOR ZIP LL", () => {

        let zipLL = zipLists([2, 3], "X");

        expect(zipLL.head).toBeNull()


    });
});