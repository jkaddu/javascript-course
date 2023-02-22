"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements) {
  containerMovements.innerHTML = "";
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ["a", "b", "c", "d", "e", "f"];
/* Array Methods */
/*
// Slice Method (Doesn't change original array)
// Gives all elements in array from position 2
console.log(arr.slice(2));
// Starts at position 2 in the array and finishes at 4
console.log(arr.slice(2, 4));
// Give you the last element in the array
console.log(arr.slice(-1));
// Gives you elements from position 1 and excludes the last 2 elements
console.log(arr.slice(1, -2));
// Gives you a new array with all the elements in it/ identical to the spread operator(...arr)
console.log(arr.slice());

// Splice Method (Changes original array, can be used to get rid of an element/elements from an array)
// Reomves elemnts from position 2 and on in the orginal array
// console.log(arr.splice(2));
// Removes last element from original array
arr.splice(-1);
console.log(arr);

// Reverse Method (Reverses the order of the original array)
const arr2 = [5, 4, 3, 2, 1];
console.log(arr2.reverse());
console.log(arr2);

// Concat Method(Combines two arrays)
const combo = arr.concat(arr2);
console.log(combo);

// Join Method (Combines elements together using the character of your choice into a string)
console.log(combo.join(" - "));

// At Method (Give you the element at the designated position, also works on strings)
const newArr = [3, 5, 7];
// Gives you last element of the array
console.log(newArr.at(-1));
console.log("james".at(0));
*/
// ForEach Method
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Gives you the position within the array and lets you know if it is a deposit or withdraw
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Position ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Position ${i + 1}:You withdrew ${Math.abs(movement)}`);
  }
}

console.log("---ForEach---");
// The parameters of the forEach method are the current element(movement), current index(index) and the array(array). Can name them what you like
movements.forEach(function (movement, i, array) {
  if (movement > 0) {
    console.log(`Position ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Position ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
*/
