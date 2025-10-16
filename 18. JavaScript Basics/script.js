let name = "Jan";
let age = 10;
let city = "Warszawa"; 

console.log('${name} ma ${age} lat i mieszka w ${city}.');

console.log("Typ name:", typeof name);
console.log("Typ age:", typeof age);
console.log("Typ city:", typeof city);

console.log("Dodawanie:", age + 5);
console.log("Odejmoanie:", age - 10);
console.log("Mnożenie:", age * 2);
console.log("Dzielenie:", age / 3);
console.log("Reszta z dzielenia", age % 7);

let isAdult = age >= 18;
console.log("Czy dorosły?:", isAdult);

let hasID = true;
let allowed = isAdult && hasID;
console.log("Czy może wejść?", allowed)

let isFromPoland = city === "Warszawa";
console.log("Czy z Polski?", isFromPoland)