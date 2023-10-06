"use strict";

/* Destructuring Arrays */
/*
const restaurant = {
  name: "Classic Italian",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  startMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotta"],

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = arr[2];

// Small example of destructuring
const [x, y, z] = arr;
console.log(x, y, z);

// Example of getting the 1st and 3rd elements in an array
let [first, , second] = restaurant.categories;
console.log(first, second);

// Allows you to switch the values of the properties in an array
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// Better way to do it using destructing
[first, second] = [second, first];
console.log(first, second);

const [starter, mainDish] = restaurant.order(2, 0);
console.log(starter, mainDish);

// Destructuring a nested array
const nested = [4, 5, [7, 8]];
const [h, , [j, k]] = nested;
console.log(h, j, k);

// Default Values
// If you don't know how many items are in an array, you can set default values so if there isn't an item at that index it'll go with the default value
const [v = 1, n = 1, m = 1] = [9, 0];
*/

/* Creating Array Function */
/*
const years = [1990, 1991, 1992, 1993, 1994];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calcAge(el) {
  return 2020 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calcAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
console.log(v, n, m);
*/

/* Spread Operator */
/*
const restaurant = {
  name: "Classic Italian",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  startMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotta"],

  openHours: {
    thu: {
      open: 10,
      close: 3,
    },
    fri: {
      open: 10,
      close: 4,
    },
    sat: {
      open: 10,
      close: 7,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, location, time }) {
    console.log(
      `Order Received: ${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${location} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Let's make your delicious pasta with: ${ing1}, ${ing2}, ${ing3}`
    );
  },

  orederPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const arr = [1, 2, 3];
const anotherArr = [arr[0], arr[1], arr[2], 4, 5];
console.log(anotherArr);

// It creates a new array with the items from the previous array along with the new ones
const spreadArr = [...arr, 4, 5];
console.log(spreadArr);

// Real world example
const ingredients = [
  // prompt("Let's make psata! Ingredient 1?"),
  // prompt("Ingredient 2?"),
  // prompt("Ingredient 3?"),
];

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//Accomplishes the same thing using the spread operator
restaurant.orderPasta(...ingredients);
*/

/* Looping through an array using For-Of loop */
/*
const players = ["Jay", "Ray", "May", "Tay"];

for (const name of players) console.log(name);

// Using For-Of loop to get indexes
for (const [i, name] of players.entries()) {
  console.log(`${[i + 1]}: ${name}`);
}
*/

/* Enhanced Object Lierals */
/*
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// Using array destructuring to add property name(example of new enhancements)
const hours = {
  [weekdays[3]]: {
    open: 10,
    close: 3,
  },
  [weekdays[4]]: {
    open: 10,
    close: 4,
  },
  [weekdays[5]]: {
    open: 10,
    close: 7,
  },
};

const restaurant = {
  name: "Classic Italian",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  startMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotta"],

  // ES6 enhanced object literal for adding object
  hours,

  // ES6 enhanced object literal for writing functions
  order(starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, location, time }) {
    console.log(
      `Order Received: ${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${location} at ${time}`
    );
  },
};

console.log(restaurant);
restaurant.orderDelivery({
  startIndex: 0,
  mainIndex: 0,
  location: "Park Ave",
  time: "8pm",
});
*/

/* Array Challenges */

const originalFlavors = [
  "Banana Nut Fudge",
  "Black Walnut",
  "Burgundy Cherry",
  "Butterscotch Ribbon",
  "Cherry Macaron",
  "Chocolate",
  "Chocolate Almond",
  "Chocolate Chip",
  "Chocolate Fudge",
  "Chocolate Mint",
  "Chocolate Ribbon",
  "Coffee",
  "Coffee Candy",
  "Date Nut",
  "Eggnog",
  "French Vanilla",
  "Green Mint Stick",
  "Lemon Crisp",
  "Lemon Custard",
  "Lemon Sherbet",
  "Maple Nut",
  "Orange Sherbet",
  "Peach",
  "Peppermint Fudge Ribbon",
  "Peppermint Stick",
  "Pineapple Sherbet",
  "Raspberry Sherbet",
  "Rocky Road",
  "Strawberry",
  "Vannilla",
  "Vanilla Burnt Almond",
];

