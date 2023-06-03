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
console.log(v, n, m);
*/
/* Destructurin Objects */

// const restaurant = {
//   name: "Classic Italian",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   startMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotta"],

//   openHours: {
//     thu: {
//       open: 10,
//       close: 3,
//     },
//     fri: {
//       open: 10,
//       close: 4,
//     },
//     sat: {
//       open: 10,
//       close: 7,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({ starterIndex, mainIndex, location, time }) {
//     console.log(
//       `Order Received: ${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${location} at ${time}`
//     );
//   },
// };

// restaurant.orderDelivery({
//   time: 8,
//   location: "170 Broadway lane",
//   mainIndex: 2,
//   starterIndex: 1,
// });

// const { name, openHours, categories } = restaurant;
// console.log(name, openHours, categories);

// Changing the names of the items in an object through destructuring
// const {
//   name: restaurantName,
//   openHours: hours,
//   categories: types,
// } = restaurant;
// console.log(restaurantName, hours, types);

// Giving default values via destructuring
// const { menu = [], startMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating Variables
// let a = 110;
// let b = 375;

// const obj = { a: 23, b: 7, c: 90 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested Objects
// const { fri } = openHours;
// console.log(fri);

// const {
//   sat: { open, close },
// } = openHours;
// console.log(open, close);

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

// Objets

// Created an copy of the first object using the spread operator
const newRestaurant = { foundedIn: 2025, ...restaurant, founder: "Niya Kaddu" };
console.log(newRestaurant);

newRestaurant.name = "Pasta De La Creme";
console.log(newRestaurant.name);
console.log(restaurant.name);

// Using spread operator to make an addition function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(1, 2, 3);
add(4, 5, 6, 7, 8);
add(9, 8, 7, 6, 5, 4, 3, 2, 1);

restaurant.orederPizza("mushroom", "chicken", "green onions");
restaurant.orederPizza("chicken");
*/

/* And(&&) and Or(||) operators */
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

// They can use any data type, return any data type and perform short-circuiting
console.log("-----OR-----");
// The OR operator returns the first truthy value or the last value if they're all falsey
console.log(3 || "Joshua");
console.log("" || "Joshua");
console.log(true || 0);
console.log(null || undefined);
console.log(undefined || 0 || "" || "Hey" || 33 || null);

restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);
// Example of short-circuiting, same result as code above
const guest2 = restaurant.numGuest || 10;
console.log(guest2);

console.log("-----AND------");
// The AND operator returns the first falsey value or last truthy value if they're all truthy
console.log(0 && "Joshua");
console.log(7 && "Joshua");
console.log("Hey" && 23 && null && "Joshua");

// Practical Example
if (restaurant.orederPizza) {
  restaurant.orederPizza("mushroom", "chicken");
}
// Short-circuit version
restaurant.orederPizza && restaurant.orederPizza("mushroom", "chicken");

// Nullish Coalescing Operator
restaurant.numPersons = 0;
const persons = restaurant.numPersons ? restaurant.numPersons : 10;
console.log(persons);
// Nullish values: null and undefined (Not 0 or '')
const persons2 = restaurant.numPersons ?? 10;
console.log(persons2);
*/

/* Logical Assignment Operators */

// const rest1 = {
//   name: "Capri",
//   numGuests: 0,
// };

// const rest2 = {
//   name: "La Piazza",
//   owner: "Niya Kaddu",
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR Assignment Operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish Assignment Operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND Assigment Operator
// rest1.owner = rest1.owner && "Anonymous";
// rest2.owner = rest2.owner && "Anonymous";

// rest1.owner &&= "Anonymous";
// rest2.owner &&= "Anonymous";

// console.log(rest1);
// console.log(rest2);

// Note that using the var keyword creates the variable on the window/global object (we should not be using var)
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

/* Looping through an array using For-Of loop */

// const players = ["Jay", "Ray", "May", "Tay"];

