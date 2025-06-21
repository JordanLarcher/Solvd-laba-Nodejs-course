/**
 * Implement a higher-order function called repeatFunction
 *  that takes a function and a number as arguments. The
 *  function should return a new function that invokes the
 *  original function multiple times based on the provided
 *  number. If the number is negative, the new function should 
 * invoke the original function indefinitely until stopped.
 * @param {Function} fn 
 * @param {number} times, if positive = exact repeat, if negative = infinite
 */

function repeatFunction(fn, times) {
    return function (...args) {
        if (times < 0) {
            while(true){ //if negative loops forever
                fn(...args);
            }
        }else { // if positive it will repeat the exact number of times indicated
            for(let i = 0; i < times; i++){
                fn(...args);
            }
        }
    };
}


//Example
const sayHi = () => console.log("Hi!");
const hiTwice = repeatFunction(sayHi, -3);
hiTwice(); // logs "Hi!" twice