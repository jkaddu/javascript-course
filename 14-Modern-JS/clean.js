"use strict";

const budget = Object.freeze([
  { value: 250, description: "Sold old TV 📺", user: "jonas" },
  { value: -45, description: "Groceries 🥑", user: "jonas" },
  { value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
  { value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
  { value: -1100, description: "New iPhone 📱", user: "jonas" },
  { value: -20, description: "Candy 🍭", user: "matilda" },
  { value: -125, description: "Toys 🚂", user: "matilda" },
  { value: -1800, description: "New Laptop 💻", user: "jonas" },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// let lim;
// if (spendinglimits[user]) {
//   lim = spendinglimits[user];
// } else {
//   lim = 0;
// }
// Another way to write the code aboue, used a ternary operator intsead of if/else statement
// const limit = spendinglimits[user] ? spendinglimits[user] : 0;
// Shortened it even more using optional chaining and nullish coalescing operator...on line 17
const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure function aka produces no side effects
// user = "jonas" is a default parameter
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = "jonas"
) {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limits, cleanUser)
    ? // budget.push({ value: -value, description, user: cleanUser });
      [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const budget1 = addExpense(budget, spendingLimits, 10, "Pizza 🍕");
console.log(budget1);
const budget2 = addExpense(
  budget1,
  spendingLimits,
  100,
  "Going to movies 🍿",
  "Matilda"
);
console.log(budget2);
const budget3 = addExpense(budget2, spendingLimits, 200, "Stuff", "Jay");

// const checkExpenses = function (state, limits) {
//   // for (const entry of budget) {
//   //   // let lim;
//   //   // if (spendinglimits[entry.user]) {
//   //   //   lim = spendinglimits[entry.user];
//   //   // } else {
//   //   //   lim = 0;
//   //   // }
//   //   // Recoded using optional chaining and the nullish coalescing operator...on line 17
//   //   if (entry.value < -getLimit(limits, entry.user)) {
//   //     entry.flag = "limit";
//   //   }
//   // }
//   // Same as function about but it doesn't change(mutate) the original object/array
//   return state.map((entry) => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: "limit" }
//       : entry;
//   });
// };

// Same as checkExpenses function above just using arrow functions
const checkExpenses = (state, limits) =>
  state.map((entry) =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: "limit" }
      : entry
  );

const finalBudget = checkExpenses(budget3, spendingLimits);
console.log(finalBudget);

const bigExpenses = function (state, itemLimit) {
  // let output = "";
  // for (const entry of budget) {
  //   // if (entry.value <= -itemLimit) {
  //   //   output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars
  //   // }
  //   entry.value <= -itemLimit
  //     ? (output += `${entry.description.slice(-2)} / `)
  //     : "";
  // }
  // output = output.slice(0, -2); // Remove last '/ '

  // Rewrote the code starting at line 91, function below
  const expenses = state
    .filter((entry) => entry.value <= -itemLimit)
    .map((entry) => entry.description.slice(-2))
    .join("/");

  console.log(expenses);
};

bigExpenses(finalBudget, 1000);
