'use strict';

// Data needed for a later exercise

// Data needed for first part of the section

const weekday = ['mon', 'tue', 'wed', 'thru', 'fri', 'sat', 'sun']; //ES6 feature
const openingHours = {
  [weekday[3]]: {
    open: 12,
    close: 22,
  },
  [weekday[4]]: {
    open: 11,
    close: 23,
  },
  [weekday[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //before ES6
  // openingHours : openingHours,

  // ES6 Enhanced object literals
  openingHours,

  //ES6 way of writing function
  orderDelevery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  //Before ES6
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1} , ${ing2} , ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${
    type.startsWith('_Delayed') ? '😡' : '    '
  }${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(50);
  console.log(output);
}

/////////////////////////////////////////////////////////////////////
//                         coding challenge 3
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// const button = document.querySelector('button');
// const textarea = document.querySelector('textarea');

// button.addEventListener('click', function () {
//   const text = textarea.value;
//   const rows = text.split('\n');

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20, ' ')}${'✅'.repeat(i + 1)}`);
//   }
//   // const textArray = textarea.value.split('\n');
//   // for (const text of textArray) {
//   //   const [a, b] = text.split('_');
//   //   console.log((a + b.replace(b[0], b[0].toUpperCase())).trim());
//   // }
// });

///////////////////////////////////////////////////////////////////////
/////////                 Working with string part 3
// console.log('a+very+nice+string'.split('+'));
// console.log('Pawan Kumar'.split(' '));
// const [firstName, lastName] = 'Pawan Kumar'.split(' ');
// console.log(firstName, lastName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitalizationName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const word of names) {
//     // namesUpper.push(word[0].toUpperCase() + word.slice(1));
//     namesUpper.push(word.replace(word[0], word[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(' '));
// };
// const passenger = 'jessica and smith david';
// capitalizationName(passenger);

// //Padding a String
// const message = 'Go to gate 23';
// console.log(message.padStart(25, '+')); // it will padd string with + at start until the string reaches 25 lenght
// console.log('Jonas'.padStart(25, '+').padEnd(35, '+'));

// const maskCreditcard = function (number) {
//   const str = String(number);
//   const newStr = str.slice(-4).padStart(str.length, 'x');
//   console.log(newStr);
// };
// const num = 23423124323123;
// maskCreditcard(num);
// maskCreditcard('43113131213413434134');

// //Reapeat
// const message2 = 'Bad weather..... All departure Delyaed';
// console.log(message2.repeat(5));

// const planesInline = function (n) {
//   console.log(`There are ${n} planes in lines ${'✈️'.repeat(n)}`);
// };
// planesInline(5);

/////////////////////////////////////////////////////////////////////////
//////////////           Workind with String -part 2
// const airLine = 'TAP Air Portugal';

// console.log(airLine.toLowerCase());
// console.log(airLine.toUpperCase());

// //Fix the capitalization in passanger name
// const passanger = 'jOnAs';
// const passangerLower = passanger.toLowerCase();
// const passangerCorrect =
//   passangerLower[0].toUpperCase() + passangerLower.slice(1);
// console.log(passangerCorrect);

// // Comparing Email

// const email = 'hello@pk.io';
// const loginEmail = '    HeLlo@PK.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); // to remove white spaces
// console.log(trimmedEmail);

// console.log(loginEmail.toLowerCase().trim());
// console.log(email === loginEmail);

// // Replacing

// const priceGB = '288,97€';
// const priceUS = priceGB.replace('€', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to barding door 23 , Boarding door 23';

// console.log(announcement.replaceAll('door', 'gate')); // using replaceALL
// console.log(announcement.replace(/door/g, 'gate')); // By using regular expression

// //Boolean
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('BOIENG'));
// console.log(plane.startsWith('A3'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Yeah');
// }

// //Practice exercise

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('You are welcome');
//   }
// };

// checkBaggage('I have a laptop, some food and a pocket Knife');
// checkBaggage('socks and camera');
// checkBaggage('Got some snacks and a gun for the proctection');

///////////////////////////////////////////////////////////////////////////
//////////////          Working with String - part 1
// const airLine = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[2]);
// console.log('BOOM'[0]);
// console.log(airLine.length);
// console.log(airLine.indexOf('r')); // give first Occurance
// console.log(airLine.lastIndexOf('r')); // give last Occurance
// console.log(airLine.indexOf('Portugal'));

// console.log(airLine.slice(4)); // Sub string start with index 4
// console.log(airLine.slice(4, 7)); // Sub string start with index 4 and end at index 7(not include)

// console.log(airLine.slice(0, airLine.indexOf(' ')));
// console.log(airLine.slice(airLine.lastIndexOf(' ') + 1));
// console.log(airLine.slice(-2));
// console.log(airLine.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seat
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat');
//   } else {
//     console.log('You got lucky');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

//////////////////////////////////////////////////////////////////////
// //Coding Challenge 3

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);

// //1
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// //2
// gameEvents.delete(64);
// console.log(gameEvents);
// //3
// const time = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// //4
// for (const [key, value] of gameEvents) {
//   console.log(
//     key < 45 ? `FIRST HALF ${key} : ${value}` : `Second Half ${key} : ${value}`
//   );
// }

////////////////////////////////////////////////////////////
// //Map : continued

// const question = new Map([
//   ['question', 'What is  the best progamming language in the world '],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct🎉'],
//   [false, 'Try again'],
// ]);
// console.log(question);

// //Covert Object to map
// console.log(Object.entries(openingHours));
// const hourMap = new Map(Object.entries(openingHours));
// console.log(hourMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;

// console.log(question.get(answer === question.get('correct')));

// //Convert Map to Array
// console.log(...question);
// console.log([...question.keys()]);
// console.log([...question.values()]);

/////////////////////////////////////////////////////////////
//Maps : Fundamentals
// const rest = new Map();
// rest.set('name', 'Classico Ilaliano');
// rest.set(1, 'Firenze , Italy');
// rest.set(2, 'India');
// //Chaining set method
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are close');
// console.log(rest);
// console.log(rest.get('name')); //Classico Ilaliano
// console.log(rest.get(true)); // We are open
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// const arr = [1, 2];
// rest.set(arr, 'Test'); // Array as a key
// rest.set(document.querySelector('h1'), 'Heading'); // DOM element as a key

// console.log(rest);
// // rest.clear(); // remove all elment from the rest
// console.log(rest.size);
// console.log(rest.get(arr));

//////////////////////////////////////////////////////////////
//  SETS

// const ordersSet = new Set([
//   'Pizza',
//   'Pasta',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(new Set('Pawan'));
// console.log(ordersSet.size);

// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// //Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(new Set('PawanKumarisLooser').size);

///////////////////////////////////////////////////////////////////
//Coding challenge no 2

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1
// for (const [i, j] of game.scored.entries()) {
//   console.log(`GOAL ${i + 1} : ${j}`);
// }

// //2
// const value = Object.values(game.odds);
// let sum = 0;
// for (const i of value) {
//   sum += i;
// }
// const avg = sum / value.length;
// console.log(avg);

// //3

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} : ${odd}`);
// }

