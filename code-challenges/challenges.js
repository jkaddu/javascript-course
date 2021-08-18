// Code challenge 1 (math operators)

const johnHeight = 1.95;
const johnWeight = 92;
const markWeight = 78;
const markHeight = 1.69;

// const johnHeight = 1.76;
// const johnWeight = 85;
// const markWeight = 95;
// const markHeight = 1.88;

// BMI = weight / height ** 2

const johnBmi = johnWeight / johnHeight ** 2

const markBmi = markWeight / markHeight ** 2

const markHigherJohn = markBmi > johnBmi


console.log(markBmi, johnBmi, markHigherJohn)


// Code Challenge 2 (if/else statements)
if(markBmi > johnBmi) {
    console.log(`Mark's BMI ${markBmi} is greater than John's BMI ${johnBmi}`)
} else {
    console.log(`John's BMI ${johnBmi} is greater than Mark's BMI ${markBmi}`)
}


// Code Challenge 3 (comparison/equality operators)

// const dolphinScores = 96 + 108 + 89;
// const koalaScores = 88 + 91 + 120;

const dolphinScores = 97 + 112 + 101;
const koalaScores = 109 + 95 + 123;

// const dolphinScores = 97 + 112 + 101;
// const koalaScores = 109 + 95 + 106;


const dolphinsAvg = dolphinScores/3;
const koalasAvg = koalaScores/3;

if (dolphinsAvg >= 100 && dolphinsAvg > koalasAvg) {
    console.log(`Dolphins win with a score of ${dolphinsAvg}!🏆`)
} else if (koalasAvg >= 100 && koalasAvg > dolphinsAvg) {
    console.log(`Koalas win with a score of ${koalasAvg}! 🏆`)
} else if(dolphinsAvg >= 100 && koalasAvg >= 100 && koalasAvg === dolphinsAvg) {
    console.log('It was a draw')
} else {
    console.log('The team scores were not high enough to determine a winner.')
}


// Code challenge 4 (ternary operators)
const bill = 350;

const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2
console.log(`The bill is ${bill} and the tip is ${tip} and the total value is ${bill + tip}.`)