//VALUE AND VARIABLES
//Value - is the content
//VARIABLES = name

/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Bob';
console.log(firstName);
console.log(firstName);
console.log(firstName);*/


// DATA TYPE
/*let javascriptIsFun = true;
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'javascriptIsFun');

javascriptIsFun = 'NO'
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
*/

//lLET, CONST, VAR
/*
let = ay para dun sa nababago, block scope
const = means constant
var = function scope


let age = 32;
age = 31;

const birthYear = 1993;

var job = 'teacher';
job = 'programmer';
*/

// BASIC OPERATOR //

//Math Operators
/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas /10, 2 ** 3);// 2 ** 3 means 2 to the 3rd power

const firstName = 'Jonas';
const lastName = 'Lipa';
console.log(firstName + ' ' + lastName);

//Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // true

console.log(ageSarah >= 18); // true

const isFullAge = ageSarah >= 18;*/

// Operator Precedence

/*
let x, y;
x = y = 25 - 10 - 5; // x = y = 10. x = 10; x = y; y = 10
console.log(x, y);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

const averageAge =  ageJonas + ageSarah / 2
console.log(ageJonas, ageSarah, averageAge);
*/

//CODE CHALLENGE 1//
/*
let heightMark = 1.69;
let weightMark = 78;
let heightJohn = 1.95;
let weightJohn = 92;

let markBMI = weightMark / heightMark ** 2;
let johnBMI = weightJohn / heightJohn ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);
*/

// strings and template literals
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

console.log(jonas); // I'm Jonas, a 46 years old teacher!

/*template literals*/
/*
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`

console.log(jonasNew); // I'm Jonas, a 46 year old teacher!

console.log(`just a regular day`);

console.log('string with \n\ multiple \n\ lines');

console.log(`string with 
multiple
lines`)
*/

// IF-ELSE statement
/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}

const birthYear = 2002;


if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/

//CODE CHALLENGE 2
/*
let heightMark = 1.69;
let weightMark = 78;
let heightJohn = 1.95;
let weightJohn = 92;

let markBMI = weightMark / heightMark ** 2;
let johnBMI = weightJohn / heightJohn ** 2;

const markHigherBMI = markBMI > johnBMI;



if (markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than  John's (${johnBMI})`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}

console.log(markBMI > johnBMI); // Mark's BMI (27.309968138370508) is higher than  John's (24.194608809993426)
*/

//TYPE CONVERSION AND COERCION
/*
//convert string to number
const inputYear  = '1991';
console.log(Number(inputYear), inputYear);// 1991 '1991'
console.log(inputYear + 18);//199118
console.log(Number(inputYear) + 18);//2009

console.log(String(23), 23);//23 23


//type coercion
console.log('I am ' + 23 + ' years old');// I am 23 years old
console.log('23' - '10' - 3);//10
console.log('23' / 2);// 11.5



let n = '1' + 1; // '11'
n = n - 1;
console.log(n);// 10

2 + 3 + 4 + '5'//'95'
*/

//TRUTHY AND FALSY VALUES
//5 falsy values: 0, '', undefined, null, NaN
/*
console.log(Boolean(0));//false
console.log(Boolean(undefined));//false
console.log(Boolean('Jonas'));//true
console.log(Boolean({}));//true
console.log(Boolean(''));//false

const money = 0;
if(money){
    console.log("don't spend it all");
} else {
    console.log("You should get a job");
}//You should get a job


let height = 9;
if(height){
    console.log('height is yesssir');
} else {
    console.log('height is undefined');
}//height is undefined
*/

//Equality Operator
// = means value, == means type coercion, === means equals
/*
const age = '18';
if(age === 18) console.log('you are adult (strict)');
if(age == 18) console.log('you are adult (loose)');


const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {//== convert string to number
    console.log('cool, love that!');
} else if (favourite === 7) {
    console.log('7 is a cool number too')
} else {
    console.log ('23 and 7 are not cool tho!')
};

if (favourite !== 23) console.log('why not?');
*/

//LOGICAL OPERATORS
/*
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);//false
console.log(hasDriversLicense || hasGoodVision);// true
console.log(!hasDriversLicense);//false

if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah should drive')
} else {
    console.log('Someone should drive');
} //Someone should drive 

const isTired = false;
console.log(hasDriversLicense || hasGoodVision ||isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah should drive')
} else {
    console.log('Someone should drive');
}
*/

//CODE CHALLENGE 3
/*
const scoreKoala = Math.floor((88 + 91 + 110) / 3);
const scoreDolphin = Math.floor((96 + 108 + 89) / 3);

console.log(scoreKoala, scoreDolphin);



if (scoreDolphin > scoreKoala) {
    console.log('Dolphin wins');
} else if (scoreKoala > scoreDolphin) {
    console.log('Koala wins');
} else if (scoreDolphin === scoreKoala) {
    console.log('this is draw');
}*/

//BONUS 1 ANSWER
/*
const scoreKoala = Math.floor((109 + 95 + 23) / 3);
const scoreDolphin = Math.floor((97 + 112 + 81) / 3);

console.log(scoreKoala, scoreDolphin);



if (scoreDolphin > scoreKoala && scoreDolphin >= 100) {
    console.log('Dolphin wins');
} else if (scoreKoala > scoreDolphin && scoreKoala >= 100) {
    console.log('Koala wins');
} else if (scoreDolphin === scoreKoala && scoreDolphin >= 100 && scoreKoala >= 100) {
    console.log('this is draw');
} else {
    console.log('no one wins the game');
}
*/

// SWITCH STATEMENT
/*
const day = 'thursday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Teach students');
        break;
    case 'tuesday':
        console.log('Prepare food');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code all day long');
        break;
    case 'friday':
        console.log('record data');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend');
        break;
    default:
        console.log('not a valid day');
}

if (day === 'monday') {
    console.log('plan course structure');
    console.log('teach students');
} else if (day === 'tuesday'){
    console.log('prepare food');
} else if (day === 'wednesday' || day === 'thursday'){
    console.log('write code all day')
} else if (day === 'friday'){
    console.log('record data');
} else if (day === 'saturday' || day === 'sunday'){
    console.log('enjoy the weekend')
};
*/

//STATEMENTS AND EXPRESSIONS
/*
//expression produces value
//statement is not expression bec statement does not produce value all the time

//sample expression:
3 + 4
1991
true && false && !false

//sample statement
if (23 > 10) {
    const str = '23 is bigger';//sample expression
}
*/

//CONDITIONAL OPERATORS
/*
const age = 56;
age >= 18 ? console.log('I like to drink wine') :
console.log('I like to drink water');

//ternary operators
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

//if-else statement
let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
} console.log(drink2);

//template literal
console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/

//CODING CHALLENGE

const bill = 430;
const tip = bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);







