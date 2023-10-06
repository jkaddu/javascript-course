"use stict";

/* Code Challenge 1 Math Operators */
/*
const johnHeight = 1.95;
const johnWeight = 92;
const markWeight = 78;
const markHeight = 1.69;

// const johnHeight = 1.76;
// const johnWeight = 85;
// const markWeight = 95;
// const markHeight = 1.88;

// ** symbolizies squared ie 2^2 = 4 or 3^2 = 9
// BMI = weight / height ** 2;

const johnBmi = johnWeight / johnHeight ** 2;

const markBmi = markWeight / markHeight ** 2;

const markHigherJohn = markBmi > johnBmi;

console.log(Math.round(markBmi), Math.round(johnBmi), markHigherJohn);
*/
/* Code Challenge 2 If/Else Statements */
// if(markBmi > johnBmi) {
//     console.log(`Mark's BMI of ${Math.round(markBmi)} is greater than John's BMI of ${Math.round(johnBmi)}`)
// } else {
//     console.log(`John's BMI of ${johnBmi} is greater than Mark's BMI of ${markBmi}`)
// }

/* Code Challenge 3 Comparison/Equality operators */

// const dolphinScores = 96 + 108 + 89;
// const koalaScores = 88 + 91 + 120;

// const dolphinScores = 97 + 112 + 101;
// const koalaScores = 109 + 95 + 123;

// const dolphinScores = 97 + 112 + 101;
// const koalaScores = 109 + 95 + 106;

// const dolphinsAvg = dolphinScores/3;
// const koalasAvg = koalaScores/3;

// if (dolphinsAvg >= 100 && dolphinsAvg > koalasAvg) {
//     console.log(`Dolphins win with a score of ${dolphinsAvg}!🏆`)
// } else if (koalasAvg >= 100 && koalasAvg > dolphinsAvg) {
//     console.log(`Koalas win with a score of ${koalasAvg}! 🏆`)
// } else if(dolphinsAvg >= 100 && koalasAvg >= 100 && koalasAvg === dolphinsAvg) {
//     console.log('It was a draw')
// } else {
//     console.log('The team scores were not high enough to determine a winner.')
// }

// const jayNumbers = 10 + 15 + 30;
// const keemNumbers = 7 + 23 + 17;

// if (jayNumbers >= 20 && jayNumbers > keemNumbers) {
//     console.log(`Jay won the square off with a score of ${jayNumbers}!`)
// } else if (keemNumbers >= 20 && keemNumbers > jayNumbers) { console.log(`Keem won the squre off with the score of ${keemNumbers}!`)
// } else {
//     console.log("Looks like we're going another round!")
// }

/* Code challenge 4 Ternary Operators */
// const age = 15;

// const drink = age >= 18 ? 'I like to drink wine!' : 'I like to drink water!';

// console.log(drink)
// const bill = 100;

// const calcTip = (bill) => {
//     if(bill >= 50 || bill <= 300) {
//         return bill * .15
//     } else {
//         return bill * .2
//     }
// }

// const calcTip = bill >= 50 && bill <=300 ? `The bill is ${bill} and the tip is ${bill * .15} bringing the total cost to ${bill + bill * .15}` : `The bill is ${bill} and the tip is ${bill * .2} bringing the total cost to ${bill + bill * .2}`;

// console.log(calcTip)

// console.log(`The bill is ${bill} and the tip is ${tip} and the total value is ${bill + tip}.`)

/* Fundamentals Part II */
/* Code Challenge 1 */

// const calcAverage = (a, b, c) => {
//     const total = a + b + c
//     const average = total/3
//     return average
// }

// shorter wasy to do calcAverage
// const calcAverage = (a, b, c) => (a + b + c)/ 3;

// console.log(calcAverage(10, 20, 30))

// const chheckWinner = (avgKoalas, avgDolphins) => {
//     if(avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koala's win ${avgKoalas} to ${avgDolphins}!`)
//     } else if(avgDolphins >= 2 * avgKoalas) {
//      console.log(`Dolphins win ${avgDolphins} to ${avgKoalas}!`)
//     } else {
//         console.log( 'There is no winner.')
//     }
// }

