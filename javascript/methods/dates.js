let currentDateTime = new Date();
console.log(currentDateTime);


let now2 = Date.now();
console.log(now2);

let d = new Date();
console.log("Day of week:", d.getDay());
console.log("Day of month:", d.getDate());
console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());
console.log("Seconds:", d.getSeconds());
console.log("Milliseconds:", d.getMilliseconds());
console.log("Time:", d.getTime());

console.log(d.toDateString())
