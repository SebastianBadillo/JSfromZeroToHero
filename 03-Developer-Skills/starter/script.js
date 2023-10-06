// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const calcAge = birthyear => 2037 - birthyear;
// npm ==> node package manger

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// 1) Understanding the problem
// I have to calc the difference between the minimum and the maximum temperature
// 2) Breaking up into sub-problems
//1. calc min, calc max, calc the difference
const calcMin = arr => {
  let min = arr[0];
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] <= min) {
      min = arr[x];
    }
  }
  return min;
};
const calcMax = arr => {
  let max = arr[0];
  for (let x = 0; x < arr.length; x++) {
    if (arr[x] >= max) {
      max = arr[x];
    }
  }
  return max;
};

console.log(
  `The temperature amplitude is ${
    calcMax(temperatures) - calcMin(temperatures)
  }`
);
