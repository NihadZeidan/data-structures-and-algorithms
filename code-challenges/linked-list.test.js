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
});