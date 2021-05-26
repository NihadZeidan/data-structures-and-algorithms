'use strict';

const multiBracketValidation = require("../javascript/code-challenges/multiBracketValidation/multi-bracket-validation.js");


describe('TESTING multiBracketValidation() Function', () => {
    it('It should return true on matched parenthasis', () => {
        let test = multiBracketValidation('()');
        expect(test).toBeTruthy();
    });


    it('It should return true on matched curlyBraces', () => {
        let test = multiBracketValidation('{}');
        expect(test).toBeTruthy();
    });


    it('It should return true on matched squared brackets', () => {
        let test = multiBracketValidation('[]');
        expect(test).toBeTruthy();
    });

    it('It should return true if the brackets matched', () => {
        let test = multiBracketValidation('[](){}');
        expect(test).toBeTruthy();
    });

    it('should be false', () => {
        let test = multiBracketValidation('[)}({]');
        expect(test).toBeFalsy();
    });


    it('should be false', () => {
        let test = multiBracketValidation('[asd)}asdasfsadfsdg({asdasd]');
        expect(test).toBeFalsy();
    });


    it('It should return false if the brackets did not match', () => {
        let test = multiBracketValidation('[](');
        expect(test).toBeFalsy();
    });


    it('It should return false if the brackets did not match with characters', () => {
        let test = multiBracketValidation('[]{asfadgsdg');
        expect(test).toBeFalsy();
    });


    it('It should return false if all the input brackets entered did not match', () => {
        let test = multiBracketValidation('[](){}]');
        expect(test).toBeFalsy();
    });


});