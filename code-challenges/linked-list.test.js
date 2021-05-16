'use strict';

const LinkedList = require('../javascript/code-challenges/linkedList/linked-list.js');


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

});