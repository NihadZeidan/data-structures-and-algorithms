'use strict';

const fizzBuzz = require('../javascript/code-challenges/fizzBuzzTree/fizz-buzz-tree.js').fizzBuzzTree
const KAryTree = require('../javascript/code-challenges/fizzBuzzTree/fizz-buzz-tree.js').KAryTree


describe('test FizzBuzz', () => {
    it('test', () => {
        let Karr = new KAryTree()

        Karr.addRoot(5);

        Karr.addChild(15)
        Karr.addChild(10)

        Karr.addSib(25)
        Karr.addSib(15)

        let test = fizzBuzz(Karr);

        expect(test.root.value).toEqual('Fizz');
        expect(test.child.value).toEqual('Fizz');
        expect(test.child.child.value).toEqual('FizzBuzz');
        expect(test.sib.value).toEqual('Fizz');
        expect(test.sib.sib.value).toEqual('FizzBuzz');


    })
})