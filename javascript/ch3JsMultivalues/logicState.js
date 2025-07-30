// if else

let num = 15;
let nu3 = 132;
let multi = nu3 * num;
let sum = nu3 + num;

if (sum > 150) {
    console.log("Nice stuff")

} else {
    console.log("WHAAAT");

}

// Conditional Ternary operato

let ninja1 ={
    name: "Naruto",
    rank: "Hokage",
    age: "21"
}
let ninja2 ={
    name: "Sasuke",
    rank: "jonin",
    age: "21"
}
let ninja3 ={
    name: "Sakura",
    rank: "Medical Nin",
    age: "20"
}
let shinobi = [];
shinobi.push(ninja1, ninja2, ninja3);
console.log(shinobi)
let x = 25;
for (let i = 0; i < shinobi.length; i++) {
    shinobi[i].rank === "Hokage" ? console.log(`${shinobi[i].name} is the Hokage of the hidden leaf`): console.log(`${shinobi[i].name} is not the Hokage of the hidden leaf but the ${shinobi[i].rank}.`);
}
switch (x) {
    case 2:
    case 3:
    case 19:
        console.log("less thab 20")
        break;
    case 25:
        console.log("greater than 12");
        break;
}


// Chapter Projects


