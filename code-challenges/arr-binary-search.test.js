'use strict';

const binarySearch = require('../javascript/code-challenges/arrayBinarySearch/array-binary-search.js');


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

describe("TESTING BINARY SEARCH FUNCTION", () => {
    it('SUCCESSES "HAPPY PATH"', () => {
        expect(binarySearch(arr, 3)).toEqual(2);
        expect(binarySearch(arr, 5)).toEqual(4);
        expect(binarySearch(arr, 9)).toEqual(8);
        expect(binarySearch(arr, 11)).toEqual(-1);
    });

    it("Failure", () => {
        expect(binarySearch(arr, 3) == 5).toBeFalsy();
        expect(binarySearch(arr, 5) == 5).toBeFalsy();
        expect(binarySearch(arr, 9) == -1).toBeFalsy();
        expect(binarySearch(arr, 11) == 9).toBeFalsy();
    });

    it('Edge Case', () => {
        expect(binarySearch(arr, -5)).toEqual(-1);
        expect(binarySearch(arr, 0)).toEqual(-1);
    });
});