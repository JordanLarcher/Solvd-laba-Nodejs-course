
import { customFilterUnique, chunkArray, customShuffle, getArrayIntersection, getArrayUnion,
    measureArrayPerformance, 
} from './AdvancedArrayFiltering.js';

// ============================================================================
// EXAMPLES
// ============================================================================
console.log("--- Task 1: customFilterUnique ---");
const products = [
    { id: 1, category: 'Electronics' },
    { id: 2, category: 'Books' },
    { id: 3, category: 'Electronics' },
    { id: 4, category: 'Clothing' },
    { id: 5, category: 'Books' },
];
const uniqueByCat = customFilterUnique(products, (product) => product.category);
console.log("Original products:", products);
console.log("Unique by category:", uniqueByCat);
// Expected output: [{id: 1, category: 'Electronics'}, {id: 2, category: 'Books'}, {id: 4, category: 'Clothing'}]

console.log("\n--- Task 2: chunkArray ---");
const dataToChunk = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunks = chunkArray(dataToChunk, 3);
console.log("Original data:", dataToChunk);
console.log("Chunked data (size 3):", chunks);
// Expected output: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]

console.log("\n--- Task 3: customShuffle ---");
const numbersToShuffle = [1, 2, 3, 4, 5];
const shuffledNumbers = customShuffle(numbersToShuffle);
console.log("Original numbers:", numbersToShuffle);
console.log("Shuffled numbers:", shuffledNumbers); // Order will be random

console.log("\n--- Task 4: Intersection and Union ---");
const arrayA = [1, 2, 3, 4, 5];
const arrayB = [4, 5, 6, 7, 8];
const intersection = getArrayIntersection(arrayA, arrayB);
const union = getArrayUnion(arrayA, arrayB);
console.log("Array A:", arrayA);
console.log("Array B:", arrayB);
console.log("Intersection:", intersection); // Expected: [4, 5]
console.log("Union:", union); // Expected: [1, 2, 3, 4, 5, 6, 7, 8]

console.log("\n--- Task 5: Performance Analysis ---");
// Create a large array for a more meaningful performance test.
const largeArray = Array.from({ length: 1000000 }, (_, i) => ({ id: i, value: Math.random() }));

// Define a callback for filtering
const filterCallback = item => item.value > 0.5;

// Measure performance of the built-in filter
const nativeFilterTime = measureArrayPerformance(() => largeArray.filter(filterCallback));
console.log(`Built-in .filter() time: ${nativeFilterTime.toFixed(4)} ms`);

// Measure performance of a custom function (let's use a simple loop for comparison)
const customFilter = (arr, cb) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
};
const customFilterTime = measureArrayPerformance(customFilter, largeArray, filterCallback);
console.log(`Custom loop filter time: ${customFilterTime.toFixed(4)} ms`);