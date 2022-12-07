'use strict';

// let hasDls = false;
// const passTest = true;

// if(passTest) hasDls = true;
// if(hasDls) console.log('I can drive!')

// function logger() {
//     console.log('My name is Joshua!')
// }

/*  Calling, Running, Invoking or Executing a function  */
// logger()


// function WorkoutProcessor(situps, pushups) {
//     const workout = `I have ${situps} sit ups and ${pushups} push ups to do!`;
//     return workout;
// }

// function TodoList(task1, task2) {
//     const tasks = `Today I have to ${task1} and ${task2}!`;

//     return tasks;
// }

// console.log(TodoList("workout", "study"))

// You can store the function in a variable  
// const workOut1 = WorkoutProcessor(100, 100);
// console.log(workOut1);
// console.log(WorkoutProcessor(200, 200))


/* Function Declaration */

// function calcAge1(birthYear) {
//     return 2022 - birthYear
// }

// const age1 = calcAge1(1990);

// function callDefense(defense, blitz) {
//     return console.log(`The defense we're playing is cover ${defense} with a ${blitz} blitz!`)
// }

// callDefense(1, 'tampa')
// callDefense(3, 'firezone')
// callDefense(4, 'switch')
// callDefense(5, 'sam')


/* Function Expression */

// const calcAge2 = function(birthYear) {
//     return 2022 - birthYear
// }

// const callPersonel = function(personel) {
//     return console.log(`We got ${personel} taking the field!`)
// }

// callPersonel('nikel')
// callPersonel('base')
// callPersonel('heavy')


// const age2 = calcAge2(1997);
// console.log(age1, age2)


/* Arrow functions */

// const calcAge3 = birthYear => 2022 - birthYear;

// const yearsUntilRetirement = birthYear => {
//     const age = 2022 - birthYear;
//     const retirement = 50 - age;
//     return console.log(`Retirement is in ${retirement} years!`);
// }

// console.log(yearsUntilRetirement(1990))
// console.log(yearsUntilRetirement(1997))


// Arrow function w/ multiple parameters

// const yearsUntilRetirement2 = (birthYear, firstName) => {
//     const age = 2022 - birthYear;
//     const retirement = 50 - age;
//     if (retirement > 0) {
//         return console.log(`${firstName} has ${retirement} years unitl retirement!`)
//     } else {
//         return console.log(`${firstName} has already retired!`)
//     }
// }
// console.log(yearsUntilRetirement(1988))
// console.log(yearsUntilRetirement2(1990, 'Joshua'))
// console.log(yearsUntilRetirement2(1997, 'Niya'))


/* Arrays */

// Two ways to delcare an array 
const teams = ['Raiders', 'Warriors', "A's"]

const years = new Array(1990, 1991, 1992, 1993)

console.log(teams, years)

// call a specific element in an array
console.log(teams[0], years[2])

// find out how many elements are in an array
console.log(teams.length, years.length)

// get last element in an array 
console.log(teams[teams.length - 1])
console.log(years[years.length - 1])

// replace an element in an array
teams[2] = 'Ducks'
years[3] = 1997
console.log(teams, years)

// add element to end of array
teams.push("A's")
years.push(1998)
console.log(teams, years)

// remove element from end of array
teams.pop()
years.pop()
console.log(teams, years)

// add element to beginning of array 
teams.unshift('Bengals')
years.unshift(1963)
console.log(teams, years)

// remove an element for the beginning of an array
teams.shift()
years.shift()
console.log(teams, years)

// see if an element is within an array
console.log(teams.includes('Raiders'))
console.log(years.includes(1997))

/* if statemeents */

// const raiders = 115;
// const niners = 90;
// const firstPlaceTeam = 110;

// if (raiders > niners) {
//     console.log("The Raiders won the game!")
// } else {
//     console.log("The Niners won the game")
// }

// A statement can have multiple conditions

// if (raiders > niners && raiders > firstPlaceTeam) {
//     console.log("The Raiders won the game and are in first place!")
// } else if (raiders > niners) {
//     console.log("The Raiders won the game!")
// } else if( niners > raiders && niners > firstPlaceTeam) {
//     console.log("The Niners won the game and are in first place!")
// } else if (niners > raiders) {
//     console.log("The Niners won the gaem!")
// }

/* Switch Statement */

// const day = 'sunday'

// switch(day) {
//     case 'monday':
//         console.log("Study at the library!")
//         console.log("Do HIIT workout!")
//         break;
//     case 'tuesday':
//         console.log('Meet with agent!')
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Work on porfolio!')
//         break;
//     case 'friday':
//         console.log('Study at library!')
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log("Enjoy the weekend!")
//         break;
//     default:
//         console.log('Not a day of the week')
// }

// using the same data using if/else statement

// const day = 'monday'

// if (day === 'monday') {
//     console.log("Study at the library!")
//         console.log("Do HIIT workout!")
// } else if (day === 'tuesday') {
//     console.log('Meet with agent!')
// } else if(day === 'wednesday' || day === 'thursday') {
//     console.log('Work on porfolio!')
// } else if (day === 'friday') {
//     console.log('Study at library!')
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log("Enjoy the weekend!")
// } else {
//     console.log('Not a day of the week')
// }