// //4
// let scorers = {};
// let i;
// for (const player of game.scored) {
//   i = 1;
//   if (!scorers[player]) {
//     scorers[player] = i;
//   } else {
//     scorers[player] = i = i + 1;
//   }
// }

// console.log(scorers);

//////////////////////////////////////////////////////////
// //Looping Objects_Object Keys , Values and Entries

// //Properties Name
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// //Properties VALUES
// const values = Object.values(openingHours);
// console.log(values);

// //Entire Objects
// const entries = Object.entries(openingHours);
// console.log(entries);
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

//////////////////////////////////////////////////////////
// //Optional chaining

// //Without optinal chaining
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

// //With optional chaining
// //and without optional chaining we caught error
// console.log(restaurant.openingHours.mon?.open); // if before ? (i.e mon ) exist then open will read otherwise it return undefined
// console.log(restaurant.openingHours?.mon?.open); //it check for existing of both openinghour and mon

// //Example
// const days = ['mon', 'tue', 'wed', 'thru', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// //Methods

// console.log(restaurant.order?.(0, 1) ?? 'Method doesnt exist');
// console.log(restaurant.orderBurger?.(0, 1) ?? 'Method doesnt exist');

// //Arrays
// //use to check wheather array is empty

// const users = [
//   {
//     name: 'jonas',
//     email: 'hotmail@gamil.com',
//   },
// ];

// //Withou optinal chaining
// // if (users.length > 0) {
// //   console.log(users[0].name);
// // } else {
// //   console.log('user array empty');
// // }

// //With optional chaining
// console.log(users[0]?.name ?? 'User array empty');
// console.log(users[8]?.name ?? 'Invalid input');

///////////////////////////////////////////////////////////
// //For-of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item); //for of loop give the element of the array
// }

