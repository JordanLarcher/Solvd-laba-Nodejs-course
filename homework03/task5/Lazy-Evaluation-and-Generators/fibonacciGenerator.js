/**
 * Create a lazy generator function
 *  called fibonacciGenerator that generates
 *  Fibonacci numbers one at a time using lazy 
 *  evaluation.
 */


function fibonacciGenerator() {
    let [a, b] = [0, 1];
    return {
        next: () => {
            const value = a;
            [a,b] = [b, a + b];
            return { value, done: false }
        }
    };
}


// How to use it ?

//example
const fibonacci = fibonacciGenerator();
console.log(fibonacci.next().value); // 0
console.log(fibonacci.next().value); // 1
console.log(fibonacci.next().value); // 2
console.log(fibonacci.next().value); // 3