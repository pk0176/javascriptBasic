// let year;
// console.log(year);
// console.log(typeof (year));

// year = 1991;
// console.log(typeof (year))
// console.log(typeof null);

//                              let , const , var

// let age = 30;
// age = 32; //we can reassing(or mutate) the variable by using let

// const birthYear = 1991;
// //birth = 1990 assingment to const variable can not be change (variable are imutable)
// //we cannot crete a empty variable using const keyword
// //const job; // we must intialize value

// var job = 'prgrammer';
// job = 'teacher';

// //let is bloced scoped and var is function scoped

// lastName = "pawan"; // we can create a varible with using let, const and var but it is not a good practice
// console.log(lastName)

//                          Operators
// const now = 2023;
// const agePawan = now - 2000;
// const ageSaurav = now - 2002;
// console.log(agePawan, ageSaurav)
// console.log(agePawan * 2, ageSaurav / 10, 2 ** 3);

// const firstName = "Pawan";
// const lastName = "Kumar";
// console.log(firstName + " " + lastName)
// console.log(`${firstName} ${lastName}`)


// let x = 10 + 5; // 15
// x += 10;
// console.log(x)

// console.log(agePawan > ageSaurav) // < , > , >= , <=

//operator precedence https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence


//coding challenge 1 : callculate BMI
// const massOfMark = 95;
// const massOfJhon = 85;
// const markHeight = 1.88;
// const jhonHeight = 1.76;

// const jhonBmi = massOfJhon / (jhonHeight ** 2);
// const markBmi = massOfMark / (markHeight ** 2);

// console.log(markBmi > jhonBmi);

// const firstName = 'Pawan'
// const job = 'coder';
// const birthYear = 2000;
// const year = 2034;

// const pawan = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(pawan)

// const pawanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(pawanNew)

// console.log('String with \n\
// mutiple \n\
// lines'); // before ES6

// console.log(`String with
// mutiple
// lines`)

//           condition operator
// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log("you are eligible😊")
// } else {
//     const yearLeft = 18 - age;
//     console.log(`you are too young wait another ${yearLeft} years `)
// }

// const birthYear = 2991;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century)

//coding challenge 2
// const massOfMark = 95;
// const massOfJhon = 85;
// const markHeight = 1.88;
// const jhonHeight = 1.76;

// const jhonBmi = massOfJhon / (jhonHeight ** 2);
// const markBmi = massOfMark / (markHeight ** 2);
// if (markBmi > jhonBmi) {
//     console.log(`Mark BMI is higher ${markBmi}`)
// } else {
//     console.log(`Jhon BMI is higher ${jhonBmi}`)
// }

//              Type Conversion and Type Coercion

//Type conversion mean converting one type to another
//Type Coercion mean javascript itself convert the type of variable

// const inputYear = '1991';
// console.log(Number(inputYear) + 18, inputYear)

// console.log(Number("pawan"))

// console.log("I'm " + 23 + " years old")
// console.log('23' - '10' - 3); // - covert string to number and + conver number to string

//                   Truthy and Falsy Values
//5 falsy value: 0 , '' , undefined , null ,NaN;

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('pawan'))
// console.log(Boolean({}))
// console.log(Boolean(''))

// const money = 10;
// if (money) {
//     console.log('Dont spend it all ')
// } else {
//     console.log("You should get a job")
// }

// let height = 10;
// if (height) {
//     console.log("Yeah height is defined")
// } else {
//     console.log("Height is undefined")
// }

// const age = 18;
// if (age === 18) console.log("You just became an adult"); // === strict equilaty operator does not type coercion
// if ('18' == 18) console.log("type coersion is occurs")


// //Using type coersion(losly equality)
// // const favourite = prompt("What's your favourite number");
// // if (favourite == 23) {
// //     console.log("cool! 23 is an amazing number")
// // }
// //without using type coerson(sticly equality)
// const num = Number(prompt("what s your favorite number"));
// if (num === 69) {
//     console.log("Cool! 69 is an amzing number")
// } else if (num === 96) {
//     console.log("96 is also cool number");
// } else {
//     console.log("Number is neither 69 nor 96")
// }


// if (num !== 69) console.log("why not 69?") // "!== (strict)" and "!= (lose)"


// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision)
// console.log(hasDriversLicense || hasGoodVision)
// console.log(!hasDriversLicense)

// // const shouldDrive = hasDriversLicense && hasGoodVision;
// // if (shouldDrive) {
// //     console.log("Sarah is able to drive");
// // } else {
// //     console.log("Someone else will Drive")
// // }

// const isTired = false;
// console.log(hasDriversLicense || hasGoodVision || isTired)


// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sarah is able to drive")
// } else {
//     console.log("Someone else should drive")
// }

//Codiing Challenge 3

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;
// console.log(scoreDolphins, scoreKoalas)

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log('Dolphines win the Trophy')
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log("Both win the trophy");
// } else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
//     console.log("Koalas win the trophy")
// } else {
//     console.log("No team wins the trophy ")
// }


//                   Switch Case
// const day = 'monday';

// switch (day) {
//     case 'monday':
//         console.log("Plan course structure");
//         console.log('Go to coding meetup');
//         break;
//     case 'tuesday':
//         console.log("Prepare theory video");
//         break;
//     case 'wednesday':
//     case 'thrusday':
//         console.log("Write code example");
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log("Enjoy the weekend");
//         break;
//     default:
//         console.log("Not a valid day")
// }

// if (day === 'monday') {
//     console.log("Plan course structure");
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log("Prepare theory video");
// } else if (day === 'wednesday' || day === 'thrusday') {
//     console.log("Write code example");
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log("Enjoy the weekend");
// } else {
//     console.log("Not a valid day")
// }

// const age = 23;
// age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(`I like to drink ${drink}`)

//                Coding challenge 4

// let bill = 430;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// console.log(`The bill is ${bill} , the tip is ${tip} and the total amount is ${bill + tip} `);