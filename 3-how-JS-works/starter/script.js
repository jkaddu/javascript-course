///////////////////////////////////////
// Lecture: Hoisting

// Hoisting is when you call the function before you have created the function
// calculateAge(1998);

// function declaration
// function calculateAge(year) {
//   console.log(2023 - year);
// }

// function expression
// const retirement = function (year) {
//   console.log(65 - (2020 - year));
// };
// retirement(1990);

// const age = 89;

// function foo() {
//   const age = 65;
//   console.log(age);
// }
// foo();

// console.log(age);
///////////////////////////////////////
// Lecture: Hoisting and Scope

// First Hoisting and Scope example

// const a = "Hello!";
// Hoisting: Calling the function before you create it
// first();

// function first() {
//   const b = "Hi!";
//   second();

//   function second() {
//     const c = "Hey!";
//     console.log(a + " " + b + " " + c);
//   }
// }

// Example to show scope chain

// const a = "Hi";
// first();

// function first() {
//   const b = "there";
//   second();

//   function second() {
//     const c = "Michael";
//     third();

//     function third() {
//       const d = ", bye!";
//       console.log(a + " " + b + " " + c + d);
//     }
//   }
// }

///////////////////////////////////////
// Lecture: The this keyword

// The 'this' keyword here refers to the window/global object if its not within an object
// console.log(this);

// const john = {
//   name: "John",
//   yearOfBirth: 1985,
//   calculateAge: function () {
//     // The 'this' keyword here refers to the properties (name, yearOfBirth and calculateAge function) within the john object
//     console.log(this);
//     console.log(2020 - this.yearOfBirth);
//     // The 'this' keyword in the inner function refers to the window/global object
//     function innerFunction() {
//       console.log(this);
//     }
//     innerFunction();
//   },
// };

// john.calculateAge();

// const mike = {
//   name: "Mike",
//   yearOfBirth: 1984,
// };

// Allows Mike to have access to the John objects calculateAge function
// mike.calculateAge = john.calculateAge;
// mike.calculateAge();
