// Exporting Module
console.log("Exporting Module");

const shippingCost = 10;
export const cart = [];

const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} were added to the cart`);
};

export { addToCart };

export default (a, b) => console.log(a + b);
