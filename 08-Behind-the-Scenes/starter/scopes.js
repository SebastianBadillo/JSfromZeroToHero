'use strict';
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const firstName = 'Steven';
      var millenial = true;
      const str = `oH you are a millenial,  ${firstName}`;
      console.log(str);
    }
    function add(a, b) {
      return a + b;
    }
    console.log(millenial); // This works because 'var' works like function scope, so var works in all the function, even if is inside blocks(like this case) or not.
    console.log(add(2, 5));
  }
  printAge();
  return age;
}
const firstName = 'Jonas';
calcAge(1991);
