'use strict';

// let hasDls = false;
// const passTest = true;

// if(passTest) hasDls = true;
// if(hasDls) console.log('I can drive!')

function logger() {
    console.log('My name is Joshua!')
}

/*  calling, running or invoking a function  */
// logger();


function WorkProcessor(situps, pushups) {
    const workout = `I have ${situps} sit ups and ${pushups} push ups to do!`;
    return workout;
}

//  can store the function in a variable or not 
// const workOut1 = WorkProcessor(100, 100);
// console.log(workOut1);
// console.log(WorkProcessor(200, 200))


/* function decelaration */

// function calcAge1(birthYear) {
//     return 2021 - birthYear
// }
// const age1 = calcAge1(1990);

/* function expression */

// const calcAge2 = function(birthYear) {
//     return 2021 - birthYear
// }
// const age2 = calcAge2(1890);
// console.log(age1, age2)


/* Arrow functions */

const calcAge3 = birthYear => 2021 - birthYear;

const yearsUntilRetirement = birthYear => {
    const age = 2021 - birthYear;
    const retirement = 50 - age;
    return console.log(`Retirement is in ${retirement} years!`);
}

// Arrow function w/ multiple parameters
const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retirement = 50 - age;
    if (retirement > 0) {
        return console.log(`${firstName} has ${retirement} years unitl retirement!`)
    } else {
        return console.log(`${firstName} has already retired!🥳`)
    }
}
console.log(yearsUntilRetirement(1988), yearsUntilRetirement2(1990, 'Joshua'), yearsUntilRetirement2(1930, 'Miguel'));


/* Arrays */

// Two ways to delcare an array 
const teams = ['Raiders', 'Warriors', 'ManU']

const years = new Array(1990, 1991, 1992, 1993)

console.log(teams, years)

// call a specific element in an array
console.log(teams[0], years[2])

// find out how many elements are in an array
console.log(teams.length, years.length)

// get last element in an array 
console.log(teams[teams.length - 1])

// replace an element in an array
teams[2] = 'Ducks'
console.log(teams)