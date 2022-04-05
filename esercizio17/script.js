const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let sum;

while(true) {
	sum = 0;

	for(let j = 0; j < 3; j++)
		sum += random(1, 100);

	if(sum >= 101) {
		document.writeln(`<h1 style="font-family: verdana; font-size: 100px; color: blue;">${sum}</h1>`);
	}
	else {
		alert(`${sum} è minore di 101`);
		break;
	}
}