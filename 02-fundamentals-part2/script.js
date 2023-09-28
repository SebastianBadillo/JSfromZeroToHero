'use strict';
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D')

//~ Functions

// function logger(){
//     console.log('My name is sebastian');
// }
// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges)
//     const juice = `Juice made with ${apples} apples and ${oranges}`;
//     return juice
// }
// let juice = fruitProcessor(10,19)
// console.log(juice)

//~ Function declaretion vs Expression
// By the moment the unic difference between these two is that, if the function is declared i can call it before the declaration, with the function expression i can´t do that
//? Funcition Declaration
// function calcAge1(birthYear){
//     return 2037-birthYear
// }
// const age = calcAge1(2005)
// console.log(age)

//? Function expression
// const calcAge2 = function(birthYear){
//     return 2037 - birthYear;
// }
// console.log(calcAge2(2005))

//? Arrow Function 
// const calcAge3= birthYear => 2037 - birthYear
// calcAge3(20);
// console.log(20)


// const yearsUntilRetirement = birthYear => {
//     const age = 2037- birthYear
//     const retirement = 65 - age;
//     return `Daniel will be retired in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(2005))

//~ Functions calling other functions
function cutFruitPieces(fruit){
    return fruit*4;
}
function fruitProcessor(apples, oranges){
    const applePieces= cutFruitPieces(apples)
    const orangePieces= cutFruitPieces(oranges)
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;
}

console.log(fruitProcessor(2,3));