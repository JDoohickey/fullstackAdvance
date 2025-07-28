// OBJECTS WITH OBJECTS

let profile = {
    name: "Intelli Corp",
    activity: "AI scaling",
    address: {
        streetNum: 234,
        streetname: "Gateway",
        zipcode: "0081"

    },
    establishedYear: 2025
}


profile.address.streetNum = 11;

console.log(profile)


// Arrays in Objects

 profile = {
    name: "Intelli Corp",
    activity: ["AI scaling","Web dev","Automation"],
    address: {
        streetNum: 234,
        streetname: "Gateway",
        zipcode: "0081"

    },
    establishedYear: 2025
}
console.log(profile.activity[1])

// Practice 3.5;


let people = {
    friends: []
};

// Step 2: Create three friend objects
let friend1 = {
    firstName: "John",
    lastName: "Doe",
    id: 1
};

let friend2 = {
    firstName: "Jane",
    lastName: "Smith",
    id: 2
};

let friend3 = {
    firstName: "Mike",
    lastName: "Johnson",
    id: 3
};

people.friends.push(friend1, friend2, friend3);

console.log(people);

// PROJECTS 1
const theList = ['Laurence', 'Svekis', true, 35, null, undefined]

theList.splice(0, 5, "FIRST", "Svekis", "MIDDLE", "hello World", "LAST");
theList.pop()

console.log(theList);

//    Product Catalog;

let cart = [];

let baked = {
    name: "bread",
    model: "Sliced",
    cost: 15.99,
    quantity: 12
}

let dissert = {
    name: "custard",
    model: "frozen",
    cost: 85.99,
    quantity: 2
}

let veggies = {
    name: "spinach",
    model: "choped",
    cost: 25.99,
    quantity: 9
}

cart.push(dissert, baked, veggies);

console.log(cart[0].name)

// console.log(cart);
