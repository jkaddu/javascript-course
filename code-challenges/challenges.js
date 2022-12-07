'use stict';



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

// console.log(Math.round(markBmi), Math.round(johnBmi), markHigherJohn)


/* Code Challenge 2 if/else statements */

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


/* Code challenge 2 Arrays */

// same calcTip function from line 66 but written using a tenary operator
// const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * .15 : bill * .2

// console.log(calcTip(100))

// const bills = [125, 555, 44]

// const tips = [calcTip(125), calcTip(555), calcTip(44)]

// const total = [(bills[0] + calcTip(125)), (bills[1] + calcTip(555)), (bills[2] + calcTip(44)) ]

// console.log(bills, tips, total)


/* Code challenge 3 Objects */

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
//         // sum = sum + arr[i] or
//         sum += arr[i]
//     }
//     return sum/arr.length
// }

// console.log(calcAverage(totals))


/* Temperature amplitude calculator */

// const temps = [ -1, -2, -3, -4, 'error', 1, 4, 5, 6, 7]
// const jerseyNums = [1, 2, 5, 34, 87, 54, 83]

// const calcAmplitude = function(arr) {
//     let max = arr[0];
//     let min = arr[0];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'number') continue;
//         if(arr[i] > max) max = arr[i]
//         if (arr[i] < min) min = arr[i]
//     }
//     console.log(max, min)
//     return max - min
// }

// console.log(calcAmplitude(temps))
// console.log(calcAmplitude(jerseyNums))

// Takes in two arays
// const calcAmplitudeTwo = function(arr1, arr2) {
//     const arr = arr1.concat(arr2)
//     console.log(arr)

//     let max = arr[0];
//     let min = arr[0];
    
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== 'number') continue;
//         if(arr[i] > max) max = arr[i]
//         if (arr[i] < min) min = arr[i]
//     }
//     console.log(max, min)
//     return max - min
// }

// console.log(calcAmplitudeTwo(temps, jerseyNums))



/* KGs to LBs/ LBs to KGs functions */

// const weightConverterKg = (kg) => {
//    const value =  Math.round(kg * 2.205)
//    return value
// }

// const weightConverterLb = (lb) => {
//    const value =  Math.round(lb/2.205)
//    return value
// }
// console.log(weightConverterKg(110))
// console.log(weightConverterLb(110))



/* Debugging Code challenge 1 */
/* redo at a later date */
// const printForecast = (arr) => {
//     let str = '';
//     for (let i = 0; i < arr.length; i++) {
//         // str = str + `...${arr[i]} degrees celsius in ${i + 1} days`
//         // ^same thing as below but not shortened with +=
//         str += `...${arr[i]} degrees celsius in ${i + 1} days`
//     }
//     console.log(str)
// }

// const temps = [1, 2, 3, 4,]
// printForecast(temps)