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
for (let i = 1; i < 21; i++){
	console.log(i);
	
	if (i % 2 === 0){
		let random = Math.floor(Math.random() * 91)
		if (random < 30){
			console.log("...human...why you taking pictures of me?...")
		} else if ((random >= 30) && (random < 60)){
			console.log("...the catnip made me do it...")
		} else {
			console.log("...why does the red dot always get away...")
		}
	} 
}