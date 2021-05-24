'use strict';

class Dog {
    constructor(animal) {
        this.animal = animal;
        this.next = null
    }
}

class Cat {
    constructor(animal) {
        this.animal = animal;
        this.next = null
    }
}

let rear = null;
let rearCAt = null;

class AnimalShelter {
    constructor() {
        this.dog = null;
        this.cat = null;
    }

    enqueue(animal) {
        animal = animal.toUpperCase()
        if ((animal == 'DOG') || (animal === 'CAT')) {

            if (animal === 'DOG') {
                let newAnimal = new Dog(animal);
                if (!this.dog) {
                    this.dog = newAnimal
                    rear = this.dog.next
                } else {
                    if (!rear) {
                        rear = newAnimal
                        this.dog.next = rear
                    } else {
                        rear.next = newAnimal;
                        rear = newAnimal;
                    }
                }
            }

            if (animal === 'CAT') {
                let newAnimal = new Cat(animal);
                if (!this.cat) {
                    this.cat = newAnimal
                    rearCAt = this.cat.next
                } else {
                    if (!rearCAt) {
                        rearCAt = newAnimal
                        this.cat.next = rearCAt
                    } else {
                        rearCAt.next = newAnimal;
                        rearCAt = newAnimal;
                    }
                }
            }
        } else {
            return "Should Enqueue Dog or Cat Only"
        }
    }

    dequeue(pref) {
        pref = pref.toUpperCase()

        if ((pref === 'DOG') || (pref === 'CAT')) {
            if (pref === 'DOG') {
                while (this.dog) {
                    if (this.dog.animal === 'DOG') {
                        let value = this.dog.animal
                        this.dog = this.dog.next
                        return value
                    }
                }
            }

            if (pref === 'CAT') {
                while (this.cat) {
                    if (this.cat.animal === 'CAT') {
                        let value = this.cat.animal
                        this.cat = this.cat.next
                        return value
                    }
                }
            }
        } else {
            return null;
        }
    }
}

module.exports = AnimalShelter