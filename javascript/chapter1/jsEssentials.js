// CHAPTER PROJECT
// Miles-to-kilometers converter
/*Create a variable that contains a value in miles, convert it to kilometers, and
log the value in kilometers in the following format:
The distance of 130 kms is equal to 209.2142 miles */

let kmTomile = 1.60934;
let mileKmRation = 1 / kmTomile;

let kmInMiles = `The distance of 130 kms is equal to ${Math.round(130 * mileKmRation)} miles`

console.log(kmInMiles);


// BMI Calculator

let lbsToKgRatio = 2.2046;
let inchToMeterRatio = 0.0254;

let heightInInches = 75.9845;
let weightInLbs = 220.462;

let weightInKg = weightInLbs / lbsToKgRatio;
let heightInMeters = heightInInches * inchToMeterRatio;

let BMI = weightInKg / (heightInMeters ** 2);

console.log("BMI:", BMI.toFixed(2)); // BMI: 26.89




// // practice Excesise 2.1

// let name = 'Light';
// let surname = 'Yagami';
// let food = null;
// let deathToll = 10000;

// console.log(`name is ${typeof name}`);
// console.log(`surname is ${typeof surname}`);
// console.log(`food is type of ${typeof food}`);
// console.log(`Death toll is a type of ${typeof deathToll}`);


// // String addition

// let firstName = 'Naruto ';
// let lastName = 'Uzumaki';
// let fullName = firstName + lastName;

// // PRACTICE EXERCISE 2.2

// firstName = 'Sasuke'
// lastName = 'Uchiha'
// age = 12;

// console.log(`My name is ${firstName} ${lastName} of the hidden leaf. I am ${age} years of age. I am learning javascript.`)

// console.log(fullName);


// // SUBTRACTIONS.

// console.log(17382388 - 1837394);
// let nr = 2;
// console.log(nr++);
// console.log(nr);

// // Practice exccise 2.3

// let a = 2;
// let b = 3;
// let c = Math.sqrt(a ** 2 + b ** 2)

// console.log(c)


// // Practice 2.4

// a = 1;
// b = 2;
// c = 3;

// console.log(b += a);
// console.log(a /= c);
// console.log(c%=b)