// for (const name of players) console.log(name);

// // Using For-Of loop to get indexes
// for (const [i, name] of players.entries()) {
//   console.log(`${[i + 1]}: ${name}`);
// }

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
/* Looping Objects: Object Keys, Values and Entries */

// const restaurant = {
//   name: "Classic Italian",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   startMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotta"],
//   hours: {
//     thu: {
//       open: 10,
//       close: 3,
//     },
//     fri: {
//       open: 10,
//       close: 4,
//     },
//     sat: {
//       open: 10,
//       close: 7,
//     },
//   },
//   order(starterIndex, mainIndex) {
//     return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, location, time }) {
//     console.log(
//       `Order Received: ${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${location} at ${time}`
//     );
//   },
// };

// Property Names
// const properties = Object.keys(restaurant.hours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days a week on: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// Porperty Values
// const values = Object.values(restaurant.hours);
// console.log(values);

// Entire Object
// const entries = Object.entries(restaurant.hours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

/* SETS */

// const foods = new Set([
//   "oranges",
//   "berries",
//   "chicken",
//   "berries",
//   "kale",
//   "mango",
//   "kale",
// ]);
// A Set gets rid of duplicate items when used
// console.log(foods);

// Size tells you how many items are in a Set
// console.log(foods.size);

// Has lets you see if an item is in the Set, like 'includes' for arrays
// console.log(foods.has("kale"));
// console.log(foods.has("bacon"));

// Add allows you to add items to the Set but only once and Delete allows you to remove an item
// foods.add("Spinach");
// foods.add("Spinach");
// foods.delete("oranges");

// Clear removes all items from a Set
// foods.clear();
// console.log(foods);

// Sets are iterable aka you can use a loop on them
// for (const item of foods) {
//   console.log(item);
// }

// Converting a Set into an array
// const staff = ["waiter", "chef", "manager", "chef", "waiter"];
// const positions = [...new Set(staff)];
// console.log(positions);

/* MAPS */

// const park = new Map();
// park.set("name", "Fredrick Kaddu");
// console.log(park);
// park
//   .set(1, "Kampala, Uganda")
//   .set(2, "Vacaville, CA")
//   .set(3, "San Fransico, CA")
//   .set("opens", "6am")
//   .set("closes", "10pm")
//   .set(true, "We are open")
//   .set(false, "We are closed");

// Rettive an item from a MAP
// console.log(park.get("name"));
// console.log(park.get(true));

// // See if an item is in a MAP
// console.log(park.has(1));
// console.log(park.has("opens"));

// Delete an item from a MAP
// console.log(park.delete(2));

// Clear all items from a MAP
// console.log(park.clear());

// See how many items are in a MAP
// console.log(park.size);

/* MAP Iteration */

// const question = new Map([
//   ["Question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   [true, "Correct!"],
//   [false, "Try Again!"],
//   ["Correct Answer", 3],
// ]);
// console.log(question);

// Quiz App
// console.log(question.get("Question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }
// const answer = Number(prompt("Your Answer: "));
// console.log(question.get(question.get("Correct Answer") === answer));

// Convert Map to an array
// console.log([...question]);

// Covert an Object to a Map
// const hours = {
//   thu: {
//     open: 10,
//     close: 3,
//   },
//   fri: {
//     open: 10,
//     close: 4,
//   },
//   sat: {
//     open: 10,
//     close: 7,
//   },
// };

// const workHours = new Map(Object.entries(hours));
// console.log(workHours);

/* Working With Strings */

// const airline = "TAP air Uganda";
// const plane = "A320";

