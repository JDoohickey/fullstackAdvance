let dog = {
    dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    breed: "chihuahua"
};


class Dog1 {
    constructor(dogName, weight, color, breed) {
this.dogName = dogName;
this.weight = weight;
this.color = color;
this.breed = breed;
}
}
let dog1 = new Dog1("JavaScript", 2.4, "brown", "chihuahua");

console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight)

class Shinobi{
    constructor(firstname, power, defense) {
        this.firstname = firstname;
        this.power = power;
        this.defense=defense
    }
    attack() {
        console.log(`${this.firstname} attacks using ${this.power}.`)
    };
    defens() {
        console.log(`${this.firstname} defend using ${this.defense}.`)
    }
}

let player1 = new Shinobi('Naruto', 'Resanga', 'Nine Tails mode')
let player2 = new Shinobi('Sasuke', 'Amatarasu', 'Susano');

player1.attack();
player2.defens();

// InHeritense
class vehicle{
    constructor(color, speed, maxSpeed) {
        this.color = color;
        this.speed = speed;
        this.maxSpeed = maxSpeed;

    }
    move() {
        console.log(`Moving at ${this.speed}`)
    };
    accelarate(amout) {
        this.speed += amout;

    }
}

class Bmw extends vehicle{
    constructor(color, speed, maxSpeed, fuel) {
        super(color, speed, maxSpeed);
        this.fuel = fuel;
    }
    overtake() {
        console.log(`Overtaking on the right the road is  clear.`);
    }
}
let bmwX6m = new Bmw('Black', 50, 120, 'Patrol');
console.log(bmwX6m.color)
bmwX6m.accelarate(50);
bmwX6m.move();
