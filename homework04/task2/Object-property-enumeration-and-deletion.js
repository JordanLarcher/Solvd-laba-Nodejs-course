/**
 * ============================================================================
 * Create a new object called product with the following properties and values:
 * name: "Laptop"
 * price: 1000
 * quantity: 5
 * Use property descriptors to make the price and quantity properties non-enumerable and non-writable.
 * Implement a function called getTotalPrice that takes the product object as an argument 
 * and returns the total price (calculated as price * quantity). Ensure that the function accesses 
 * the non-enumerable properties directly using the Object.getOwnPropertyDescriptor method.
 * Implement a function called deleteNonConfigurable that takes an object and a property name as arguments.
 *  The function should delete the specified property from the object if it exists. If the property is 
 * non-configurable, throw an error with an appropriate message.
 */

// ============================================================================
// Task 2: Object Property Enumeration and Deletion
// ============================================================================


const product = {};

Object.defineProperties(product, {
    name: {
        value: "Laptop",
        writable: true, // it can be changed
        configurable: true, // it can be deleted or redefined
        enumerable: true // it will show up in for...in loops
    },
    price: {
        value: 1000,
        writable: false, // it cannot be changed
        configurable: true, // it can be deleted or redefined
        enumerable: false // it will not show up in for...in loops
    },
    quantity: {
        value: 5,
        writable: false,
        configurable: true, // it can be deleted or redefined
        enumerable: false
    }
});

/***
 * Get the total price of the product by multiplying the price and quantity.
 * @param {Object} product - The product object containing price and quantity.
 * @returns {number} - The total price of the product.
 * @throws {TypeError} - If the product object does not have price or quantity properties
 */

function getTotalPrice(product) {
    const price = product.price;
    const quantity = product.quantity;
    if(typeof price !== 'number' || typeof quantity !== 'quantity') {
        throw new TypeError("Product must have numeric price and quantity properties.")
    }
    return price * quantity;
}


/**
 *  Delete a non-configurable property from an object.
 * @param {Object} obj - The object from which to delete the property.
 * @param {string} propName - The name of the property to delete.
 * @throws {Error} - If the property is non-configurable or does not exist.
 */
const deleteNonConfigurable = (object, propName) => {
    const descriptor = Object.getOwnPropertyDescriptor(object, propName);
    if (!descriptor) {
        throw new Error(`Property "${propName}" does not exist on the object.`);
    }
    if (!descriptor.configurable) {
        throw new Error(`Property "${propName}" is non-configurable and cannot be deleted.`);
    }
    delete object[propName];
}