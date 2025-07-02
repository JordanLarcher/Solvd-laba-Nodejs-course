/**
 * ============================================================================
 * Implement a function called createImmutableObject that takes an object as an argument 
 * and returns a new object with all its properties made read-only and non-writable using 
 * property descriptors. The function should handle nested objects and arrays recursively.
 * Use the createImmutableObject function to create an immutable version of the person object from Task 1.
 */

// ============================================================================
// Task 4: Advanced Property Descriptors
// ============================================================================

const createImmutableObject = (obj) => {
    const immutableObj = {};

    // Here we use Object.keys to iterate over the properties of the object 
    for (const key in obj) {
        const value = obj[key];
        let descriptor;



        // if the value is an object or an array, we call createImmutableObject recursively accordingly with the assignment
        if(typeof value === 'object' && value !== null) {
            descriptor = {
                value: createImmutableObject(value), // recursively create an immutable object
                writable: false, // this makes the property read-only
                configurable: false, // this prevents the property from being deleted or reconfigured
                enumerable: true // this allows the property to be listed in for loops
            };
        }else {
            descriptor = {
                value: value, // assign the value directly
                writable: false, // this makes the property read-only
                configurable: false, // this prevents the property from being deleted or reconfigured
                enumerable: true // this allows the property to be listed in for loops
            };

            // The Object.defineProperty method is used to define a new property or modify an existing property on an object
            // with the specified property descriptor.
            Object.defineProperty(immutableObj, key, descriptor);
        }
    }
    return immutableObj;
};