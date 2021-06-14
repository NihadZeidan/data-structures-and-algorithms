'use strict';
const mergeSort = require('../javascript/code-challenges/mergeSort/mergeSort')


describe("TESTING MERGE SORT", ()=>{
    it('Sort array correctly', ()=> {
        let arr = [8,4,23,42,16,15]
        let test = mergeSort(arr)

        expect(test).toEqual([4,8,15,16,23,42]);
    });


    it('Sort array correctly Reverse-sorted:', ()=> {
        let arr =  [20,18,12,8,5,-2]
        let test = mergeSort(arr)

        expect(test).toEqual(arr.reverse());
    });

    it('Sort array correctly Few uniques:', ()=> {
        let arr =   [5,12,7,5,5,7]
        let test = mergeSort(arr)

        expect(test).toEqual([5,5,5,7,7,12]);
    });

    it('Sort array correctly Nearly-sorted:', ()=> {
        let arr =   [2,3,5,7,13,11]
        let test = mergeSort(arr)

        expect(test).toEqual([2,3,5,7,11,13]);
    });

    it("edge case 1 ", () => {
        let test = mergeSort();
        expect(test).toEqual("Input Must Be Array of Integers");
      });
    
      it("edge case 2 ", () => {
        let notArr = 4;
        let test = mergeSort(notArr);
        expect(test).toEqual("Input Must Be Array of Integers");
      });
    
      it("edge case 3 ", () => {
        let notArr = "Nihad";
        let test = mergeSort(notArr);
        expect(test).toEqual("Input Must Be Array of Integers");
      });
})