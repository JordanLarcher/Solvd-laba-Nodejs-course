/**
 * Implement a recursive function called calculateFactorial
 *  that calculates the factorial of a given number. Optimize
 *  the function to use tail call optimization to avoid stack
 *  overflow for large input numbers.
 */

function calculateFactorial(n, acc=1) {
    if(n <= 1) return acc;
    return calculateFactorial(n - 1, acc * n); // This is the recursive call.
}