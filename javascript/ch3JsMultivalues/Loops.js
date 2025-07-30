// LOOPS  That looks for for a value in an array

let blackBulls = ['Asta', 'Noel', 'Gauge', 'Yami', 'Jack', 'Nero'];
let notMember = false;
while (!notMember && blackBulls.length > 0) {
    if (blackBulls[0] === 'Jack') {
        console.log("Jack is not a member and has been found!");
        notMember = true;
    } else {
        blackBulls.shift()
    }

}

console.log(blackBulls);

let nr1 = 0;
let nr2 = 1;
let temp;
let fibonacciArray = [];


while (fibonacciArray.length < 25) {
fibonacciArray.push(nr1);
temp = nr1 + nr2;
nr1 = nr2;
nr2 = temp;
}
console.log(fibonacciArray);

//Practice
let maxValue = 5;
let randomNumber = Math.floor(Math.random() * 5 + 1);
let isEquale = false;
let i = 0;

while (!isEquale && i<=maxValue ) {
    let userInput = prompt("enter number between 0-5", number);
    if (userInput == randomNumber) {
        console.log("That is the correct number");
        isEquale = true;
    } else if (userInput > randomNumber) {
        console.log('Too high');

    } else {
        console.log('Too low');
    }
    i++;
}
