'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengeer = 1,
//   price = 199 * numPassengeer
// ) {
//   //ES5
//   //   numPassengeer = numPassengeer || 1;
//   //   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengeer,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000); // skip a default parameter

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas',
//   passport: 22323412312,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 22323412312) {
//     alert('Checked In');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// //Is same as
// // flightNum = flight  -  it is primitive type that why it creates a copy of the flight and havd different memory
// // passenger = jonas   -  it is a refrence type and point to same same memory block creted in Heap

// //This example shows the manipulation of same object which is not a good practice
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...otherWord] = str.split(' ');
//   return [first.toUpperCase(), ...otherWord].join(' ');
// };

// //oneWord and upperFirstWord funciton is lower order function

// //transformer is higher order function with high level of abstraction
// const transformer = function (str, fn) {
//   console.log(`Original string ${str}`);
//   console.log(`Transformed string ${fn(str)}`);
//   console.log(`Transformed by  ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// //JS uses callback all the time
// const high5 = function () {
//   console.log('👋');
// };

// document.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');

// greeterHey('Jonas'); //Hey Jonas
// greeterHey('Steven'); // Hey Steve

// greet('Hello')('Jonas'); // Hello Jonas

// const greetArrow = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterArrow = greetArrow('Hi');
// greeterArrow('Everyone');
// greetArrow('Everyone')('Okay');

// const lufthansa = {
//   airLine: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   //book : function(){}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Pawan Kumar');
// lufthansa.book(635, 'John Smidth');

// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // this doesnt work
// // book(23, ' Sarah  Williams') //because this keyord became undefined (strict mode)

// //Call method
// book.call(eurowings, 23, 'Sarah Williams'); //.call(this keyword will set to which function(eurowings) , arg1 . arg2)
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper'); //in this 'this' keyword point to lufthansa
// console.log(lufthansa);

// const swiss = {
//   airLine: 'Swiss Air Line',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper'); // this -> swiss
// console.log(swiss);

// //Apply method -> required data inside array
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);

// book.call(eurowings, ...flightData);

// //Bind method -> return a function in which this keyword is bind with the object pass in bind function(i.e eurowing)
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Pawan Kumar');

// const bookEW23 = book.bind(eurowings, 23); // one argument is preset in bind function and now the function only requred the next argument
// bookEW23('Jonas Kumar');
// bookEW23('Sumer Sarwan');

// //with Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// // document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // in addEventlistener this keyword point to the html element
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // we dont use call because it call the function

// //Partial application

// const addTax = (rate, value) => {
//   return value + value * rate;
// };
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));

// //Challenge

// const addTaxRate = value => rate => value + value * rate;

// console.log(addTaxRate(200)(0.1));

//////////////////////////////////////////////////////////////////////
//Coding challenge
// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),

//   registerNewAnswer() {
//     const ans = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(Write option number)`
//       )
//     );

//     typeof ans === 'number' && ans < this.answers.length && this.answers[ans]++;
//     this.diplayResults();
//     this.diplayResults('string');
//   },
//   diplayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// // poll.registerNewAnswer();
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.diplayResults.call({ answers: [5, 2, 3] });
// poll.diplayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
// [5,2,3]
//[1,5,3,9,6,1]

/////////////////////////////////////////////////////////////////

// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// //Immediately Invoked Function Expression
// (function () {
//   console.log('This wil never run');
// })();

// (() => console.log('This is ALSO never run again'))();

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// // console.log(isPrivate);
// console.log(notPrivate);

///////////////////////////////////////////////////////////////////////
//                                Clouser

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(passengerCount);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

//Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f);

// //Re-assignment f function
// h();
// f();

// console.dir(f);

// //Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setInterval(function () {
//     console.log(`We are now boarding all ${n}`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// // const perGroup = 1000;  clouser have priority over scoped variable
// boardPassengers(180, 3);

////////////////////////////////////////////////////////////////
//                         codding challenge 2

//Example of clouser
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
