//  Number and funtions

function adding(a, b) {
    return console.log(a + b);
}

function multiply(a, b) {
    return console.log(a * b);
}
// adding(2, 5);

// Strings operations
// checking length of strings . It included the spaces

let y = "Kazikage from the hidden cloud";
let x = "Raikage";
// if statements structure in Js. conditional checking
if (x.length > y.length) {
    console.log("The length of x is greater than that of y. Its length is " + x.length + " characters long. The word is " + x);
} else {
    console.log("The length of y is greater than that of y. Its length is " + y.length + " characters long. The word is " + y);
}
// LEt uppercase the strings

console.log(x.toUpperCase())
console.log(y.toLowerCase())
console.log(x.slice(2)); //so it remove the first 2 lettters ,  it count starts from 0.
console.log(x.slice(0,3))

//
