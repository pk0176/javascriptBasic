'use strict';

// function calAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName} ,you are ${age} born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = 'jonas';
//       const str = `Oh, and you are a millenial ${firstName}`; // javaScrip lookup for firstName and find in this scoped.
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//       const output = 'NEW OUTPUT!';
//       console.log(output);
//     }
//     console.log(millenial); // var is function scoped and const and let are blocked scoped
//     // console.log(add(5, 6)); //doent work in strict mode

//     console.log(output);
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Pawan';
// calAge(1991);

/////////////////////////          Hoisting with variable

// console.log(me); // show undefined
// // console.log(job);
// // console.log(year);

// var me = 'Pawan';
// let job = 'Student';
// const year = 2000;

// //////////////////////////           Hoisting with function

// console.log(adddecl(2, 3));
// // console.log(addExpr(2, 3)); // this is assingned with const variable that's why it is in Death zone
// console.log(addArrow); // undefined

// // after convertin to var the funtion became undefined therefore undefined(a, b) is not a funtion

// function adddecl(a, b) {
//   return a + b;
// }

// // const addExpr = function (a, b) {
// //   return a + b;
// // };

// var addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => {
//   return a + b;
// };
// // const addArrow = (a, b) => {
// //   return a + b;
// // };

// console.log(undefined);
// if (!numProducts) deleteShoppingCart(); // this code will execute because undefined is also a falsy value

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All product deleted ');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x); // variable decleared using var is also a property of window
// console.log(y === window.y);

//////////////////////////////////        this keyword

// console.log(this); // Window object

// const calAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // undefined in strict mode and Window object if not on strict mode
// };

// calAge(1991);

// const calcAgeArraow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // Window object because parent of this arrow function is window
//   //Arrow funtion doesnt have their own this keyword
// };

// calcAgeArraow(1996);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2043 - this.year);
//   },
// };

// jonas.calcAge();

// const Lily = {
//   year: 2017,
// };

// Lily.calAge = jonas.calcAge; // borrowing the calcAge method
// Lily.calAge(); // this keyword always point to those who calls the method in this Lily is calling the calcAge method thats why this keyword point to Lily
// //this shows the dynamic behaivour of this keyword

// var firstName = 'LILY'; // firstName now became the properties of Window object
// //thats why we dont use var

// const jonas = {
//   firstName: 'jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2043 - this.year);

//     //Solution 1 - const self = this
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self); // this is undefined  in regular function call in strict mode and Window object withot strict mode
//     //   //   console.log(this.year >= 1981 && this.year <= 1986);
//     //   console.log(self.year >= 1981 && self.year <= 1986);
//     // };

//     //Solution 2 - Arrow function inherit this keyword from the parent(jonas)
//     const isMillenial = () => {
//       console.log(this); // this is undefined  in regular function call in strict mode and Window object withot strict mode
//       //   console.log(this.year >= 1981 && this.year <= 1986);
//       console.log(this.year >= 1981 && this.year <= 1986);
//     };

//     isMillenial();
//   },
//   // always use normal function instead of arrow
//   //   greet: () => {
//   //     console.log(`Hey ${this.firstName}`); // Hey LILY
//   //   },
//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// //jonas is not a code block
// jonas.greet(); //greet is arrow fucntion and does'nt have its own this keyword show it will use the parent this keyword i.e Window and Window.firstName is not defined

// jonas.calcAge();

// //                         Argument keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(5, 2, 4);

// //argument keyword doesnt exist in Arrow funtion
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

////////////////////////////////// premitive and refrence variable

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend', friend); // age = 27
// console.log('Me', me); // age = 27

//primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//Refrence types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
//const are imutable to primitive variable only
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica.lastName);
console.log('after marriage: ', marriedJessica.lastName);

// marriedJessica = {}

//Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 29,
  family: ['Alice ', 'Bob'], // array is the second level
};

const jessicaCopy = Object.assign({}, jessica2); // Object.assign only copy of a fist level

jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Jhon');
console.log(jessica2, jessicaCopy);
