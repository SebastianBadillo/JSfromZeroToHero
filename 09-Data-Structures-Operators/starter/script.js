'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Data needed for first part of the section
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
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

  // openingHours: openingHours, Old way
  //^^Enhanced object literals
  openingHours, // ES6 object literals

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    address,
    time = '20:00',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  oderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
/* ///////////////////////////////////////////////////////////  */
// ? Working with Strings
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log('DANIEL'[0].length);
console.log(airline.length);
console.log(airline.indexOf('A'));
console.log(airline.lastIndexOf('A'));

console.log(airline.indexOf('PA')); // It returns -1 because it can[t found it]
console.log(airline.slice(4)); //It will start at the index 4
console.log(airline.slice(4, 7)); //It will start at the index 4 and stops in 6

console.log(airline.slice(0, airline.indexOf(' ')));

console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2)); // if the argument is neegative it will start from backwards
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const middle = seat.indexOf('B') > -1 ? seat.indexOf('B') : seat.indexOf('E');
  const str = middle > -1 ? 'middle' : 'not middle';
  console.log(str);
};
checkMiddleSeat('11E');

console.log(new String('daniel'));
// ? Maps Fundamentals  [key and values]
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');
// console.log(rest);
// // set also returns the updated map
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'we are open :D')
//   .set(false, 'We are closed :(');
// console.log(rest.get('name'));
// console.log(rest.get(false));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// rest.set([1, 2], 'Test'); // if you try to get this you will get an error
// console.log(rest);
// console.log(rest.size);
// rest.clear();

// const question = new Map([
//   ['question ', ' What is the best programing question in the world'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['Correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]);
// console.log(question);
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt('Your answer'));
// console.log(question.get(answer));
// console.log(question.get(answer === question.get('Correct')));
// To array
// const arr = [...question];
// console.log(arr);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// ? Set [Use them for unique values]
// collection of uniques values, can´t have duplicates
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(ordersSet);
// console.log(ordersSet.add('Garlic Bread'));
// console.log(ordersSet.delete('Risotto'));
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.size);
// console.log(new Set('sebastian'));

// for (const order of ordersSet) {
//   console.log(order);
// }

// Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
// console.log(staffUnique);
// const staffArr = [...staffUnique];
// console.log(staffArr);
// ? Propertiy NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);
// console.log(properties.length);
// let openStr = `We are open on days : `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);
// ? Propertiy VALES
// const values = Object.values(openingHours);
// console.log(values);

// ? Property entries
// const entries = Object.entries(openingHours);
// // [Key , value]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
/* ///////////////////////////////////////////////////////////  */
// ? OPtional chaining
// if (restaurant.openingHours && restaurant.openingHours.mon) {
//   console.log(restaurant.openingHours.mon.open);
// }

//^ WITH optional chaining
// console.log(restaurant.openingHours?.fri?.open); // Only happens if what is before '?' exists

//EXAMPLE
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const hour = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, open at ${hour}`);
// }
//^Methods
// console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
// console.log(restaurant.orderRissotto?.(0, 1) ?? 'method does not exist');

//^ Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// console.log(users[0]?.name ?? 'User index empty');
// console.log(users[1]?.name ?? 'User index empty');

//? Enhanced object literal
// console.log(restaurant);
//? Looping Arrays: The for of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const [number, dish] of menu.entries()) {
//   console.log(`${number + 1}: ${dish}`); // print an array with the value and the index
// }
// console.log([...menu.entries()]);

// restaurant.orderDelivery({
//   time: '22:10',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
//? Logical Operators
// Use ANY data type, return ANY data type,
//shortcircuting//~ if the first statement is true, 'or' will not even see the other
// console.log('--------OR---------');
// console.log(3 || 'Daniel');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null); // undefined is falsy
// 0 is falsy, '' is also falsy, null is falsy
// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // IMP if numGuests = 0, the value will be 10, because 0 is falsy
// console.log(guests1);

// const guest2 = restaurant.numGuests || 10;

// console.log('----------AND----------'); // if the first statement is false, 'and' will return it without looking the other one
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log(7 && 'Jonas' && null && 21);

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Peperoni', 'cheese');
// }

// restaurant.orderPizza && restaurant.orderPizza('Peperoni');

//? Coalesing [??], is like an or but it doesn't consider 0 or '' like a falsy
// restaurant.numGuests = 0;
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//? Logical Assignment Opertors
// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ??= 10; /*Nulish assigment operator */
// rest2.numGuests ||= 10;
// rest1.owner &&= '<Anonimus>'; // Only works is the value is already assigned
// rest2.owner &&= '<Anonimus>';
// console.log(rest1);
// console.log(rest2);

//? Rest Pattern and Parametes
//? 1) Destructuring
// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// Rest, because on lEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

//Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat, weekDays);

// ? Rest, Functions
// const add = function (
//   ...parameters /**Here I wrap all the parameters into an ARRAY */
// ) {
//   let sum = 0;
//   for (let i = 0; i < parameters.length; i++) {
//     sum += parameters[i];
//   }
//   console.log(parameters);
//   console.log(sum);
// };
// add(2, 3, 4, 5, 6);
// add(2, 3, 4, 5, 6, 7, 56, 2, 567, 567);

// const x = [23, 5, 7];
// add(...x /**Here I spread the array */);

// restaurant.orderPizza('Peperonni', 'cheese', 'bacon');
// ? Spread Operator
// const arr = [7, 8, 9, 10, 11];
// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// const newArr = [1, 2, ...arr]; // Spread Operator
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
// const menu = [...mainMenuCopy, ...restaurant.starterMenu];
// console.log(menu);

// const name = 'Daniel';
// console.log(...name);
// const [d, a, n, i, e, l] = [...name];
// console.log(d, a);

// Iterables: arrays,strings, maps, sets. NOT objects
// const str = 'Daniel';
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);

// const ingredients = ['pasta', 'tomato', 'cheese'];
// ^Real World Example
// const ingredients = [
//   prompt("let's make pasta! Ingrediente 1?"),
//   prompt("let's make pasta! Ingrediente 2?"),
//   prompt("let's make pasta! Ingrediente 3?"),
// ];
// restaurant.oderPasta(...ingredients);
// Objects
// const newRestaurant = { ...restaurant, fouder: 'Guiseppe' };
// console.log(newRestaurant);
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Mamma mia';
// console.log(restaurant.name, restaurantCopy.name);
// //? Destructuring Objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
// //^ Default Variables
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);
// //^ Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj); // without the parentesis it wont work
// console.log(a, b);

// //^ Nested Objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);
// ? Destructuring Arrays
// const [x, y, z] = arr; // Destructuring
// console.log(x, y, z);
// console.log(arr);

// let [main, , third] = restaurant.categories; // With the , , we make a hole and we move to the next
// console.log(main, third);

//^ Switching Variables
// [main, third] = [third, main]; // We exchange the value of the variables
// console.log(main, third);

// // Recieve 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

//^ Nested Destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//^ Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
