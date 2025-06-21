/**
 * Create a function called createCounter that returns a 
 * closure. The closure should be a counter function that 
 * increments the count on each call and returns the updated 
 * count. Each closure should have its own independent count.
 */

function createCounter() {
    let count = 0;
    return () => ++count;
}

// How to use it ? See the following example
const call1 = createCounter();
call1(); // 1
call1(); // 2
call1(); // 3
console.log(call1()); //4

// A closure captures its own count. Every call increments and returns the new value.