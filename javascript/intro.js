// learning how Javascript data type and how to use them.

// declare a variable with let first and then assign it.
// I used opperators to form as sentence
// WORKING WITH STRINGS
let name;
let age;
let isStudent;
let hobbies;
Name = "killerBee";
age = 25;
// I used opperators to form as sentence
let statemt = "Hello, my name is " + Name + ". I am " + age + " years old. ";
// console.log(statemt);


// WORKING WITH NUMBERS
// The order at which I put my variables matter. since I tried starting with x which depends on y and a it got an error.
let a = 7;
let y = 45 + a;
let x = 23 * y;

// used if-else statement for simple checking of a condition nothing different from python except the arrangement.
if (x > 1200) {
    // console.log("x is much bigger than the specified number. It equals to " + x);

} else {
    // console.log("x  is smaller than the specified number. It equals to " + x)
}

// Working with objects . They are like dictionaries in python

const person = {
    callName: 'Naruto',
    work: "Hokake of the hidden leaf.",
    // adding a function this is the basic format of a function in javascript.
    intro: function () {
        console.log("My name is " + this.callName + " and I am the " + this.work);
    }
}

// person.intro();

// Constructor funtions. Approach to initiate objects

function Shinobi(name, power) {
    this.name = name;
    this.power = power;
    this.intro = function () {
        console.log('My name is ' + this.name + '. ' + 'My power is ' + this.power + '.');
    };
}

// second constructor function for hokages.

function Hokage(name, power, village) {
    Shinobi.call(this, name, power);
    this.village = village;
   this.hokageIntro= function () {
         console.log('My name is ' + this.name + '. ' +'I am the hokage of ' + this.village +' and My power is ' + this.power + '.');
    };
}
// The hokage funtion inherited from shinobis since a hokage is a shinobi .
Hokage.prototype = Object.create(Shinobi.prototype);
Hokage.prototype.constructor = Hokage; //constructor is needed to restore reference

const Tsunade = new Hokage('Tsunade', 'Medical Ninjutsu', 'The hidden leaf village');


// lets create a shinobi intros
const Kakashi = new Shinobi('Kakashi', 'Chidori');
const Naruto = new Shinobi('Naruto Uzumaki', 'Rasengan');

// Kakashi.intro();
// Naruto.intro();
// Tsunade.hokageIntro();

// Lets try the memory efficient way of using a constructor
// SAIYAN constructor
function Saiyans(name, transformation, master) {
    this.name = name;
    this.transformation = transformation;
    this.master = master;

}
// Viilan Constructor
function Villans(name, transformation, reason) {
    Saiyans.call(this, name, transformation);
    this.reason = reason;
}
// Inheritence
Villans.prototype = Object.create(Saiyans.prototype);
Villans.prototype.constructor = Villans;

// intro for the  saiyans
Saiyans.prototype.saiyanIntro = function () {
    console.log('My name is ' + this.name + '. My most powerful transformation is ' + this.transformation + '. My master is ' + this.master + '.');
}
// Intro for the villan
Villans.prototype.villanIntro = function () {
    console.log('My name is ' + this.name + '. This is my transformation into ' + this.transformation + ' and I am going to destroy this planet for ' + this.reason + '.');
}
const Goku = new Saiyans('Goku', 'Super Saiyan Blue', 'Whis');
const marginBuu = new Villans('Margin Buu', 'Kid Buu', 'More chocolate to eat');


Goku.saiyanIntro();
marginBuu.villanIntro();
// I have a little grasp of inheritance BUT NOW I KNOW How to make functions and objects and variables
