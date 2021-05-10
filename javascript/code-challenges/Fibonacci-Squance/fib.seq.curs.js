'use strict'

module.exports = function fibonacci(num) {
    if (num < 2) {
        return num;
    } else {
        return (fibonacci(num - 1) + fibonacci(num - 2));
    }
};