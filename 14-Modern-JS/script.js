// Importing Module
// Module is a small building block we put together to build complex aoolications

import { cart, addToCart } from "./shoppingCart.js";
// import add from "./shoppingCart.js";
console.log("Importing Module");

addToCart("breads", 5);
addToCart("chickens", 4);
addToCart("lettuces", 3);
addToCart("apples", 7);
// add(7, 11);

console.log(cart);
/* Top level await */
// Using "await" oustide of an async function blocks the execution of the rest of the module
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
/*
const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
  return { title: data.at(-1).title, body: data.at(-1).body };
};

getLastPost();

const lastPost = getLastPost();

// Not very clean
// lastPost.then((last) => console.log(last));
const lastPost2 = await getLastPost();
console.log(lastPost2);
*/
/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totallQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push(product, quantity);
    console.log(
      `${quantity} ${product} were added to the cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totallQuantity,
  };
})();

ShoppingCart2.addToCart("apples", 4);
ShoppingCart2.addToCart("pizzas", 2);
*/

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
  module.hot.accept();
}

class Person {
  #greeting = "Hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}

const james = new Person("James");
console.log(cart.find((el) => el.product === "bread"));

import "core-js/stable";
// If you are worried about your bundle size you can select specific functions you'd like to use from a package
// import "core-js/stable/array/find"
// import "core-js/stable/promise"

// For polyfilling async functions
import "regenerator-runtime/runtime";
