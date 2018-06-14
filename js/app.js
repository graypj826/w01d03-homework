//easy going

for (let i = 1; i < 21; i++){
	console.log(i);
}

//get even

for (let i = 0; i < 201; i++){
 if(i%2===0){
 console.log(i)
}
}

//excited kitten
for (let i = 0; i < 20; i++){
	if (i % 2 === 0){
		let random = Math.floor(Math.random() * 91)
		if (random < 30){
			console.log(i, "...human...why you taking pictures of me?...")
		} else if ((random >= 30) && (random < 60)){
			console.log(i, "...the catnip made me do it...")
		} else {
			console.log(i, "...why does the red dot always get away...")
		} 
	} else{
		console.log(i);
	}
}

//Fizz Buzz

for (let i = 1; i < 101; i++){

if((i%3===0) && (i%5===0)){
 console.log("FizzBuzz");
} else if (i%3 === 0) {
 console.log("Fizz")
} else if (i%5 === 0) {
 console.log("Buzz")
} else {
	console.log(i)
}

//getting to know you

const thom = ["Thom",1000, "Christchurch"]
const karolin = ["Karolin", 16, "New York"]
const kristyn = ["Kristyn", 5, "Pittsburgh"]
const matt = ["Matt H", 186, "Philadelphia"]

thom[0] = "Gameboy";
console.log(thom)
karolin[1] = 17;
console.log(karolin)
matt[2] = "Gotham City";
console.log(matt);
kristyn[2] = "Brooklyn";
console.log(kristyn);

// Yell at Ninja Turtles

const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for(let i = 0; i < ninjaTurtles.length; i++){
	console.log(ninjaTurtles[i].toUpperCase());
}

//Return of the Closet

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
]; 

//alien attire

const kristynShoe = kristynsCloset.splice(0,1);
console.log(kristynShoe);

thomsCloset[2].push(kristynShoe[0]);
console.log(thomsCloset)

//I had trouble adding the left shoe into thomsCloset as just the value and not the array

//Dress Us Up


//Kristyn
const kristynOutfit1 = []
kristynOutfit1.push(kristynsCloset[0], kristynsCloset[3], kristynsCloset[6]);

console.log(`Kristyn's outfit tonight will be a ${kristynOutfit1[0]}, ${kristynOutfit1[1]}, and a ${kristynOutfit1[2]}`)

const kristynOutfit2 = []
kristynOutfit2.push(kristynsCloset[1], kristynsCloset[4], kristynsCloset[5]);

console.log(`Kristyn's second outfit tonight will be ${kristynOutfit2[0]}, ${kristynOutfit2[1]}, and a ${kristynOutfit2[2]}`)

const kristynOutfit3 = []
kristynOutfit3.push(kristynsCloset[3], kristynsCloset[4], kristynsCloset[5]);

console.log(`Kristyn's third outfit tonight will be a ${kristynOutfit3[0]}, ${kristynOutfit3[1]}, and a ${kristynOutfit3[2]}`)

//Thom

 const thomsOutfit1 = []
thomsOutfit1.push(thomsCloset[0][1], thomsCloset[2][0], thomsCloset[0][2]);

console.log(`Thom's first outfit tonight will be a ${thomsOutfit1[0]}, ${thomsOutfit1[1]}, and a ${thomsOutfit1[2]}`)

const thomsOutfit2 = []
thomsOutfit2.push(thomsCloset[1][0], thomsCloset[0][2], thomsCloset[2][2]);

console.log(`Thom's second outfit tonight will be ${thomsOutfit2[0]}, a ${thomsOutfit2[1]}, and ${thomsOutfit2[2]}`)

const thomsOutfit3 = []
thomsOutfit3.push(thomsCloset[2][1], thomsCloset[0][0], thomsCloset[1][2]);

console.log(`Thom's third outfit tonight will be a ${thomsOutfit3[0]}, a ${thomsOutfit3[1]}, and ${thomsOutfit3[2]}`)