// // Can access a character within a string using bracket notation
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// // Using bracket notation directly on the string compared to its variable name
// console.log("A320"[0]);
// // Can use the method 'length' to find the length of a string on its variable name or directly on the string
// // (inclucdes spaces as well ie "Hey There".length would have a length of 9)
// console.log(airline.length);
// console.log("TAP air Uganda".length);
// // Can find the method 'indexOf' to find the index of a letter in a string
// console.log(airline.indexOf("r"));
// // The method 'lastIndexOf' finds the last occurance of a letter if there are more than one
// console.log(airline.lastIndexOf("a"));
// // Can use 'indexOf' to fing entire words withing a string(Case sensitive)
// console.log(airline.indexOf("Uganda"));
// // The 'slice' method can be used to get words or letters from a string
// console.log(airline.slice(4));
// // Gets letters or words from the starting index to the second index but doesn't include the second index
// console.log(airline.slice(4, 7));
// // Gets last letter in a string
// console.log(airline.slice(-1));

// const checkMiddleSeat = function (seat) {
//   // Middle seats are B and E
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") {
//     console.log("This is a middle seat!");
//   } else {
//     console.log("This is not a middle seat!");
//   }
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("12E");

// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());

// Fix capitalization on a name
// const passenger = "JoSHua";
// const passengerLower = passenger.toLowerCase();
// const correctPassenger =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(correctPassenger);

// const email1 = "jkaddu@yahoo.com";
// const email2 = "jkaddu@yahoo.com";

// const checkEmail = function (email, email2) {
//   if (email === email2) {
//     console.log("The email is a match!");
//   } else {
//     console.log("The emails don't match!");
//   }
// };

// checkEmail(email1, email2);

// Using the replace method to change things within a string
// const priceGB = "250,75~";
// const priceUS = priceGB.replace(",", ".").replace("~", "$");
// console.log(priceUS);

// Can replace words as well
// const annoucement = "All passengers boarding at door G23, proceed to door G23!";
// console.log(annoucement.replace("door", "gate"));
// Will replace all occurances of the word, letter ot character
// console.log(annoucement.replaceAll("door", "gate"));

// Returning boolean values
// const plane = "A320";
// console.log(plane.includes("A"));
// console.log(plane.startsWith("B"));

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You can not board the plane!");
//   } else {
//     console.log("Welcome Aboard!");
//   }
// };

// checkBaggage("I have some clothes, shoes and jakcets");
// checkBaggage("I have a gun for protection and jakcets");
// checkBaggage("I have a Knife, shoes and jakcets");

// Using split and join methods to change strings
// const lastName = "Kaddu";
// const firstName = "Joshua";

// const fullName = [firstName, lastName].join(" ");
// console.log(fullName);

// const phrase = "Here-lies-the-issue";
// console.log(phrase.split("-"));

// Function to capitalize the first letter of each name
// const capitalizeName = function (name) {
//   const names = name.split(" ");
//   const namesUpper = [];
//   for (const n of names) {
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//     // Another way to get the same thing acccomplished
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(" "));
// };

// capitalizeName("harry houdini");
// capitalizeName("megan ann good");
// capitalizeName("tee wiggins good");

// Working with padding
// const message = "Hello World!";
// console.log(message.padStart(20, "-").padEnd(30, "-"));
// console.log("Joshua".padStart(20, "-").padEnd(30, "-"));

// Maske credut card numbers
// const maskCreditCardNumbers = function (number) {
//   const str = number + "";
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };

// console.log(maskCreditCardNumbers(123455));
// console.log(maskCreditCardNumbers(12345590874903));
// console.log(maskCreditCardNumbers(1234552387348923));

// Using the repeat method
// const alert = "There are delays due to the rain! ";
// console.log(alert.repeat(3));

// const planeAlert = function (n) {
//   console.log(`There are ${n} planes in line ${"🛫".repeat(n)}`);
// };
// planeAlert(7);

// Code Challenege

// const camelCase = function (name) {
//   const newName = name.toLowerCase().trim().split("_");
//   const [first, second] = newName;
//   const output = `${first}${second.replace(
//     second[0],
//     second[0].toUpperCase()
//   )}`;
//   console.log(`${output.padEnd(15)}✅`);
// };

