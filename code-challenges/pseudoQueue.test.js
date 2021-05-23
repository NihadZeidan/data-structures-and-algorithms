'use strict'

const PseudoQueue = require("../javascript/code-challenges/queueWithStacks/queue-with-stacks.js");


describe("TESTING PSEUDOQUEUE", () => {
    it("Create Successfully", () => {
        let myQueue = new PseudoQueue()
        expect(myQueue).toBeDefined();
    });


    it("Enqueue Successfully", () => {
        let myQueue = new PseudoQueue()

        myQueue.enqueue(5)
        myQueue.enqueue(4)
        myQueue.enqueue(3)

        expect(myQueue).toBeDefined();
        expect(myQueue.innerStack).toBeDefined();
        expect(myQueue.innerStack.top.value).toEqual(3);
    });


    it("Dequeue Successfully", () => {
        let myQueue = new PseudoQueue()

        myQueue.enqueue(5)
        myQueue.enqueue(4)
        myQueue.enqueue(3)



        expect(myQueue).toBeDefined();
        expect(myQueue.dequeue()).toEqual(5);
        expect(myQueue.dequeue()).toEqual(4);
        expect(myQueue.dequeue()).toEqual(3);

    });

    it("Failure cases", () => {
        let myQueue = new PseudoQueue()

        expect(myQueue).toBeDefined();
        expect(myQueue.dequeue()).toEqual(new Error("Can't Pop on Empty Stack!"));
    });

})