'use strict';

const Stack = require('../stacksAndQueues/stacks-and-queues.js').Stack



function multiBracketValidation(input) {

    if (!input) {
        throw new Error('You Did Not entered a string !')
    }
    const myStack = new Stack();
    let end = '';

    for (let char of input) {
        let validator = /[\{\[\(]/

        if (validator.test(char)) {
            myStack.push(char);
            end = char;
        } else if ((char == '}' && end == '{') || (char == ')' && end == '(') || (char == ']' && end == '[')) {
            myStack.pop()
            end = myStack.isEmpty() ? '' : myStack.peek();
        } else if (char == '}' || char == ']' || char == ')') {
            return false;
        }
    }
    return myStack.isEmpty();
}

module.exports = multiBracketValidation