// camelCase("james_bond");
// camelCase("mark_west");
// camelCase(" Sean_White");

/* Function Constructor */
/*
const john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher"
};

const Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

// adding a function to the Person object without writing it in the constructor
// function using the prototype
Person.prototype.calculateAge = function() {
  console.log(2020 - this.yearOfBirth);
};

// adding a property to the Person object using the prototype
Person.prototype.lastName = "Smith";

const john = new Person("John", 1990, "teacher");
const jane = new Person("Jane", 1969, "designer");
const mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

// created a class in JS
class Athlete {
  constructor(name, sport, number) {
    this.name = name;
    this.sport = sport;
    this.number = number;
  }

  fanCheer() {
    console.log("We love you", this.name);
  }
}

var mike = new Athlete("Mike", "Football", 5);
var brandon = new Athlete("Brandon", "Football", 4);
var gary = new Athlete("Gary", "Football", 3);

console.log(mike, brandon, gary);

mike.fanCheer();
brandon.fanCheer();
gary.fanCheer();

// add a property and method using the prototype
Athlete.prototype.year = "Senior";
Athlete.prototype.fanChant = function() {
  console.log("GOOOOOO", this.name);
};

mike.fanChant();
brandon.fanChant();
gary.fanChant();

console.log(mike.year, brandon.year, gary.year);
*/

// Create object with Object create
/*
var personProto = {
  calcAge: function() {
    console.log(2020 - this.yearOfBirth);
  }
};

// create an object with no properties except the calcAge method
var john = Object.create(personProto);

// added properties to the object
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

// created an object with the properties in the initial creation of the object
var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" }
});
*/

// Primitives vs Objects
/*
// Primitives
var a = 23;
var b = a;
a = 46;
// I expected b to be 46 too but its 23 because its a copy of a
console.log(a);
console.log(b);

// Objects
var obj1 = {
  name: "John",
  age: 28
};
var obj2 = obj1;
obj1.age = 30;
// objects are different because they are the exact same object or referencing the
// same object, same with functions
console.log(obj1);
console.log(obj2);

// Functions
var age = 22;
var obj = {
  name: "Joshua",
  city: "Vacaville"
};

function change(a, b) {
  a = 29;
  b.city = "San Francisco";
}

change(age, obj);
console.log(age);
console.log(obj.city);
*/
/////////////////////////////////////////
// Lecture: Passing functions as arguments(callbacks)
/*
var years = [1990, 1991, 1992, 1993, 1994];

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
*/

/////////////////////////////////////////////
// Lecture: Functions returning functions
/*
function interviewQuestion(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log("What subject do you teach, " + name + "?");
    };
  } else {
    return function(name) {
      console.log("Hello " + name + " what do you do?");
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");

var designerQuestion = interviewQuestion("designer");

teacherQuestion("John");
designerQuestion("John");

// looks weird but works because its evaluated from left to right
interviewQuestion("teacher")("Mark");

function saleahSayings(word) {
  if (word === "hey") {
    return function(name) {
      console.log("Hey I'm hungry, please feed me " + name);
    };
  } else if (word === "jaja") {
    return function(name) {
      console.log("Jaja " + name + " may I have something to drink?");
    };
  } else {
    return function() {
      console.log("My name is Saleah!");
    };
  }
}

var jaja = saleahSayings("jaja");
var hey = saleahSayings("hey");

jaja("Fred");
jaja("Margaret");
hey("Auntie Grace");
hey("Uncle Jonathan");
*/

///////////////////////////////////////
// Lecture: IIFE(Immediately Invoked Function Expressions)
/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

