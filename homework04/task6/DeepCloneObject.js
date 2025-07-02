/**
 * ============================================================================
 * Implement a function called deepCloneObject that takes an object as an argument and returns a deep 
 * copy of the object. The function should handle circular references and complex nested structures. 
 * Do not use JSON methods.
 */

// ============================================================================
// Task 6: Deep Cloning of Objects
// This is a design pattern that allows you to create a deep copy of an object, including all nested properties.
// The deepClone function uses recursion to copy each property of the object to a new object.
// ============================================================================

const deepCloneObject = (obj, map = new WeakMap()) => {

    if(obj === null || typeof obj !== 'object') {return obj;};

    // If the object is already cloned, return the cloned object
    if(map.has(obj)) {
        return map.get(obj);
    }

    // Determine the type of the object 
    const clone = Array.isArray(obj) ? [] : {};

    // Store the cloned object in the map to handle circular references
    map.set(obj, clone);
    // Iterate over the properties of the object
    for(const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {

            // Recursively clone each property of the object 
            clone[key] = deepCloneObject(obj[key], map);
        }
    }
    return clone;
};