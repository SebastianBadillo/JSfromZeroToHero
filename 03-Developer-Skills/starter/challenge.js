///////////////////////
// Coding Challenge #1
/*
Given an array of forecasted maximum temperatures,
the thermometer displays a string with these temperatures.
Example:[17, 21, 23] will print"... 17°C in 1 days, 21°C in 2 days... 23°C in 3 days""

Create a function 'printForecast' which takes in an array
'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

Test Data 1: [17, 21, 23]
Test Data 2: [12, 5, -5, 0, 4]

Solution: I have to extract data form an array and make a string with the info

*/

const printForecast = arr => {
  let string = '';
  for (let x = 0; x < arr.length; x++) {
    string += `...${arr[x]} in ${x + 1} days  `;
  }
  return string;
};
console.log(printForecast([17, 21, 23]));
