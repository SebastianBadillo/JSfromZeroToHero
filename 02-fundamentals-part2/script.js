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

//?Function declaretion vs Expression
// By the moment the unic difference between these two is that, if the function is declared i can call it before the declaration, with the function expression i can´t do that
//! Funcition Declaration
// function calcAge1(birthYear){
//     return 2037-birthYear
// }
// const age = calcAge1(2005)
// console.log(age)

//! Function expression
// const calcAge2 = function(birthYear){
//     return 2037 - birthYear;
// }
// console.log(calcAge2(2005))

//! Arrow Function 
// const calcAge3= birthYear => 2037 - birthYear
// calcAge3(20);
// console.log(20)


// const yearsUntilRetirement = birthYear => {
//     const age = 2037- birthYear
//     const retirement = 65 - age;
//     return `Daniel will be retired in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(2005))

//! Functions calling other functions
// function cutFruitPieces(fruit){
//     return fruit*4;
// }
// function fruitProcessor(apples, oranges){
//     const applePieces= cutFruitPieces(apples)
//     const orangePieces= cutFruitPieces(oranges)
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));


//~ Introduction to Arrays
// const array1 = ['sebas', 'pedro' , 'isaac'];
// console.log(array1) 

// const year = new Array(1991, 2005, 2070);
// console.log(year)

// console.log(array1[0])
// console.log(array1.length)
// //? Basic arrays methods
// const friends = ['Michael', 'Steven', 'Peter'];
// //!push
// friends.push('Jay');// this funcion adds the element in the last position and returns the new lenght
// console.log(friends)
// //!Unshift
// friends.unshift('Daniel');// this funcion adds the element in the first position 
// console.log(friends)
// //!pop
// const popped = friends.pop();// removes the last element, and returns the elemnt deleted
// console.log(popped)
// console.log(friends)
// //!shift
// friends.shift()// Delete first elemet, and return it
// console.log(friends)
// //! includes and indexOf


//~ Introduction to objects
// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037-1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ]

// const jonas ={
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037-1991,
//     job:'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }
// console.log(jonas.firstName)

// const interestesIn = prompt('What do you want to know about Jonas')
// console.log(jonas[interestesIn])

//~ Objects Methods
// const jonas ={
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037-1991,
//     job:'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     getSumary : function(){
//         return `${this.firstName}, ${this.lastName}`;
//     }
// }

//~ Foor loops
// for(let x=0; x<=10; x++){
//     console.log(`Repetition number ${x} 🏋️`)
// }

//~ While loop