// //usign for of to get the index of the arr
// // for (const item of menu.entries()) {
// //   console.log(`${item[0] + 1}: ${item[1]} `);
// // }
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el} `);
// }

// console.log([...menu.entries()]);

//////////////////////////////////////////////////////////////////////
// //Coding challange 1

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //1
// const [players1, players2] = game.players;

// //2
// const [gk, ...fieldPlayers] = [players1];

// //3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// //5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(draw);

// //6
// const PrintGoal = function (...players) {
//   console.log(`${players.length} Goal were scored`);
//   for (let i = 0; i < players.length; i++) {
//     console.log(players[i]);
//   }
// };

// PrintGoal(...game.scored);

// //7
// team1 < team2 && console.log('Team 1 is more likely to win');
// team2 < team1 && console.log('Team 2 is more likely to win');

/////////////////////////////////////////////////////////////////////////
//Assignment Operators

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Pizza',
//   owner: 'Pawan',
// };

// //OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// //nullish assignment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// //AND assignment operator
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// ///////////////////////////////////////////
// //Nullish Coalescing Operator(ES20)

// //Without nUllish coalescing
// restaurant.numGuest = 0;
// const guests = restaurant.numGuest || 10;
// console.log(guests);

// //with nullish coalescing: null adn undefined (NOT 0 or ')

// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

// //////////////////////////////////////////////////////////////////
// //Short Circuiting (&& and ||) - they can use any data type ,  return any data type and short-circuiting
// console.log('----------------OR-----------------');
// console.log(3 || 'jonas'); // short-circuiting = first operand is truth then other operand does not evaluate
// console.log('' || 'jonas'); // jonas
// console.log(true || 0); // true
// console.log(undefined || null); //null
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// //Without short circuiting
// const guest1 = restaurant.numGuest ? restaurant.numGuests : 10;
// console.log(guest1);

// //using short circuiting
// const guest2 = restaurant.numGuest || 10;
// console.log(guest2);

// console.log('--------------------AND---------------');
// console.log(0 && 'jonas');
// console.log(7 && 'jonas'); //evaluation continued and last value returns
// console.log('Hello' && 23 && null && 'jonas'); //evaluation continued to falsy value

// //withou short circuiting
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }

// //with short circuiting
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// ////////////////////////////////////////////////////////////////
// //Rest pattern

// const arr = [1, 2, ...[3, 4]]; //SPREAD , because on RIGHT side of  =

// //REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, Risotto, otherFood); // does not include the skipped element

// //Objects
// const { sat, ...weekday } = restaurant.openingHours;
// console.log(weekday);

// //Function

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(5, 3, 7, 2, 1, 4);

// const x = [23, 4, 5];
// add(...x);

// restaurant.orderPizza('Mushroom', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushroom');

/////////////////////////////////////////////////////////////////
//Spread Operator

// //with spread Opreator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr); // console.log(1,2,7,8,9)

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //Copy Arr
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// //Join two array;
// const menu = [...restaurant.starterMenu, ...restaurant.starterMenu];
// console.log(menu);

// // Iterables are arrays, strings ,maps ,sets , NOT objects
// const str = 'Jonas';
// const letter = [...str, ' ', 'S.'];
// console.log(letter);

// //Real-world Example
// // const ingredients = [
// //   prompt("Let's make pasta! Ingredient1"),
// //   prompt("Let's make pasta! Ingredient2"),
// //   prompt("Let's make pasta! Ingredient3"),
// // ];

// // restaurant.orderPasta(...ingredients);

// ///Object
// const newResturant = { foundedIn: 1999, ...restaurant, founder: 'Pawan' };
// console.log(newResturant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'BaBa Ka DhaBa';
// console.log(restaurant.name); // Clssico Italiano
// console.log(restaurantCopy.name); // BABA ka dhaba

/////////////////////////////////////////////////////////////////
//Destructure Objects

// restaurant.orderDelevery({
//   time: '22:30',
//   address: 'India',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelevery({
//   address: 'Jharkhand',
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //default value
// const { menu = [], starterMenu: staters = [] } = restaurant;
// console.log(menu, staters);

// //Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// //Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

//////////////////////////////////////Destructure Array
// const arr = [2, 3, 4];
// //without Destructuring
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// //Destructuring
// const [x, y, z] = arr;
// console.log(x, y, z);

// // const [first,second] = restaurant.categories;
// let [main, , secondary] = restaurant.categories; // For skipping the second element of array
// console.log(main, secondary);

// //Swapping without destructuring
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // // console.log(main, secondary);

// //Swapping with help of destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //Receive 2 return value from a function;
// const [starterOpt, mainOpt] = restaurant.order(2, 0);
// console.log(`Starter is ${starterOpt} , and main course is ${mainOpt}`);

// //Nested Destructuring
// const nested = [2, 4, [5, 6]];
// const [i, j, [k, l]] = nested;
// console.log(i, j, k, l);

// //Default Values
// // const [p, q, r] = [8, 9];
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // r is undefined here and after assigning default value r is 1
