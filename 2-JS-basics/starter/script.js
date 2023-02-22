'use strict';

// Data types 
// You have primative values which are strings, numbers and booleans

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

// // Two ways to delcare an array 
// const teams = ['Raiders', 'Warriors', "A's"]

// const years = new Array(1990, 1991, 1992, 1993)

// console.log(teams, years)

// // Call a specific element in an array
// console.log(teams[0], years[2])

// // Find out how many elements are in an array
// console.log(teams.length, years.length)

// // Get last element in an array 
// console.log(teams[teams.length - 1])
// console.log(years[years.length - 1])

// // Replace an element in an array
// teams[2] = 'Ducks'
// years[3] = 1997
// console.log(teams, years)

// // Add element to end of array
// teams.push("A's")
// years.push(1998)
// console.log(teams, years)

// // Remove element from end of array
// teams.pop()
// years.pop()
// console.log(teams, years)

// // Add element to beginning of array 
// teams.unshift('Bengals')
// years.unshift(1963)
// console.log(teams, years)

// // Remove an element for the beginning of an array
// teams.shift()
// years.shift()
// console.log(teams, years)

// // How to see if an element is within an array
// console.log(teams.includes('Raiders'))
// console.log(years.includes(1997))


/* Objects */

// const josh = {
//     firstName: "Joshua",
//     lastName: "Kaddu",
//     birthYear: 1990,
//     age: 32,
//     job: "Entrepreneuer",
//     friends: ['Terrnace', "Dion", "Avery", "Marcus"],
//     driversLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2023 - birthYear
//     // }

//     // Declared as a function expression
//     // calcAge: function () {
//     //     return 2023 - this.birthYear
//     // }

//     // Using the "this" keyword to reference variables in the object, is like a pointer to the info you want to use within the object
//     calcAge: function () {
//         this.age = 2023 - this.birthYear
//         return this.age
//     },

//     saying:  function() {
//         return `${this.firstName} is a ${this.job} whos is going to be ${this.age}, he also ${this.driversLicense ? 'has a drivers licence.' : 'does not have a drivers license.'}`
//     }
// }

// Ways to call function from an object
// console.log(josh.calcAge())
// console.log(josh.age)
// console.log(josh.saying())

// console.log(josh['calcAge'](1990))

// Added properties to an object
// josh.location = 'Vacaville'
// josh["married"] = 'No'

// console.log(josh)

// Dot notation to reference a value from an object
// console.log(josh.lastName)

// Bracket notation to reference a value from an object
// console.log(josh['job'])

// console.log(`Josh has ${josh.friends.length} friends and his best friend is ${josh.friends[0]}`)

// const interestedIn = prompt('What do you want to know about Josh: firstName, lastName, age, job, friends')

// if (josh[interestedIn]) {
//     console.log(interestedIn)
// } else {
//     console.log('Invalid Request! Chose from: firstName, lastName, age, job, friends')
// }

// console.log(josh[interestedIn])


/* Loops */

// For loop 
// It continues to run as long as conditions is true, which is the second parameter in the "for" statement(in the parentheses)
// for(let i = 1; i <= 10; i++) {
//     console.log(`Ran ${i} miles so far!`)
// }

// const john = [ 'member', 30, 1990, true]
// const types = []

// When sorting through an array or object the variable starts at 0 because it's zero based or starts at 0
// for( let i = 0; i < john.length; i++) {
//     console.log(john[i]);

//     // Two ways to add values to an array
//     // types[i] = typeof john[i];
//     types.push(typeof john[i])
// }
// console.log(types)

// const years = ['1980', 1990, 1989, 1999, 2000, true, '2005']
// const ages = []

// for(let i = 0; i < years.length; i++) {
//     ages.push(2023 - years[i])
// }
// console.log(ages)

// Continue and Break methods

// Prints only strings
// for( let i = 0; i < years.length; i++) {
//     if(typeof years[i] !== 'string' ) continue;

//     console.log(years[i]);
// }

// Prints number and stops after finding one
// for( let i = 0; i < years.length; i++) {
//     if(typeof years[i] === 'number' ) break;

//     console.log(years[i]);
// }

// Starting a loop from the end of an array
// const names = ['John', 'Bob', 'Ray', 'Jay', 'Rob']

// for(let i = names.length - 1; i >= 0; i--) {
//     console.log(names[i])
// }

// Loops with loops 
// for(let workout = 1; workout < 4; workout++) {
//     console.log(`Starting Workout ${workout}`)

//     for(let rep = 1; rep < 6; rep++) {
//         console.log(`Workout ${workout}: Rep number ${rep}`)
//     }
// }

// While Loops
// for(let reps = 1; reps <= 10; reps++) {
//     console.log(`Rep ${reps} was done!`)
// }

// The 'while' loop is more versitile than the 'for' loop
// let reps = 1
// while(reps <= 10) {
//     console.log(`While: Rep ${reps} was done!`)
//     reps++
// }

// Example
// let dice = Math.floor(Math.random() * 6) + 1
// while( dice !== 6) {
//     console.log(`You rolled a ${dice}`)
//     dice = Math.floor(Math.random() * 6) + 1
//     if (dice === 6) {
//         console.log('The loop has ended!')
//     }
// }


/* If/Else statemeents */

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

