'use strict';
// Primitives types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Nico';
console.log(lastName);
console.log(oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Williams De Marco';
console.log('Jesica: ', jessica);
console.log('Married Jesica: ', marriedJessica);

// marriedJessica = {};

// Copying Objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessica2Copy = Object.assign({}, jessica2); // Here we merge and obtain a new object //Shallow copy// if we have an object inside it will be changed in both of them
jessica2Copy.lastName = 'Davis';
console.log('Jesica: ', jessica2);
console.log('Married Jesica: ', jessica2Copy);

jessica2Copy.family.push('Mary');
jessica2Copy.family.push('Jhon');
console.log('Jesica: ', jessica2);
console.log('Married Jesica: ', jessica2Copy);
