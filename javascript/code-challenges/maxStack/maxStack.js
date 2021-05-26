'use strict'

const Stack = require('../stacksAndQueues/stacks-and-queues.js').Stack

class MaxStack {
    constructor() {
        this.sta = new Stack()
        this.maxSt = new Stack()
    }

    push(value) {
        let max = value
        if (!this.maxSt.isEmpty() && max < this.maxSt.peek()) {
            max = this.maxSt.peek()
        }
        this.maxSt.push(max)
        this.sta.push(value)
    }

    pop() {
        this.maxSt.pop()
        return this.sta.pop()
    }

    getMax() {
        return this.maxSt.peek()
    }
}

module.exports = MaxStack