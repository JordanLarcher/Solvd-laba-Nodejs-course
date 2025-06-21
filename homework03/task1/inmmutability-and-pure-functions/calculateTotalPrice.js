/**
 * This function sums up prices without changing anything
 * @param {Array<{ price: number }>} products
 * @returns { number }>}
 */


function calculateTtotalPrice(products){
    return products.reduce( (sum, { price }) => sum + price, o)
}