'use strict';
// console.log(this); //window object

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this); // Arrow functions doesn´t have its own this
// };
// calcArrow(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();
var firstName = 'Matilda';
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => {
    console.log(`Hey ${this.firstName}`), console.log(this);
  },
};
jonas.greet();
console.log();
