/**
 * ============================================================================
 * Create an object called person with the following properties and values:
 * firstName: "John"
 * lastName: "Doe"
 * age: 30
 * email: "john.doe@example.com"
 * Use property descriptors to make all properties of the person object read-only and non-writable, so their values cannot be changed directly.
 * Implement a method called updateInfo on the person object that takes a new info object as an argument. 
 * The info object should contain updated values for any of the properties (e.g., { firstName: "Jane", age: 32 }).
 * Ensure that this method adheres to the read-only property descriptor set earlier.
 * Create a new property called address on the person object with an initial value of an empty object. 
 * Make this property non-enumerable and non-configurable.
 */

// ============================================================================
// Task 1: Object Property Manipulation
// ============================================================================


const person = {};

Object.defineProperties(person, {
    firstName: {
        value: "John",
        writable: false, // it cannot be changed
        configurable: false, // it cannot be deleted or redefined
        enumerable: true // it will show up in for...in loops
    },
    lastName: {
        value: "Doe",
        writable: false,
        configurable: true, // it can be deleted or redefined
        enumerable: true
    },
    age: {
        value: 30,
        writable: false,
        configurable: true, // it can be deleted or redefined
        enumerable: true
    },
    email: {
        value: "john.doe@example.com",
        writable: false,
        enumerable: true, // it will show up in for...in loops
        configurable: true, // it can be deleted or redefined
    },
    // Update info implementation
    updateInfo: {
        value: function(newInfo) {
            for( const key in newInfo) {
                if(Object.prototype.hasOwnProperty.call(newInfo, key)){
                    try {
                        this[key] = newInfo[key]; // Attempt to update the property
                    } catch(error) {
                        console.error(`Cannot update property ${key}: ${error.message}`);
                    } 
                }
            }
        },
        writable: false,
        enumerable: false,
    },
    // Address property
    address: {
        value: {},
        writable: true, // it can be changed
        enumerable: false, // it will not show up in for...in loops
        configurable: false // it cannot be deleted or redefined
    }
});