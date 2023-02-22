// Lecture: let and const
/*
// ES5
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";

// ES6
// const variables are immutable and let is
const name6 = "Jane Smith";
let age = 23;

// ES5

// var is function scoped
function driverLicense(passedTest) {
  if (passedTest) {
    var firstName = "John";
    var yearOfBirth = 1990;
  }
  console.log(
    firstName +
      ", born in " +
      yearOfBirth +
      ", is now officially allowed to drive."
  );
}

driverLicense(true);

// ES6

// let and const are block scoped
// how to make it work using block scope
function driverLicense6(passedTest) {
  let firstName;
  const yearOfBirth = 1990;
  if (passedTest) {
    firstName = "John";
  }
  console.log(
    firstName +
      ", born in " +
      yearOfBirth +
      ", is now officially allowed to drive."
  );
}

driverLicense6(true);

// example of why block scope works well if you used var the
// console.log(i) would be 5

let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);
*/
//////////////////////////////////////////////
// Lecture: Blocks and IIFEs
/*
// creates closure with brackets in ES6
{
  const a = 1;
  let b = 2;
}
*/
//////////////////////////////////////////////
// Lecture: Strings
/*
let firstName = "John";
let lastName = "Smith";
const yearOfBirth = 1990;

function calcAge(year) {
  return 2020 - year;
}

// ES5
console.log(
  "This is " +
    firstName +
    " " +
    lastName +
    ". He was born in " +
    yearOfBirth +
    ". Today he is " +
    calcAge(yearOfBirth) +
    " years old."
);

// ES6
// template literals
console.log(
  `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(
    yearOfBirth
  )} years old.`
);

const n = `${firstName} ${lastName}`;
// capitalization matters
console.log(n.startsWith("J"));
console.log(n.endsWith("th"));
console.log(n.includes("oh"));

console.log(`${firstName} `.repeat(3));
*/

////////////////////////////////////////
// Lecture: Arrow Functions
/*
const years = [1990, 1989, 1992, 1938];

//ES5
var ages5 = years.map(function(el) {
  return 2020 - el;
});
console.log(ages5);

//ES6

let ages6 = years.map(el => 2020 - el);
console.log(ages6);

// with 2 or more arguments you need parentheses
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}`;
});
console.log(ages6);
*/

/////////////////////////////////////////////
// Lecture: Arrow Functions 2
/*
//ES5
var box5 = {
  color: "green",
  position: 1,
  clickMe: function() {
    // hack to be able to use the 'this' keyword throughout the func
    var self = this;
    document.querySelector(".green").addEventListener("click", function() {
      var str =
        "This is box number " + self.position + " and it is " + self.color;
      alert(str);
    });
  }
};
//box5.clickMe();

//ES6
const box6 = {
  color: "green",
  position: 1,
  clickMe: function() {
    document.querySelector(".green").addEventListener("click", () => {
      var str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  }
};
box6.clickMe();

class Person {
  constructor(name) {
    this.name = name;
  }
}

//ES5
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(
    function(el) {
      return this.name + " is friends with " + el;
      // the bind method locks in the this keyword to this func
    }.bind(this)
  );
  console.log(arr);
};

var friends = ["Bob", "John", "Rick"];
new Person("Miguel").myFriends5(friends);

//ES6
Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(el => `${this.name} is friends with ${el}`);

  console.log(arr);
};

new Person("Manuel").myFriends5(friends);
*/

//////////////////////////////////////////
// Lecture: Destructuring
/*
//ES6
const [name, age] = ["Mike", 26];
console.log(name);
console.log(age);

const obj = {
  firstName: "Hector",
  lastName: "Martinez"
};

// object syntax
const { firstName, lastName } = obj;
console.log(firstName, lastName);

const { firstName: a, lastName: b } = obj;
console.log(a, b);

// function syntax
function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2, retirement);
*/

