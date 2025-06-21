
/**
 * This function retursn a new array that keeps the original array
 * unchanged.
 * @param {Array<{ name: string, price: number }>} products
 * @param {number} discountPct 
 * @returns {Array<{ name: string, price: number }>}
 */

function calculateDiscountedPrice(products, discountPct) {
    return products.map( product => ({
        ...product,
        price: product.price * (1 - discountPct)
    }));
};