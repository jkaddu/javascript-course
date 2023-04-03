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

const displayMovements = function (movements, sort = false) {
  const moves = sort ? movements.slice().sort((a, b) => a - b) : movements;

  containerMovements.innerHTML = "";
  moves.forEach(function (mov, i) {
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
  accounts.balance = accounts.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${accounts.balance} €`;
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

// Update UI
const updateUI = function (account) {
  // Display movements
  displayMovements(account.movements);
  // Display balance
  calcDisplayBalance(account);
  // Display Summary
  calcDisplaySummary(account);
};

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
    // inputLoginUsername.blur();
    inputLoginPin.blur();
    // Updates UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recevierAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    recevierAcc &&
    currentAccount.balance >= amount &&
    recevierAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    recevierAcc.movements.push(amount);
    console.log("Transfer Valid");
    // Updates UI
    updateUI(currentAccount);
  }
  // Clears transfer fields
  inputTransferAmount.value = inputTransferTo.value = "";
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    console.log("LOAN");
    // Add transaction
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      (account) => account.username === currentAccount.username
    );
    // Deletes Account
    accounts.splice(index, 1);
    console.log(accounts);
    // Hides UI
    containerApp.style.opacity = 0;
    // Changes welcome message
    labelWelcome.textContent = "Log in to get started";
  }
  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
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
/* Some and Every Methods */
/*
// The Some Method is similar to the Includes Method but it checks a condition compared to looking for one element
const movements = [200, 450, -400, 3000, 650, -130, -70, 1300];

console.log(movements.includes(-130));
const someMore = movements.some((mov) => mov > 0);
console.log(someMore);

// The Every Method check if all elements meet the condition
console.log(movements.every((mov) => mov > 0));
// Can put the condition in a variable and enter it into desired function aka Seperate callBack
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/
/* Flat and FlatMap Methods */
/*
// Flat Method allows you to combine nested arrays
const arr = [[1, 2, 3], 4, 5, [6, 7, 8]];
console.log(arr.flat());
const arrDeep = [[1, 2], [3, [4], 5], 6, [7, 8]];
// The argument in the Flat Method is how deep the function goes
console.log(arrDeep.flat(2));
// Flat
const overallBalance = accounts
  .map((account) => account.movements)
  .flat()
  .reduce((acc, cur) => acc + cur, 0);
console.log(overallBalance);
// FlatMap Method (Combines the flat and map methods), only goes one level deep, if you need to go deeper use the flat method
const overallBalance2 = accounts
  .flatMap((account) => account.movements)
  .reduce((acc, cur) => acc + cur, 0);
console.log(overallBalance2);
*/
/* Sorting Arrays */
/*
const movements = [200, 450, -400, 3000, 650, -130, -70, 1300];
const owners = ["Jonas", "Zach", "Adam", "Martha"];
// Sort Method changes the original array
// Strings
console.log(owners.sort());
console.log(owners);
// Numbers (Sort Method converts the numbers to strings and then back to numbers again, the order of sorting it special characters then by the first number of the number. The console.log below shows this)
console.log(movements.sort());
console.log(movements);
// You can change this by adding a callBack function to the Sort Method, (a) is current element, (b) is next element
// Ascending order(smallest to biggest *FOR NUMBERS ONLY)
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// Shortened version of above function
movements.sort((a, b) => a - b);
console.log(movements);
// Descending order(biggest to smallest *FOR NUMBERS ONLY)
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
// Shortened version of above function
movements.sort((a, b) => b - a);
console.log(movements);
*/

/* Other ways to create and fill arrays */
/*
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array([1, 2, 3, 4, 5, 6, 7]));
// If you pass in one argument into the new Array method it'll produce and array with that many empty places
const x = new Array(7);
console.log(x);
// Fill Method allows you to put values in those empty places of the new array
x.fill(1);
console.log(x);
// Parameters of the Fill Method are the value you what to fill(23), the position you want it to start(4) and the psotion you want it to stop(6)
x.fill(23, 4, 6);
console.log(x);
// A more simple way to create and fill an array
const y = Array.from({ length: 7 }, () => 3);
console.log(y);
// The underscore(_) in the callBack function is what is used when yu\ou aren't using that parameter but need a pacleholder
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);
*/

/* More array method preactices */
/*
// 1.
const bankDepositSum = accounts
  .map((account) => account.movements)
  .flat()
  .filter((mov) => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(bankDepositSum);
// 2.
const numDepositsOf1000 = accounts
  .flatMap((account) => account.movements)
  .filter((mov) => mov > 1000).length;
// Same result using the reduce method
const numDepositsOf10002 = accounts
  .flatMap((account) => account.movements)
  .reduce((acc, cur) => (cur > 1000 ? ++acc : acc), 0);
console.log(numDepositsOf1000);
console.log(numDepositsOf10002);
// Prefixed ++ operator, the reason this is done is because the operator returns the original value if not in a traditonal loop
let c = 10;
// console.log(c++);
// Putting the operator in front returns the desired value right away
console.log(++c);
console.log(c);
// 3.
const sums = accounts
  .flatMap((account) => account.movements)
  .reduce(
    (acc, cur) => {
      //   cur > 0 ? (acc.deposits += cur) : (acc.withdrawals += cur);
      // Another way to get the samw result as above
      acc[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return acc;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sums);
// 4.
const converTitleCase = function (title) {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

  const exceptions = ["a", "an", "and", "the", "or", "on", "in", "with"];

  const titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) =>
      exceptions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(" ");

  return capitalize(titleCase);
};

console.log(converTitleCase("hank and bob"));
console.log(converTitleCase("the nate and craig show"));
console.log(converTitleCase("jason and rich"));
*/

/* Code Challenge Methods */

const dogs = [
  { weight: 22, curFood: 250, owners: ["Bob", "Kate"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
const dogs2 = [10, 3, 3, 4, 5];
// 1. ForEach can be used for looping through an array and adding a property and value
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
dogs.forEach((dog) => (dog.doubkeFood = dog.curFood * 2));
dogs.forEach((dog) => (dog.halfFood = dog.curFood / 2));
console.log(dogs);
// 2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  } food. `
);
// 3.
const ownersDogsThatEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersDogsThatEatTooMuch);
const ownersDogsThatEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersDogsThatEatTooLittle);
// 4.
console.log(`${ownersDogsThatEatTooMuch.join(" and ")} dogs eat too much.`);
console.log(`${ownersDogsThatEatTooLittle.join(" and ")} dogs eat too little.`);
// 5.
const dogsThatEatJustEnough = dogs.some((dog) => dog.curFood === dog.recFood);
console.log(dogsThatEatJustEnough);
// 6.
const dogsEactingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
const dogsThatAnOkayAmount = dogs.some(dogsEactingOkay);
console.log(dogsThatAnOkayAmount);
// 7.
console.log(dogs.filter(dogsEactingOkay));
// 8. Sorting recommended food in order from least to most
const sortedDogs = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(sortedDogs);
