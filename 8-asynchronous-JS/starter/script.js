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
        <div class="movements__value">${mov} €</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcDisplayBalance = function (accounts) {
  const balance = accounts.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
};

const calcDisplaySummary = function (accounts) {
  const income = accounts.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}€`;

  const out = accounts.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = accounts.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * accounts.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLocaleLowerCase()
      .split(" ")
      .map(
        // Done using an arrow function
        (name) => name[0]
        // function (name) {
        //   return name[0];}
      )
      .join("");
  });
};

createUsernames(accounts);

// Event Handlers
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // Prevents page from reloading
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  // Using shortcut of &&(?) to see if account exist, if not it'll return undefined
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    console.log("LOGIN");
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }!`;
    containerApp.style.opacity = 100;
    // Clear inout fields
    // inputLoginPin.value = '';
    // inputLoginUsername.value = ''
    // Shortcut version of whats above
    inputLoginPin.value = inputLoginUsername.value = "";
    // Removes cursor from input field
    inputLoginUsername.blur();
    inputLoginPin.blur();
    // Display movements
    displayMovements(currentAccount.movements);
    // Display balance
    calcDisplayBalance(currentAccount);
    // Display Summary
    calcDisplaySummary(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const recevierAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  console.log(amount, recevierAcc);
});

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
/* Basic Array Methods */
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

/* Code Challenge */
/*
// Create a function that checks to see if the dog is an adult(age is greate than 3 years) or a puppy. Then display the age of the adult dogs and let it be know which are the puppies

const juliaDogs = [3, 5, 2, 7, 12];
const kateDogs = [5, 1, 3, 15, 8];

const dogAge = function (ages) {
  ages.forEach(function (age, i) {
    if (age > 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${age} years old!`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy!`);
    }
  });
};

dogAge(juliaDogs);
*/

/* Map, Filter and Reduce */

// Map Method (Goes over all elements in an array and creates a new one)
/*
const movements = [200, 450, -400, 3000, 650, -130, -70, 1300];

const euroToUsd = 1.1;

const movementsUsd = movements.map(function (mov) {
  return Math.round(mov * euroToUsd);
});
// Arrow function version
// const movementsUsd = movements.map((mov) => Math.round(mov * euroToUsd));

console.log(movements);
console.log(movementsUsd);

const movementsDescription = movements.map(function (mov, i, arr) {
  // Done using the tenary operator
  return `Position ${
    i + 1
  }: You ${mov > 0 ? "deposited " : "withdrew"} ${Math.abs(mov)}`;
  // if (mov > 0) {
  //   return `Position ${i + 1}: You deposited ${mov}`;
  // } else {
  //   return `Position ${i + 1}: You withdrew ${Math.abs(mov)}`;
  // }
});

console.log(movementsDescription);
*/

/* Computing Usernames */
/*
const user1 = "Steven Tyler Williams";

const createUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLocaleLowerCase()
      .split(" ")
      .map(
        // Done using an arrow function
        (name) => name[0]
        // function (name) {
        //   return name[0];}
      )
      .join("");
  });
};
// Adds the property username to the accounts objects(account1, account2, etc) through the accounts array, considered a side effect because it doesn't change the original array
createUsernames(accounts);
console.log(accounts);
*/
/* Filter Method */
/*
const movements = [200, 450, -400, 3000, 650, -130, -70, 1300];
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

// Using the 'for of' loop
const depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);
*/
/* Filter Method (Takes all elements and puts them into one value) */
/*
const movements = [200, 450, -400, 3000, 650, -130, -70, 1300];
// acc = accumlator, cur= current element, i = index, arr = array
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// Simplifed using the arrow function and getting rid of two of the arguments
const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);
// Same result using a "for of" loop
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// The reduce method can also be used for find a maximum value
const maxValue = movements.reduce(function (acc, cur) {
  if (acc > cur) {
    return acc;
  } else {
    return cur;
  }
});

console.log(maxValue);
*/
/* Code Challenge Map, Filter, Reduce Methods */
/*
// Create a function that converts dog years into human years. Gets all the dogs with ages over 18. Then get the average age of those dogs
// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
const convertAges = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
  const adultDogs = humanAges.filter((age) => age >= 18);
  const averageAge =
    adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;
  console.log(humanAges);
  console.log(adultDogs);
  console.log(averageAge);
};

// convertAges([5, 2, 4, 1, 15, 8, 3]);
convertAges([16, 6, 10, 5, 6, 1, 4]);
*/

/* Chaining Methods */
/*
const movements = [200, 450, -400, 3000, 650, -130, -70, 1300];

const euroToUsd = 1.1;
const totalDepositsUsd = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUsd);
*/
/* Code Challenge Chaining */
/*
// Create the a function that produces the same results as the preivous code challenge function using method chaining
// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

const convertAges = (ages) =>
  ages
    .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = convertAges([5, 2, 4, 1, 15, 8, 3]);
const avg2 = convertAges([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

/* Find Method (Returns a single element from an array) */
/*
const movements = [200, 450, -400, 3000, 650, -130, -70, 1300];

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account);
// Doing the same thing using a 'for of' loop
const accountJessica = [];
for (const acc of accounts) {
  if (acc.owner === "Jessica Davis") {
    accountJessica.push(acc);
  }
}
console.log(accountJessica);
*/
