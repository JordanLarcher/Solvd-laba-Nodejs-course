/**
 * ============================================================================
 * Implement a function called observeObject that takes an object and a callback function as arguments. 
 * The function should return a proxy object that wraps the original object and invokes the callback 
 * function whenever any property of the object is accessed or modified.
 * Use the observeObject function to create a proxy for the person object from Task 1. 
 * The callback function should log the property name and the action (get or set) performed on the object.
 */

// ============================================================================
// Task 5: Observation of Objects (proxy)
// This is a design pattern that allows you to observe changes to an object and interact with it in a controlled manner. 
// The observeObject function uses a Proxy to intercept property access and modification with a callback function.
// ============================================================================

const observeObject = (object, callback) => {
    return new Proxy(object, {
        // This method is called when a property is accessed
        // This is one of the handlers of the Proxy object
        // It intercepts the get operation on the object 
        get(target, property, receiver) {
            // Call the callback function with the property name and action type 
            callback(property, 'get');
            return Reflect.get(target, property, receiver); 
        },
        set(target, property, value, receiver) {
            callback(property, 'set');
            // This method is called when a property is set 
            // Reflect.set is used to set the property on the target object
            // Reflect.set returns true if the property was set successfully or false if it failed because the property is read-only or non-configurable
            const success = Reflect.set(target, property, value, receiver);
            if(!success) {
                console.warn(`Failed to set property ${property} on target object.`)
            }

            return success; // Return the success status of the set operation
        }
    });
};