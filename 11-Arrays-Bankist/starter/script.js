'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type.toUpperCase()}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsernames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const calcDisplaySummary = acc => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}`;

  const out = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => {
      return acc + mov;
    }, 0);
  labelSumOut.textContent = `${Math.abs(out)}`;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposite => (deposite * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}`;
};

let currrentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currrentAccount = accounts.find(acc => {
    return acc.username === inputLoginUsername.value;
  });

  if (currrentAccount && currrentAccount.pin === Number(inputLoginPin.value)) {
    //Display ui and welcome message
    labelWelcome.textContent = `Welcome back , ${
      currrentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Clear the input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    //Display movements
    displayMovements(currrentAccount.movements);
    //Display balance
    labelBalance.textContent = currrentAccount.movements.reduce((acc, val) => {
      return acc + val;
    }, 0);
    //Display summary
    calcDisplaySummary(currrentAccount);
  }
});

// const deposits = account1.movements.filter(mov => {
//   return mov > 0;
// });

// const withdrawals = account1.movements.filter(mov => mov < 0);
// console.log(withdrawals);

// //Accumulate is like a snow ball
// const balance = account1.movements.reduce((acc, cur, i, arr) => {
//   return acc + cur;
// }, 0); //initial value of accumulator
// console.log(balance);
///////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

////////////////////////////////////////////////////

//////////////////////////////////////////////      Lecture 142-array method

// let arr = ['a', 'b', 'c', 'd', 'e'];

// //Slice method - it does not change the original array

// console.log(arr.slice(2)); //slice(starting index , ending index); //starting index will be included but not ending index  :-['c','d','e']
// console.log(arr.slice(2, 4)); //slice(starting index , ending index);  :- ['c' , 'd']
// console.log(arr.slice(-2)); //last two element of any array
// console.log(arr.slice(1, -2)); //start with index 1 and goes upto the exlcluding last two index

// //SPLICE - it does change the original array

// // console.log(arr.splice(2));
// // console.log(arr); //['a', 'b']
// // arr.splice(-1);
// // console.log(arr);  ['a', 'b', 'c', 'd']

// // arr.splice(1, 2); //splice(starting index , no of element should remove)
// // console.log(arr); //['a', 'd', 'e']

// //REVERSE - Thus mutate the array

// // console.log(arr.reverse()); //['e', 'd', 'c', 'b', 'a']
// // console.log(arr);           //['e', 'd', 'c', 'b', 'a']

// //   CONCAT :- does not mutate array

// const arr2 = ['f', 'g', 'h', 'i', 'j', 'k'];
// const arr = ['1', '2'];
// const letters = arr.concat(arr2);
// const letters = [...arr2, ...arr];
// console.log(letters);
// console.log(arr);

// //JOIN
// console.log(letters.join('-'));

////////////////////////////////////////////////////////////// Lecture-143 The new at Method

/////   at method
// const arr = [23, 11, 64];
// console.log(arr[0]); //23
// console.log(arr.at(0)); //23

// //use case of at method
// console.log(arr[arr.length - 1]); //64
// console.log(arr.slice(-1)[0]); //64
// console.log(arr.at(-1)); // 64

// console.log('jonas'.at(0)); //j

/////////////////////////////////////////////////////////////// Lecture-144 looping in array for_each

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //Forof method
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} You depsited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdraw ${movement}`);
//   }
// }
// console.log('FOR EACH');
// //For each
// movements.forEach((movement, index, array) => {
//   //only order matters
//   if (movement > 0) {
//     console.log(`Movement ${index + 1} You depsited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1} You withdraw ${movement}`);
//   }
// });
//Note :- continue and break doent works with forEach loop

////////////////////////////////////////////////////////////////// Lecture 145 foreach with map and set

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// //map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// //set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// // currenciesUnique.forEach(function (value, key, set) {
// currenciesUnique.forEach(function (value, _, set) {
//   // _ is to throw away
//   console.log(`${value}`); //Key and value will be same because set doesnot have key and value
// });

////////////////////////////////////////////////////////////// lecture 148 -Coding challenge

// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */
// const juliaArr = [3, 5, 2, 12, 7];
// const kateArr = [4, 1, 15, 8, 3];

// const checkAge = function (juliaArr, kateArr) {
//   // juliaArr.pop(); // remove the last element from the array
//   // juliaArr.shift(); //remove first element from the array
//   const dogsJuliaCorrected = juliaArr.slice(); //we use slice to make a new copy of the array with slice we will be pointing to the same array
//   // dogsJuliaCorrected.pop();
//   // dogsJuliaCorrected.pop();

//   // dogsJuliaCorrected.shift();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   console.log(dogsJuliaCorrected);

//   const alldogs = dogsJuliaCorrected.concat(kateArr);
//   alldogs.forEach((dog, i) => {
//     const age =
//       dog >= 3 ? `an adult, and is ${dog} years old ` : 'is still a puppy 🐶';
//     console.log(`Dog number ${i + 1} is ${age}`);
//   });
// };
// checkAge(juliaArr, kateArr);

//------------------------MAP, FILTER AND REDUCE----------------
// const eurToUsd = 1.1;
// const movemetnsUsd = account1.movements.map(mov => {
//   return mov * eurToUsd;
// });
// // console.log(account1.movements);
// // console.log(movemetnsUsd);
// const movementsDesc = account1.movements.map((movement, index) => {
//   //only order matters
//   // if (movement > 0) {
//   //   return `Movement ${index + 1} You depsited ${movement}`;
//   // } else {
//   //   return `Movement ${index + 1} You withdraw ${Math.abs(movement)}`;
//   // }
//   return `Movement ${index + 1} You ${
//     movement > 0 ? 'deposited' : 'withdraw'
//   } ${Math.abs(movement)}`;
// });

// const Data1 = [5, 2, 4, 1, 15, 8, 3];

// const calcAverageHumanAge = ages => {
//   const ans = ages
//     .map(age => {
//       if (age <= 2) {
//         return 2 * age;
//       } else {
//         return 16 + age * 4;
//       }
//     })
//     .filter(age => {
//       return age >= 18;
//     })
//     .reduce((acc, age, _, arr) => {
//       return acc + age / arr.length;
//     }, 0);
//   return ans;
// };
// console.log(calcAverageHumanAge(Data1));
