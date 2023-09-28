//~Values and Variables

const PI = 3.1415; // &Constants are declared in uppercase

//    Exercise
// ctr + k + u to uncomment
// let country = 'Colombia';
// let continent = 'South America';
// let population =  51;

// console.log(country);
// console.log(continent);
// console.log(population);

//~Data types
//let fear;
// console.log(typeof 'Sebas'); //String
// console.log(typeof 'J'); //String
// console.log(typeof 'True'); //String
// console.log(typeof true); // Boolean
// console.log(typeof 25); //Number
// console.log(typeof fear); //undefined
//fear = 'Show time';
// console.log(typeof fear);// String
// console.log(typeof null); // the answer is object[JS bug, problem]

//~Var[should be avoided, old way], let and const
/*
 &USE CONST AS MUCH AS YOU CAN, MOST OF THE TIMES THE VARIABLES THAT CHANGE THROUGH TIME
 &ARE THE ONES THAT CREATE BUGS
*/
// let[variables that change through time]
//let age = 17;
//age = 18;
//console.log(age);

// const[variables that doesn´t change]
//const birthYear = 2005;
//birthYear = 2004; this will bring a typeError
//console.log(birthYear);

//const job; When we use const we need to give the value obligatory

//var job = 'programmer'; // NEVER USE VAR
//job = 'Entrepenuir';

//lastName = 'badillo';//&lastName has not been declared as a variable, JS will create a propertie on the global object

//~Math Operators
// const now = 2037;
// const ageSebas = now - 2005;
// const ageRandom = now -  2004;
// console.log(ageSebas * 2, ageSebas / 2, 2 **3);
// 2 **3 means 2 to the power of 3 = 8

// const firstName = 'Sebas';
// const lastName = 'Badillo';
// console.log(firstName + ' ' +  lastName);

//~Assigment operators
// let x = 10 + 5;
// x+=10; // x = x + 10
// x *=4;
// x++;
// x--;
// console.log(x);

//~Comparison Operators
// console.log(ageSebas > ageRandom);  // >, < , >=, <=
// console.log(ageSebas>=30);

//console.log(now - 1991 > now -2018);
// const isFullAge = ageSebas >=30;

// let z,y;
// z =  y = 25- 10-15; // z = y = 0
// console.log(z, y)

//~Strings and Template Literals
// const firstName = 'Sebas';
// const job =  'Programmer';
// const birthYear = 2005;
// const year = 2037

// const sebas= 'I am ' + firstName + ', a ' +  (year-birthYear) + ' years old ' + job +'!';
// const sebasNew = `I am ${firstName} , a ${year-birthYear} years old ${job}!`
// console.log(sebas);
// console.log(sebasNew);
// console.log(`Just a regular String`);

// console.log('String with \n\
// multiple \n\
// lines')

// console.log(`String
// miltuple
// lines`)

//~Taking decisions: IF/ELSE STATEMENTS

// const age = 17;
// const isOldEnough = age >= 18; // this is not really common

// if (isOldEnough) {
//     console.log("Sebas is old enough 👌");
// } else {
//     console.log(
//         `Sebas is not old enough 😢, wait another ${18 - age} years to be old enough`
//     );
// }
// let century;
// const birthYear = 2005;
// if (birthYear < 2000) {
//     century = 20;

// } else {
//     century = 21;
// }
// console.log(century);

//~Type Conversion

// const inputYear = '1991';
// const number = 5;
// console.log(inputYear + 18)
// console.log(String(number) + 18)
// console.log(Number(inputYear) + 18)

//~Type Coercion
// console.log(' I am ' + 17 + ' years old');
// console.log('23' - '10' - 3); // the strings will transformed to numbers because of the '-'
// console.log('23' + '10' + 3);// the 3 will be added as a string

// let n = '1' + 1; //11
// n = n - 1; //11-1
// console.log(n);


//~Truthy and falsy values
// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean(null));
// console.log(Boolean({}));
// console.log(Boolean(NaN));

// const money = 100;
// if (money) {
//     console.log(`Don't sped it all`);
// } else {
//     console.log('You should get a job');
// }

// let height;
// if (height)//height is false becuse is undefined
// {
//     console.log('YAY')
// } else {
//     console.log('bro')

// }
/**
* ~Equality operators
Diference between '==' and '==='
*&Always use '==='
*/

// const age = '18';
// if (age === 18) console.log('You just became an adult (strict)');

// if (age == 18) console.log('You just became an adult (loose)');

// const info = prompt("What's your favorite number");
// console.log(info);
// console.log(typeof info)


// if (parseInt(info) === 23) {
//     console.log('Cool! 23 is an amazing number!');
// } else if (Number(info) === 11) {
//     console.log('11 is also a cool number!');
// }

// if (Number(info) !== 23) {
//     console.log('why not 23?')
// }

// ~Boolean logic
// & AND, OR & NOT Operators

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && !hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);
// const isTired = true;
// const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

// if (shouldDrive) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Sara is not able to drive');
// }

//The conditional ternary operation
const age = 18
const me = 'Sebas'
age >= 18 ? console.log(`${me} is an adult `):
console.log(`${me} is under 18 years old`)
