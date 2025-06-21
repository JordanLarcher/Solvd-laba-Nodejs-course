/**
 * Create a recursive function called power that takes 
 * a base and an exponent as arguments. The function should
 *  calculate the power of the base to the exponent using 
 * recursion.
 */

function power(base, exponent) {
    if( exponent == 0) return 1;
    if( exponent < 0) return 1/ power(base, -exponent);
    return base * power(base, exponent - 1);
}

//const calculatePower = power(2, undefined);

//console.log(calculatePower);