///////////////////////////////////////////////
// Lecture: Arrays
/*
// querySelector and querySelectorAll return nodeList
const boxes = document.querySelectorAll(".box");

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => (cur.style.background = "dodgerblue"));

for (const cur of boxesArr6) {
  if (cur.className.includes("blue")) {
    continue;
  }
  cur.textContent = "I changed to blue!";
}

var ages = [12, 18, 16, 12, 11, 9];

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

////////////////////////////////////////////
// Lecture: Spread operator
/*
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 38, 12, 21);
console.log(sum1);

var ages = [18, 38, 12, 21];

const sum2 = addFourAges(...ages);
console.log(sum2);

const familySmith = ["Joe", "Roe", "Zoe"];
const familyMeek = ["Millz", "Snupe", "Nicki"];
const bigFamily = [...familyMeek, "Jay", ...familySmith];
console.log(bigFamily);

const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const all = [h, ...boxes];
Array.from(all).forEach(cur => (cur.style.color = "yellow"));
*/

/* Higher Order Functions */

// const oneWord = function (str) {
//   // The / /g characters grab the spaces in a sentence/word and replaces them with no space
//   return str.replace(/ /g, "").toLowerCase();
// };
// console.log(oneWord("Where da Hood At "));
// console.log(oneWord("Hey There"));

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(" ");
//   return [first.toUpperCase(), ...other].join(" ");
// };
// console.log(upperFirstWord("is this actually working"));
// console.log(upperFirstWord("yes this is working"));

// Higher Order Function
// const transformer = function (str, fn) {
//   console.log(`The original string: ${str}`);
//   console.log(`Tranform this string: ${fn(str)}`);
// };
// transformer("Will this be one word", oneWord);

/* Function Returning a Function */

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// By assigning the greet function to the greeterHey variable it stores the returned function within the variable making greeterHey a function
// const greeterHey = greet("Hey");
// greeterHey("Tom!");
// greeterHey("Mike!");

// By calling a function twice(the two instances of parentheses) it calls the returned function with the second call
// greet("Sup")("Sean");

// Challenge, write same function using arrow syntax
// const greet2 = (greeting) => {
//   return (greeterHey2 = (name) => {
//     return console.log(`${greeting} ${name}`);
//   });
// };

// greet2("Sup")("Dion");
// greet2("Sup")("Javon");

// Simpler way of doing so
// const greet3 = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greet3("Sup")("Avery");
// greet3("Sup")("Kiko");

/* Call and Apply methods */

// const soulPlane = {
//   airline: "SoulPlane",
//   iataCode: "SP",
//   bookings: [],
//   // Book parameters are flightNum, name
//   book(fligtNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline}, flight: ${this.iataCode}${fligtNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${fligtNum}`, name });
//   },
// };

// soulPlane.book(321, "Joshua Kaddu");
// soulPlane.book(321, "Niya Blue");
// console.log(soulPlane);

// const africaWings = {
//   airline: "AfricaWings",
//   iataCode: "AW",
//   bookings: [],
// };

// const book = soulPlane.book;

// Call method
// It is used to set the This keyword to the specified object you want to use with the first parameter. In the example below it is the africaWings object and the next two arguments are the parameters from the Book method
// book.call(africaWings, 432, "John Doe");
// console.log(africaWings);

// Apply method
// It does the same thing as the call method but takes an array of data for its second parameter, not used as much in modern javaScript
// const flightData = [543, "Jane Smith"];
// book.apply(africaWings, flightData);

// Below we are accomplishing the same thing using the Call method with the spread operator
// book.call(africaWings, ...flightData);

// console.log(africaWings);

// Bind method
// book.call(jamaicaFLy, 765, "Bob Marley");

// const jamaicaFly = {
//   airline: "JamaicaFly",
//   iataCode: "JF",
//   bookings: [],
// };
// const bookJF = book.bind(jamaicaFly);
// bookJF(765, "Bob Marley");
// console.log(jamaicaFly);

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.2, 250));

/* Closures */

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;

    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// Example 2 of a Closure

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 77;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Reassigning the f function

h();
f();

// Example 3 of a Closure

const boardPassengers = function (n, wait) {
  const perGRoup = n / 3;

  setTimeout(function () {
    console.log(`We are boarding all ${n} passengers!`);

    console.log(`There are 3 groups, each with ${perGRoup} passengers! `);
  }, wait * 1000);

  console.log(`We will start boarding in ${wait} seconds!`);
};

boardPassengers(90, 30);

/* Closures Code Challenge */
