// ARRAYS AND Their Properties

// Creating ARRAYS

arry1 = ['Nero', 550, 'Asta', 15, 'Yuno', 15];
// console.log(typeof arry1[0])

colors = ["black", "orange", "pink","blue"];
boleans = [true, false, false, true];

emptyarry = [];

// console.log("Length of colors:", colors.length);


// Practice Excercise

let cart = ["Milk", "noodles", "bread", "apples"];

// console.log(cart.length);

cart[2] = "Bananas";
// console.log(cart);

// ARRAY METHODS
//ADD the other things in the list.
let favouriteFruits = ["Apples", "Peach", "Bananas", "Mango"];
favouriteFruits.push("Berries"); //stack
// console.log(favouriteFruits);

// inserting between using SPlice
favouriteFruits.splice(1, 0, 'Grapes');
// console.log(favouriteFruits);
// if i replace i delete then I insert

// addign an array to another
let starch = ["Pap", "Samp", "Rice"];
let protein = ["wors", "eggs", "russian"]

let fullMeal = starch.concat(protein);
// deleting shift(for 1st item), pop(for last item), splice for selectice
fullMeal.sort(function(a, b) {
	return a.localeCompare(b);
});
console.log(fullMeal);


//2D matrix;
let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];
let someValue4 = ["a", "b", "c"];
let arrOfArrays = [someValues1, someValues2, someValues3, someValue4];

console.log(arrOfArrays[3][1]);


// Objectss
let myCar = {
    name: 'Lamboghini Urus',
    make: 'SUV',
    color: 'Green',
    forSale: false

}

let changeColor = 'color';
let checkStatus = 'forSale';
myCar[changeColor] = 'Black';
myCar[checkStatus] = true;

;
console.log(myCar)
console.log(myCar.make);
console.log(myCar.name)
