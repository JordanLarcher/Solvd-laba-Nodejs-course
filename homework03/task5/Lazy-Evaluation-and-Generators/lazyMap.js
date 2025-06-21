/**
 * mplement a lazy evaluation function called
 *  lazyMap that takes an array and a mapping 
 * function. The function should return a lazy 
 * generator that applies the mapping function 
 * to each element of the array one at a time.
 */


function lazyMap(array, mapper) {
    let index = 0;
    return {
        next: () => {
            if( index < array.length) {
                const value = mapper(array[index++]);
                return { value, done: false};
            }
            return { done: true}; 
        }
    }
}


// How to use it ?

const lazyTest = lazyMap([1, 2, 3, 4, 5, 6], x => x * 2);

// example 
console.log(lazyTest.next()); // { value: 2, done: false }  // 1 * 2
console.log(lazyTest.next()); // { value: 4, done: false }  // 2 * 2
console.log(lazyTest.next()); // { value: 6, done: false }  // 3 * 2
console.log(lazyTest.next()); //
console.log(lazyTest.next());
console.log(lazyTest.next());
console.log(lazyTest.next());
console.log(lazyTest.next());
console.log(lazyTest.next());
console.log(lazyTest.next());
console.log(lazyTest.next());
console.log(lazyTest.next());
console.log(lazyTest.next());