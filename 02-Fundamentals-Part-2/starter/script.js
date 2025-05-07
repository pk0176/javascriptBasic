'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//     hasDriversLicense = true;
// }
// if (hasDriversLicense) console.log("I can drive")

// const interface = 'Audio';
// const private = 323; // both interface and private is reserved word for future

//                              Function
// function logger() {
//     console.log("My name is Pawan");
// }

// logger(); // calling , running or invoking the function

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges. `;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)
// // console.log(fruitProcessor(5, 0))

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)


//Fuction Declaration - we can call function before declaration
// function calcAge1(birhtYear) {
//     return 2037 - birhtYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1)

// //Fucntion expression (epressino produce values) - we cannt call function before declaration
// const calcAge2 = function (birhtYear) {
//     return 2037 - birhtYear;
// }

// console.log(calcAge2(1991));


///////////////////////////////////////////////////////////
//                Arrow Function

// const calcAge3 = (birthYear) => 2037 - birthYear
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirementage = 65 - age;
//     // return retirementage;
//     return `${firstName} retires in ${retirementage}`
// }

// console.log(yearUntilRetirement(1991, 'Pawan'))

// const cutFruitPieces = fruit => {
//     return fruit * 4;
// }

// function fruitProcessor(aaples, oranges) {
//     const applePieces = cutFruitPieces(aaples);
//     const orangesPieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangesPieces} oranges.`
//     return juice;
// }
// console.log(fruitProcessor(2, 3))

//coding challange 5

// const calcAverage = (first, second, third) => (first + second + third) / 3;

// const avgDolphins = calcAverage(85, 54, 41)
// const avgKoalas = calcAverage(23, 34, 27)

// const checkWinner = (avgDolphins, avgKoalas) => {
//     console.log(avgDolphins, avgKoalas)
//     if (avgDolphins > 2 * avgKoalas) return `Dolphins win with ${avgDolphins} points`
//     else if (avgKoalas > 2 * avgDolphins) return `Koalas win ${avgKoalas} points`
//     return `No one wins`;
// }

// console.log(checkWinner(avgDolphins, avgKoalas))


////////////////////////////////////////////////////////////////////


//                               Array

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends[0])

// const years = new Array(1991, 1984, 2000, 2001);
// console.log(years)

// console.log(friends.length)
// friends[2] = 'jay'
// console.log(friends[friends.length - 1])

// const pawan = ['Pawan', 'Kumar', 2037 - 1991, 'Student', friends];
// console.log(pawan)


// //Exercise

// const calcAge = birthYear => {
//     return 2037 - birthYear
// }

// const y = new Array(1192, 2000, 2001, 2002)
// const ages = [calcAge(y[0]), calcAge(y[1])]

///////////////////////////////////////////////////////////////

//Array method

// const friends = ['Michael', 'Steven', 'Peter'];
// const newLength = friends.push('jay'); // push function return the length of the array
// console.log(friends)
// console.log(newLength)

// friends.unshift('jhon') // add elemet to the first index
// console.log(friends)

// //remove element
// const popedElement = friends.pop() // remove the last element of the array and returns the removed elment
// console.log(friends)
// console.log(popedElement)

// friends.shift() // remove the first elemet of the array
// console.log(friends)

// console.log(friends.indexOf('Steven'))

// //ES6 (include) - this method use to check whether the element is present in the array
// console.log(friends.includes('Steven'))
// console.log(friends.includes('Bob'))


// if (friends.includes('Peter')) {
//     console.log("You have a friend called peter")
// }



//Coding challenge 2

// const calcTip = (bill) => {
//     let tip;
//     if (bill >= 50 && bill <= 300) {
//         tip = bill * 0.15;
//     } else {
//         tip = bill * 0.20;
//     }
//     return tip;
// }

// const Bills = [125, 555, 44]
// const Tips = [calcTip(Bills[0]), calcTip(Bills[1]), calcTip(Bills[2])]

