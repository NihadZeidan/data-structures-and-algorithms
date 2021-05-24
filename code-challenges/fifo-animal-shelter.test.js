'use strict';

const AnimalShelter = require("../javascript/code-challenges/fifoAnimalShelter/fifo-animal-shelter.js");



describe("TESTING ANIMAL SHELTER QUEUE", () => {
    it("should create new instance", () => {
        let test = new AnimalShelter();
        expect(test.dog).toEqual(null);
        expect(test.cat).toBeNull();
    });


    it("should enqueue only dogs or cats", () => {
        let test = new AnimalShelter();

        test.enqueue('dog')
        test.enqueue('cat')



        expect(test.dog.animal).toEqual('DOG');
        expect(test.cat.animal).toEqual('CAT');

    });

    it("should enqueue multiple times correctly", () => {
        let test = new AnimalShelter();

        test.enqueue('dog')
        test.enqueue('cat')
        test.enqueue('dog')
        test.enqueue('cat')
        test.enqueue('dog')
        test.enqueue('cat')

        expect(test.dog.animal).toEqual('DOG');
        expect(test.cat.animal).toEqual('CAT');

    });



    it("should dequeue only dogs or cats", () => {
        let test = new AnimalShelter();

        test.enqueue('dog')
        test.enqueue('cat')

        test.dequeue('dog')
        test.dequeue('cat')


        expect(test.dog).toEqual(null);
        expect(test.cat).toEqual(null);
    });

    it("should dequeue multiple times", () => {
        let test = new AnimalShelter();

        test.enqueue('dog')
        test.enqueue('cat')
        test.enqueue('dog')
        test.enqueue('cat')
        test.enqueue('dog')
        test.enqueue('cat')

        test.dequeue('dog')
        test.dequeue('cat')
        let test2 = test.dequeue('dog')
        let test3 = test.dequeue('cat')
        test.dequeue('dog')
        test.dequeue('cat')


        expect(test.dog).toEqual(null);
        expect(test.cat).toEqual(null);
        expect(test2).toEqual("DOG");
        expect(test3).toEqual("CAT");
    });

    it("should return error if enqueue anything except dog or cat", () => {
        let test = new AnimalShelter();


        expect(test.enqueue('Xx')).toEqual('Should Enqueue Dog or Cat Only');
    });

    it("should return Null if dequeue anything except dog or cat", () => {
        let test = new AnimalShelter();


        expect(test.dequeue('Xx')).toEqual(null);
    });


});