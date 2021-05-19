'use strict'

const palindrome = require("../javascript/code-challenges/palindrome/palindrome.js");

const LinkedList = require("../javascript/code-challenges/linkedList/linked-list.js");


describe("TESTING PALINDROME FUNCTION", () => {
    it("Happy scenarios", () => {

        let ll = new LinkedList;

        ll.insert("o");
        ll.insert("x");
        ll.insert("x");
        ll.insert("o");

        let test = palindrome(ll);

        expect(test).toBeTruthy();

    });

    it("Happy scenarios", () => {

        let ll = new LinkedList;

        ll.insert("x");
        ll.insert("o");
        ll.insert("N");
        ll.insert("o");
        ll.insert("x");

        let test = palindrome(ll);

        expect(test).toBeTruthy();

    });

    it("Failures", () => {

        let ll = new LinkedList;

        ll.insert("a");
        ll.insert("b");
        ll.insert("c");
        ll.insert("d");
        ll.insert("e");

        let test = palindrome(ll);


        expect(test).toBeFalsy();

    });

    it("Edge Cases", () => {


        let test = palindrome("x");
        let test2 = palindrome(2);


        expect(test).not.toBeDefined();
        expect(test2).not.toBeDefined();

    });
})