// mainly used for data privacy
(function() {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();
*/

///////////////////////////////////////////
// Lecture: Closures
/*
function retirement(retirementAge) {
  return function(yearOfBirth) {
    var a = " years left until retirement.";
    var age = 2020 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}
var retirementUS = retirement(66);
retirementUS(1990);

var retirementGermany = retirement(65);
retirementGermany(1990);

var retirementIceland = retirement(67);
retirementIceland(1990);

retirement(50)(1990);

// reformatted a function that returned many functions into a closure
function interviewQuestion(job) {
  return function(name) {
    if (job === "designer") {
      console.log(name + ", can you please explain what UX design is?");
    } else if (job === "teacher") {
      console.log("What subject do you teach, " + name + "?");
    } else {
      console.log("Hello " + name + " what do you do?");
    }
  };
}

interviewQuestion("designer")("John");
*/

////////////////////////////////////////
// Lecture: Bind, Call and Apply
/*
var john = {
  name: "John",
  age: 29,
  job: "teacher",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          ", ladies and gentlemen! I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old."
      );
    } else if (style === "friendly") {
      console.log(
        "Hey what's up? I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old. Have a nice " +
          timeOfDay +
          "!"
      );
    }
  }
};

var emily = {
  name: "Emily",
  age: 35,
  job: "designer"
};

john.presentation("formal", "morning");

// the "call" method allows us to set the this keyword/variable to the emily object, replacing
// the 'this' with 'emily', then inputs the necessary arguments 
john.presentation.call(emily, "friendly", "afternoon");

// "apply" does the same thing but accepts an array for its arguments
// ex: john.presentation.apply(emily, ['friendly', 'afternoon'])

// the 'bind' allows you to create preset arguments
var johnFriendly = john.presentation.bind(john, "friendly");
johnFriendly("afternoon");
johnFriendly("evening");

var emilyFormal = john.presentation.bind(emily, "formal");
emilyFormal("morning");

var years = [1990, 1991, 1992, 1993, 1994];

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

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calcAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
*/

///////////////////////////////////////////////
// Coding Challenge

// used IIFE(Immediately Invoked Function Expression) so that if another
// programmer uses this code it won't interfere with their code or ours
//   function () {
//     class Question {
//       constructor(question, answers, correct) {
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//       }
//     }

//     Question.prototype.displayQuestion = function () {
//       console.log(this.question);
//       for (var i = 0; i < this.answers.length; i++) {
//         console.log(i + ": " + this.answers[i]);
//       }
//     };

//     var q1 = new Question(
//       "Is JavaScript a highly popular programming language",
//       ["Yes", "No"],
//       0
//     );

//     var q2 = new Question(
//       "Who is the instructor of this course",
//       ["Mike", "Joe", "Jonas"],
//       2
//     );

//     var q3 = new Question(
//       "What is the latest version of JavaScript",
//       ["ES5", "ES6", "ES9"],
//       2
//     );

//     var q4 = new Question(
//       "What is the name of the main character on Altered Carbon",
//       ["Tak", "Dom", "Quell"],
//       0
//     );

//     var q5 = new Question(
//       "What is the square root of 144",
//       ["8", "12", "9"],
//       1
//     );

//     var q6 = new Question(
//       "What is the capital of California",
//       ["LA", "San Francisco", "Sacramento"],
//       2
//     );

//     var questions = [q1, q2, q3, q4, q5, q6];
//     var counter = 0;

//     function gameLoop() {
//       var n = Math.floor(Math.random() * questions.length);
//       questions[n].displayQuestion();
//       answer = prompt(
//         "Select your answer by choosing the number associated with it. To leave the game type in 'exit' as your answer."
//       );
//       console.log("Your answer was: " + answer);
//       if (answer !== "exit") {
//         if (answer == questions[n].correct) {
//           console.log("Correct!");
//           counter++;
//           console.log("Correct answers: " + counter);
//           console.log("-------------------------------");
//         } else {
//           console.log("Incorrect");
//           console.log("-------------------------------");
//         }
//         gameLoop();
//       }
//     }
//     gameLoop();
//   }
// )();