// const Total = [Bills[0] + Tips[0], Bills[1] + Tips[1], Bills[2] + Tips[2]]
// console.log(Total)


//////////////////////////////////////////////////////////////////////

//Object


// const jonas = {
//     firstName: 'jonas',
//     lastName: 'Kumar',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', ' Peter ', 'Steven']
// }

// //Dot notation
// console.log(jonas.lastName)


// //Bracket Notation
// console.log(jonas['firstName'])

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey])
// console.log(jonas['last' + nameKey])

// const interestedin = prompt("What do you want to know about jonas choose between firstName , lastName , age ,job and friends")
// //console.log(jonas.interestedin) // undefined


// if (jonas[interestedin]) {
//     console.log(jonas[interestedin])
// } else {
//     console.log("Wrong request")
// }


// jonas.location = 'India'
// jonas['Twitter'] = '@Epic'
// console.log(jonas)

// console.log(`${jonas.firstName} have ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)


// const jonas = {
//     firstName: 'jonas',
//     lastName: 'Kumar',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', ' Peter ', 'Steven'],
//     hasDriverLicense: true,

//     // calcAge: function (birhtYear) {
//     //     return 2037 - birhtYear
//     // }
//     // calcAge: function () {
//     //     // console.log(this)
//     //     return 2037 - this.birthYear  //this points to jonas (jonas can we used instead of this but if the name of the object change from jonas to anything else then we have to manually change the object name )
//     // }
//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         return (`${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`)
//     }
// }

// console.log(jonas.calcAge()); //using Dot
// // console.log(jonas['calcAge'](jonas['birthYear'])); // using Bracket

// console.log(jonas.age)
// console.log(jonas.getSummary())



//                      Coding challenge no 3

// const markMiller = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         return this.bmi = (this.mass) / (this.height ** 2);
//     }
// }

// const johnSmith = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         return this.bmi = this.mass / (this.height ** 2);
//     }
// }
// markMiller.calcBMI()
// johnSmith.calcBMI()
// if (markMiller.bmi > johnSmith.bmi) {
//     console.log(`${markMiller.fullName}'s BMI (${markMiller.bmi}) is higher than ${johnSmith.fullName}'s (${johnSmith.bmi})`)
// } else {
//     console.log(`${johnSmith.fullName}'s BMI (${johnSmith.bmi}) is higher than ${markMiller.fullName}'s (${markMiller.bmi})`)
// }


//                             LOOPs

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`)
// }


// const jonas = [
//     'jonas',
//     'Kumar',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ]
// // const types = [];

// // for (let i = 0; i < jonas.length; i++) {
// //     console.log(jonas[i])
// //     // types[i] = typeof (jonas[i]);
// //     types.push(typeof (jonas[i]))
// // }
// // console.log(types)

// const years = [1991, 2007, 1994, 2004]
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     // ages[i] = 2037 - years[i];
//     ages.push(2037 - years[i]);
// }

// console.log(ages)


//Continue and break

//continue
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof (jonas[i]) !== 'string') continue
//     console.log(jonas[i])
// }

//break
// for (let i = 0; i < jonas.length; i++) {
//     if (typeof (jonas[i]) === 'number') break
//     console.log(jonas[i])
// }


// const jonas = [
//     'jonas',
//     'Kumar',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ]

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(jonas[i])
// }

//while

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`)
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) console.log("Loop is about to end...")
// }


//Coding challenge 4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

// const Tips = [];
// const calcTip = (bill) => {
//     let tip;
//     return tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
// }
// for (let i = 0; i < bills.length; i++) {
//     Tips.push(calcTip(bills[i]));
// }
// const total = [];

// for (let i = 0; i < bills.length; i++) {
//     total[i] = bills[i] + Tips[i];
// }

// console.log(bills, Tips, total)

// const calAverage = (total) => {
//     let sum = 0;
//     for (let i = 0; i < total.length; i++) {
//         sum = sum + total[i];
//     }
//     const avg = sum / total.length;
//     return avg;
// }

// console.log(calAverage(total))