// Data set 1
// let koalasAvg = calcAverage(65, 54, 49)
// let dolphinsAvg = calcAverage(44, 23, 71)

// chheckWinner(koalasAvg, dolphinsAvg)
// Data set 2

// koalasAvg = calcAverage(23, 34, 27)
// dolphinsAvg = calcAverage(85, 54, 41)

// chheckWinner(koalasAvg, dolphinsAvg)

/* Code Challenge 2 Arrays */

// same calcTip function from line 73 but written using a tenary operator
// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2

// console.log(calcTip(100))

// const bills = [125, 555, 44]

// const tips = [calcTip(125), calcTip(555), calcTip(44)]

// const total = [(bills[0] + calcTip(125)), (bills[1] + calcTip(555)), (bills[2] + calcTip(44)) ]

// console.log(bills, tips, total)

/* Code Challenge 3 Objects */

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function() {
//         this.BMI = this.mass/this.height ** 2
//         return this.BMI
//     }
// }

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function() {
//         this.BMI = this.mass/this.height ** 2
//         return this.BMI
//     }
// }

// john.calcBMI()
// mark.calcBMI()

// if (john.BMI > mark.BMI) {
//     console.log(`${john.fullName}'s BMI ${john.BMI} is a higher than ${mark.fullName}'s BMI ${mark.BMI}.`)
// } else if (mark.BMI > john.BMI) {
//     console.log(`${mark.fullName}'s BMI ${mark.BMI} is a higher than ${john.fullName}'s BMI ${john.BMI}.`)
// }

// const apple = {
//     founded: 1975,
//     assets: 100000000000,
//     debts: 100000000,
//     privtelyOwned: false,

//     netWorth: function() {
//         this.worth = this.assets - this.debts
//         return this.worth
//     }
// }

// const google = {
//     founded: 1998,
//     assets: 1000000000000,
//     debts: 9800000000,
//     privtelyOwned: false,

//     netWorth: function() {
//         this.worth = this.assets - this.debts
//         return this.worth
//     }
// }

// apple.netWorth()
// google.netWorth()

// if (apple.worth > google.worth) {
//     console.log("Apple has a greater net worth than Google!")
// } else {
//     console.log('Google has a greater net worth than apple!')
// }

/* Code challenge 4 Loops */

// const bills = [22, 295, 76, 440, 37, 105, 10, 1100, 86, 52]

// const tips = []

// const totals = []

// const calcTip = (bill) => bill >= 50 && 300 >= bill ? bill * .15 : bill * .2

// for (let i = 0; i < bills.length; i ++) {
//     const tip = calcTip(bills[i])
//     tips.push(tip)
//     totals.push (tip + bills[i])
// }

// console.log(bills, tips, totals)

// const calcAverage = function(arr) {
//     let sum = 0
//     for (let i =0; i < arr.length; i++) {
//         // The below expression is equal to sum = sum + arr[i]
//         sum += arr[i]
//     }
//     return sum/arr.length
// }

// console.log(calcAverage(totals))

/* Temperature Amplitude Calculator Challenge */

// const temps = [-1, -2, -3, -4, "error", 1, 4, 5, 6, 7];
// const temps2 = [1, 2, 5, 34, 87, 54, 83];

// const calcAmplitude = function (arr) {
//   let max = arr[0];
//   let min = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     let currVal = arr[i];

//     if (typeof arr[i] !== "number") continue;
//     if (currVal > max) max = currVal;
//     if (currVal < min) min = currVal;
//   }
//   console.log(max, min);
//   return max - min;
// };

// console.log(calcAmplitude(temps));
// console.log(calcAmplitude(temps2));

// Takes in two arays
// const calcAmplitudeTwo = function (arr1, arr2) {
//   const arr = arr1.concat(arr2);

//   let max = arr[0];
//   let min = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== "number") continue;
//     if (arr[i] > max) max = arr[i];
//     if (arr[i] < min) min = arr[i];
//   }
//   console.log(max, min);
//   return max - min;
// };

// console.log(calcAmplitudeTwo(temps, temps2));

/* KGs to LBs/ LBs to KGs Challenge */

// const weightConvertKgToLb = (kg) => {
//   const value = Math.round(kg * 2.205);
//   return `That is ${value} pounds!`;
// };

// const weightConvertLbToKg = (lb) => {
//   const value = Math.round(lb / 2.205);
//   return `That is ${value} kilograms!`;
// };
// console.log(weightConvertKgToLb(100));
// console.log(weightConvertLbToKg(110));

/* Debugging Code Challenge 1 */

// const printForecast = (arr) => {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     // str = str + `...${arr[i]} degrees celsius in ${i + 1} days`
//     // short hand for statement above
//     str += `it'll be ${arr[i]} degrees celsius in ${i + 1} days...`;
//   }
//   console.log("..." + str);
// };

// const forecast = [1, 2, 3, 4];
// printForecast(forecast);

/* Destructuring Challenge */
const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Array of players for each team
// const [players1, players2] = game.players;
// console.log(players1, players2);

// Arrays of goalkeeper(first player in array) and the field players(rest of players in array)
// const [gk1, ...fieldPlayers1] = players1;
// const [gk2, ...fieldPlayers2] = players2;
// console.log(gk1, gk2);
// console.log(fieldPlayers1, fieldPlayers2);

// Array of players from both teams
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// Array of players from team 1 and the subsitute players(addded them)
// const players1Final = [...players1, "Thiago", "Continho", "Perisic"];
// console.log(players1Final);

// Destructured the game odds object to get the individual odds
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// Created function that shows who scored
// const printGoals = function (...players) {
//   for (let i = 0; i < players.length; i++)
//     console.log(`${players[i]} scored a goal!`);
// };

// printGoals("Thiago", "Continho", "Perisic");
// printGoals(...game.scored);

// Using logical operator to see who has betters odds to win without using if/else statement or tenary operator
// team1 < team2 && console.log("Team 1 is more likely to win!");
// team2 < team1 && console.log("Team 2 is more likely to win!");

/* For Of Challenge */
// Print the goal and person who scored using a For Of loop
// Entries method can be used on an array to get the key/value pairs
// for (const [key, player] of game.scored.entries()) {
//   console.log(`Goal ${key + 1}: Scored by ${player}`);
// }

// Print the total average of the odds
// Object.values is used on an object to turn it into an array with key/value pairs
// const probablity = Object.values(game.odds);
// console.log(probablity);
// let average = 0;
// for (const odd of probablity) average += odd;
// average /= probablity.length;
// console.log(`The odds to win are ${average}`);

// Object.values is used on an object to turn it into an array with key/value pairs
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "draw" : `victory for ${game[team]}`;
//   console.log(`Odds of ${teamStr} are ${odd}`);
// }

/* Data Structures Operators Challenge */

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// Created an array with no duplicate values
const events = [...new Set(gameEvents.values())];
console.log(events);

// Delete an event from the list of events
gameEvents.delete(64);
console.log(gameEvents);

// Dynamically implementing average time of events
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes.`
);

// Looping through array
for (const [min, value] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`${half} HALF! ${min}: ${value}`);
}

// CODE WARS

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers.

function smallEnough(arr, limit) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > limit) {
      return false;
    }
  }
  return true;
}

function smallEnough2(a, limit) {
  return Math.max(...a) <= limit;
}

function smallEnough3(a, limit) {
  return a.every((x) => x <= limit);
}
console.log(smallEnough3([66, 101], 200));
console.log(smallEnough3([78, 117, 110, 99, 104, 117, 107, 115], 100));
console.log(smallEnough3([101, 45, 75, 105, 99, 107], 107));
console.log(smallEnough3([80, 117, 115, 104, 45, 85, 112, 115], 120));
