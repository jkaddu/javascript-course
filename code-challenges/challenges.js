/* Fundamentals Part I */
/* Code challenge 1 Math Operators */

// const johnHeight = 1.95;
// const johnWeight = 92;
// const markWeight = 78;
// const markHeight = 1.69;

// const johnHeight = 1.76;
// const johnWeight = 85;
// const markWeight = 95;
// const markHeight = 1.88;

// BMI = weight / height ** 2

// const johnBmi = johnWeight / johnHeight ** 2

// const markBmi = markWeight / markHeight ** 2

// const markHigherJohn = markBmi > johnBmi


// console.log(markBmi, johnBmi, markHigherJohn)



/* Code Challenge 2 if/else statements */

// if(markBmi > johnBmi) {
//     console.log(`Mark's BMI ${markBmi} is greater than John's BMI ${johnBmi}`)
// } else {
//     console.log(`John's BMI ${johnBmi} is greater than Mark's BMI ${markBmi}`)
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



/* Code challenge 4 Ternary Operators */
// const bill = 350;

// const calcTip = (bill) => {
//     if(bill >= 50 || bill <= 300) {
//         return bill * .15
//     } else {
//         return bill * .2
//     }
// }

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

// const chheckWinner = (a, b) => {
//     if(a >= 2 * b) {
//         console.log(`Koala's win ${a} to ${b}!`)
//     } else if(b >= 2 * a) {
//      console.log(`Dolphins win ${b} to ${a}!`)
//     } else {
//         console.log( 'There was no winner.')
//     }
// }

// Data set 1
// const koalasAvg = calcAverage(65, 54, 49)
// const dolphinsAvg = calcAverage(44, 23, 71)

// Data set 2

// const koalasAvg = calcAverage(23, 34, 27)
// const dolphinsAvg = calcAverage(85, 54, 41)

// chheckWinner(koalasAvg, dolphinsAvg)



/* Code challenge 2 Arrays */
// same calcTip function from line 66 but written using a tenary operator
// const calcTip = (bill) => bill >= 50 && 300 >= bill ? bill * .15 : bill * .2


// console.log(calcTip(100))

// const bills = [125, 555, 44]

// const tips = [calcTip(125), calcTip(555), calcTip(44)]

// const total = [(bills[0] + calcTip(125)), (bills[1] + calcTip(555)), (bills[2] + calcTip(44)) ]

// console.log(bills, tips, total)



/* Code challenge 3 Objects */

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function() {
        this.BMI = this.mass/this.height ** 2
        return this.BMI
    }
}

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.BMI = this.mass/this.height ** 2
        return this.BMI
    }
}

john.calcBMI()
mark.calcBMI()

if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI ${john.BMI} is a higher than ${mark.fullName}'s BMI ${mark.BMI}.`)
} else if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI ${mark.BMI} is a higher than ${john.fullName}'s BMI ${john.BMI}.`)
}

