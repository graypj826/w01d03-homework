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

