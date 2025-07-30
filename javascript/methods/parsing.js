let str = '6';
let int = parseInt(str);

console.log(`Type of ${int} is ${typeof int}.`)


let flot = '6.64';
let floting = parseFloat(flot);

console.log(`Type of ${floting} is ${typeof floting}.`)


// Performing a certain action for every item:

let arr = ['Grate', 'Beetroot', 5, 'hello', false];

function printStuff(element,index) {
    console.log(`Printiting stuff ${element} on array position: ${index}`);
}

function stringChecking(element, index) {
    return typeof element === "string";
}
// let arrfilter = arr.filter(stringChecking);
// console.log(arrfilter);
// arr.forEach(printStuff);

// ?MAPPING

let arr1 = [1, 3, 4, 5, 3, 4, 5];
let mappedArr = arr1.map(x => x + 1);
console.log(mappedArr);

let bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("bye"));
