'use strict';

const insertShiftArray = require("../javascript/code-challenges/arrayShift/array-shift.js");
let array = [1, 2, 3, 4, 5, 6, 7, 8]

describe('TESTING Challenge 02', () => {
    it('it should return the new value at the middle of an array', () => {
        expect(insertShiftArray(array, 10)).toEqual([1, 2, 3, 4, 10, 5, 6, 7, 8])
    });

    it('it should return FALSE if the new value were added at any index except the middle', () => {
        let result = insertShiftArray(array, 10);

        expect(result === [1, 2, 3, 4, 5, 6, 7, 8, 10]).toBeFalsy();
        expect(result === [10, 1, 2, 3, 4, 5, 6, 7, 8]).toBeFalsy();
        expect(result === [1, 2, 3, 10, 4, 5, 6, 7, 8]).toBeFalsy();

    });
});