const is2Flavors = ["grape", "cherry"];

/* Creating a copy of an array with the argument being an array */
// function copy(arr) {
//   return [...arr];
// }
// // console.log(copy(originalFlavors));
// // Reformatted to an arrow function
// const copy2 = (arr) => [...arr];
// console.log(copy2(originalFlavors));

/* Confirm that an array is 31 flavors */
// function is31Flavors(arr) {
//   if (arr.length === 31) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // console.log(is31Flavors(originalFlavors));
// // console.log(is31Flavors(is2Flavors));
// // Used an arrow function with a ternary operator
// const is31Flavors2 = (arr) => (arr.length === 31 ? true : false);

// console.log(is31Flavors2(originalFlavors));
// console.log(is31Flavors2(is2Flavors));

/* Add a flovor to the beginning of the array as a string */
// function addFlvaor(arr, string) {
//   arr.unshift(string);
//   return arr;
// }
// // console.log(addFlvaor(originalFlavors, "Vanilla Bean"));
// // Converted it to an arrow function
// const addFlavor2 = (arr, string) => {
//   arr.unshift(string);
//   return arr;
// };
// console.log(addFlavor2(originalFlavors, "Vanilla Bean"));

/* Remove an item form the end of the array */

// function removeLastFlavor(arr) {
//   arr.pop();
//   return arr;
// }
// // console.log(removeLastFlavor(originalFlavors));

// const removeLastFlavor2 = (arr) => {
//   arr.pop();
//   return arr;
// };
// console.log(removeLastFlavor2(originalFlavors));

/* Get flavor by index */
// function getFlavorByIndex(arr, number) {
//   return arr[number];
// }
// // console.log(getFlavorByIndex(originalFlavors, 10));

// const getFlavorByIndex2 = (arr, number) => arr[number];
// console.log(getFlavorByIndex2(originalFlavors, 10));

/* Remove flavor by name */
function removeFlavorByName(arr, flavor) {
  for (let i in arr) {
    if (arr[i] === flavor) {
      arr.splice(i, 1);
      // console.log(`${arr[i]}`);
      console.log(`${flavor} was removed`);
    } else {
      console.log(` ${flavor} is not a flavor we have`);
    }
  }
  return arr;
}
console.log(removeFlavorByName(originalFlavors, "Rocky Road"));

// const removeFlavorByName2 = (arr, flavor) =>
//   arr.map(function (ulavor) {
//     flavor === flavor ? arr.splice(dlavor, 1) : console.log("Not a flavor");
//   });
// console.log(removeFlovrByName2(originalFlavors, "Vanilla Bean"));

/* Filter by name and return an array with those names */
// function filterByFlavor(arr, flavor) {
//   let arrWord = [];
//   for (let i in arr) {
//     if (arr[i].includes(flavor)) {
//       arrWord.push(arr[i]);
//     }
//   }

//   return arrWord;
// }
// console.log(filterByFlavor(originalFlavors, "Lemon"));

function eightBall() {
  const answer = Math.floor(Math.random() * 8);
  let fortunes = [
    "Yes, definitely",
    "You can rely on it",
    "Without a doubt",
    "Most likely",
    "Hmm...I dont know",
    "Yikes...Nope",
    "Try again",
    "Very doubtful",
  ];

  fortunes = fortunes[answer];
  console.log(fortunes);
}
eightBall();

// Lets abrtact away the random number generator aka make the random number generator its own function and then place it in our eightBall function

function numberGenerator(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function eightBall2() {
  let fortunes = [
    "Yes, definitely",
    "You can rely on it",
    "Without a doubt",
    "Most likely",
    "Hmm...I dont know",
    "Yikes...Nope",
    "Try again",
    "Very doubtful",
  ];

  return (fortunes = fortunes[numberGenerator(0, 8)]);
}
console.log(eightBall2());
