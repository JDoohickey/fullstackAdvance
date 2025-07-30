let addTwoNumbers = (x, y) => {
    console.log("Adding...");
    return x + y;
}

// console.log  (addTwoNumbers(2,4))

let myl = (x, y) => console.log(x + x ** y);
myl(3, 5);


function getRecursive(nr) {
    console.log(nr);
   if (nr > 0) {
getRecursive(--nr);
}
}
// getRecursive(3)
// Practice 6.1
function addnum(x, y) {
    let sum = x + y;
    console.log(sum);
}

addnum(1, 3);

// practice 6.2

let desArr = ['Hi', 'there', 'Go'];
function till(nam) {
    this.name = nam;
    console.log(`${desArr[0]} ${desArr[1]} ${this.name}, Please ${desArr[2]} go to the nearest till.`);


}
till('Jocker');

function operaation(x, y, operation = 'sum') {
    this.x = x;
    this.y = y;

    if (operation === 'sum') {
       return console.log(x + y);
    } else if (operation === 'subtract') {
       return console.log(x - y);

    } else if (operation === 'multiply') {
       return console.log(x * y);
    }
}

operaation(2, 3, 'sum');
operaation(2, 3, 'subtract');
operaation(2, 3, 'multiply');


//Let for arrays

let matrices = [];

for (let m = 0; m < 3; m++) { // loop through 3 matrices
    let matrix = [];

    for (let i = 0; i < 3; i++) { // rows
        let row = [];

        for (let j = 0; j < 3; j++) { // columns
            row.push(`[${m}, ${i}, ${j}]`); // or any value you want
        }

        matrix.push(row);
    }

    matrices.push(matrix);
}

console.log(matrices);
